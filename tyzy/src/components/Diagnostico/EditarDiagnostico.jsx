import React from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from '../../helpers/UseForm';
import { actionEditarCitaAsync } from '../../redux/actions/DiagnosticoActions';
import { HrDividir, InputRadio } from '../../styles/StylesGlobals';

const EditarDiagnostico = ({ si, no, citaUser }) => {

  const dispatch = useDispatch()
  const [formValue, handleInputChange, reset] = useForm({
    id: citaUser[0]?.id,
    nombreComp: citaUser[0]?.nombreComp,
    fecha: citaUser[0]?.fecha,
    telefono: citaUser[0]?.telefono,
    correo: citaUser[0]?.correo,
    inmputRadio: citaUser[0]?.inmputRadio,
    descripProblema: citaUser[0]?.descripProblema
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(actionEditarCitaAsync(formValue))
    no(false)
  }

  return (
    <Modal
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      show={si}
      centered
    >
      <form onSubmit={handleSubmit} className='px-5'>

        <div className='w-100 mx-auto flex flex-column bg-white p-4 rounded-xl drop-shadow-lg my-5'>
          <section className='flex'>
            <h2 className='mb-3 fs-2 mx-auto font-bold'>Editar cita</h2>
          </section>
          <div className='flex mx-auto'>
            <section className='flex flex-column justify-center'>
              <div className='ms-2 flex mb-3 flex-column'>
                <label htmlFor="nombreComp">Nombre del paciente</label>
                <input name='nombreComp' onChange={handleInputChange} value={formValue?.nombreComp} className='fs-6 border-1 border-gray-600 bg-slate-50 ps-4 py-1 w-96 rounded-xl' />
              </div>
              <div className='ms-2 flex mb-3 flex-column'>
                <label htmlFor="telefono">Número de celular</label>
                <input name='telefono' onChange={handleInputChange} value={formValue?.telefono} className='fs-6 border-1 border-gray-600 bg-slate-50 ps-4 py-1 w-96 rounded-xl' />
              </div>
              <div className='ms-2 flex mb-3 flex-column'>
                <label htmlFor="correo">Correo de contácto</label>
                <input name='correo' onChange={handleInputChange} value={formValue?.correo} className='fs-6 border-1 border-gray-600 bg-slate-50 ps-4 py-1 w-96 rounded-xl' />
              </div>
              <div className='ms-2 flex mb-3 flex-column'>
                <label htmlFor="descripProblema">Problema que presenta</label>
                <textarea name='descripProblema' onChange={handleInputChange} value={formValue?.descripProblema} className='fs-6 bg-slate-50 ps-4 py-1 w-96 rounded-xl' />
              </div>
            </section>

            <HrDividir className='ms-4 mt-4' orientation="vertical" />

            <section className='flex flex-column w-100 ps-4 mt-4'>
              <h3 className='mb-3 fs-4'>Sintoma presentado:</h3>
              {
                citaUser[0]?.inmputRadio == 'insomnio' ? <label className='ms-3 mb-3' htmlFor="insomnio"><InputRadio name='inmputRadio' value='insomnio' className='me-1' defaultChecked type='radio' /> Problemas de insomnio</label> : ''
              }
              {
                citaUser[0]?.inmputRadio == 'inseguridad' ? <label className='ms-3 mb-3' htmlFor="inseguridad"><InputRadio name='inmputRadio' value='inseguridad' className='me-1' defaultChecked type='radio' /> Inseguridad frente a otras personas</label> : ''
              }
              {
                citaUser[0]?.inmputRadio == 'humor' ? <label className='ms-3 mb-3' htmlFor="humor"><InputRadio name='inmputRadio' value='humor' className='me-1' defaultChecked type='radio' /> Cambio de humor repentino</label> : ''
              }
              {
                citaUser[0]?.inmputRadio == 'dCabeza' ? <label className='ms-3 mb-3' htmlFor="dCabeza"><InputRadio name='inmputRadio' value='dCabeza' className='me-1' defaultChecked type='radio' /> Dolor frecuente de cabeza</label> : ''
              }
              {
                citaUser[0]?.inmputRadio == 'dvisual' ? <label className='ms-3 mb-3' htmlFor="dvisual"><InputRadio name='inmputRadio' value='dvisual' className='me-1' defaultChecked type='radio' /> Discapacidad visual</label> : ''
              }
              {
                citaUser[0]?.inmputRadio == 'dfisica' ? <label className='ms-3 mb-3' htmlFor="dfisica"><InputRadio name='inmputRadio' value='dfisica' className='me-1' defaultChecked type='radio' /> discapacidad física</label> : ''
              }

              <div className='ms-2 flex flex-column mb-3'>
                <label htmlFor="" className='fs-4 font-semibold my-auto'>Día de la cita:</label>
                <input name='fecha' onChange={handleInputChange} value={formValue?.fecha} className='fs-6 border-1 border-gray-600 bg-slate-50 text-center py-1 w-40 rounded-xl' />
              </div>

              <div className='mt-auto flex justify-center'>
                <span role='button' onClick={() => { no(false) }} className='cursor-pointer p-2 me-2 py-2 my-auto rounded-lg border-dashed border-2 border-titleOrange text-white bg-titleOrange'>cancelar</span>
                <button type='submit' className='cursor-pointer p-2 py-2 rounded-lg border-dashed my-auto  border-2 border-titleOrange text-white bg-titleOrange'>¡Listo!</button>
              </div>
            </section>
          </div>
        </div>
      </form>
    </Modal>
  )
}

export default EditarDiagnostico;