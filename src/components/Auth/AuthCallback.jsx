import { useEffect } from 'react'
import authService from '../../api/authService'
import useUserContext from '../../hooks/useUserContext'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const AuthCallback = () => {

    const { setIsUserLoggedIn, setUserProfile } = useUserContext()

    const navigate = useNavigate()

    useEffect(() => {

        authService.fetchAuthUserData()
            .then((response) => {
                if(response.status == 200) {
                    setIsUserLoggedIn(true)
                    setUserProfile(response.data.data)
                    navigate('/')
                }
            })
            .catch((error) => {
                console.log(error.response.data.message)
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
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default AuthCallback