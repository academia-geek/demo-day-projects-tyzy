import React, { useEffect, useState } from 'react'
import { Peticiones } from '../../helpers/Peticiones'
import { LandingPageURL } from '../../helpers/UrlsAPI'

export default function LandingPagePreFooter() {

  const [datos, setDatos] = useState([])

  const DataApi = async () => {
    const data = await Peticiones(LandingPageURL)
    setDatos(data[0].beneficiosOfrecidos)
  }
  useEffect(() => {
    DataApi()
  }, [])

  return (
    <div>
      <section className='py-20 d-flex flex-column'>
        <h3 className='font-bold text-xl text-center text-titleColor'>Una aplicación para todos</h3>
        <p className=' font-bold text-sm  text-center text-titleOrange'>ÚNETE Y EMPIEZA AHORA</p>
      </section>
      <section className='d-flex mx-auto gap-3 items-center justify-evenly py-10 w-100'>
      {
          datos?.map((dt)=>(
            <div key={dt?.id} className='flex flex-col items-center'>
              <img className='h-100 IMGBeneficios' src={dt?.imagen} alt={dt?.id} />
              <div className='d-flex flex-column items-center gap-2 pt-3'>
                <div className='border-t-2 w-100 border-red-300'></div> <p className='font-bold text-xl block text-center'>{dt?.descripcion}</p>
              </div>
            </div>
          ))
        }
      </section>
    </div>
  )
}