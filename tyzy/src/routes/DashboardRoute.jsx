import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Requisitos from '../components/Requisitos'
import Home from '../containers/Home'


export default function DashboardRoute() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/requisitos' element={<Requisitos />} />

        <Route path='*' element={<Navigate to='/'/>} />
      </Routes>
    </>
  )
}
