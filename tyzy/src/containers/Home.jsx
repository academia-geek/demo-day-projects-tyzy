import React, { useEffect, useState } from 'react'
import NavBarIn from '../components/NavBarIn';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import IntroHome from '../components/IntroHome';
import { HomeStyle, ModalPrimeraVez } from '../styles/StylesGlobals';

const Home = () => {
    // -----------------------------------------------------------
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // -----------------------------------------------------------
    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, user => {
            if (user.metadata.creationTime === user.metadata.lastSignInTime) {
                setShow(true)
            }
        })
    }, [])

    return (
        <HomeStyle className='text-4xl'>
            <NavBarIn />

            <section className='IMGHome d-flex'>
                <section className='d-flex flex-column ms-auto mt-64 me-2'>
                    <h2 className=''>Somos un equipo que puede ayudarte</h2>
                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    <div className='d-flex flex-column mt-4'>
                        <h3 className='mx-auto'>Leer mas</h3>
                        <img className='mx-auto' src="https://res.cloudinary.com/doaijv8m0/image/upload/v1657842924/Demoday/Vector_2_f5zvqn.png" alt="" />
                    </div>
                </section>
            </section>

            <section className='TICShome d-flex flex-column my-5 mx-4'>
                <h2 className='h2'>Haciendo parte de nuestra comunidad</h2>
                <h4 className='mt-2'>Podrás conocer más acerca de la posibilidad de acompañarte con uno de nuestros peludos, que te ayudarán a mejorar tu estilo de vida además de sacarte una sonrisa y ser complice de tu día a día.</h4>
                <h3 className='mb-5'>Aquí podrás ...</h3>

                    <section className='mx-auto'>
                        <div className='d-flex Tips BGTips1' >
                            <img className='p-3 my-auto' src="https://res.cloudinary.com/doaijv8m0/image/upload/v1657850178/Demoday/Vector_3_qm5rei.png" alt="" />
                            <div className=''>
                                <h2 className='h2-2'>Tips para la tenencia</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className='d-flex Tips BGTips2' >
                            <img className='p-3 my-auto' src="https://res.cloudinary.com/doaijv8m0/image/upload/v1657850177/Demoday/cil_chat-bubble_yoq9se.png" alt="" />
                            <div>
                                <h2 className='h2-2'>Tips para la tenencia</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className='d-flex Tips BGTips3' >
                            <img className='p-3 my-auto' src="https://res.cloudinary.com/doaijv8m0/image/upload/v1657850178/Demoday/Vector_3_qm5rei.png" alt="" />
                            <div>
                                <h2 className='h2-2'>Tips para la tenencia</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </section>
            </section>

            <div className='EquipoTec d-flex flex-column my-5 mx-4'>
                <h2>Conoce nuestro equipo Tyzy</h2>
                <h4 className='mt-2'>Somos un equipo grande de profesionales y especialistas que siempre estarán a tu disposición para que encuentres ese compañero ideal</h4>
                <section className='d-flex gap-3 mt-5'>
                    <div>
                        <section className='BORDERimg'>
                            <img src="https://res.cloudinary.com/doaijv8m0/image/upload/v1657846948/Demoday/pexels-italo-melo-2379004_1_xdq4so.png" alt="" />
                        </section>
                        <h3>ENTRENADORES</h3>
                    </div>
                    <div>
                        <section className='BORDERimg'>
                            <img src="https://res.cloudinary.com/doaijv8m0/image/upload/v1657846948/Demoday/pexels-italo-melo-2379004_1_1_yctm7j.png" alt="" />
                        </section>
                        <h3>SOPORTE</h3>
                    </div>
                    <div>
                        <section className='BORDERimg'>
                            <img src="https://res.cloudinary.com/doaijv8m0/image/upload/v1657846948/Demoday/pexels-tima-miroshnichenko-6234616_1_ai6m4m.png" alt="" />
                        </section>
                        <h3>VETERINARIOS</h3>
                    </div>
                    <div>
                        <section className='BORDERimg'>
                            <img src="https://res.cloudinary.com/doaijv8m0/image/upload/v1657846948/Demoday/pexels-italo-melo-2379004_1_2_xuvsi7.png" alt="" />
                        </section>
                        <h3>PSICÓLOGOS</h3>
                    </div>
                </section>
            </div>

            <section className='UserAndPets'>
        
            </section>

            <div>
                <ModalPrimeraVez className=''
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                >
                    <section className='Section d-flex flex-column'>
                        <IntroHome close={handleClose} />
                        <button className='BTNOmitir mx-auto mb-2' onClick={handleClose}>
                            Omitir
                        </button>
                    </section>
                </ModalPrimeraVez>
            </div>
        </HomeStyle>
    )
}

export default Home