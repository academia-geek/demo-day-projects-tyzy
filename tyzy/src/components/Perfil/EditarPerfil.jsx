import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { editarInfoUserAsync, mostrarDatesUserAsync } from '../../redux/actions/InfoUserActionCRUD';

const EditarPerfil = ({ si, no, data }) => {

    const dispatch = useDispatch()
    const [activo, setActivo] = useState(false)

    const [valueFormEditar, setValueFormEditar] = useState({
        id: data[0].id,
        nombres: data[0]?.nombres,
        correo: data[0]?.correo,
        telefono: data[0]?.telefono,
        direccion: data[0]?.direccion,
        password: data[0]?.password
    })
    //------------------------------------------------------------------------------- //
    const handleinputChange = ({ target }) => {
        setValueFormEditar({ ...valueFormEditar, [target.name]: target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editarInfoUserAsync(valueFormEditar))
        dispatch(mostrarDatesUserAsync())
        no(false)
    }

    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            show={si}
            centered
        >
            <form onSubmit={handleSubmit} className='px-5'>
                <div className='grid grid-cols-[1fr_300px] gap-x-10 gap-y-2 px-5 items-center mt-5 mx-5'>
                    <label htmlFor='nombre'>Nombres:</label>
                    <input disabled={activo} onChange={handleinputChange} className={` 'appearance-none  rounded-xl w-full   text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' ${activo ? 'border-0' : 'border-2'} `} value={valueFormEditar.nombres} id='nombre' type='text' name='nombres' placeholder={data[0]?.nombres} />

                    <label htmlFor='correo'>Correo:</label>
                    <input disabled={activo} onChange={handleinputChange} className={`'appearance-none  rounded-xl w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline' ${activo ? 'border-0' : 'border-2 '}`} id='correo' value={valueFormEditar.correo} type='email' name='correo' placeholder={data[0]?.correo} />

                    <label htmlFor='telefono'>Telefono:</label>
                    <input disabled={activo} onChange={handleinputChange} value={valueFormEditar.telefono} className={`'appearance-none  rounded-xl w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline' ${activo ? 'border-0' : 'border-2 '}`} id='telefono' type='text' name='telefono' placeholder='1234567890' />

                    <label htmlFor='direccion'>Dirección:</label>
                    <input disabled={activo} onChange={handleinputChange} value={valueFormEditar.direccion} className={`' appearance-none rounded-xl w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline' ${activo ? 'border-0' : 'border-2 '}`} id='direccion' type='text' name='direccion' placeholder='Direccion de ejemplo' />

                    <label htmlFor='password'>Contraseña:</label>
                    <input disabled={activo} onChange={handleinputChange} value={valueFormEditar.password} className={`' appearance-none rounded-xl w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline' ${activo ? 'border-0' : 'border-2 '}`} id='password' type='password' name='password' placeholder={`${activo ? '' : ''}********`} />
                </div>

                <div className='flex justify-center p-10 gap-3'>
                    <span onClick={() => no(false)} className='BTNeditar py-2 px-4 rounded-lg'>
                        Cancelar
                    </span>
                    <button type='submit' className='BTNeditar py-2 px-4 rounded-lg'>
                        Guardar
                    </button>
                </div>


            </form>
        </Modal>
    )
}

export default EditarPerfil;