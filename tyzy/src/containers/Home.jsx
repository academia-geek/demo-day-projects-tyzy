import React, { useEffect, useState } from 'react'
import NavBarIn from './NavBarIn';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import IntroHome from './IntroHome';
import { HomeStyle, ModalPrimeraVez } from '../styles/StylesGlobals';
import Carousel from 'react-bootstrap/Carousel';
import { Peticiones } from '../helpers/Peticiones';
import { HomeURL } from '../helpers/UrlsAPI';
import { useDispatch } from 'react-redux';
import { mostrarDatesUserAsync } from '../redux/actions/InfoUserActionCRUD';

const Home = () => {

    const dispatch = useDispatch();
    const [datos, setDatos] = useState([])

    const DataApi = async () => {
        const data = await Peticiones(HomeURL)
        if (data[0] != undefined) {
            setDatos(data[0])
        }
    }
    const IntroHomeState = () => {
        const auth = getAuth()
        onAuthStateChanged(auth, user => {
            if (user.metadata.creationTime === user.metadata.lastSignInTime) {
                setShow(true)
            }
        })
    }

    useEffect(() => {
        dispatch(mostrarDatesUserAsync())
        DataApi()
        IntroHomeState()
    }, [])

    // --------------------------------------------------------------
    const [auto, setAuto] = useState(0)
    const countDownDate = new Date().getSeconds();
    useEffect(() => {
        setTimeout(() => {
            if (countDownDate != auto) {
                setAuto(countDownDate)
                handleNext()
            }
        }, 4000)
    }, [auto])
    // -----------------------------------------------
    const [activeStep, setActiveStep] = useState(0);
    const [activeStepSecond1, setActiveStepSecond1] = useState(0);
    const [activeStepSecond2, setActiveStepSecond2] = useState(1);
    const [activeStepSecond3, setActiveStepSecond3] = useState(2);

    const handleNext = () => {
        if (activeStep < 2) {
            setActiveStep(activeStep + 1)
            if (activeStep === 0) {
                setActiveStepSecond1(0);
                setActiveStepSecond2(activeStepSecond2 + 1);
                setActiveStepSecond3(activeStepSecond3 + 1);
            } else if (activeStep === 1) {
                setActiveStepSecond1(activeStepSecond1 + 1);
                setActiveStepSecond2(0);
                setActiveStepSecond3(activeStepSecond3 + 1);
            }
        } else {
            setActiveStep(0)
            if (activeStep === 2) {
                setActiveStepSecond1(activeStepSecond1 + 1);
                setActiveStepSecond2(activeStepSecond2 + 1);
                setActiveStepSecond3(0);
            }
        }
    };

    // -----------------------------------------------------------
    const [show, setShow] = useState(false);
    const [displey, setDispley] = useState({})

    const handleClose = () => {
        setDispley({ display: 'Dnone' })
        setShow(false)
    };
    // -----------------------------------------------------------

    return (
        <HomeStyle className='text-4xl'>
            <NavBarIn />

            <section className='IMGHome d-flex'>
                <section className='d-flex flex-column ms-auto mt-40 me-5'>
                    <h2 className=''>Somos un equipo que puede ayudarte</h2>
                    <p className='mt-3'>En Tyzy nos comprometemos a identificar los problemas que están afectando tu día a día y así brindarte las opciones necesarias para que un animal de servicio o de terapia te ayude a superar las dificultades. </p>

                    <div className='d-flex flex-column mt-4'>
                        <h3 className='mx-auto'>Leer mas</h3>
                        <img className='mx-auto' src="https://res.cloudinary.com/doaijv8m0/image/upload/v1657842924/Demoday/Vector_2_f5zvqn.png" alt="" />
                    </div>
                </section>
            </section>

            <section className='TICShome d-flex flex-column my-5 mx-4'>
                <h2 className='h2'>Haciendo parte de nuestra comunidad</h2>
                <h4>Podrás conocer más acerca de la posibilidad de acompañarte con uno de nuestros peludos, que te ayudarán a mejorar tu estilo de vida además de sacarte una sonrisa y ser complice de tu día a día.</h4>
                <h3 className='mb-5'>ENCONTRARÁS</h3>

                <section className='mx-auto w-75'>
                    {
                        datos.targetas?.map((dt) => (
                            <div key={dt?.id} className={`d-flex Tips BGTips${dt?.clase}`} >
                                <img className='p-3 my-auto' src={dt?.imagen} alt={dt?.id} />
                                <div className=''>
                                    <div className='h2-2 my-auto d-flex'>
                                        <h2 className='my-auto'>{dt?.titulo}</h2>
                                    </div>
                                    <p>{dt?.parrafo}</p>
                                </div>
                            </div>
                        ))
                    }
                </section>
            </section>

            <div className='EquipoTec d-flex flex-column my-5 mx-4'>
                <h2>Conoce nuestro equipo Tyzy</h2>
                <h4>Somos un equipo grande de profesionales y especialistas que siempre estarán a tu disposición para que encuentres ese compañero ideal</h4>
                <section className='d-flex gap-5 mt-5 justify-content-evenly mx-auto'>
                    {
                        datos.especialistas?.map((dt) => (
                            <div key={dt?.id}>
                                <section className='BORDERimg'>
                                    <img src={dt?.imagen} alt={dt?.id} />
                                </section>
                                <h3>{dt?.titulo}</h3>
                            </div>
                        ))
                    }
                </section>
            </div>

            <section className='UserAndPets d-flex'>
                <div className='div1 d-flex flex-column'>
                    <div className='d-flex flex-column'>
                        <h2>Algunos usuarios con sus mascotas</h2>
                        <span>TYZY</span>
                        <p>Aprendemos que entendernos con nuestros mascotas es algo muy importante en el proceso, y eso hace felices tanto a dueño como a la mascotas. Es todo un proceso que saca sonrisas y hace la vida más llevadera.</p>
                        <section className='d-flex'>
                            <img src={datos.length == 0 ? '' : datos?.usuariosBeneficiados[activeStepSecond1]?.imagen} alt="1" />
                            <img src={datos.length == 0 ? '' : datos?.usuariosBeneficiados[activeStepSecond2]?.imagen} alt="2" />
                            <img src={datos.length == 0 ? '' : datos?.usuariosBeneficiados[activeStepSecond3]?.imagen} alt="3" />
                        </section>
                    </div>
                </div>

                <div className='div2'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={datos.length == 0 ? '' : datos?.usuariosBeneficiados[activeStep]?.imagen}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>

            <div>
                <ModalPrimeraVez className={`${displey.display}`}
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                >
                    <section className='Section d-flex flex-column'>
                        <IntroHome close={handleClose} />
                    </section>
                </ModalPrimeraVez>
            </div>
        </HomeStyle>
    )
}

export default Home;