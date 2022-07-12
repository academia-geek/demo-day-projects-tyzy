import React from 'react'
import { CardTxt, IconCard, InfoServices, ServiceImg, ServicesDiv, ServiceTitle, SpanTitle, TitleCard } from '../../styles/StylesGlobals'

const LandingServices = () => {

    const boxes = document.querySelectorAll(".box");
    const checkBoxes = () => {
        const triggerBottom = (window.innerHeight / 5) * 4;
        boxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                box.classList.add("show")
            } else {
                box.classList.remove("show")
            }
        });
    };

    window.addEventListener("scroll", checkBoxes);
    checkBoxes()

    return (
        <>
            <ServicesDiv>
                <ServiceImg src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657512206/Tyzy/Tips_ltmwa1.png' alt='vector' />
                <InfoServices className='mb-3'>
                    <ServiceTitle>Lorem ipsum dolor sit,<SpanTitle> consectetur</SpanTitle></ServiceTitle>

                    <section className="box mb-5 ">
                        <IconCard src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657500434/Tyzy/Servicio_dwljmo.png' alt='IconCard' />
                        <div>
                            <TitleCard>Tips para la tenencia</TitleCard>
                            <CardTxt>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardTxt>
                        </div>
                    </section>

                    <section className="box mb-5 ">
                        <IconCard src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657500434/Tyzy/TipsIcon_bpfn7x.png' alt='IconCard' />
                        <div>
                            <TitleCard>Tips para la tenencia</TitleCard>
                            <CardTxt>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardTxt>
                        </div>
                    </section>

                    <section className="box mb-5 ">
                        <IconCard src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657500434/Tyzy/Asistencia_hnaglo.png' alt='IconCard' />
                        <div>
                            <TitleCard>Tips para la tenencia</TitleCard>
                            <CardTxt>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardTxt>
                        </div>
                    </section>
                </InfoServices>
            </ServicesDiv>
        </>
    )
}

export default LandingServices