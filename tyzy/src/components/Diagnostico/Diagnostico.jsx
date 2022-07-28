import React, { useEffect, useState } from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup'
import NavBarIn from '../../containers/NavBarIn';
import { useDispatch } from 'react-redux';
import { actionAggDiagAsync } from '../../redux/actions/DiagnosticoActions';
import CitaDiagnostico from './CitaDiagnostico';
import { AgendateCalendario, AgendateTxt, ButtonsDiv, CalendarioANDT, DiagDiv, DiagDivRadius, DiagForm, DiagIconArrow, DiagInput, DiagLabel, DiagSubText1, DiagText1, DiagText2, DivCalendar, InputRadius, ParallaxDiag, PrivacyPolicy, RadiusFlex, SaveButton, TextDiag } from '../../styles/StylesGlobals'
import moment from 'moment';
import Swal from 'sweetalert2';
import { MascotasURL } from '../../helpers/UrlsAPI';
import { Peticiones } from '../../helpers/Peticiones';
import ModalMascotasSugeridas from './ModalMascotasSugeridas';

const SignupSchema = Yup.object().shape({
  nombreComp: Yup.string().required("Nombre requerido*"),
  telefono: Yup.string().min(10, 'número incorrecto, muy corto').max(10, 'número incorrecto, demasiado largo').required("El número de celular es requerido*"),
  correo: Yup.string().email('El correo debe ser de tipo correo@ejemplo.com').required("Correo requerido*"),
  descripProblema: Yup.string().required("Descripción requerida*"),
  fecha: Yup.string().required('Fecha requerida*')
})

const Diagnostico = () => {

  const dispatch = useDispatch()
  const [userAgendado, setUserAgendado] = useState({ BTNcita: 'BTNcitaAgenda' })

  const dt = new Date();
  const año = dt.getFullYear();
  const mes = dt.getMonth() + 1;
  const dia = dt.getDate();

  const [value, setValue] = useState(moment(`${año}-${mes}-${dia}`));
  const [selectedValue, setSelectedValue] = useState(moment(`${año}-${mes}-${dia + 1}`));

  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue) => {
    setValue(newValue);
  }

  const [datos, setDatos] = useState([])
  const [categorya, setcCategorya] = useState({ modal: '' })
  const [modalShow, setModalShow] = useState(false);

  const handleCategoria = async () => {
    const data = await Peticiones(MascotasURL)
    const FmascotaCategory = data[0].listaMascotas.filter((sd) => sd.categoria == categorya?.categoryF);
    setDatos(FmascotaCategory)
    setModalShow(true)
  }

  return (
    <>
      <NavBarIn />
      <ParallaxDiag>
        <DiagDiv>
          <DiagText1>Presentaremos atención en cada detalle</DiagText1>
          <DiagSubText1>HAZ TU DIAGNÓSTICO INICIAL</DiagSubText1>
          <DiagIconArrow></DiagIconArrow>
        </DiagDiv>
      </ParallaxDiag>

      <Formik
        initialValues={
          {
            id: Math.round(Math.random() * (100 - 1) + 1),
            nombreComp: '',
            fecha: `${selectedValue?.format('YYYY-MM-DD')}`,
            telefono: '',
            correo: '',
            inmputRadio: '',
            descripProblema: ''
          }
        }
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          if (selectedValue?.format('YYYY') >= `${año}` && selectedValue?.format('MM') >= `0${mes}` && selectedValue?.format('DD') >= `${dia}`) {
            if (values?.inmputRadio == 'insomnio') {
              setcCategorya({ categoryF: 'estres', modal: 'activo' });
            } else if (values?.inmputRadio == 'inseguridad') {
              setcCategorya({ categoryF: 'ansiedad', modal: 'activo' });
            } else if (values?.inmputRadio == 'humor') {
              setcCategorya({ categoryF: 'depresion', modal: 'activo' });
            } else if (values?.inmputRadio == 'dCabeza') {
              setcCategorya({ categoryF: 'audicion', modal: 'activo' });
            } else if (values?.inmputRadio == 'dvisual') {
              setcCategorya({ categoryF: 'visual', modal: 'activo' });
            } else if (values?.inmputRadio == 'dfisica') {
              setcCategorya({ categoryF: 'movilidad', modal: 'activo' });
            }
            dispatch(actionAggDiagAsync(values))
            setUserAgendado({ ...userAgendado, id: values.id, BTNcita: '' })
            actions.resetForm({
              values: {
                id: Math.round(Math.random() * (100 - 1) + 1),
                nombreComp: '',
                fecha: `${selectedValue?.format('YYYY-MM-DD')}`,
                telefono: '',
                correo: '',
                inmputRadio: '',
                descripProblema: ''
              }
            })
          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'info',
              title: 'Fecha incorrecta, verifica que sea actual o en días posteriores.',
              showConfirmButton: false,
              timer: 3000
            })
          }
        }}
      >
        {({ errors, touched }) => (
          <DiagForm>
            <DivCalendar className='pb-4'>
              <AgendateCalendario>AGENDA TU PRIMERA CITA</AgendateCalendario>
              <AgendateTxt className='mt-3'>Para poder hablar con nuestro equipo Tyzy sobre tu primer diagnóstico que podrás diligenciar en la parte de abajo, debes agendar una cita en el día que más se acomode para tener una charla y la orientación nesaria en el inicio de esta etapa al lado de un compañero de cuatro patas</AgendateTxt>
              <CalendarioANDT name='fecha' value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
              {errors.fecha && touched.fecha ?
                (<div className='ms-3 fs-6 text-red-500'>{errors.fecha}</div>) : null}
            </DivCalendar>

            <DiagText2 className='mb-5'>Una vez tengas una fecha registrada, quisieramos preguntarte algunas cosas, para que en tu reunión con los especialistas tengamos como equipo más claridad al momento de comunicarnos contigo</DiagText2>


            <DiagLabel className='font-bold fs-6'>Nombre completo del paciente *</DiagLabel>
            <DiagInput name='nombreComp' placeholder='Tu nombre aquí' />
            {errors.nombreComp && touched.nombreComp ?
              (<div className='ms-3 fs-6 text-red-500'>{errors.nombreComp}</div>) : null}

            <DiagLabel className='font-bold fs-6' style={{ 'marginTop': '3%' }}>Número de contácto *</DiagLabel>
            <DiagInput name='telefono' placeholder='Tu número de celular aquí' />
            {errors.telefono && touched.telefono ?
              (<div className='ms-3 fs-6 text-red-500'>{errors.telefono}</div>) : null}

            <DiagLabel className='font-bold fs-6' style={{ 'marginTop': '3%' }}>Correo electrónico de contácto *</DiagLabel>
            <DiagInput name='correo' placeholder='Tu correo aquí' />
            {errors.correo && touched.correo ?
              (<div className='ms-3 fs-6 text-red-500'>{errors.correo}</div>) : null}

            <DiagLabel className='font-bold fs-6' style={{ 'marginTop': '3%' }}>Selecciona 1 incomodidad:</DiagLabel>
            <DiagDivRadius>
              <div>
                <RadiusFlex htmlFor='insom'>
                  <InputRadius value='insomnio' type="radio" id='insom' name='inmputRadio' />
                  Problemas de insomnio
                </RadiusFlex>

                <RadiusFlex htmlFor='dolorC' style={{ 'marginTop': '10px' }}>
                  <InputRadius value='dCabeza' type="radio" id='dolorC' name='inmputRadio' />
                  Dolor frecuente de cabeza
                </RadiusFlex>
              </div>

              <div>
                <RadiusFlex htmlFor='inseg'>
                  <InputRadius value='inseguridad' type="radio" id='inseg' name='inmputRadio' />
                  Inseguridad ante otras personas
                </RadiusFlex>

                <RadiusFlex htmlFor='dvishual' style={{ 'marginTop': '10px' }}>
                  <InputRadius value='dvisual' type="radio" id='dvishual' name='inmputRadio' />
                  Discapacidad Visual
                </RadiusFlex>
              </div>

              <div>
                <RadiusFlex htmlFor='hmr'>
                  <InputRadius value='humor' type="radio" id='hmr' name='inmputRadio' />
                  Cambio de humor repentino
                </RadiusFlex>

                <RadiusFlex htmlFor='dfishica' style={{ 'marginTop': '10px' }}>
                  <InputRadius value='dfisica' type="radio" id='dfishica' name='inmputRadio' />
                  Discapacidad física
                </RadiusFlex>
              </div>
            </DiagDivRadius>

            <DiagLabel className='font-bold fs-6' style={{ 'marginTop': '3%' }}>Descripción del problema de salud mental que presentas actualmente *</DiagLabel>
            <Field as={TextDiag} rows="7" cols="50" name='descripProblema' placeholder='Breve descripción del problema' />
            {errors.descripProblema && touched.descripProblema ?
              (<div className='ms-3 fs-6 text-red-500'>{errors.descripProblema}</div>) : null}

            <div>
              <PrivacyPolicy>Recuerda que estos datos que ingresas no eximen del diagnóstico final profesional, es solo un acercamiento y el animalito que salga a continuación podría cambiar al finalizar el proceso en la llamada que estas agendando, gracias!</PrivacyPolicy>

            </div>

            <ButtonsDiv className='flex'>
              {
                categorya?.modal != '' ? <SaveButton type='button' onClick={() => { handleCategoria() }} className={`me-auto ${userAgendado?.BTNcita}`}>MASCOTAS SUGERIDAS</SaveButton> : ''
              }
              <SaveButton type='submit' className='ms-auto'>GUARDAR</SaveButton>
            </ButtonsDiv>
          </DiagForm>
        )}
      </Formik>
      {
        modalShow == true ? < ModalMascotasSugeridas si={modalShow} no={setModalShow} mascotas={datos}/> : ''
      }
      <CitaDiagnostico user={userAgendado} setUser={setUserAgendado} />
    </>
  )
}

export default Diagnostico;