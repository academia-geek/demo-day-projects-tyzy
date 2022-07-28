import React from 'react'
import { Modal } from 'react-bootstrap'
import { CerrarSeleccionados, ImgSeleccionados, ModalCover, ModalSelecciondado, NameSeleccionado, Seleccionados, TitleSeleccionado } from '../../styles/StylesGlobals';
import {FaPaw}from 'react-icons/fa'

const ModalMascotasSugeridas = ({ si, no, mascotas }) => {
    return (
        <ModalSelecciondado
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            show={si}
            centered
        >

<Modal.Header>
          <TitleSeleccionado><FaPaw/>Las mascotas seleccionadas para ti son<FaPaw/></TitleSeleccionado>
        </Modal.Header>
            <div className='px-5' style={{'backgroundColor':'#00000000'}}>
                <section>
                    <Seleccionados className='flex justify-center'>
                    {
                        mascotas?.map((dt) => (
                            <div key={dt?.id}>
                                <section>
                                    <ImgSeleccionados src={dt?.foto} alt='perritos lindos' />
                                    <NameSeleccionado>{dt?.nombre}</NameSeleccionado>
                                </section>
                            </div>
                        ))
                    }
                    </Seleccionados>
                    <div>
                    <CerrarSeleccionados onClick={() => { no(false) }}>cerrar</CerrarSeleccionados>
                    </div>
                </section>
            </div>
        </ModalSelecciondado>
    )
}

export default ModalMascotasSugeridas;