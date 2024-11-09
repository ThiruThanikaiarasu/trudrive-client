import axiosInstance from '../utils/axiosInstance'

const authService = {

    login: async ({ email, password }) => {
        const response = await axiosInstance.post('/auth/login', { email, password })

        return response
    },

    signup: async (formData) => {
        const response = await axiosInstance.post('/auth/signup', formData)

        return response
    },

    requestGoogleAuthUrl: async() => {
        const response = await axiosInstance.get('/google-auth/page-request')

        return response
    },

    requestEmailVerification: async ( email ) => {
        const response = await axiosInstance.post('/auth/signup/request-verification', { email })

        return response
    },

    validateOtpCode: async ( email, otp ) => {
        const response = await axiosInstance.post('/auth/signup/otp-verify', { email, otp })

        return response
    },

    fetchAuthUserData: async () => {
        const response = await axiosInstance.get('/google-auth/user-data')

        return response
    }
}

export default authService
