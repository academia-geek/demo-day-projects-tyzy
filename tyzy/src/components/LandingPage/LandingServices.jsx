import React, { useEffect, useState } from 'react'
import { Peticiones } from '../../helpers/Peticiones'
import { LandingPageURL } from '../../helpers/UrlsAPI'
import { CardTxt, IconCard, InfoServices, ServiceImg, ServicesDiv, ServiceTitle, SpanTitle, TitleCard } from '../../styles/StylesGlobals'

const LandingServices = () => {

    const [datos, setDatos] = useState([])
    const DataApi = async () => {
        const data = await Peticiones(LandingPageURL)
        setDatos(data[0].sectionAnimacion)
    }
    useEffect(() => {
        DataApi()
    }, [])
    // ----------------------------------------------------------------------------------------
    const boxes = document.querySelectorAll(".box");
    const checkBoxes = () => {
        const triggerBottom = (window.innerHeight / 5) * 4;
        boxes?.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top
            if (boxTop <= triggerBottom) {
                box.classList.add("show")
            } else {
                box.classList.remove("show")
            }
        })
    }

    window.addEventListener("scroll", checkBoxes);
    useEffect(() => {
        DataApi()
        checkBoxes()
    }, [])

    return (
        <ServicesDiv>
            <ServiceImg src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657512206/Tyzy/Tips_ltmwa1.png' alt='vector' />
            <InfoServices className='mb-3'>
                <ServiceTitle>En nuestra aplicación,<SpanTitle> siempre encontrarás</SpanTitle></ServiceTitle>
                {
                    datos?.map((dt) => (
                        <section key={dt?.id} className="box mb-5 ">
                            <IconCard src={dt?.img} alt={dt?.id} />
                            <div>
                                <TitleCard>{dt?.titulo}</TitleCard>
                                <CardTxt>{dt?.texto}</CardTxt>
                            </div>
                        </section>
                    ))
                }
            </InfoServices>
        </ServicesDiv>
    )
}

export default LandingServices;