import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeComponent from '../components/HomeComponent/HomeComponent'
import LoginComponent from '../pages/LoginComponent/LoginComponent'
import SignupComponent from '../pages/SignupComponent/SignupComponent'
import MyFileComponent from '../components/MyFileComponent/MyFileComponent'

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignupComponent />} />
        <Route path="/my-file" element={<MyFileComponent />} />
    </Routes>
)

export default AppRoutes
