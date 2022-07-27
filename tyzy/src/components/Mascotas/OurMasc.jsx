import React, { useEffect, useState } from 'react'
import NavBarIn from '../../containers/NavBarIn'
import { AiOutlineArrowDown } from "react-icons/ai";
import { MascotasURL } from '../../helpers/UrlsAPI';
import { Peticiones } from '../../helpers/Peticiones';
import DetalleMascotas from './DetalleMascotas';

export default function OurMasc() {

  const [datos, setDatos] = useState([])
  const [modalShow, setModalShow] = useState(false);
  const [dataDetail, setDataDetail] = useState([])

  const DataApi = async () => {
    const data = await Peticiones(MascotasURL)
    setDatos(data[0]?.listaMascotas)
  }

  const handleModal = (info) => {
    setDataDetail(info)
    setModalShow(true)
  }

  useEffect(() => {
    DataApi()
  }, [])

  return (
    <div>
      <NavBarIn />
      <section className='dogBanner2 grid grid-cols-2   px-28  bg-cover bg-top bg-no-repeat bg-gray-700 h-96 text-white'>
        <div className='justify-center flex flex-col'>
          <h4 className='text-3xl font-bold'>¿Estás listo para empezar a <br></br>compartir tu vida?</h4>

          <div className='items-center flex flex-col w-min'>
            <p className='pt-2 text-sm '>CONÓCELOS</p>
            <AiOutlineArrowDown />
          </div>
        </div>
      </section>
      <section className='text-center pt-10 px-20'>
        <h3 className='text-3xl font-bold text-titleColor'>Nuestros animales</h3>
        <p className='text-titleColor inline w-3/4'>A continuación te mostramos algunos de nuestros animalitos, da clic en ver más y conoce detalles sobre cada uno que hará tu desición y tu guía en el diagnóstico más fácil.</p>
      </section>

      <div className='px-20 py-16'>
        <section className="grid   grid-cols-3 gap-8">
          {
            datos?.map((dt) => (
              <div key={dt?.id} className='drop-shadow-lg  bg-white rounded-2xl'>
                <img className='rounded-t-2xl w-100 h-80' src={dt?.foto} alt={dt?.id} />

                <div className='py-3 px-4 d-flex'>
                  <div className='w-75'>
                    <div className='flex justify-between '>
                      <p className='font-bold text-titleOrange'>{dt?.nombre}</p>
                    </div>
                    <div className='pt-2 text-verdeOsc'>
                      <p>Edad: <span className='pl-2'>{dt?.edad}</span> </p>
                      <div className='d-flex w-75'>
                        <p>Raza:</p>
                        <span className='pl-2'>{dt?.raza}</span>
                      </div>
                    </div>
                  </div>

                  <p className='font-semibold my-auto tracking-widest cursor-pointer text-verdeMasClaro' onClick={() => { handleModal(dt) }}>VER MÁS</p>
                </div>
              </div>
            ))
          }
          {
            modalShow == true
              ? <DetalleMascotas si={modalShow} no={setModalShow} data={dataDetail} />
              : ''
          }
        </section>
      </div>
    </div>
  )
}