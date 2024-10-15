import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeComponent from '../components/HomeComponent/HomeComponent'
import LoginComponent from '../pages/LoginComponent/LoginComponent'
import SignupComponent from '../pages/SignupComponent/SignupComponent'
import MyFileComponent from '../components/MyFileComponent/MyFileComponent'
import ShareComponent from '../components/ShareComponent/ShareComponent'
import PhotosComponent from '../components/PhotosComponent/PhotosComponent'
import ImageUploader from '../components/ImageUploader'
import RecycleBinComponent from '../components/RecycleBinComponent/RecycleBinComponent'

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignupComponent />} />
        <Route path="/my-file" element={<MyFileComponent />} />
        <Route path="/photos" element={<PhotosComponent />} />
        <Route path="/shared" element={<ShareComponent />} />
        <Route path="/upload" element={<ImageUploader />} />
        <Route path="/recycle-bin" element={<RecycleBinComponent />} />
    </Routes>
)

export default AppRoutes
