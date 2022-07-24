
import React, { useState } from 'react'
import { BsFillCameraFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { FileUpload } from '../../helpers/FileUpload'
import { useForm } from '../../helpers/UseForm'
import { addComuniAsync } from '../../redux/actions/ActionAddComuni'
import NavBarIn from '../NavBarIn'
import ComunidadList from './ComunidadList'

export default function Comunidad() {

    const [activo, setActivo] = useState(true)

    const dispatch = useDispatch()

    const  [formValue, handleInputChange, reset] = useForm({
        direccion: '',
        descripcion: '',
        imagen: ''
    })

    const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(formValue)
    dispatch(addComuniAsync(formValue))
    reset()

}

const handleFileChange =(e)=>{
    const file= e.target.files[0]
    //llamar a la configuracion de Cloudinary
    FileUpload(file)
    .then((resp)=>{
        formValue.imagen = resp
        console.log(resp)
    })
    .catch((error)=>{console.warn(error)});

}

    return (
        <div>
        <NavBarIn/>

    <form  className='w-2/3 ' onSubmit={handleSubmit}>
    <div className='flex gap-2 text-titleColor  justify-center py-3'>
            <label className='cursor-pointer' htmlFor='imgup'><BsFillCameraFill className='inline-block text-xl mr-2' />Subir imagen</label>
            <input className='-z-10 overflow-hidden opacity-0 w-1 h-1'  name='image' onChange={handleFileChange} id='imgup' type='file' placeholder='Cambiar foto de perfil' />
            </div>
            <div className='grid grid-cols-[1fr_1fr] gap-x-10 gap-y-2 px-5 items-center'>
            <label htmlFor='address'>Direccion:</label>
            <input  className='appearance-none  rounded-xl w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-0' onChange={handleInputChange} id='address'  type='text' name='direccion'  />

            <label htmlFor='descripc'>Descripcion:</label>
            <input  className='appearance-none  rounded-xl w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-0' onChange={handleInputChange} id='descripc' type='text' name='descripcion' />
        </div>
        <button type="submit">Subir archivo</button>
            </form>
            <ComunidadList/>
    </div>
  )
}
