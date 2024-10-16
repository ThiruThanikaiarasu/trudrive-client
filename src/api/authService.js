import axios from 'axios'
import axiosInstance from '../utils/axiosInstance'

const authService = {

    login: async ({ email, password }) => {
        const response = await axiosInstance.post('/user/login', { email, password })
        return response
    },
}

export default authService
