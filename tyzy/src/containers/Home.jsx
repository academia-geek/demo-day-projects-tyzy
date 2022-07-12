import { Button } from 'react-bootstrap'
import React from 'react'
import { ActionLogoutAsync } from '../redux/actions/LoginActions'
import { useDispatch } from 'react-redux';
import NavBarIn from '../components/NavBarIn';

const Home = () => {

    const dispatch = useDispatch()

    return (
        <div>
        <NavBarIn/>
            <h2>Estoy en el desploy</h2>
            <h3>probando desploy</h3>
            <Button variant="outline-primary" className='mx-auto mt-auto' onClick={() => dispatch(ActionLogoutAsync())}>
                <h2 className='text-center'>Logout</h2>
            </Button>

        </div>
    )
}

export default Home