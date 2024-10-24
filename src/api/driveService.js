import axiosInstance from "../utils/axiosInstance"

const driveService = {

    createRootDirectory: async ( directoryName ) => {
        const response = await axiosInstance.post('/folders/root', {directoryName})

        return response
    },

    createChildDirectory: async ( urlId, directoryName ) => {
        const response = await axiosInstance.post(`/folders/${urlId}`, {directoryName})

        return response
    },

    fetchRootDirectory: async () => {
        const response = await axiosInstance.get('/folders/root')

        return response
    },

    fetchDirectoryById: async ( rootUrlId ) => {
        const response = await axiosInstance.get(`/folders/${rootUrlId}`)

        return response
    },

    uploadDirectoryToRootDirectory: async (formData, updateProgress) => {
        const response = await axiosInstance.post(`http://localhost:3500/api/v1/file/upload/root}`, formData, { onUploadProgress: updateProgress })

        return response
    },

    uploadFileToSpecificDirectory: async (urlId, formData, updateProgress) => {
        const response = await axiosInstance.post(`http://localhost:3500/api/v1/file/upload/${urlId}`, formData, { onUploadProgress: updateProgress })

        return response
    }

}

export default driveService