import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../components/Main'


export default function DashboardRoute() {
  return (
    <>
        <Routes>
        <Route path='/' element={<Main />}/>
        
        </Routes>
    </>
  )
}
