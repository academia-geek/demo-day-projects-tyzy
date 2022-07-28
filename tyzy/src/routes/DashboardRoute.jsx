import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import IntroHome from '../containers/IntroHome'
import LandingPageFooter from '../components/LandingPage/LandinPageFooter'
import Perfil from '../components/Perfil/Perfil'
import Requisitos from '../components/Requisitos/Requisitos'
import Diagnostico from '../components/Diagnostico/Diagnostico'
import Home from '../containers/Home'
import OurMasc from '../components/Mascotas/OurMasc'
import Comunidad from '../components/Comunidad/Comunidad'

export default function DashboardRoute() {

  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/intro' element={<IntroHome />} />
        <Route path='/' element={<Requisitos />} />
        <Route path='/diagnostico' element={<Diagnostico />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/NuestrosAnimales' element={<OurMasc />} />
        <Route path='/comunidad' element={<Comunidad />} />

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <LandingPageFooter />
    </>
  )
}
