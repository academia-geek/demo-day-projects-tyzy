import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import IntroHome from '../components/IntroHome'
import Perfil from '../components/Perfil'
import Requisitos from '../components/Requisitos'
import Home from '../containers/Home'

export default function DashboardRoute() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/intro' element={<IntroHome />} />
        <Route path='/requisitos' element={<Requisitos />} />
        <Route path='/perfil' element={<Perfil />} />

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}
