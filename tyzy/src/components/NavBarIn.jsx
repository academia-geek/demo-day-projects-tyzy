import React, { useEffect, useState } from 'react';
import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function NavBarIn() {

  const [usuario, setUsuario] = useState(null)

  const CargarPhoto = async (dataUser) => {
    return await dataUser;
  }

  useEffect(() => {
    const auth = getAuth();
    const dUsuarios = auth.currentUser;
    CargarPhoto(dUsuarios)
      .then((user) => {
        user ? setUsuario(dUsuarios) : console.log('no se pudo', user);
      })
      .catch(err => console.log('no se pudo cargar la imgen', err))
      console.log(usuario);
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
          <Avatar className='fs-6' alt={usuario?.displayName} img={usuario?.photoURL} rounded={true} />
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
              Sign out
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
