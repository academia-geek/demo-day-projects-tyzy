import React from 'react';
import { NavLink } from 'react-router-dom';
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
                    <img className='h-64 w-screen' src={data?.foto} alt='perritos lindos' />

                    <div className='py-3 px-4'>
                        <div className='mb-2'>
                            <h2 className='fs-5 font-bold text-titleOrange'>{data?.nombre}</h2>
                            <p className='font-semibold tracking-wides mt-3 mb-2'>{data?.descripcion}</p>
                            <div className='d-flex'>
                                <div className='ms-3'>
                                    <div className='flex'>
                                        <p className='font-bold'>Edad:</p>
                                        <span className='pl-2'>{data?.edad}</span>
                                    </div>
                                    <div className='flex'>
                                        <p className='font-bold'>Raza:</p>
                                        <span className='pl-2'>{data?.raza}</span>
                                    </div>
                                </div>
                                <div className='ms-5'>
                                    <div className='flex'>
                                        <p className='font-bold'>Sexo:</p>
                                        <span className='pl-2'>{data?.sexo}</span>
                                    </div>
                                    <div className='flex'>
                                        <p className='font-bold'>Tipo:</p>
                                        <span className='pl-2'>{data?.tipo}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-2'>
                            <h2 className='font-bold fs-6'>CARACTERÍSTICAS</h2>
                            <div className='mt-2 ms-3'>
                                <div className='flex'>
                                    <p className='font-bold'>Tamaño:  </p>
                                    <span className='pl-2'>{data?.caracteristicas.tamaño}</span>
                                </div>
                                <div className='flex'>
                                    <p className='font-bold'>Peso:</p>
                                    <span className='pl-2'>{data?.caracteristicas.peso}</span>
                                </div>
                                <div className='flex'>
                                    <p className='font-bold'>Especialidad: <span className='pl-2 font-medium'>{data?.caracteristicas.especialidad}</span></p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex p-10 py-4 justify-between border-dashed  border-gray-400 border-t-2'>
                        <span onClick={() => no(false)} className='bg-red-400 text-white cursor-pointer py-2 px-4 rounded-lg'>
                            volver
                        </span>
                        <span className='bg-amber-300 text-white cursor-pointer py-2 px-4 rounded-lg'>
                            <NavLink to='/diagnostico' className='hover:text-white'>Quiero conocerlo</NavLink>
                        </span>
                    </div>

                </div>

            </DetalleMascota>
        </div>
    )
}

export default DetalleMascotas;