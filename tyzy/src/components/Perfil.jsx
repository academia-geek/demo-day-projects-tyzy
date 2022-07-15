import React, { useEffect, useState } from 'react'
import NavBarIn from './NavBarIn'
import { BsFillCameraFill } from "react-icons/bs";
import { getAuth, updateProfile } from 'firebase/auth';
import { Avatar } from 'flowbite-react';
import { FileUpload } from '../helpers/FileUpload';
import { useDispatch, useSelector } from 'react-redux';
import { ActionGetUserAsync } from '../redux/actions/UserActions';
export default function Perfil() {

  const [activo, setActivo] = useState(true)

  const dispatch = useDispatch()
  const {user} = useSelector(store => store.user)
  const auth = getAuth();

  useEffect(() => {
    dispatch(ActionGetUserAsync())
  }, [dispatch])

  const initialValue = {
    nombres: '',
    correo: '',
    telefono:'',
    direccion:'',
    password:''
  }

  const [valueForm, setValuesform] = useState(initialValue)

  const UpImg = async (foto) =>{
    await updateProfile(auth.currentUser,{
      photoURL: foto
    })
    
    }
  
  const handleFileChange = e =>{
  const file = e.target.files[0]
    FileUpload(file)
    .then((res)=>{
      console.log(res);
      UpImg(res)
    })
    .catch((err) =>{
      console.warn(err);
    })
  }
  const handleinputChange = e =>{
    const {name, value} = e.target
    setValuesform({...valueForm, [name]:value})
  }
  const handleSubmit = e =>{
    e.preventDefault()
    console.log(valueForm)
  }
  const cambiarxd = ()=>{
    console.log(activo);
    setActivo(false)
  }
  const limpiar = ()=>{
    setValuesform(initialValue)
    setActivo(true)
  }
  return (
    <>
    <NavBarIn/>
    <div className='py-20 px-5  bg-bgBlanco'>
      <section className='mb-10 relative left-[10%]'>
        <h3 className='text-titleOrange font-bold text-2xl'>Tu perfil</h3>
      </section>

      <section className='flex justify-center  items-center'>
      <div className='flex flex-col items-center'>
      <Avatar className='fs-6 border-4 border-sky-500' alt='Bordered avatar' img={user?.photoURL} size="xl" rounded={true} />
        <form>
        <div className='flex gap-2 text-titleColor  justify-center py-3'>
          <label className='cursor-pointer' htmlFor='imgup'><BsFillCameraFill className='inline-block text-xl mr-2'/>Cambiar foto de perfil</label>
          <input className='-z-10 overflow-hidden opacity-0 w-1 h-1' id='imgup' type='file' placeholder='Cambiar foto de perfil' onChange={handleFileChange}/>
        </div>
        </form>

      </div>
      <div >
      <form onSubmit={handleSubmit} >
      <div className='grid grid-cols-[1fr_300px] gap-x-10 gap-y-2 px-5 items-center'>
          <label  htmlFor='nombre'>Nombres:</label>
          <input  disabled={activo} onChange={handleinputChange} className={` 'appearance-none  rounded-xl w-full   text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' ${activo ? 'border-0' : 'border-2'} `} value={valueForm.nombres} id='nombre' type='text' name='nombres' placeholder={user?.displayName} />

          <label htmlFor='correo'>Correo:</label>
          <input  disabled={activo}   onChange={handleinputChange}   className={`'appearance-none  rounded-xl w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline' ${activo ? 'border-0' : 'border-2 '}`} id='correo' value={valueForm.correo}  type='email' name='correo' placeholder={user?.email}/>
          <label htmlFor='telefono'>Telefono:</label>
          <input  disabled={activo}  onChange={handleinputChange}   value={valueForm.telefono} className={`'appearance-none  rounded-xl w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline' ${activo ? 'border-0' : 'border-2 '}`} id='telefono'  type='text' name='telefono' placeholder='3204356012'/>
          <label htmlFor='direccion'>Dirección:</label>
          <input  disabled={activo}  onChange={handleinputChange}   value={valueForm.direccion} className={`' appearance-none rounded-xl w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline' ${activo ? 'border-0' : 'border-2 '}`} id='direccion' type='text' name='direccion' placeholder='Calle 20 #12 int 20 ' />
          <label htmlFor='password'>Contraseña:</label>
          <input  disabled={activo}   onChange={handleinputChange}  value={valueForm.password} className={`' appearance-none rounded-xl w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline' ${activo ? 'border-0' : 'border-2 '}`} id='password' type='password' name='password' placeholder='********'/>
        </div>

        <div className='flex justify-center p-10 gap-3'> 
        <span onClick={cambiarxd} className={`
        'cursor-pointer px-4 py-2 rounded-lg '
        ${activo ? 'text-white bg-titleOrange' : 'border-dashed border-2 text-titleOrange border-titleOrange' }`}>Editar Perfil</span>

        <button  disabled={activo} className={`
        'cursor-pointer px-4 py-2 rounded-lg '
        ${activo ? 'border-dashed border-2 text-titleOrange border-titleOrange'  : 'text-white bg-titleOrange'  }`}>Guardar</button>

        <span onClick={limpiar} className={`
        'cursor-pointer px-4 py-2 rounded-lg '
        ${activo ? 'border-dashed border-2 text-titleOrange border-titleOrange'  : 'text-white bg-titleOrange'  }`}>Cancelar</span>
        </div>
        </form>
      </div>

      </section>
    </div>
    </>
  )
}
