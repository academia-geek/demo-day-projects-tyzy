import React, { useEffect } from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardRoute from './DashboardRoute'
import PrivateRouter from './PrivateRoute'
import PublicRoutes from './PublicRoute'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import NavBarPublic from '../components/NavBarPublic'
import LandingPage from '../components/LandingPage'
import Login from '../components/Login'
import Register from '../components/Register'

export default function AppRoutes() {

    const [verification, setVerification] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false)
            }
            setVerification(false)
        })
    }, [setVerification, setIsLoggedIn])

    if (verification) {
        console.log(verification);
    }

    return (
        <BrowserRouter>

            <Routes>
                {/* Public Routes */}
                <Route path='/landingPage' element={
                    <PublicRoutes isAutenticacition={isLoggedIn}>
                        <NavBarPublic />
                        <LandingPage />
                    </PublicRoutes>
                } />

                {/* Public Routes */}
                <Route path='/login' element={
                    <PublicRoutes isAutenticacition={isLoggedIn}>
                        <NavBarPublic />
                        <Login />
                    </PublicRoutes>
                } />

                {/* Public Routes */}
                <Route path='/register' element={
                    <PublicRoutes isAutenticacition={isLoggedIn}>
                        <NavBarPublic />
                        <Register />
                    </PublicRoutes>
                } />

                {/* Private Routes */}
                <Route path='*' element={
                    <PrivateRouter isAutenticacition={isLoggedIn}>
                        <DashboardRoute />
                    </PrivateRouter>
                } />
            </Routes>
        </BrowserRouter>
    )
}
