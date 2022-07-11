import React from 'react'

export default function LandingPagePartTwo() {
  return (
    <div className='pt-5 px-28' >
        <section>
            <h2 className='text-3xl text-titleColor font-bold text-center py-1'>Lorem ipsum dolor sit</h2>
            <p className='px-20 text-center lg:px-72'>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
        </section>
        <section className='py-5 px-10 grid gap-3 grid-cols-[350px_1fr_1fr_1fr]'>
            <div className='flex flex-col justify-center'>
                <h3 className='text-xl font-bold text-titleColor'>Lorem sit amet </h3>
                <p className='text-sm text-titleOrange'>LOREM IPSUM</p>
                
                <p className='text-sm py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='flex justify-center'>
                <img className='rounded-lg'  src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657548600/Tyzy/Image_bbpf6j.png' alt='perr1'/>
            </div>
            <div className='flex justify-center'>
                <img className='rounded-lg'  src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657548600/Tyzy/Image-1_suibyx.png' alt='perr2'/>
            </div>
            <div className='flex justify-center'>
                <img className='rounded-lg'  src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657548600/Tyzy/Image-2_svuu7t.png' alt='perr3'/>
            </div>
        </section>
        
    </div>
  )
}
