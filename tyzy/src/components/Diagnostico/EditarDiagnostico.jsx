import React from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from '../../helpers/UseForm';
import { actionEditarCitaAsync } from '../../redux/actions/DiagnosticoActions';
import { HrDividir, InputRadio } from '../../styles/StylesGlobals';

const EditarDiagnostico = ({ si, no, citaUser }) => {

  const dispatch = useDispatch()
  const [formValue, handleInputChange, reset] = useForm({
    nombreComp: citaUser[0].nombreComp,
    telefono: citaUser[0].telefono,
    correo: citaUser[0].correo,
    insomnio: citaUser[0].insomnio,
    inseguridad: citaUser[0].inseguridad,
    humor: citaUser[0].humor,
    dCabeza: citaUser[0].dCabeza,
    fCariño: citaUser[0].fCariño,
    fComprension: citaUser[0].fComprension,
    descripProblema: citaUser[0].descripProblema
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(actionEditarCitaAsync(formValue))
    no(false)
  }

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      show={si}
      centered
    >
      <form onSubmit={handleSubmit} className='px-5'>

        <div className='w-100 mx-auto flex flex-column bg-white p-4 rounded-xl drop-shadow-lg my-5'>
          <h2 className='mb-3 fs-2 text-center font-bold'>Editar Datos</h2>
          <div className='flex'>
            <section className='flex flex-column justify-center'>
              <div className='ms-2 flex mb-3 flex-column'>
                <label htmlFor="nombreComp">Nombre del paciente</label>
                <input name='nombreComp' onChange={handleInputChange} value={formValue.nombreComp} className='fs-6 border-1 border-gray-600 bg-slate-50 ps-4 py-1 w-96 rounded-xl' />
              </div>
              <div className='ms-2 flex mb-3 flex-column'>
                <label htmlFor="telefono">Número de celular</label>
                <input name='telefono' onChange={handleInputChange} value={formValue.telefono} className='fs-6 border-1 border-gray-600 bg-slate-50 ps-4 py-1 w-96 rounded-xl' />
              </div>
              <div className='ms-2 flex mb-3 flex-column'>
                <label htmlFor="correo">Correo de contácto</label>
                <input name='correo' onChange={handleInputChange} value={formValue.correo} className='fs-6 border-1 border-gray-600 bg-slate-50 ps-4 py-1 w-96 rounded-xl' />
              </div>
              <div className='ms-2 flex mb-3 flex-column'>
                <label htmlFor="descripProblema">Problema que presenta</label>
                <textarea name='descripProblema' onChange={handleInputChange} value={formValue.descripProblema} className='fs-6 bg-slate-50 ps-4 py-1 w-96 rounded-xl' />
              </div>
            </section>

            <HrDividir className='ms-4 mt-52' orientation="vertical" />

            <section className='flex flex-column w-100 ps-4 mt-4'>
              <h3 className='mb-3 fs-4'>Sintomas presentados:</h3>
              {
                citaUser[0]?.insomnio == true ? <label className='ms-3 mb-3' htmlFor="insomnio"><InputRadio name='insomnio' className='me-1' defaultChecked onChange={handleInputChange} type='checkbox' /> Problemas de insomnio</label> : ''
              }
              {
                citaUser[0]?.dCabeza == true ? <label className='ms-3 mb-3' htmlFor="dCabeza"><InputRadio name='dCabeza' onChange={handleInputChange} className='me-1' defaultChecked type='checkbox' /> Dolor frecuente de cabeza</label> : ''
              }
              {
                citaUser[0]?.inseguridad == true ? <label className='ms-3 mb-3' htmlFor="inseguridad"><InputRadio name='inseguridad' onChange={handleInputChange} className='me-1' defaultChecked type='checkbox' /> Inseguridad frente a otras personas</label> : ''
              }
              {
                citaUser[0]?.fCariño == true ? <label className='ms-3 mb-3' htmlFor="fCariño"><InputRadio name='fCariño' onChange={handleInputChange} className='me-1' defaultChecked type='checkbox' /> Falta de cariño</label> : ''
              }
              {
                citaUser[0]?.humor == true ? <label className='ms-3 mb-3' htmlFor="humor"><InputRadio name='humor' onChange={handleInputChange} className='me-1' defaultChecked type='checkbox' /> Cambio de humor repentino</label> : ''
              }
              {
                citaUser[0]?.fComprension == true ? <label className='ms-3 mb-3' htmlFor="fComprension"><InputRadio name='fComprension' onChange={handleInputChange} className='me-1' defaultChecked type='checkbox' /> Falta de de comprensión</label> : ''
              }
              <div className='mt-auto flex justify-center'>
                <span role='button' onClick={() => { no(false) }} className='cursor-pointer p-2 me-2 py-2 my-auto rounded-lg border-dashed border-2 border-titleOrange text-white bg-titleOrange'>Borrar</span>
                <button type='submit' className='cursor-pointer p-2 py-2 rounded-lg border-dashed my-auto  border-2 border-titleOrange text-white bg-titleOrange'>Editar antes de enviar</button>
              </div>
            </section>
          </div>
        </div>
      </form>
    </Modal>
  )
}

export default EditarDiagnostico;