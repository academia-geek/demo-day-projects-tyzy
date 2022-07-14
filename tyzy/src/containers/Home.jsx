import React, { useEffect, useState } from 'react'
import NavBarIn from '../components/NavBarIn';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import IntroHome from '../components/IntroHome';
import { ModalPrimeraVez } from '../styles/StylesGlobals';

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
        <div className='text-4xl'>
            <NavBarIn />

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
        </div>
    )
}

export default Home