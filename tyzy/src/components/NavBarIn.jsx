import React from 'react'
import { Navbar, Dropdown, Avatar} from 'flowbite-react';
import {Link} from 'react-router-dom'
import { getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { ActionLogoutAsync } from '../redux/actions/LoginActions';


export default function NavBarIn() {
  const auth = getAuth()
  const dispatch = useDispatch()

      const user = auth.currentUser;
      const displayName = user.displayName;
      const email = user.email;
      const xd = email.substring(0, email.indexOf('@'))
      const photoURL = user.photoURL;

  return (
    <div className='px-3'>
    <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="/">
    <img
      src="https://res.cloudinary.com/dg29vcpk7/image/upload/v1657500435/Tyzy/Logo_fvikwq.png"
      className="mr-3 mt-4 h-6 sm:h-9"
      alt="Tyzy"
    />
    
  </Navbar.Brand>
  <div className="flex mt-4 items-center  md:order-2">
    <Dropdown
      arrowIcon={true}
      inline={true}
      
      label={<Avatar alt="User settings"  img={photoURL} rounded={true}  >
           <p className='px-2 text-sm font-medium hidden md:block'>{displayName || xd}</p>
      </Avatar>
      }>
    
      <Dropdown.Header>
        <span className="block text-sm">
        {displayName || xd}
        </span>
        <span className="block truncate text-sm font-medium">
          {email}
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Dashboard
      </Dropdown.Item>
      <Link to='/perfil'>
      <Dropdown.Item>
      Perfil
      </Dropdown.Item>
      </Link>
      <Dropdown.Item>
        Earnings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => dispatch(ActionLogoutAsync())}>
        Sign out
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />

 

  </div>
  <Navbar.Collapse >
    <Link to="/navbars">
      Home
    </Link>
    <Link to="/requisitos">
      Requisitos
    </Link>
    <Link to="/navbars">
      Services
    </Link>
    <Link to="/navbars">
      Pricing
    </Link>
    <Link to="/navbars">
      Contact
    </Link>
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}
