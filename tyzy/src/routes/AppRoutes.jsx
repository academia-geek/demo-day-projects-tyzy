import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import DashboardRoute from './DashboardRoute'
import PrivateRouter from './PrivateRoute'
import PublicRoutes from './PublicRoute'
import Login from '../components/Login'

export default function AppRoutes() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

return (
    <BrowserRouter>
        <Routes>
            {/* Public Routes */}
            <Route path='/login' element={
                <PublicRoutes isAutenticacition={isLoggedIn}>
                <Login/>
                </PublicRoutes>
            }/>



             {/* Private Routes */}
            <Route path='*' element={
            <PrivateRouter isAutenticacition={isLoggedIn}>
                    <DashboardRoute/>
            </PrivateRouter>}/>

        </Routes>
    </BrowserRouter>
  )
}
