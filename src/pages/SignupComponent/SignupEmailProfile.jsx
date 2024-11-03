import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import scattered_files from '../../../src/assets/img/login-hero-image.jpg'
import google_logo from '../../../src/assets/img/google-logo.svg'

import FormInputComponent from '../../components/FormInputComponent/FormInputComponent'
import authService from '../../api/authService'
import toast from 'react-hot-toast'
import useForm from '../../hooks/useForm'
import Button from '../../elements/Button'
import useUserContext from '../../hooks/useUserContext'

const SignupEmailProfile = () => {

    const { setIsUserLoggedIn, setUserProfile } = useUserContext()

    const [isSubmitting, setIsSubmitting] = useState(false)

    const navigate = useNavigate()

    const email = localStorage.getItem('email')

    const handleEmailChange = () => {

    }
        
    const handleProfileSubmit = () => {
        const data = {
            email,
            firstName: formData.firstName,
            lastName: formData.lastName,
            password: formData.password
        }

        console.log(data)
        authService.signup(data)
            .then((response) => {
                if(response.status == 201) {
                    localStorage.removeItem('email')
                    console.log(response.data)
                    setIsUserLoggedIn(true)
                    setUserProfile(response.data.data)
                    navigate('/')
                }
            })
            .catch((error) => {
                console.log(error.response)
                if (!error.response) {
                    toast.error('No internet connection. Please check your network.');
                } else if(error.response.status == 409) {
                    setErrors({email: "Email Already Exist"})
                    toast.error('Email already Exist, Try to login')
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

    const { formData, errors, handleChange, handleSubmit, setErrors, passwordStrength } = useForm( handleProfileSubmit, 'signup-submit' ) 

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
                    <h1 className="text-2xl font-bold">Complete Profile</h1>
                </header>

                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">

                        <div
                            className="w-full px-3 py-2 text-[#8893a1] border border-gray-400 rounded-md bg-[#e8edeb] flex items-center justify-between hover:cursor-not-allowed"
                        >
                            <p>{email}</p>
                            <span
                                className="text-blue-500 hover:cursor-pointer"
                                onClick={handleEmailChange}
                            >
                                change
                            </span>
                        </div>

                        <FormInputComponent
                            label="Email Address"
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            error={errors.firstName}
                        />

                        <FormInputComponent
                            label="Email Address"
                            type="text"
                            name="lastName"
                            placeholder="LastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            error={errors.lastName}
                        />

                        <FormInputComponent
                            label="Email Address"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            error={errors.password}
                        />

                        <div className="password-strength w-2/3 flex items-center space-x-1 mt-2">
                            <div className={`h-1 w-full rounded ${passwordStrength >= 1 ? 'bg-red-300' : 'bg-gray-300'}`}></div>
                            <div className={`h-1 w-full rounded ${passwordStrength >= 2 ? 'bg-yellow-300' : 'bg-gray-300'}`}></div>
                            <div className={`h-1 w-full rounded ${passwordStrength >= 3 ? 'bg-green-300' : 'bg-gray-300'}`}></div>
                            <p className="pl-2 text-sm font-medium w-full">
                                {passwordStrength === 0 ? 'Too Weak' :
                                passwordStrength === 1 ? 'Weak' :
                                passwordStrength === 2 ? 'Good' :
                                'Strong'}
                            </p>
                        </div>


                        <Button
                            type="submit"
                            className={`w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-blue-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-blue-950/10 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300 transition-colors duration-150 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending email..' : 'Submit'}
                        </Button>
                        
                    </form>
                </div>
            </div>
        </main>
    )
}

export default SignupEmailProfile