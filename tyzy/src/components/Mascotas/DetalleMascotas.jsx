import React from 'react';
import { DetalleMascota } from '../../styles/StylesGlobals';

const DetalleMascotas = ({ si, no, data }) => {
    return (
        <div>
            <DetalleMascota
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                show={si}
                centered
            >
                
                <div className='BORDERMODAL drop-shadow-lg'>
                    <img className='h-64 w-screen object-cover' src={data?.foto} alt='perritos lindos' />

                    <div className='py-3 px-4 Ndescrip'>
                        <div className='mb-2'>
                            <h2 className='fs-5 font-bold text-titleOrange'>{data?.nombre}</h2>
                            <p className='tracking-wides mt-3 mb-2'>{data?.descripcion}</p>
                            <div className='d-flex'>
                                <div className='ms-3'>
                                    <div className='flex'>
                                        <p className='font-bold mb-2'>Edad:</p>
                                        <span className='pl-2'>{data?.edad}</span>
                                    </div>
                                    <div className='flex'>
                                        <p className='font-bold mb-0'>Raza:</p>
                                        <span className='pl-2'>{data?.raza}</span>
                                    </div>
                                </div>
                                <div className='ms-5'>
                                    <div className='flex'>
                                        <p className='font-bold  mb-2'>Sexo:</p>
                                        <span className='pl-2'>{data?.sexo}</span>
                                    </div>
                                    <div className='flex'>
                                        <p className='font-bold mb-0'>Tipo:</p>
                                        <span className='pl-2'>{data?.tipo}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-2'>
                            <h2 className='font-bold fs-6'>CARACTERÍSTICAS</h2>
                            <div className='mt-2 ms-3'>
                                <div className='flex'>
                                    <p className='font-bold mb-1'>Tamaño:  </p>
                                    <span className='pl-2'>{data?.caracteristicas.tamaño}</span>
                                </div>
                                <div className='flex'>
                                    <p className='font-bold mb-1'>Peso:</p>
                                    <span className='pl-2'>{data?.caracteristicas.peso}</span>
                                </div>
                                <div className='flex'>
                                    <p className='font-bold'>Especialidad: <span className='pl-2 font-normal'>{data?.caracteristicas.especialidad}</span></p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex pt-2  justify-center border-dashed  border-gray-400 border-t-2'>
                        <span onClick={() => no(false)} className='mt-1 font-semibold text-gray-300 cursor-pointer hover:text-red-400 px-3 rounded-lg'>
                            volver
                        </span>
                    </div>

                </div>

            </DetalleMascota>
        </div>
    )
}

export default DetalleMascotas;