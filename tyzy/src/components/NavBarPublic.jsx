import React from 'react'

const NavBarPublic = () => {
    return (
        <div className='d-flex bg-white h-25'>
            <img className='mx-5 my-4' src="https://res.cloudinary.com/doaijv8m0/image/upload/v1657497238/Demoday/Logo_1_nuhlz7.png" alt="logo" />
            <section className='w-50 my-auto'>
                <div className='d-flex justify-content-evenly w-75 mx-auto'>
                    <h6>Home</h6>
                    <h6>Comunidad</h6>
                    <h6>Blog</h6>
                    <h6>Contacto</h6>
                </div>

            </section>

            <section className='d-flex ms-auto me-5 my-auto'>
                <button className='me-4 BTNLOGIN'>
                    Registrarse
                </button>
                <button className='BTNLOGIN'>
                    Iniciar sesión
                </button>
            </section>
        </div>
    )
}

export default NavBarPublic;