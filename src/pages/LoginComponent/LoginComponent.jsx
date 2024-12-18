import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import scattered_files from '../../../src/assets/img/login-hero-image.jpg'

import FormInputComponent from '../../components/FormInputComponent/FormInputComponent'
import authService from '../../api/authService'
import useUserContext from '../../hooks/useUserContext'
import toast from 'react-hot-toast'
import useForm from '../../hooks/useForm'
import Button from '../../elements/Button'


function LoginComponent() {

    localStorage.removeItem('email')
    const navigate = useNavigate()

    const { setIsUserLoggedIn, setUserProfile } = useUserContext()

    const [isSubmitting, setIsSubmitting] = useState(false)

    const onSubmit = () => {
            setIsSubmitting(true)
            authService.login(formData)
                .then((response) => {
                    if(response.status == 200) {
                        console.log(response.data)
                        setIsUserLoggedIn(true)
                        setUserProfile(response.data.data)
                        
                        navigate('/')
                        toast.success('Logged In Successfully')
                    }
                })
                .catch((error) => {
                    if (!error.response) {
                        toast.error('No internet connection. Please check your network.');
                    } else if (error.response.status === 400) {
                        toast.error(`Bad Request: ${error.response.data.message}`);
                    } else if (error.response.status === 401) {
                        if (error.response.data.error === 'invalid_password') {
                            setErrors({ password: 'Invalid password' })
                        } else if (error.response.data.error === 'invalid_email') {
                            setErrors({ email: 'Invalid email address' })
                        }
                        toast.error(`${error.response.data.message}`)
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

    const { formData, errors, handleChange, handleSubmit, setErrors } = useForm( onSubmit, 'login' ) 

    return (
        <div className="flex flex-col lg:flex-row h-screen w-screen justify-center items-center p-4">
            
            <div className="hidden lg:flex flex-col w-1/2 p-16">
                <h1 className="text-4xl font-bold mb-4">Organize, Store & Share</h1>
                <h3 className="text-2xl font-medium mb-4">your files with TruDrive!</h3>
                <img src={scattered_files} alt="Scattered Files" className="max-w-full h-auto" />
            </div>

            
            <div className="flex flex-col items-center w-full lg:w-1/2 max-w-md p-8 hover:shadow-xl bg-white rounded-lg mx-auto" style={{ border: "1px solid rgba(0, 0, 0, 0.2)" }}>
                {/* <h1 className="text-4xl font-bold mb-4 lg:hidden">TruDrive</h1> */}
                <h1 className="text-3xl font-bold mb-6">Login</h1>
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                    <FormInputComponent
                        label="Email"
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                    />
                    <FormInputComponent
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        error={errors.password}
                    />
                    <Button
                        type="submit"
                        className={`w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Logging in...' : 'Login'}
                    </Button>
                    <span className="block mt-4 text-center text-sm">
                        Don't have an account? <Link to="/signup"><span className="text-blue-600 underline cursor-pointer">Create one!</span></Link>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default LoginComponent
