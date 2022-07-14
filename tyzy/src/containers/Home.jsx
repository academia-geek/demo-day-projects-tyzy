import React, { useEffect, useState } from 'react'
import NavBarIn from '../components/NavBarIn';
import Button from '@mui/material/Button';
import Modal from 'react-bootstrap/Modal';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import IntroHome from '../components/IntroHome';

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
            } else {
                setShow(false)
            }
        })
    }, [])

    return (
        <div className='text-4xl'>
            <NavBarIn />

            <div>
                <Modal
                    centered
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <IntroHome close={handleClose} />
                    <Button className='text-primary w-50 mx-auto' onClick={handleClose}>
                        Omitir
                    </Button>
                </Modal>
            </div>
        </div>
    )
}

export default Home