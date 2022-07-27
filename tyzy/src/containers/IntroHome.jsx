import React, { useEffect, useState } from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import Box from '@mui/joy/Box';
import { Peticiones } from '../helpers/Peticiones';
import { HomeURL } from '../helpers/UrlsAPI';
import { useDispatch, useSelector } from 'react-redux';
import { agregarInfoUserAsync } from "../redux/actions/InfoUserActionCRUD";

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

    const handleNext = () => {
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
        <div className={`d-flex flex-column rounded-pill`}>
            <div className='ConteImgH2 w-100 mx-auto rounded'>
                <section className={`mb-3 BGIMG${datos[activeStep]?.id}`}>
                    <Box className='h-100 w-100' component="img" src={datos == 0 ? '' : datos[activeStep]?.imagen} alt={datos?.id} />
                </section>
                <div className='ConteH2 d-flex flex-column'>
                    <h2 className='mx-auto'>{datos[activeStep]?.parrafo}</h2>
                </div>
            </div>

            <MobileStepper
                className='d-flex flex-column mb-0 rounded-pill'
                variant="dots"
                steps={3}
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