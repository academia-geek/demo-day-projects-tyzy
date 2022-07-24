import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listaComuniAsync } from '../../redux/actions/ActionAddComuni'

export default function ComunidadList() {
    const dispatch = useDispatch()
    const { comunidad } = useSelector(store => store.comunidades)
    console.log(comunidad);
    useEffect(() => {
        dispatch(listaComuniAsync())
    }, [dispatch])
  return (
    <div className='py-10'>ComunidadList
     {comunidad.map((p, idx) => (
            <div key={idx}>
                <img src={p.imagen} alt={p.descripcion} />
                <p>{p.descripcion}</p>
                <p>{p.direccion}</p>
            </div>
        ))}
    <div>
    

    </div>
    
    </div>
  )
}
