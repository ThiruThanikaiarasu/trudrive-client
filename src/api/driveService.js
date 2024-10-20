import axiosInstance from "../utils/axiosInstance"

const driveService = {

    createChildDirectory: async ( urlId, directoryName ) => {
        const response = await axiosInstance.post(`/folders/${urlId}`, {directoryName})

        return response
    },

    fetchDirectoryById: async ( rootUrlId ) => {
        const response = await axiosInstance.get(`/folders/${rootUrlId}`)

        return response
    },

    uploadFileToDirectory: async (urlId, formData, updateProgress) => {
        const response = await axiosInstance.post(`http://localhost:3500/api/v1/file/upload/${urlId}`, formData, { onUploadProgress: updateProgress })

        return response
    }

}

export default driveService