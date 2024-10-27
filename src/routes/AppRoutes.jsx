import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomeComponent from '../components/HomeComponent/HomeComponent'
import LoginComponent from '../pages/LoginComponent/LoginComponent'
import SignupEmailCaptureStep from '../pages/SignupComponent/SignupEmailCaptureStep'
import MyFileComponent from '../components/MyFileComponent/MyFileComponent'
import ShareComponent from '../components/ShareComponent/ShareComponent'
import PhotosComponent from '../components/PhotosComponent/PhotosComponent'
import ImageUploader from '../components/ImageUploader'
import RecycleBinComponent from '../components/RecycleBinComponent/RecycleBinComponent'
import MainLayout from '../layouts/MainLayout'
import AuthLayout from '../layouts/AuthLayout'
import SignupEmailVerification from '../pages/SignupComponent/SignupEmailVerification'
import SignupEmailProfile from '../pages/SignupComponent/SignupEmailProfile'


const AppRoutes = () => (
    <Router>
        <Routes>  
            <Route element={<MainLayout />} >
                <Route path="/" element={<HomeComponent />} /> 
                <Route path="/my-file" element={<MyFileComponent />} />
                <Route path="/photos" element={<PhotosComponent />} />
                <Route path="/shared" element={<ShareComponent />} />
                <Route path="/upload" element={<ImageUploader />} />
                <Route path="/recycle-bin" element={<RecycleBinComponent />} />
            </Route>

            <Route element={<AuthLayout />}>
                <Route path="/login" element={<LoginComponent />} />
                <Route path="/signup" element={<SignupEmailCaptureStep />} />
                <Route path="/signup/email-verification" element={<SignupEmailVerification />} />
                <Route path="/signup/profile" element={<SignupEmailProfile />} />
            </Route>
        </Routes>
    </Router>
)

export default AppRoutes
