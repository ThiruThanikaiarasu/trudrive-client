import React, { useState } from 'react'
import scattered_files from '../../../src/assets/img/login-hero-image.jpg'
import axios from 'axios'

function LoginComponent() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')


    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const validate = () => {
        let errors = {}
        if (!email) {
            errors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email address is invalid'
        }
        if (!password) {
            errors.password = 'Password is required'
        }
        return errors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const validationErrors = validate()
        setErrors(validationErrors)

        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true)
            try {
                axios
                    .post(
                        'http://localhost:3500/api/v1/user/login',
                        {
                            email,
                            password
                        },
                        {
                            withCredentials: true,
                        }
                    )
                    .then((response) => {
                        if(response.status == 200) {
                            alert('Logged in successfully')
                            setIsSubmitting(false)
                            location.href = '/'
                        }
                    })
                    .catch((error) => {
                        if(error.response.status == 401) {
                            let errors = {}
                            errors.password = 'Incorrect Password'
                            setErrors(errors)
                        }
                    })
                
            } catch (error) {
                setSubmitMessage('An error occurred. Please try again.')
            } finally {
                setIsSubmitting(false)
            }
        }
    }

    return (
        <div className="flex flex-col lg:flex-row h-screen w-screen justify-center items-center p-4">
            <div className="hidden lg:flex flex-col w-1/2 p-16">
                <h1 className="text-4xl font-bold mb-4">Organize, Store & Share</h1>
                <h3 className="text-2xl font-medium mb-4">your files with TruDrive!</h3>
                <img src={scattered_files} alt="Scattered Files" className="max-w-full h-auto" />
            </div>

            <div className="flex flex-col items-center w-full lg:w-1/2 max-w-md p-8 hover:shadow-xl bg-white rounded-lg shadow-lg mx-auto" style={{ border: "1px solid rgba(0, 0, 0, 0.2)" }}>
                <h1 className="text-4xl font-bold mb-4 lg:hidden">TruDrive</h1>
                <h1 className="text-3xl font-bold mb-6">Login</h1>
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email id"
                            value={email}
                            onChange={handleEmailChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                    </div>
                    <button
                        type="submit"
                        className={`w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Logging in...' : 'Login'}
                    </button>
                    {submitMessage && <span className="text-center block mt-4 text-blue-600">{submitMessage}</span>}
                    <span className="block mt-4 text-center text-sm">
                        Don't have an account? <span className="text-blue-600 underline cursor-pointer">Create one!</span>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default LoginComponent