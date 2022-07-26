import React from 'react'

const LandingPageSup = () => {
    return (
        <div className='d-flex LandingPageSup'>
            <section className='d-flex me-2 w-50'>
                <div className='ms-auto my-auto' style={{ width: '85%' }}>
                    <h2 className='H2LandingPageSup mb-3' style={{ 'fontWeight': '600' }}>Queremos hacer parte<span className='SPLandingPageSup' style={{ 'fontWeight': '600' }}> de los retos del día a día</span></h2>
                    <p className='PLandingPageSup'>Te invitamos a hacer parte de Tyzy, no estarás sólo, encontrarás un compañero que te ayudará a pesar de las dificultades, navega en esta pagina, registrate y enterate de los servicios que tenemos para ti!</p>

                    <section className='d-flex mt-5'>
                        <button className='BTNLandingPageSup me-4'>
                            Saber más
                        </button>

                        <button className='BTNLandingPageSup'>
                            Compartir
                        </button>
                    </section>
                </div>
            </section>

            <section className='m-auto' style={{ 'width': '40%' }}>
                <img className='mx-auto IMGLandingPageSup' src="https://res.cloudinary.com/doaijv8m0/image/upload/v1657502146/Demoday/pexels-rodnae-productions-7516468_1_m36xhg.png" alt="logo LandingPageSup" />
            </section>
        </div>
    )
}

export default LandingPageSup;