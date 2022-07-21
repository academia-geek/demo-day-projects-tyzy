import React from 'react'
import { ButtonsDiv, CancelButton, DiagDiv, DiagDivRadius, DiagForm, DiagIconArrow, DiagInput, DiagLabel, DiagSubText1, DiagText1, DiagText2, EditButton, InputRadius, ParallaxDiag, RadiusFlex, SaveButton, TextDiag } from '../styles/StylesGlobals'
import LandingPageFooter from './LandingPage/LandinPageFooter'
import NavBarIn from './NavBarIn'

const Diagnostico = () => {
  return (
    <>
    <NavBarIn/>
        <ParallaxDiag>
          <DiagDiv>
            <DiagText1>Presentaremos atención en cada detalle</DiagText1>
            <DiagSubText1>HAZ TU DIAGNÓSTICO INICIAL</DiagSubText1>
            <DiagIconArrow></DiagIconArrow>
            </DiagDiv>
        </ParallaxDiag>

        <DiagText2>Una vez tengas una fecha registrada, quisieramos preguntarte algunas cosas, para que en tu reunión con los especialistas tengamos como equipo más claridad al momento de comunicarnos contigo</DiagText2>
          <DiagForm>
              <DiagLabel>Input Text Label</DiagLabel>
                <DiagInput placeholder='type here'/>

                <DiagLabel style={{'marginTop':'3%'}}>Input Text Label</DiagLabel>
                <DiagInput placeholder='type here'/>

                <DiagLabel style={{'marginTop':'3%'}}>Input Text Label</DiagLabel>
                <DiagInput placeholder='type here'/>

                <DiagLabel style={{'marginTop':'3%'}}>Input Text Label</DiagLabel>
                <DiagDivRadius>
                  <div>
                    <RadiusFlex><InputRadius type="radio" />Radio selection</RadiusFlex>
                    <RadiusFlex style={{'marginTop':'10px'}}><InputRadius type="radio" />Radio selection</RadiusFlex>
                  </div>

                  <div>
                    <RadiusFlex><InputRadius type="radio" />Radio selection</RadiusFlex>
                    <RadiusFlex style={{'marginTop':'10px'}}><InputRadius type="radio" />Radio selection</RadiusFlex>
                  </div>

                  <div>
                    <RadiusFlex><InputRadius type="radio" />Radio selection</RadiusFlex>
                    <RadiusFlex style={{'marginTop':'10px'}}><InputRadius type="radio" />Radio selection</RadiusFlex>
                  </div>
                </DiagDivRadius>

                <DiagLabel style={{'marginTop':'3%'}}>Text Area</DiagLabel>
                <TextDiag rows="7" cols="50" placeholder='Write something'/>
          
          <ButtonsDiv>
              <SaveButton type='submit'>GUARDAR Y ENVIAR</SaveButton>
              <div>
                <EditButton>EDITAR</EditButton>
                <CancelButton>CANCELAR</CancelButton>
              </div>
          </ButtonsDiv>
          </DiagForm>
    <LandingPageFooter/>
    </>
  )
}

export default Diagnostico