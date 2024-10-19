import axiosInstance from "../utils/axiosInstance"

const driveService = {

    createChildDirectory: async ( urlId, directoryName ) => {
        const response = await axiosInstance.post(`/folders/${urlId}`, {directoryName})

        return response
    }

}

export default driveService