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
                <h2 className='text-3xl text-titleColor font-bold text-center py-1'>Entrenamos a nuestros animalitos especialmente para ti</h2>
                <p className='px-20 text-center lg:px-72'>De la mano del equipo Tyzy, nos encargaremos de encontrar el compañero ideal para ti!, haciendo tu camino en la vida un poco más feliz!</p>
            </section>
            <section className='py-5 px-10 grid gap-3 grid-cols-[350px_1fr_1fr_1fr]'>
                <div className='flex flex-col justify-center'>
                    <h3 className='text-xl font-bold text-titleColor'>Comunidad Tyzy </h3>
                    <p className='text-sm text-titleOrange'>DESTACADOS</p>

                    <p className='text-sm py-2'>Nuestros animalitos estarán perfectamente entrenados según las necesidades a las que te enfrentas, ya no habrán miedos ni dificultades para superar el día a día</p>
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
