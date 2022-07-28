import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Nav, Offcanvas } from 'react-bootstrap';
import { RiUserFill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { BsQuestionLg } from "react-icons/bs";
import { MdSettings, MdClose } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { ActionLogoutAsync } from '../redux/actions/LoginActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { Avatar } from 'flowbite-react';

const Setting = ({ name, ...props }) => {
    const dispatch = useDispatch()
    const { user } = useSelector(store => store.user)
    const { DatosUser } = useSelector(store => store.datosUserStore)
    // ----------------------------------------------------------
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // --------------------------------------------------------------
    const [usuario, setUsuario] = useState(null)
    const [infoUser, setInfoUser] = useState({})
    const filtroInfo = () => {
        const filterID = DatosUser.find(usr => usr.id === user?.uid)
        setInfoUser(filterID)
    }

    useEffect(() => {
        filtroInfo()
        const auth = getAuth();
        const dUsuarios = auth.currentUser;
        setUsuario(dUsuarios)
    }, [setInfoUser])

    return (
        <div>
            <div className='my-auto d-flex '><h2 className='fs-6 '>{infoUser?.nombres}</h2><img onClick={handleShow} className='my-auto ms-2' role='button' src="https://res.cloudinary.com/doaijv8m0/image/upload/v1658024388/Demoday/Vector_5_plaaek.png" alt="" /></div>

            <Offcanvas className='NavD' show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header >
                    <Offcanvas.Title className='d-flex mt-4 ms-4 w-100'>
                        <div className='d-flex my-auto'>
                            <Avatar className='fs-6 my-auto' alt={usuario?.displayName} img={usuario?.photoURL} rounded={true} />
                            <h2 className='ms-2 fs-4 text-white my-auto'>{infoUser?.nombres}</h2>
                        </div>

                        <MdClose role='button' onClick={handleClose} className='text-white my-auto ms-auto me-5' />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="mx-auto d-flex flex-column ">
                        <div className='d-flex ms-3 me-5'>
                            <NavLink className='nav-link text-white' to="/perfil"><h4 className='text-white'>Perfil</h4></NavLink>
                            <Link className='my-auto ms-auto' to='/perfil'><RiUserFill color='#B2D9D1' /></Link>
                        </div>
                        <div className='d-flex ms-3 me-5'>
                            <NavLink className='nav-link text-white' to="#Detail"><h4 className='text-white'>Notificaciones</h4></NavLink>
                            <Link className='my-auto ms-auto' to='#'><IoMdNotifications color='#B2D9D1' /></Link>
                        </div>
                        <div className='d-flex ms-3 me-5'>
                            <NavLink className='nav-link text-white' to="#fr3"><h4 className='text-white'>Preguntas PQR</h4></NavLink>
                            <Link className='my-auto ms-auto' to='#'><BsQuestionLg color='#B2D9D1' /></Link>
                        </div>
                        <div className='d-flex ms-3 me-5'>
                            <NavLink className='nav-link text-white' to="#Footer"><h4 className='text-white'>Configuración</h4></NavLink>
                            <Link className='my-auto ms-auto' to='#'><MdSettings color='#B2D9D1' /></Link>
                        </div>
                            
                        <div className='d-flex ms-3 me-5 mt-2'>
                            <div role='button' className='my-auto ms-3' onClick={() => dispatch(ActionLogoutAsync())}>
                                <h2 className='text-white'>Cerrar sesión</h2>
                            </div>
                            <Link className='my-auto ms-auto' to='#'><TbLogout color='#B2D9D1' /></Link>
                        </div>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Setting;