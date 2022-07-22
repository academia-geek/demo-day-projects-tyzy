import React from 'react';
import { Modal } from 'react-bootstrap';

const DetalleMascotas = ({ si, no, data }) => {
    return (
        <div>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                show={si}
                centered
            >
                <div className='drop-shadow-lg  bg-white rounded-2xl'>
                    <img className='rounded-t-2xl' src={data?.foto} alt='perritos lindos' />

                    <div className='py-3 px-4 '>
                        <div className='flex justify-between '>
                            <p className='font-bold text-titleOrange'>{data?.nombre}</p>
                            <p className='font-semibold tracking-widest text-verdeMasClaro'>VER MÁS</p>
                        </div>
                        <div className='pt-2 text-verdeOsc'>
                            <p>Edad: <span className='pl-2'>2 años</span> </p>
                            <p>Raza:  <span className='pl-2'>Golden Retriver</span> </p>
                        </div>
                    </div>
                </div>
                <span onClick={() => no(false)} className='BTNeditar py-2 px-4 rounded-lg'>
                    Cancelar
                </span>
            </Modal>
        </div>
    )
}

export default DetalleMascotas;