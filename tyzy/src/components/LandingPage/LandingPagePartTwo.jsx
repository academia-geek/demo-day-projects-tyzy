import React, { useEffect, useState } from 'react';
import { Peticiones } from '../../helpers/Peticiones';
import { LandingPageURL } from '../../helpers/UrlsAPI';

export default function LandingPagePartTwo() {

    const [datos, setDatos] = useState([])
    const DataApi = async () => {
        const data = await Peticiones(LandingPageURL)
        setDatos(data[0].section2)
    }
    useEffect(() => {
        DataApi()
    }, [])

    return (
        <div id='blog' className='pt-5 px-28' >
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
                {
                    datos?.map((dt) => (
                        <div key={dt?.id} className='flex justify-center'>
                            <img className='rounded-lg' src={dt?.img} alt={dt?.id} />
                        </div>
                    ))
                }
            </section>

        </div>
    )
}
