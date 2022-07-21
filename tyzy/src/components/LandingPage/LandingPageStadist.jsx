import React, { useEffect, useState } from 'react';
import { Peticiones } from '../../helpers/Peticiones';
import { LandingPageURL } from '../../helpers/UrlsAPI';

const LandingPageStadist = () => {

    const [datos, setDatos] = useState([])

    const DataApi = async () => {
        const data = await Peticiones(LandingPageURL)
        setDatos(data[0].sectionEstadistica)
    }
    useEffect(() => {
        DataApi()
    }, [])

    return (
        <div id='comunidad' className='LandingPageStadist d-flex flex-column'>
            <div className='mt-auto mb-5'>
                <h2 className='text-center TitleLandingPageStadist'>Lorem ipsum dolor sit amet</h2>
                <p className='mx-auto text-center P1LandingPageStadist'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <section className='d-flex justify-content-evenly mb-auto'>
                {
                    datos?.map((dt) => (
                        <div key={dt.id}>
                            <h3 className='text-center TitleLandingPageStadist'>{dt?.estadistica}</h3>
                            <p className='text-center mx-auto P2LandingPageStadist'>{dt?.parrafo}</p>
                        </div>
                    ))
                }
            </section>
        </div>
    )
}

export default LandingPageStadist;