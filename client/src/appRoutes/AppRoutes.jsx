import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import AddLauncherPage from '../pages/AddLauncherPage/AddLauncherPage'
import LaunchterDatailsPage from '../pages/LaunchterDatailsPage/LaunchterDatailsPage'
import Navbar from '../components/Navbar/Navbar'

function AppRoutes() {
    return (
        <div>
            <Navbar />
            <Routes>

                <Route path='/' element={<HomePage />} />
                <Route path='/AddLauncherPage' element={<AddLauncherPage />} />
                <Route path='/LaunchterDatailsPage/:id' element={<LaunchterDatailsPage />} />
            </Routes>
        </div>
    )

}

export default AppRoutes
