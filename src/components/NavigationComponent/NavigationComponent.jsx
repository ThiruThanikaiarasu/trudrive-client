import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom'

import SidebarComponent from '../SidebarComponent/SidebarComponent'
import LoginComponent from '../../pages/LoginComponent/LoginComponent'
import SignupComponent from '../../pages/SignupComponent/SignupComponent'
import HomeComponent from '../HomeComponent/HomeComponent'

const NavigationComponent = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    return (
        <Router>
            <div className="flex">
                <SidebarComponent isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                <div
                className={`transition-all duration-300 ${isSidebarOpen ? 'ml-60' : 'ml-28'} w-full`}
                >
                    <Routes>
                        <Route path="/" element={<HomeComponent />} />
                        <Route path="/login" element={<LoginComponent />} />
                        <Route path="/signup" element={<SignupComponent />} />
                    </Routes>
                </div>
                
            </div>
        </Router>
    )
}

export default NavigationComponent