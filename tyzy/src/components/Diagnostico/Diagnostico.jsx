import React, { useEffect, useState } from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup'
import NavBarIn from '../../containers/NavBarIn';
import { useDispatch } from 'react-redux';
import { actionAggDiagAsync } from '../../redux/actions/DiagnosticoActions';
import CitaDiagnostico from './CitaDiagnostico';
import { AgendateCalendario, AgendateTxt, ButtonsDiv, CalendarioANDT, DiagDiv, DiagDivRadius, DiagForm, DiagIconArrow, DiagInput, DiagLabel, DiagSubText1, DiagText1, DiagText2, DivCalendar, InputRadius, ParallaxDiag, RadiusFlex, SaveButton, TextDiag } from '../../styles/StylesGlobals'
import moment from 'moment';
import Swal from 'sweetalert2';

const SignupSchema = Yup.object().shape({
  nombreComp: Yup.string().required("Nombre requerido"),
  telefono: Yup.string().min(10, 'número incorrecto, muy corto').max(10, 'número incorrecto, demasiado largo').required("El número de celular es requerido"),
  correo: Yup.string().email('El correo debe ser de tipo correo@ejemplo.com').required("Correo requerido"),
  descripProblema: Yup.string().required("Descripción requerida"),
  fecha: Yup.string().required('Fecha requerida')
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
            insomnio: '',
            inseguridad: '',
            humor: '',
            dCabeza: '',
            fCariño: '',
            fComprension: '',
            descripProblema: ''
          }
        }
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          if (selectedValue?.format('YYYY') >= `${año}` && selectedValue?.format('MM') >= `0${mes}` && selectedValue?.format('DD') >= `${dia}`) {
            dispatch(actionAggDiagAsync(values))
            setUserAgendado({ ...userAgendado, id: values.id, BTNcita: '' })
            actions.resetForm({
              values: {
                id: Math.round(Math.random() * (100 - 1) + 1),
                nombreComp: '',
                fecha: `${selectedValue?.format('YYYY-MM-DD')}`,
                telefono: '',
                correo: '',
                insomnio: '',
                inseguridad: '',
                humor: '',
                dCabeza: '',
                fCariño: '',
                fComprension: '',
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
            <DivCalendar>
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

            <DiagLabel className='font-bold fs-6' style={{ 'marginTop': '3%' }}>Selecciona 1 o más incomodidades:</DiagLabel>
            <DiagDivRadius>
              <div>
                <RadiusFlex><InputRadius type="checkbox" name='insomnio' />Problemas de insomnio</RadiusFlex>
                <RadiusFlex style={{ 'marginTop': '10px' }}><InputRadius type="checkbox" name='dCabeza' />Dolor frecuente de cabeza</RadiusFlex>
              </div>

              <div>
                <RadiusFlex><InputRadius type="checkbox" name='inseguridad' />Inseguridad ante otras personas</RadiusFlex>
                <RadiusFlex style={{ 'marginTop': '10px' }}><InputRadius type="checkbox" name='fCariño' />Discapacidad Visual</RadiusFlex>
              </div>

              <div>
                <RadiusFlex>
                  <InputRadius type="checkbox" name='humor' />
                  Cambio de humor repentino
                </RadiusFlex>

                <RadiusFlex style={{ 'marginTop': '10px' }}>
                  <InputRadius type="checkbox" name='fComprension' />
                  Discapacidad física
                </RadiusFlex>
              </div>
            </DiagDivRadius>

            <DiagLabel className='font-bold fs-6' style={{ 'marginTop': '3%' }}>Descripción del problema de salud mental que presentas actualmente *</DiagLabel>
            <Field as={TextDiag} rows="7" cols="50" name='descripProblema' placeholder='Breve descripción del problema' />
            {errors.descripProblema && touched.descripProblema ?
              (<div className='ms-3 fs-6 text-red-500'>{errors.descripProblema}</div>) : null}

            <div>
              <p>Recuerda que estos datos que ingresas no eximen del diagnóstico final profesional, es solo un acercamiento y el animalito que salga a continuación podría cambiar al finalizar el proceso en la llamada que estas agendando, gracias!</p>

            </div>

            <ButtonsDiv className='flex'>
              <SaveButton type='submit' className='ms-auto'>GUARDAR</SaveButton>
            </ButtonsDiv>
          </DiagForm>
        )}
      </Formik>
      <CitaDiagnostico user={userAgendado} setUser={setUserAgendado}/>
    </>
  )
}

export default Diagnostico;