import { Button } from 'react-bootstrap'
import React from 'react'
import { ActionLogoutAsync } from '../redux/actions/LoginActions'
import { useDispatch } from 'react-redux';
import NavBarIn from '../components/NavBarIn';

const Home = () => {

    const dispatch = useDispatch()

    return (
        <div className='text-4xl'>
        <NavBarIn/>
            <Button variant="outline-primary" className='mx-auto mt-auto' onClick={() => dispatch(ActionLogoutAsync())}>
                <h2 className='text-center'>Logout</h2>
            </Button>

        </div>
    )
}

export default Home