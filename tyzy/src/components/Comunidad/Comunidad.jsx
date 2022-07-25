
import React, { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdPaw } from 'react-icons/io'
import { TbCameraPlus } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { FileUpload } from '../../helpers/FileUpload'
import { useForm } from '../../helpers/UseForm'
import { addComuniAsync } from '../../redux/actions/ActionAddComuni'
import { BtnDescrition, LabelComunidad, NewDescription, NewPubDiv, NewPubForm, NewPubLabel, NewPubLabel2, NewPubLocation, NewPubTitle } from '../../styles/StylesGlobals'
import NavBarIn from '../NavBarIn'
import ComunidadList from './ComunidadList'

export default function Comunidad() {

    const [activo, setActivo] = useState(true)

    const dispatch = useDispatch()

    const [formValue, handleInputChange, reset] = useForm({
        direccion: '',
        descripcion: '',
        imagen: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValue)
        dispatch(addComuniAsync(formValue))
        reset()
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        //llamar a la configuracion de Cloudinary
        FileUpload(file)
            .then((resp) => {
                formValue.imagen = resp
            })
            .catch((error) => { console.warn(error) });
    }

    return (
        <div>
            <NavBarIn />
            <ComunidadList />
            <NewPubDiv>
                <NewPubTitle><IoMdPaw style={{'fontSize':'32px', 'marginRight':'20px'}}/>Comparte tu momento Tyzy<IoMdPaw style={{'fontSize':'32px', 'marginLeft':'20px'}}/></NewPubTitle>
            <NewPubForm className='w-2/3 ' onSubmit={handleSubmit}>
                <div>
                    <NewPubLabel className='cursor-pointer' htmlFor='imgup'><TbCameraPlus style={{'fontSize':'20px', 'marginRight':'10px'}}/>Sube tu imagen aquí!</NewPubLabel>
                    <input className='-z-10 overflow-hidden opacity-0 w-1 h-1' name='image' onChange={handleFileChange} id='imgup' type='file' placeholder='Cambiar foto de perfil' />
                </div>
                <div>
                    <NewPubLabel2>
                    <LabelComunidad htmlFor='address'>Ubicación</LabelComunidad>
                    <NewPubLocation onChange={handleInputChange} id='address' type='text' name='direccion' />
                    </NewPubLabel2>

                    <NewPubLabel2>
                    <LabelComunidad htmlFor='descrpc'>Descripción</LabelComunidad>
                    <NewDescription rows="4" cols="50" onChange={handleInputChange} id='descripc' type='text' name='descripcion' />
                    </NewPubLabel2>
                </div>
                
                <BtnDescrition type="submit"><AiOutlineCheck/>Publicar</BtnDescrition>

            </NewPubForm>
            </NewPubDiv>
        </div>
    )
}
