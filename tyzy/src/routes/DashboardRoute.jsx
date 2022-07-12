import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../components/Main'
import Requisitos from '../components/Requisitos'


export default function DashboardRoute() {
  return (
    <>
        <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/requisitos' element={<Requisitos />}/>
        </Routes>
    </>
  )
}
