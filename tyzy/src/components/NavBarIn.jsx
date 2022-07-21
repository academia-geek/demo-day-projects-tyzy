import React, { useEffect, useState } from 'react';
import { Navbar, Avatar } from 'flowbite-react';
import { NavLink, Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import Setting from './Setting';

export default function NavBarIn() {
  // ----------------------------------------------------------
  const [usuario, setUsuario] = useState(null)

  const CargarPhoto = async (dataUser) => {
    return await dataUser
  };

  useEffect(() => {
    const auth = getAuth();
    const dUsuarios = auth.currentUser;

    CargarPhoto(dUsuarios)
      .then((user) => {
        user ? setUsuario(dUsuarios) : console.log('no se pudo', user);
      })
      .catch(err => console.log('no se pudo cargar la imgen', err))
  }, [])
  return (
    <div className='text-back'>
      <Navbar
        fluid={true}
        rounded={true}
      >
        <NavLink to='/'>
          <img src="https://res.cloudinary.com/dg29vcpk7/image/upload/v1657500435/Tyzy/Logo_fvikwq.png"
            className="mr-3 h-6 text-black sm:h-9"
            alt="logo" />
        </NavLink>

        <section className='w-50 my-auto text-black'>
          <div className='d-flex justify-content-evenly w-75 mx-auto gap-4'>
            <NavLink to='/' className='NavLinks2'>Home</NavLink>
            <NavLink to='/requisitos' className='NavLinks2'>Requisitos</NavLink>
            <NavLink to='/diagnostico' className='NavLinks2'>Diagnóstico</NavLink>
            <NavLink to='#' className='NavLinks2'>Pricing</NavLink>
            <NavLink to='#' className='NavLinks2'>Contact</NavLink>
          </div>

        </section>

        <div className="flex items-center z-10 gap-2 text-black md:order-2 me-3">
          <Avatar className='fs-6' alt={usuario?.displayName} img={usuario?.photoURL} rounded={true} />
          {
            ['end'].map((placement, idx) => (
              <Setting key={idx} placement={placement} name={placement} />
            ))
          }
        </div>
        {/* <Navbar.Collapse className='text-black'>
          <Link to="/navbars">
            Home
          </Link>
          <Link to="/requisitos">
            Requisitos
          </Link>
          <Link to="/diagnostico">
            Diagnóstico
          </Link>
          <Link to="#">
            Pricing
          </Link>
          <Link to="#">
            Contact
          </Link>
        </Navbar.Collapse> */}
      </Navbar>
    </div>
  )
}
