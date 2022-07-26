import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { EditButton, HrDividir, InputRadio } from '../../styles/StylesGlobals';
import EditarDiagnostico from './EditarDiagnostico';

const CitaDiagnostico = memo(({ user }) => {

  const { citaDiagnostico } = useSelector(store => store.citaDiagnosticoStore)
  const [modalShow, setModalShow] = useState(false);
  const [citaUser, setCitaUser] = useState([])

  const filterUser = () => {
    const filtro = citaDiagnostico.filter((usr) => usr.nombreComp === user.nombre)
    if (filtro != []) {
      setCitaUser(filtro)
    }
  }

  useEffect(() => {
    filterUser()
  }, [])

  return (
    <div className='flex flex-column'>
      <EditButton className='ms-3 w-60 mx-auto' type='button' onClick={() => { filterUser() }}>Ver cita agendada</EditButton>
      {
        citaUser[0]?.nombreComp
          ? <div className='w-75 mx-auto flex flex-column bg-white p-4 rounded-xl drop-shadow-lg my-5'>
            <h2 className='mb-3 fs-2 text-center font-bold'>Datos de la cita</h2>
            <div className='flex'>
              <section className='flex flex-column justify-center'>
                <div className='ms-2 flex mb-3 flex-column'>
                  <label htmlFor="">Nombre del paciente</label>
                  <input disabled className='fs-6 border-1 border-gray-600 bg-slate-50 ps-4 py-1 w-96 rounded-xl' placeholder={citaUser[0]?.nombreComp} />
                </div>
                <div className='ms-2 flex mb-3 flex-column'>
                  <label htmlFor="">Número de celular</label>
                  <input disabled className='fs-6 border-1 border-gray-600 bg-slate-50 ps-4 py-1 w-96 rounded-xl' placeholder={citaUser[0]?.telefono} />
                </div>
                <div className='ms-2 flex mb-3 flex-column'>
                  <label htmlFor="">Correo de contácto</label>
                  <input disabled className='fs-6 border-1 border-gray-600 bg-slate-50 ps-4 py-1 w-96 rounded-xl' placeholder={citaUser[0]?.correo} />
                </div>
                <div className='ms-2 flex mb-3 flex-column'>
                  <label htmlFor="">Problema que presenta</label>
                  <textarea disabled className='fs-6 bg-slate-50 ps-4 py-1 w-96 rounded-xl' placeholder={citaUser[0]?.descripProblema} />
                </div>
              </section>

              <HrDividir className='ms-4 mt-2' orientation="vertical" />

              <section className='flex flex-column w-100 ps-4 mt-4'>
                <h3 className='mb-3 fs-4'>Sintomas presentados:</h3>
                {
                  citaUser[0]?.insomnio == true ? <label className='ms-3 mb-3' htmlFor=""><InputRadio className='me-1' checked type='radio' /> Problemas de insomnio</label> : ''
                }
                {
                  citaUser[0]?.dCabeza == true ? <label className='ms-3 mb-3' htmlFor=""><InputRadio className='me-1' checked type='radio' /> Dolor frecuente de cabeza</label> : ''
                }
                {
                  citaUser[0]?.inseguridad == true ? <label className='ms-3 mb-3' htmlFor=""><InputRadio className='me-1' checked type='radio' /> Inseguridad frente a otras personas</label> : ''
                }
                {
                  citaUser[0]?.fCariño == true ? <label className='ms-3 mb-3' htmlFor=""><InputRadio className='me-1' checked type='radio' /> Falta de cariño</label> : ''
                }
                {
                  citaUser[0]?.humor == true ? <label className='ms-3 mb-3' htmlFor=""><InputRadio className='me-1' checked type='radio' /> Cambio de humor repentino</label> : ''
                }
                {
                  citaUser[0]?.fComprension == true ? <label className='ms-3 mb-3' htmlFor=""><InputRadio className='me-1' checked type='radio' /> Falta de de comprensión</label> : ''
                }
                <div className='mt-auto flex justify-center'>
                  <span role='button' className='cursor-pointer p-2 me-2 py-2 rounded-lg border-dashed border-2 border-titleOrange text-white bg-titleOrange'>Borrar</span>
                  <span onClick={() => { setModalShow(true) }} role='button' className='cursor-pointer p-2 py-2 rounded-lg border-dashed border-2 border-titleOrange text-white bg-titleOrange'>Editar antes de enviar</span>
                </div>
              </section>
            </div>
          </div>
          : ''
      }
      {
        modalShow == true ? < EditarDiagnostico si={modalShow} no={setModalShow} citaUser={citaUser} /> : ''
      }
    </div>
  )
})

export default CitaDiagnostico;