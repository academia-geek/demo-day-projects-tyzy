import React from 'react'
import { Navigate } from 'react-router-dom'

export default function PrivateRouter({isAutenticacition, children}) {
  return isAutenticacition ? children : <Navigate to='/landingPage'/>
}
