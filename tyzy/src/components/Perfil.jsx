import React from 'react'
import NavBarIn from './NavBarIn'
import { BsFillCameraFill } from "react-icons/bs";

export default function Perfil() {
  return (
    <div>
    <NavBarIn/>
    <div className='p-20 bg-bgBlanco'>
      <section className='mb-10'>
        <h3 className='text-titleOrange font-bold text-2xl'>Tu perfil</h3>
      </section>

      <section className='flex flex- items-center'>
      <div>
        <img src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657548600/Tyzy/Image-2_svuu7t.png' alt=''/>
        <p className='text-center text-titleColor py-3'><BsFillCameraFill className='inline-block text-xl'/> Cambiar foto de perfil</p>
      </div>
      <div >
      <form className='grid grid-cols-[1fr_300px] gap-x-10 gap-y-2 px-5 items-center'>
        <label className='inline' htmlFor='nombre'>Nombres:</label>
        <input className=' appearance-none border-0 rounded-xl w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  type='text' name='nombre' placeholder='Francisco' />

        <label>Apellidos:</label>
        <input className=' appearance-none border-0 rounded-xl w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='email' name='email' placeholder='Bonilla' />
        <label>Correo:</label>
        <input className=' appearance-none border-0 rounded-xl w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  type='text' name='apellido' placeholder='youremail@compania.dev'/>
        <label>Telefono:</label>
        <input className=' appearance-none border-0 rounded-xl w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  type='text' name='telefono' placeholder='3204356012'/>
        <label>Dirección:</label>
        <input className=' appearance-none border-0 rounded-xl w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' name='direccion' placeholder='Calle 20 #12 int 20 ' />
        <label>Contraseña:</label>
        <input className=' appearance-none border-0 rounded-xl  w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='password' name='contraseña' placeholder='********'/>
        </form>
        <div className='flex p-10 gap-3'>
  
        <button className='bg-titleOrange text-white px-4 py-2 rounded-lg'>Editar Perfil</button>
        <button className='border-dashed border-2 border-titleOrange text-titleOrange px-3 py-2 rounded-lg'>Guardar</button>
        <button className='border-dashed  border-2 border-titleOrange  text-titleOrange px-3 py-2 rounded-lg'>Cancelar</button>
      </div>
      </div>
     
      </section>

    </div>
    </div>
  )
}
