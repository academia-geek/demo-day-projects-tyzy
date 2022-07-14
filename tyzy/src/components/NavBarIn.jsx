import React, { useEffect, useState } from 'react';
import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { Button } from 'react-bootstrap'
import { ActionLogoutAsync } from '../redux/actions/LoginActions';
import { useDispatch } from 'react-redux';

export default function NavBarIn() {

  const dispatch = useDispatch()
  // ----------------------------------------------------------
  const [usuario, setUsuario] = useState(null)

  const CargarPhoto = async (dataUser) => {
    return dataUser
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
    <div>
      <Navbar
        fluid={true}
        rounded={true}
      >
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://res.cloudinary.com/dg29vcpk7/image/upload/v1657500435/Tyzy/Logo_fvikwq.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
        </Navbar.Brand>
        <div className="flex text-black md:order-2">
          <Avatar className='fs-6' alt={usuario?.displayName.length-3} img={usuario?.photoURL} rounded={true} />
          <Dropdown
            arrowIcon={true}
            inline={true}
            label={<h4>{usuario?.displayName}</h4>}
          >
            <Dropdown.Header>
              <span className="block text-sm">
                Bonnie Green
              </span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              Dashboard
            </Dropdown.Item>
            <Dropdown.Item>
              Settings
            </Dropdown.Item>
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
        <Navbar.Collapse>
          <Navbar.Link
            to="/navbars"
            active={true}
          >
            Home
          </Navbar.Link>
          <Link to="/requisitos">
            Requisitos
          </Link>
          <Link to="#">
            Services
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
