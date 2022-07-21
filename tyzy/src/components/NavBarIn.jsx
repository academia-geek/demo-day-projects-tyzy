import React, { useEffect, useState } from 'react';
import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { Button } from 'react-bootstrap'
import { ActionLogoutAsync } from '../redux/actions/LoginActions';
import { useDispatch } from 'react-redux';

export default function NavBarIn() {

  const dispatch = useDispatch()
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
        <>
          <NavLink to='/'>
            <img src="https://res.cloudinary.com/dg29vcpk7/image/upload/v1657500435/Tyzy/Logo_fvikwq.png"
              className="mr-3 h-6 text-black sm:h-9"
              alt="logo" />
          </NavLink>

        </>
        <div className="flex items-center z-10 gap-2 text-black md:order-2">
          <Avatar className='fs-6' alt={usuario?.displayName} img={usuario?.photoURL} rounded={true} />
          <Dropdown
            arrowIcon={true}
            inline={true}
            label={<p className='text-sm'>{usuario?.displayName}</p>}
          >
            <Dropdown.Header>
              <span className="block text-sm">
                {usuario?.displayName}
              </span>
              <span className="block truncate text-sm font-medium">
                {usuario?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              Dashboard
            </Dropdown.Item>
            <Link to='/perfil'>
              <Dropdown.Item>
                perfil
              </Dropdown.Item>
              </Link>
            <Dropdown.Item>
              Earnings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <Button variant="outline-primary" className='mx-auto mt-auto' onClick={() => dispatch(ActionLogoutAsync())}>
                <h2 className='text-center'>Sign out</h2>
              </Button>
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className='text-black'>
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
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
