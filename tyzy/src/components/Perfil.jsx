import React, { memo, useEffect, useState } from 'react'
import NavBarIn from './NavBarIn'
import { BsFillCameraFill } from "react-icons/bs";
import { getAuth, updateProfile } from 'firebase/auth';
import { Avatar } from 'flowbite-react';
import { FileUpload } from '../helpers/FileUpload';
import { useDispatch, useSelector } from 'react-redux';
import { ActionGetUserAsync } from '../redux/actions/UserActions';
import { mostrarDatesUserAsync } from '../redux/actions/InfoUserActionCRUD';
import EditarPerfil from './EditarPerfil';

const Perfil = memo(() => {

  const dispatch = useDispatch()
  const auth = getAuth();

  const [activo, setActivo] = useState(true)
  const [modalShow, setModalShow] = useState(false);
  const [datos, setDatos] = useState([])

  const { user } = useSelector(store => store.user)
  const { DatosUser } = useSelector(store => store.datosUserStore)

  //----------- UP img-------------- //
  const UpImg = async (foto) => {
    await updateProfile(auth.currentUser, {
      photoURL: foto
    })
  }

  const handleFileChange = e => {
    const file = e.target.files[0]
    FileUpload(file)
      .then((res) => {
        UpImg(res)
      })
      .catch((err) => {
        console.warn(err);
      })
  }

  const estado = () => {
    const filtro = DatosUser.filter((usr) => usr.correo === user?.email)
    if (filtro[0] !== undefined) {
      setActivo(true)
      setDatos(filtro)
    } else {
      setActivo(false)
    }
  }

  useEffect(() => {
    dispatch(ActionGetUserAsync())
    estado()
    console.log(DatosUser);
  }, [dispatch, setActivo]);

  return (
    <>
      <NavBarIn />
      <div className='py-20 px-5  bg-bgBlanco'>
        <section className='mb-10 left-[10%] w-100'>
          <h3 className='text-titleOrange font-bold text-2xl  w-100'>Tu perfil</h3>
        </section>

        <section className='flex justify-center'>
          <div className='flex flex-col items-center mt-3'>
            <Avatar className='fs-6 border-4 border-sky-500' alt='Bordered avatar' img={user?.photoURL} size="xl" rounded={true} />

            <form>
              <div className='flex gap-2 text-titleColor  justify-center py-3'>
                <label className='cursor-pointer' htmlFor='imgup'><BsFillCameraFill className='inline-block text-xl mr-2' />Cambiar foto de perfil</label>
                <input className='-z-10 overflow-hidden opacity-0 w-1 h-1' id='imgup' type='file' placeholder='Cambiar foto de perfil' onChange={handleFileChange} />
              </div>
            </form>
          </div>

          <div>
            <form >
              <div className='grid grid-cols-[1fr_300px] gap-x-10 gap-y-2 px-5 items-center'>
                <label htmlFor='nombre'>Nombres:</label>
                <input disabled className='appearance-none  rounded-xl w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-0' id='nombre' type='text' name='nombres' placeholder={`${activo ? datos[0]?.nombres : user?.displayName}`} />

                <label htmlFor='correo'>Correo:</label>
                <input disabled className='appearance-none  rounded-xl w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-0' id='correo' type='email' name='correo' placeholder={`${activo ? datos[0]?.correo : user?.email}`} />

                <label htmlFor='telefono'>Telefono:</label>
                <input disabled className='appearance-none  rounded-xl w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-0' id='telefono' type='text' name='telefono' placeholder={`${datos[0]?.telefono != '' ? datos[0]?.telefono : '1234567890'}`} />

                <label htmlFor='direccion'>Dirección:</label>
                <input disabled className='appearance-none rounded-xl w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-0' id='direccion' type='text' name='direccion' placeholder={`${datos[0]?.direccion != '' ? datos[0]?.direccion : 'Direccion de ejemplo'}`} />

                <label htmlFor='password'>Contraseña:</label>
                <input disabled className=' appearance-none rounded-xl w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-0' id='password' type='password' name='password' placeholder={`${datos[0]?.password != '' ? datos[0]?.password : '********'}`} />
              </div>

              <div className='flex justify-center p-10 gap-3 mt-5'>
                <span role='button' onClick={() => {
                  setModalShow(true)
                }} className={`'cursor-pointer px-4 py-2 rounded-lg mt-5' ${modalShow ? 'border-dashed border-2 text-titleOrange border-titleOrange' : 'text-white bg-titleOrange'}`}>Editar Perfil</span>
              </div>
            </form>
          </div>
          {
            modalShow == true
              ? < EditarPerfil si={modalShow} no={setModalShow} data={datos} />
              : ''
          }
        </section>
      </div>
    </>
  )
})

export default Perfil;
