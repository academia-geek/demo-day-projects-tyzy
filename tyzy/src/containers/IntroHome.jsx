import React, { useEffect, useState } from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import Box from '@mui/joy/Box';
import { Peticiones } from '../helpers/Peticiones';
import { HomeURL } from '../helpers/UrlsAPI';
import { useDispatch, useSelector } from 'react-redux';
import { agregarInfoUserAsync } from "../redux/actions/InfoUserActionCRUD";
import Swal from "sweetalert2";

const IntroHome = ({ close }) => {

    const dispatch = useDispatch()

    const { user } = useSelector(store => store.user)
    const { DatosUser } = useSelector(store => store.datosUserStore)

    const [valueFormAgregar, setValueFormAgregar] = useState({ telefono: '', direccion: '', password: '' })

    const handleUsuario = () => {
        setValueFormAgregar({
            ...valueFormAgregar,
            id: user?.uid,
            nombres: user?.displayName,
            correo: user?.email
        })
    }

    const handleCargarUser = () => {
        const filtro = DatosUser.find(usr => usr.correo == user?.email)
        if (filtro) {
        } else {
            dispatch(agregarInfoUserAsync(valueFormAgregar))
        }
        // return (
        //     Swal.fire({
        //         allowOutsideClick: 'falso',
        //         icon: 'error',
        //         title: 'Oops...',
        //         text: 'Something went wrong!',
        //         footer: '<a href="">Why do I have this issue?</a>'
        //     })
        // )
        close()
    }

    useEffect(() => {
        handleUsuario()
        DataApi()
    }, [setValueFormAgregar])

    const [datos, setDatos] = useState([])
    const DataApi = async () => {
        const data = await Peticiones(HomeURL)
        setDatos(data[0].introHome)
    }
    // -------------------------------------------------------------------------------
    const [activeStep, setActiveStep] = useState(0);
    const [intro, setIntro] = useState({
        btnSi: '',
        btnNo: 'no'
    });

    const handleNext = async () => {
        if (activeStep < 3) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            if (activeStep === 2) {
                setIntro({
                    btnNo: '',
                    btnSi: 'no'
                })
                const { value: accept } = await Swal.fire({
                    title: 'Terms and conditions',
                    input: 'checkbox',
                    allowOutsideClick: false,
                    inputValue: 1,
                    inputPlaceholder: 'I agree with the terms and conditions',
                    confirmButtonText: 'Continue <i class="fa fa-arrow-right"></i>',
                    footer: '<a href="">Why do I have this issue?</a>',
                    inputValidator: (result) => {
                        return !result && 'You need to agree with T&C'
                    }
                })
            }
        }
    };

    return (
        <div className={`d-flex flex-column rounded-pill`}>
            <div className='ConteImgH2 w-100 mx-auto rounded'>
                <section className={`mb-3 BGIMG${datos[activeStep]?.id}`}>
                    <Box className='h-100 w-100' component="img" src={datos[activeStep]?.imagen} alt={datos?.id} />
                </section>
                <div className='ConteH2 d-flex flex-column'>
                    <h2 className='mx-auto'>{datos[activeStep]?.parrafo}</h2>
                </div>
            </div>

            <MobileStepper
                className='d-flex flex-column mb-0 rounded-pill'
                variant="dots"
                steps={4}
                position="static"
                activeStep={activeStep}
                sx={{
                    maxWidth: '100%'
                }}
                nextButton={
                    <Button className={`BTNNext rounded-pill mt-2 w-75 ${intro.btnSi}`} size="small" onClick={handleNext}>
                        Siguiente
                    </Button>
                }
            />
            <Button className={`BTNNext rounded-pill w-75 ${intro.btnNo}`} size="small" onClick={handleCargarUser} style={{ marginTop: '3px' }}>
                Siguiente
            </Button>
            <button className='BTNOmitir mx-auto mb-2 mt-3' onClick={handleCargarUser}>
                Omitir
            </button>
        </div>
    )
}

export default IntroHome;