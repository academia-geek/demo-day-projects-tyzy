import { getAuth, updateProfile } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { DB } from '../firebase/Firebase';
import { FileUpload } from '../helpers/FileUpload';
import { agregarInfoUserAsync, mostrarDatesUserAsync } from '../redux/actions/InfoUserActionCRUD';
import { ActionGetUserAsync } from '../redux/actions/UserActions';

const EditarPerfil = ({ show }) => {

    const dispatch = useDispatch()
    const [modalShow, setModalShow] = useState(true);

    const [activo, setActivo] = useState(true)

    const { user } = useSelector(store => store.user)
    const { DatosUser } = useSelector(store => store.datosUserStore)

    const auth = getAuth();

    useEffect(() => {
        dispatch(mostrarDatesUserAsync())
        dispatch(ActionGetUserAsync())
    }, [dispatch])

    const [valueForm, setValuesform] = useState({
        nombres: '',
        correo: '',
        telefono: '',
        direccion: '',
        password: ''
    })

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

    const handleinputChange = ({ target }) => {
        setValuesform({ ...valueForm, [target.name]: target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(DatosUser)
        await addDoc(collection(DB, 'infoPerfil'), valueForm)
        dispatch(agregarInfoUserAsync(valueForm))
        setValuesform({ ...valueForm })
        show(false)
    }

    const handlepassChange = async (e) => {

    }

    return (
        <div>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <form onSubmit={handleSubmit} >
                    <div className='grid grid-cols-[1fr_300px] gap-x-10 gap-y-2 px-5 items-center'>
                        <label htmlFor='nombre'>Nombres:</label>
                        <input disabled={activo} onChange={handleinputChange} className={` 'appearance-none  rounded-xl w-full   text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' ${activo ? 'border-0' : 'border-2'} `} value={DatosUser.nombres} id='nombre' type='text' name='nombres' placeholder={user?.displayName} />

                        <label htmlFor='correo'>Correo:</label>
                        <input disabled={activo} onChange={handleinputChange} className={`'appearance-none  rounded-xl w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline' ${activo ? 'border-0' : 'border-2 '}`} id='correo' value={DatosUser.correo} type='email' name='correo' placeholder={user?.email} />

                        <label htmlFor='telefono'>Telefono:</label>
                        <input disabled={activo} onChange={handleinputChange} value={DatosUser.telefono} className={`'appearance-none  rounded-xl w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline' ${activo ? 'border-0' : 'border-2 '}`} id='telefono' type='text' name='telefono' placeholder='1234567890' />

                        <label htmlFor='direccion'>Dirección:</label>
                        <input disabled={activo} onChange={handleinputChange} value={DatosUser.direccion} className={`' appearance-none rounded-xl w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline' ${activo ? 'border-0' : 'border-2 '}`} id='direccion' type='text' name='direccion' placeholder='Direccion de ejemplo' />

                        <label htmlFor='password'>Contraseña:</label>

                        <input disabled={activo} onChange={handlepassChange} value={DatosUser.password} className={`' appearance-none rounded-xl w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline' ${activo ? 'border-0' : 'border-2 '}`} id='password' type='password' name='password' placeholder={`${activo ? 'border-0' : 'border-2 '}'********'`} />
                    </div>

                    <div className='flex justify-center p-10 gap-3'>
                        <span role='button' onClick={() => {
                            setActivo(false)
                        }} className={`'cursor-pointer px-4 py-2 rounded-lg ' ${activo ? 'text-white bg-titleOrange' : 'border-dashed border-2 text-titleOrange border-titleOrange'}`}>Editar Perfil</span>

                        <button type='submit' onClick={() => {
                            setActivo(true)
                        }} className={`'cursor-pointer px-4 py-2 rounded-lg ' ${activo ? 'border-dashed border-2 text-titleOrange border-titleOrange' : 'text-white bg-titleOrange'}`}>
                            Guardar
                        </button>

                        <span role='button' onClick={() => {
                            setValuesform(valueForm)
                            setActivo(true)
                        }} className={`'cursor-pointer px-4 py-2 rounded-lg ' ${activo ? 'border-dashed border-2 text-titleOrange border-titleOrange' : 'text-white bg-titleOrange'}`}>Cancelar</span>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default EditarPerfil;