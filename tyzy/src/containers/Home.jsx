import { Button } from 'react-bootstrap'
import React from 'react'
import { ActionLogoutAsync } from '../redux/actions/LoginActions'
import { useDispatch } from 'react-redux';

const Home = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <h2>Estoy en el home</h2>
            <Button variant="outline-primary" className='mx-auto mt-auto' onClick={() => dispatch(ActionLogoutAsync())}>
                <h2 className='text-center'>Logout</h2>
            </Button>
        </div>
    )
}

export default Home