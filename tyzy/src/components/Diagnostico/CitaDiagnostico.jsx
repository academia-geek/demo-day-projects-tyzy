import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const CitaDiagnostico = memo(({ user, disp }) => {

  const { citaDiagnostico } = useSelector(store => store.citaDiagnosticoStore)
  const [citaUser, setCitaUser] = useState([])

  const filterUser = () => {
      const filtro = citaDiagnostico.filter((usr) => usr.nombreComp === user.nombre)
      console.log(user.nombre);
      console.log(filtro);
  }

  useEffect(() => {
    filterUser()
    console.log(citaDiagnostico);
  }, [disp, user])

  return (
    <div>
      <button onClick={() => { filterUser() }}>hola</button>
      <h2>datos de la cita</h2>
      {/* {
        citaDiagnostico?.map((citaDiagnostico, idx) => (
          <div kei={idx}>
            <h2>{citaDiagnostico?.nombreComp}</h2>
            <h2>{citaDiagnostico?.telefono}</h2>
            <h2>{citaDiagnostico?.correo}</h2>
            <h2>{citaDiagnostico?.descripProblema}</h2>
          </div>
        ))
      } */}


      {/* <span>{cita}</span> */}

    </div>
  )
})

export default CitaDiagnostico;