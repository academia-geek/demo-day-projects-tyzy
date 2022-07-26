import React, { useEffect, useState } from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup'
import NavBarIn from '../NavBarIn';
import { useDispatch } from 'react-redux';
import { actionAggDiagAsync } from '../../redux/actions/DiagnosticoActions';
import CitaDiagnostico from './CitaDiagnostico';
import { AgendateCalendario, AgendateTxt, ButtonsDiv, CalendarioANDT, DiagDiv, DiagDivRadius, DiagForm, DiagIconArrow, DiagInput, DiagLabel, DiagSubText1, DiagText1, DiagText2, DivCalendar, InputRadius, ParallaxDiag, RadiusFlex, SaveButton, TextDiag } from '../../styles/StylesGlobals'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const SignupSchema = Yup.object().shape({
  nombreComp: Yup.string().required("Nombre requerido"),
  telefono: Yup.string().min(10, 'número incorrecto, muy corto').max(10, 'número incorrecto, demasiado largo').required("El número de celular es requerido"),
  correo: Yup.string().email('El correo debe ser de tipo correo@ejemplo.com').required("Correo requerido"),
  descripProblema: Yup.string().required("Descripción requerida"),
})

const Diagnostico = () => {

  const dispatch = useDispatch()
  const [userAgendado, setUserAgendado] = useState({})
  const ramdonUid = () => {
    let uid = Math.round(Math.random() * (100 - 1) + 1)
    setUserAgendado({ id: uid })
  }

  const onPanelChange = (value, mode) => {
    console.log(value.format('DD/MM/YYYY'));
    const dt = new Date()
    const fecha = dt.getFullYear()
    console.log(fecha);

    if (fecha == value.format('YYYY')) {
      console.log('fecha correcta');
    }
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
      <div>
      </div>

      <DivCalendar>
        <AgendateCalendario>AGENDA TU PRIMERA CITA</AgendateCalendario>
        <AgendateTxt className='mt-3'>Para poder hablar con nuestro equipo Tyzy sobre tu primer diagnóstico que podrás diligenciar en la parte de abajo, debes agendar una cita en el día que más se acomode para tener una charla y la orientación nesaria en el inicio de esta etapa al lado de un compañero de cuatro patas</AgendateTxt>
        <CalendarioANDT onPanelChange={onPanelChange} />
      </DivCalendar>

      <DiagText2>Una vez tengas una fecha registrada, quisieramos preguntarte algunas cosas, para que en tu reunión con los especialistas tengamos como equipo más claridad al momento de comunicarnos contigo</DiagText2>
      <Formik
        initialValues={
          {
            // id: userAgendado?.id,
            nombreComp: '',
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
          console.log(values)
          console.log(userAgendado)
          setUserAgendado({ nombre: values.nombreComp })
          // ramdonUid()
          dispatch(actionAggDiagAsync(values))
          actions.resetForm({
            values: {
              id: '',
              nombreComp: '',
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
        }}
      >
        {({ errors, touched }) => (
          <DiagForm>

            <DiagLabel className='font-bold fs-6'>Nombre completo del paciente *</DiagLabel>
            <DiagInput name='nombreComp' placeholder='Tu nombre aquí' />
            {errors.nombreComp && touched.nombreComp ?
              (<div className='ms-3 fs-6 text-dark'>{errors.nombreComp}</div>) : null}

            <DiagLabel className='font-bold fs-6' style={{ 'marginTop': '3%' }}>Número de contácto *</DiagLabel>
            <DiagInput name='telefono' placeholder='Tu número de celular aquí' />
            {errors.telefono && touched.telefono ?
              (<div className='ms-3 fs-6 text-whdarkite'>{errors.telefono}</div>) : null}

            <DiagLabel className='font-bold fs-6' style={{ 'marginTop': '3%' }}>Correo electrónico de contácto *</DiagLabel>
            <DiagInput name='correo' placeholder='Tu correo aquí' />
            {errors.correo && touched.correo ?
              (<div className='ms-3 fs-6 text-dark'>{errors.correo}</div>) : null}

            <DiagLabel className='font-bold fs-6' style={{ 'marginTop': '3%' }}>Selecciona 1 o más incomodidades:</DiagLabel>
            <DiagDivRadius>
              <div>
                <RadiusFlex><InputRadius type="checkbox" name='insomnio' />Problemas de insomnio</RadiusFlex>
                <RadiusFlex style={{ 'marginTop': '10px' }}><InputRadius type="checkbox" name='dCabeza' />Dolor frecuente de cabeza</RadiusFlex>
              </div>

              <div>
                <RadiusFlex><InputRadius type="checkbox" name='inseguridad' />Inseguridad ante otras personas</RadiusFlex>
                <RadiusFlex style={{ 'marginTop': '10px' }}><InputRadius type="checkbox" name='fCariño' />Falta de cariño</RadiusFlex>
              </div>

              <div>
                <RadiusFlex>
                  <InputRadius type="checkbox" name='humor' />
                  Cambio de humor repentino
                </RadiusFlex>

                <RadiusFlex style={{ 'marginTop': '10px' }}>
                  <InputRadius type="checkbox" name='fComprension' />
                  Falta de comprensión
                </RadiusFlex>
              </div>
            </DiagDivRadius>

            <DiagLabel className='font-bold fs-6' style={{ 'marginTop': '3%' }}>Descripción del problema de salud mental que presentas actualmente *</DiagLabel>
            <Field as={TextDiag} rows="7" cols="50" name='descripProblema' placeholder='Breve descripción del problema' />
            {errors.descripProblema && touched.descripProblema ?
              (<div className='ms-3 fs-6 text-dark'>{errors.descripProblema}</div>) : null}

            <ButtonsDiv className='flex'>
              <SaveButton type='submit' className='ms-auto'>GUARDAR</SaveButton>
            </ButtonsDiv>
          </DiagForm>
        )}
      </Formik>
      <CitaDiagnostico user={userAgendado} />
    </>
  )
}

export default Diagnostico;