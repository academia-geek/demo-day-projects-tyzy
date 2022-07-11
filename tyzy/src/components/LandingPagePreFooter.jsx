import React from 'react'

export default function LandingPagePreFooter() {
  return (
    <div>
    <section className='py-10'>
        <h3 className='font-bold text-xl text-center text-titleColor'>Nuestros objetivos</h3>
        <p className=' font-bold text-sm  text-center text-titleOrange'>LOREM IPSUM</p>
    </section>
    <section className='flex justify-center gap-5 py-20 '>
        <div className='flex flex-col items-center'>
            <img src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657548631/Tyzy/Images_ktxpb8.png' alt='personas felices'  />
            <div className='flex flex-row items-center gap-2 px-4 pt-2'>
           <div className='border-t-2 w-7 border-red-300'></div> <p className='font-bold text-2xl block'>Personas más felices y tranquilas</p>
           </div>
        </div>
        <div  className='flex flex-col items-center'>
            <img src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657548631/Tyzy/Images-1_doemkk.png' alt='personas felices'  />
            <div className='flex flex-row items-center gap-2  px-4   pt-2'>
           <div className='border-t-2 w-7 border-red-300'></div> <p className='font-bold text-2xl block'>Tenencia y manutención tranquila</p>
           </div>
        </div>
        <div className='flex flex-col items-center'>
            <img src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657548631/Tyzy/Images-2_eokshd.png' alt='personas felices'  />
           <div className='flex flex-row items-center gap-2  px-4  pt-2'>
           <div className='border-t-2 w-7 border-red-300'></div> <p className='font-bold text-2xl block'>Confianza sin importar la edad</p>
           </div>
        </div>
    </section>
    </div>
  )
}
