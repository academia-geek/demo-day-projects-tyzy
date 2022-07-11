import React from 'react';
import { NavLink } from "react-router-dom";

const NavBarPublic = () => {
    return (
        <div className='d-flex bg-white h-25'>
            <NavLink to='/landingPage'>
                <img className='mx-5 my-4' src="https://res.cloudinary.com/doaijv8m0/image/upload/v1657497238/Demoday/Logo_1_nuhlz7.png" alt="logo" />
            </NavLink>
            <section className='w-50 my-auto'>
                <div className='d-flex justify-content-evenly w-75 mx-auto'>
                    <NavLink to='/landingPage' className='nav-link NavLinks'>Home</NavLink>
                    <NavLink to='#' className='nav-link NavLinks'>Comunidad</NavLink>
                    <NavLink to='#' className='nav-link NavLinks'>Blog</NavLink>
                    <NavLink to='#' className='nav-link NavLinks'>Contacto</NavLink>
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