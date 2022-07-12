import React from 'react';
import { Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const NavBarPublic = () => {
    return (
        <div className='NavbarPublic d-flex bg-white position-fixed'>
            <NavLink to='/landingPage'>
                <img className='mx-5 my-5' src="https://res.cloudinary.com/doaijv8m0/image/upload/v1657497238/Demoday/Logo_1_nuhlz7.png" alt="logo" />
            </NavLink>
            <section className='w-50 my-auto'>
                <div className='d-flex justify-content-evenly w-75 mx-auto'>
                    <a href='#home' className='NavLinks'>Home</a>
                    <a href='#comunidad' className='NavLinks'>Comunidad</a>
                    <a href='#blog' className='NavLinks'>Blog</a>
                    <a href='#footer' className='NavLinks'>Contacto</a>
                </div>

            </section>

            <section className='d-flex ms-auto me-3 my-auto'>
                <NavLink to='/register' className='nav-link'>
                    <button className='BTNREGISTER'>
                        Registrarse
                    </button>
                </NavLink>

                <NavLink to='/login' className='nav-link px-0'>
                    <button className='BTNLOGIN'>
                        Iniciar sesión
                    </button>
                </NavLink>
            </section>
        </div>
    )
}

export default NavBarPublic;