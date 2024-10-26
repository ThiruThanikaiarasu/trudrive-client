import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import scattered_files from '../../../src/assets/img/login-hero-image.jpg'
import google_logo from '../../../src/assets/img/google-logo.svg'

import FormInputComponent from '../../components/FormInputComponent/FormInputComponent'
import authService from '../../api/authService'
import toast from 'react-hot-toast'
import useForm from '../../hooks/useForm'
import Button from '../../elements/Button'


function SignupComponent() {

    const [isSubmitting, setIsSubmitting] = useState(false)

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
        authService.requestEmailVerification(formData.email)
            .then((response) => {

            })
            .catch((error) => {

            })
    }

    const { formData, errors, handleChange, handleSubmit, setErrors } = useForm( { firstName: '' }, handleEmailSubmit, 'signup-email' ) 


    return (
        <div className="flex flex-col lg:flex-row h-screen w-screen justify-center items-center p-4">
            
            <div className="hidden lg:flex flex-col w-1/2 p-16">
                <h1 className="text-4xl font-bold mb-4">Organize, Store & Share</h1>
                <h3 className="text-2xl font-medium mb-4">your files with TruDrive!</h3>
                <img src={scattered_files} alt="Scattered Files" className="max-w-full h-auto" />
            </div>

            
            <div className="flex flex-col gap-6 items-center w-full lg:w-1/2 max-w-md p-8 bg-white rounded-lg mx-auto" style={{ border: "1px solid rgba(0, 0, 0, 0.2)" }}>

            <header className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold mb-4 lg:hidden">TruDrive</h1>
                <h1 className="text-3xl font-bold">Create Account</h1>
                <span className="block text-center text-base font-light">
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

                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">

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
                        className={`w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Continue...' : 'Continue'}
                    </Button>
                    
                </form>
            </div>
        </div>
    )
}

export default SignupComponent
