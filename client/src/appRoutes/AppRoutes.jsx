import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import AddLauncherPage from '../pages/AddLauncherPage/AddLauncherPage'
import LaunchterDatailsPage from '../pages/LaunchterDatailsPage/LaunchterDatailsPage'

function AppRoutes() {
    return (
        <Routes>
            
            <Route path='/' element={<HomePage />} />
            <Route path='/AddLauncherPage' element={<AddLauncherPage />} />
            <Route path='/LaunchterDatailsPage' element={<LaunchterDatailsPage />} />
        </Routes>
    )
    
}

export default AppRoutes
