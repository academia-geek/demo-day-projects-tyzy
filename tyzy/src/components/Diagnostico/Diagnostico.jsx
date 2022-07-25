import React, { useState } from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup'
import { ButtonsDiv, CancelButton, DiagDiv, DiagDivRadius, DiagForm, DiagIconArrow, DiagInput, DiagLabel, DiagSubText1, DiagText1, DiagText2, EditButton, InputRadius, ParallaxDiag, RadiusFlex, SaveButton, TextDiag } from '../../styles/StylesGlobals'
import NavBarIn from '../NavBarIn';
import { useDispatch } from 'react-redux';
import { actionAggDiagAsync, actionListCitaAsync } from '../../redux/actions/DiagnosticoActions';
import CitaDiagnostico from './CitaDiagnostico';

const SignupSchema = Yup.object().shape({
  nombreComp: Yup.string().required("Nombre requerido"),
  telefono: Yup.string().min(10, 'número incorrecto, muy corto').max(10, 'número incorrecto, demasiado largo').required("El número de celular es requerido"),
  correo: Yup.string().email('El correo debe ser de tipo correo@ejemplo.com').required("Correo requerido"),
  descripProblema: Yup.string().required("Descripción requerida"),
})

const Diagnostico = () => {

  const dispatch = useDispatch()
  const [userAgendado, setUserAgendado] = useState({})

  const handleEditar = () => {
    dispatch(actionListCitaAsync())
    console.log('modal abierto');
  }

  const handleCerrar = () => {
    console.log('modal cerrado');
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

      <DiagText2>Una vez tengas una fecha registrada, quisieramos preguntarte algunas cosas, para que en tu reunión con los especialistas tengamos como equipo más claridad al momento de comunicarnos contigo</DiagText2>
      <Formik
        initialValues={
          {
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
          setUserAgendado({ ...userAgendado, nombre: values.nombreComp })
          dispatch(actionAggDiagAsync(values))
          actions.resetForm({
            values: {
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

            <DiagLabel>Nombre completo del paciente *</DiagLabel>
            <DiagInput name='nombreComp' placeholder='Tu nombre aquí' />
            {errors.nombreComp && touched.nombreComp ?
              (<div className='ms-3 fs-6 text-dark'>{errors.nombreComp}</div>) : null}

            <DiagLabel style={{ 'marginTop': '3%' }}>Número de contácto *</DiagLabel>
            <DiagInput name='telefono' placeholder='Tu número de celular aquí' />
            {errors.telefono && touched.telefono ?
              (<div className='ms-3 fs-6 text-whdarkite'>{errors.telefono}</div>) : null}

            <DiagLabel style={{ 'marginTop': '3%' }}>Correo electrónico de contácto *</DiagLabel>
            <DiagInput name='correo' placeholder='Tu correo aquí' />
            {errors.correo && touched.correo ?
              (<div className='ms-3 fs-6 text-dark'>{errors.correo}</div>) : null}

            <DiagLabel style={{ 'marginTop': '3%' }}>Selecciona 1 o más incomodidades:</DiagLabel>
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

            <DiagLabel style={{ 'marginTop': '3%' }}>Descripción del problema de salud mental que presentas actualmente *</DiagLabel>
            <Field as={TextDiag} rows="7" cols="50" name='descripProblema' placeholder='Breve descripción del problema' />
            {errors.descripProblema && touched.descripProblema ?
              (<div className='ms-3 fs-6 text-dark'>{errors.descripProblema}</div>) : null}

            <ButtonsDiv>
              <SaveButton type='submit'>GUARDAR Y ENVIAR</SaveButton>
              <div>
                <EditButton type='button' onClick={handleEditar}>EDITAR</EditButton>
                <CancelButton type='button' onClick={handleCerrar}>CANCELAR</CancelButton>
              </div>
            </ButtonsDiv>
          </DiagForm>
        )}
      </Formik>
      <CitaDiagnostico user={userAgendado} disp={dispatch} />
    </>
  )
}

export default Diagnostico;