import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listaComuniAsync } from '../../redux/actions/ActionAddComuni'

export default function ComunidadList() {

  const dispatch = useDispatch()
  const { comunidad } = useSelector(store => store.comunidades)

  useEffect(() => {
    dispatch(listaComuniAsync())
  }, [dispatch])

  return (
    <div className='py-10 flex'>
      {
        comunidad?.map((p, idx) => (
          <div key={idx} className='w-50 mx-auto h-56 flex flex-column'>
            <img className='h-40 w-75 mx-auto' src={p.imagen} alt={idx} />
            <p className='mx-auto'>{p.descripcion}</p>
            <p className='mx-auto'>{p.direccion}</p>
          </div>
        ))
      }
    </div>
  )
}
