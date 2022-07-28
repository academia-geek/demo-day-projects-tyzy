import React, { useEffect, useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdPaw } from 'react-icons/io'
import { TbCameraPlus } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { FileUpload } from '../../helpers/FileUpload'
import { useForm } from '../../helpers/UseForm'
import { addComuniAsync } from '../../redux/actions/ActionAddComuni'
import { BtnDescrition, LabelComunidad, NewDescription, NewPubDiv, NewPubForm, NewPubLabel, NewPubLabel2, NewPubLocation, NewPubTitle } from '../../styles/StylesGlobals'
import NavBarIn from '../../containers/NavBarIn'
import ComunidadList from './ComunidadList'
import Swal from 'sweetalert2'

export default function Comunidad() {

    const dispatch = useDispatch()

    const { user } = useSelector(store => store.user)
    const { DatosUser } = useSelector(store => store.datosUserStore)

    const [stateIMG, setStateIMG] = useState({ STtrue: <div className='pt-3'>tu imagen se subio por favor llena los otros campos para publicar</div>, STfalse: 'Imagen no cargada', estadoImagen: 'false' })
    const [datos, setDatos] = useState({});

    const estado = () => {
        const filtro = DatosUser.filter((usr) => usr.id === user?.uid)
        setDatos(filtro[0])
    }
    
    const [formValue, handleInputChange, reset] = useForm({
        logoUser: user?.photoURL,
        nombre: user?.displayName,
        direccion: '',
        descripcion: '',
        imagen: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        formValue.imagen == '' ? setStateIMG({ ...stateIMG, estadoImagen: 'false' }) : setStateIMG({ ...stateIMG, estadoImagen: 'true' })
        if (formValue.imagen != '' && formValue.direccion != '' && formValue.descripcion != '') {
            dispatch(addComuniAsync(formValue))
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: '¡Momento compartido con éxito!',
                showConfirmButton: false,
                timer: 1000
            })
            setStateIMG({ ...stateIMG, estadoImagen: 'false' })
            reset()
        } else {
            Swal.fire({
                icon: 'error',
                title: 'complete todos los campos',
                showConfirmButton: false,
                timer: 1000
            })
        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        //llamar a la configuracion de Cloudinary
        FileUpload(file)
            .then((resp) => {
                if (resp != undefined) {
                    formValue.imagen = resp
                    setStateIMG({ ...stateIMG, estadoImagen: 'true' })
                } else {
                    setStateIMG({ ...stateIMG, estadoImagen: 'false' })
                }
            })
            .catch((error) => { console.warn(error) });
    }

    useEffect(() => {
        estado()
    }, [])


    return (
        <div>
            <NavBarIn />
            <ComunidadList />
            <NewPubDiv className='h-100'>
                <NewPubTitle><IoMdPaw style={{ 'fontSize': '32px', 'marginRight': '20px' }} />Comparte tu momento Tyzy<IoMdPaw style={{ 'fontSize': '32px', 'marginLeft': '20px' }} /></NewPubTitle>
                <NewPubForm className='w-2/3 ' onSubmit={handleSubmit}>
                    <div>
                        <NewPubLabel className='cursor-pointer' htmlFor='imgup'><TbCameraPlus style={{ 'fontSize': '20px', 'marginRight': '10px' }} />Sube tu imagen aquí!</NewPubLabel>
                        {
                            stateIMG?.estadoImagen != 'false' ? <h4 className='text-green-500 text-center'>{stateIMG.STtrue}</h4> : <h4 className='text-red-500 text-center'>{stateIMG.STfalse}</h4>
                        }
                        <input className='-z-10 overflow-hidden mb-0 opacity-0 w-1 h-1' name='image' onChange={handleFileChange} id='imgup' type='file' placeholder='Cambiar foto de perfil' />
                    </div>
                    <div>
                        <NewPubLabel2>
                            <LabelComunidad htmlFor='address'>Ubicación</LabelComunidad>
                            <NewPubLocation value={formValue.direccion} onChange={handleInputChange} id='address' type='text' name='direccion' />
                        </NewPubLabel2>

                        <NewPubLabel2>
                            <LabelComunidad htmlFor='descripc'>Descripción</LabelComunidad>
                            <NewDescription rows="4" cols="50" value={formValue.descripcion} onChange={handleInputChange} id='descripc' type='text' name='descripcion' />
                        </NewPubLabel2>
                    </div>

                    <BtnDescrition type="submit"><AiOutlineCheck />Publicar</BtnDescrition>

                </NewPubForm>
            </NewPubDiv>
        </div>
    )
}
