import React from 'react'
import { CardTips, CardTxt, IconCard, InfoServices, ServiceImg, ServicesDiv, ServiceTitle, SpanTitle, TitleCard } from '../styles/StylesGlobals'

const LandingServices = () => {
  return (
    <>
        <ServicesDiv>
            <ServiceImg src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657512206/Tyzy/Tips_ltmwa1.png' alt='vector'/>
                <InfoServices>
                    <ServiceTitle>Lorem ipsum dolor sit,<SpanTitle> consectetur</SpanTitle></ServiceTitle>
                    <CardTips>
                        <IconCard src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657500434/Tyzy/Servicio_dwljmo.png' alt='IconCard'/>
                        <div>
                            <TitleCard>Tips para la tenencia</TitleCard>
                            <CardTxt>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardTxt>
                        </div>
                   </CardTips>

                   <CardTips>
                        <IconCard src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657500434/Tyzy/TipsIcon_bpfn7x.png' alt='IconCard'/>
                        <div>
                            <TitleCard>Tips para la tenencia</TitleCard>
                            <CardTxt>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardTxt>
                        </div>
                   </CardTips>

                   <CardTips>
                        <IconCard src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657500434/Tyzy/Asistencia_hnaglo.png' alt='IconCard'/>
                        <div>
                            <TitleCard>Tips para la tenencia</TitleCard>
                            <CardTxt>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardTxt>
                        </div>
                   </CardTips>
                </InfoServices>
        </ServicesDiv>
    </>
  )
}

export default LandingServices