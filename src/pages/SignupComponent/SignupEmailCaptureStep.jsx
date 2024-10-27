import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import scattered_files from '../../../src/assets/img/login-hero-image.jpg'
import google_logo from '../../../src/assets/img/google-logo.svg'

import FormInputComponent from '../../components/FormInputComponent/FormInputComponent'
import authService from '../../api/authService'
import toast from 'react-hot-toast'
import useForm from '../../hooks/useForm'
import Button from '../../elements/Button'


function SignupComponent() {

    const [isSubmitting, setIsSubmitting] = useState(false)

    const navigate = useNavigate()

    const handleGoogleSignInAuth = async () => {
        console.log("clicked")
        authService.requestGoogleAuthUrl()
            .then((response) => {
                console.log(response.data.data)
                if(response.status == 200) {
                    window.location.href = response.data.data
                }
            })
            .catch((error) => {
                console.log(error.response.status)
                if (!error.response) {
                    toast.error('No internet connection. Please check your network.');
                } else if (error.response.status === 500) {
                    toast.error('Server error. Please try again later.');
                } else {
                    toast.error('Something went wrong. Please try again.');
                }
            })
        }
        
    const handleEmailSubmit = () => {
        setIsSubmitting(true)
        authService.requestEmailVerification(formData.email)
            .then((response) => {
                if(response.status == 200) {
                    navigate('/signup/email-verification')
                }
            })
            .catch((error) => {
                console.log(error.response)
                if (!error.response) {
                    toast.error('No internet connection. Please check your network.');
                } else if(error.response.status == 409) {
                    setErrors({email: "Email Already Exist"})
                    toast.error('Email already Exist, Try to login')
                } else if(error.response.status === 429) {
                    setErrors({email: "To many attempts"})
                    toast.error("You've reached the maximum number of attempts. Please try again later.")
                } else if (error.response.status === 500) {
                    toast.error('Server error. Please try again later.');
                } else {
                    toast.error('Something went wrong. Please try again.');
                }
            })
            .finally(() => {
                setIsSubmitting(false)
            })
    }

    const { formData, errors, handleChange, handleSubmit, setErrors } = useForm( handleEmailSubmit, 'signup-email' ) 


    return (
        <main className="flex flex-col min-h-screen justify-center items-center bg-slate-50 p-4">
            <div className="flex flex-col lg:flex-row h-full w-screen justify-center items-center p-4">
                
                <div className="hidden lg:flex flex-col w-1/2 p-16">
                    <h1 className="text-4xl font-bold mb-4">Organize, Store & Share</h1>
                    <h3 className="text-2xl font-medium mb-4">your files with TruDrive!</h3>
                    <img src={scattered_files} alt="Scattered Files" className="max-w-full h-auto" />
                </div>

                
                <div 
                    className="flex flex-col gap-5 items-center w-full lg:w-1/2 max-w-md p-8 bg-white rounded-xl border mx-auto" 
                >

                <header className="flex flex-col">
                    <h1 className="text-2xl font-bold">Create Account</h1>
                    <span className="text-center text-[15px] text-slate-500">
                            Have an account? <Link to="/login"><span className="text-blue-600 cursor-pointer">Log in</span></Link>
                    </span>
                </header>

                    <Button
                        className="flex justify-center items-center border px-4 py-2 w-full gap-3"
                        onClick={handleGoogleSignInAuth}
                    >
                        <img 
                            src={google_logo} 
                            alt="" 
                            className="h-8 w-8"    
                        />
                        Goggle
                    </Button>

                    <div className="flex items-center w-full">
                        <div className="flex-grow border-t border-gray-400"></div>
                        <span className="px-2 text-gray-500 text-sm">or</span>
                        <div className="flex-grow border-t border-gray-400"></div>
                    </div>

                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">

                        <FormInputComponent
                            label="Email Address"
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email}
                        />

                        <Button
                            type="submit"
                            className={`w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-blue-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-blue-950/10 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300 transition-colors duration-150 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending email..' : 'Continue'}
                        </Button>
                        
                    </form>
                </div>
            </div>
        </main>
    )
}

export default SignupComponent
