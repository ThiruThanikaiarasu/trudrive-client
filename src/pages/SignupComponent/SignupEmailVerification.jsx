import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast'

import useUserContext from '../../hooks/useUserContext'
import authService from '../../api/authService'
import { useNavigate } from 'react-router-dom'

const SignupEmailVerification = () => {

    const navigate = useNavigate()

    const { signupFormData, setSignupFormData } = useUserContext()

    const inputsRef = useRef([])

    const [code, setCode] = useState(new Array(6).fill(""))

    const handleKeyDown = (e, index) => {
        if (!/^[0-9]{1}$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'Tab' && !e.metaKey) {
            e.preventDefault()
        }
        if ((e.key === 'Delete' || e.key === 'Backspace') && index > 0 && !inputsRef.current[index].value) {
            inputsRef.current[index - 1].focus()
        }
    }

    const handleInput = (e, index) => {
        const value = e.target.value
        if (/^[0-9]$/.test(value)) {
            const updatedCode = [...code]
            updatedCode[index] = value
            setCode(updatedCode)

            if (index < inputsRef.current.length - 1) {
                inputsRef.current[index + 1].focus()
            }
        }
    }

    const handleFocus = (e) => {
        e.target.select()
    }

    const handlePaste = (e) => {
        e.preventDefault()
        const text = e.clipboardData.getData('text')
        if (/^[0-9]{6}$/.test(text)) {
            const digits = text.split('')
            setCode(digits)
            digits.forEach((digit, index) => {
                inputsRef.current[index].value = digit
            })
            inputsRef.current[5].focus()
        }
    }

    const handleEmailVerificationSubmit = (event) => {
        event.preventDefault()
        
        authService.validateOtpCode(signupFormData.email, otp)
            .then((response) => {
                if(response.status == 200) {
                    navigate('/signup/profile')
                }
            })
            .catch((error) => {

            })
    }

    const handleEmailOnClickToOpenMail = () => {
        window.location.href = 'mailto:'
    }

    const handleOtpResend = () => {
        authService.requestEmailVerification(signupFormData.email)
            .then((response) => {
                if(response.status == 200) {
                    toast.success('OTP resend successfully')
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
    }

    const handleChangeEmail = () => {
        setSignupFormData((prevData) => ({
            ...prevData, 
            email: ''   
        }))
        navigate('/signup')
    }

    return (
        <div className="relative font-inter antialiased">
            <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
                <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
                    <div className="flex justify-center">
                        <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl border">
                            <header className="mb-8">
                                <h1 className="text-2xl font-bold mb-1">Email Verification</h1>
                                <p className="text-[15px] text-start text-slate-500">
                                    Enter the 6-digit verification code that was sent to {signupFormData && <button 
                                        className="text-blue-500"
                                        onClick={handleEmailOnClickToOpenMail}>{signupFormData.email}</button>}.
                                </p>
                            </header>
                            <form id="otp-form" onSubmit={handleEmailVerificationSubmit}>
                                <div className="flex items-center justify-center gap-3">
                                    {[0, 1, 2, 3, 4, 5].map((_, index) => (
                                        <input
                                            key={index}
                                            ref={(el) => (inputsRef.current[index] = el)}
                                            type="text"
                                            className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                                            maxLength="1"
                                            onKeyDown={(e) => handleKeyDown(e, index)}
                                            onInput={(e) => handleInput(e, index)}
                                            onFocus={handleFocus}
                                            onPaste={handlePaste}
                                        />
                                    ))}
                                </div>
                                <div className="max-w-[260px] mx-auto mt-4">
                                    <button
                                        type="submit"
                                        className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-blue-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-blue-950/10 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300 transition-colors duration-150"
                                    >
                                        Verify Account
                                    </button>
                                </div>
                            </form>
                            <div className="text-sm text-slate-500 mt-4">
                                Didn't receive code?{' '}
                                <button 
                                    className="font-medium text-blue-500 hover:text-blue-600"
                                    onClick={handleOtpResend}
                                >
                                    Resend
                                </button>
                            </div>
                            <div className="text-sm text-slate-500 mt-1">
                                Wrong email?{' '}
                                <button 
                                    className="font-medium text-blue-500 hover:text-blue-600"
                                    onClick={handleChangeEmail}
                                >
                                    Change
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default SignupEmailVerification
