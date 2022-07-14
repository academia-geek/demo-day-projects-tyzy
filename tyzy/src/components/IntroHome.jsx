import React, { useState } from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import Box from '@mui/joy/Box';

const titles = [
    {
        img: 'https://res.cloudinary.com/doaijv8m0/image/upload/v1657826693/Demoday/5497406_1_lq04v5.png',
        title: '¡Bienvenido a Tyzy!',
    },
    {
        img: 'https://res.cloudinary.com/doaijv8m0/image/upload/v1657826693/Demoday/5497406_1_1_ie9ugd.png',
        title: 'Tu app que te ayuda  a aliviar los problemas con  la ayuda de mascotas ',
    },
    {
        img: 'https://res.cloudinary.com/doaijv8m0/image/upload/v1657826693/Demoday/5497406_1_2_hvn6si.png',
        title: 'Soluciones confiables de manera facil ',
    }
];

const IntroHome = ({ close }) => {

    const [activeStep, setActiveStep] = useState(0);
    const [intro, setIntro] = useState({
        btnSi: '',
        btnNo: 'no'
    });

    const handleNext = () => {
        console.log(intro);
        if (activeStep < 2) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            if (activeStep === 1) {
                setIntro({
                    btnNo: '',
                    btnSi: 'no'
                })
            }
        }
    };

    return (
        <div className={`d-flex flex-column`}>
            <div className='w-100 mx-auto rounded'>
                <Box className='w-100' component="img" src={titles[activeStep].img} alt='hola' />
                <div className='d-flex flex-column'>
                    <h2 className='mx-auto h2'>{titles[activeStep].title}</h2>
                </div>
            </div>

            <MobileStepper
                className='d-flex flex-column gap-3'
                variant="dots"
                steps={3}
                position="static"
                activeStep={activeStep}
                sx={{
                    maxWidth: '100%'
                }}
                nextButton={
                    <Button className={`rounded-pill w-75 ${intro.btnSi}`} size="small" onClick={handleNext}>
                        Siguiente
                    </Button>
                }
            />
            <Button className={`rounded-pill w-75 mx-auto ${intro.btnNo}`} size="small" onClick={close}>
                Siguiente
            </Button>
        </div>
    )
}

export default IntroHome;