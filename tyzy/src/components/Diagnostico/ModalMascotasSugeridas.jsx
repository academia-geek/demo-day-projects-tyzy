import React from 'react'
import { Modal } from 'react-bootstrap';

const ModalMascotasSugeridas = ({ si, no, mascotas }) => {
    return (
        <Modal
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            show={si}
            centered
        >
            <div className='px-5'>
                <section className='w-100 mx-auto flex bg-white p-4 rounded-xl gap-4 drop-shadow-lg my-5'>
                    {
                        mascotas?.map((dt) => (
                            <div key={dt?.id} className='BORDERMODAL drop-shadow-lg w-50'>
                                <section>
                                    <img className='rounded-circle drop-shadow-2xl' src={dt?.foto} alt='perritos lindos' />
                                    <h3 className='text-center font-bold fs-5 mt-3 text-green-500'>{dt?.nombre}</h3>
                                </section>
                            </div>
                        ))
                    }

                    <button onClick={() => { no(false) }}>cerrar</button>
                </section>
            </div>
        </Modal>
    )
}

export default ModalMascotasSugeridas;