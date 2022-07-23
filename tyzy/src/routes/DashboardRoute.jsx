import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import IntroHome from '../components/IntroHome'
import LandingPageFooter from '../components/LandingPage/LandinPageFooter'
import Perfil from '../components/Perfil'
import Requisitos from '../components/Requisitos'
import Diagnostico from '../components/Diagnostico'
import Home from '../containers/Home'
import OurMasc from '../components/OurMasc'
import Comunidad from '../components/Comunidad/Comunidad'

export default function DashboardRoute() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/intro' element={<IntroHome />} />
        <Route path='/requisitos' element={<Requisitos />} />
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
