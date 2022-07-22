import React from 'react'
import NavBarIn from './NavBarIn'
import { AiOutlineArrowDown } from "react-icons/ai";


export default function OurMasc() {
  return (
    <div>
    <NavBarIn/>
    <section className='dogBanner2 grid grid-cols-2   px-28  bg-cover bg-top bg-no-repeat bg-gray-700 h-96 text-white'>
          <div className='justify-center flex flex-col'>
          <h4 className='text-3xl  font-bold'>¿Estás listo para empezar  a <br></br> compartir tu vida?</h4>

            <div className='items-center flex flex-col w-min'>
            <p className='pt-2 text-sm '>CONÓCELOS</p>
            <AiOutlineArrowDown  />
            </div>
          </div>
    </section>
    <section className='text-center pt-10 px-20'>
       <h3 className='text-3xl font-bold text-titleColor'>Nuestros animales</h3>
       <p className='text-titleColor inline w-3/4'>A continuación te mostramos algunos de nuestros animalitos, da clic en ver más y conoce detalles sobre cada uno que hará tu desición y tu guía en el diagnóstico más fácil.</p>
    </section>

    <div className='px-20 py-16'>
    <section className="grid   grid-cols-3 gap-8">

    <div className='drop-shadow-lg  bg-white rounded-2xl'>
      <img className='rounded-t-2xl' src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657748565/Tyzy/Perros_gu%C3%ADa_hzcn0s.jpg' alt='perritos lindos' />
      
      <div className='py-3 px-4 '>
        <div className='flex justify-between '>
          <p className='font-bold text-titleOrange'>MAX</p>
          <p className='font-semibold tracking-widest text-verdeMasClaro'>VER MÁS</p>
        </div>
        <div className='pt-2 text-verdeOsc'>
          <p>Edad: <span className='pl-2'>2 años</span> </p>
          <p>Raza:  <span className='pl-2'>Golden Retriver</span> </p>
        </div>
      </div>
    </div>

    <div className='drop-shadow-lg  bg-white rounded-2xl'>
      <img className='rounded-t-2xl' src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657748565/Tyzy/Perros_gu%C3%ADa_hzcn0s.jpg' alt='perritos lindos' />
      
      <div className='py-3 px-4 '>
        <div className='flex justify-between '>
          <p className='font-bold text-titleOrange'>MAX</p>
          <p className='font-semibold tracking-widest text-verdeMasClaro'>VER MÁS</p>
        </div>
        <div className='pt-2 text-verdeOsc'>
          <p>Edad: <span className='pl-2'>2 años</span> </p>
          <p>Raza:  <span className='pl-2'>Golden Retriver</span> </p>
        </div>
      </div>
    </div>

    <div className='drop-shadow-lg  bg-white rounded-2xl'>
      <img className='rounded-t-2xl' src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657748565/Tyzy/Perros_gu%C3%ADa_hzcn0s.jpg' alt='perritos lindos' />
      
      <div className='py-3 px-4 '>
        <div className='flex justify-between '>
          <p className='font-bold text-titleOrange'>MAX</p>
          <p className='font-semibold tracking-widest text-verdeMasClaro'>VER MÁS</p>
        </div>
        <div className='pt-2 text-verdeOsc'>
          <p>Edad: <span className='pl-2'>2 años</span> </p>
          <p>Raza:  <span className='pl-2'>Golden Retriver</span> </p>
        </div>
      </div>
    </div>


    

    </section>
    </div>
    </div>
  )
}
