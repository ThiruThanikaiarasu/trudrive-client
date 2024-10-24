import React, { useState } from 'react'
import toast from 'react-hot-toast'

import driveService from '../../api/driveService'
import UploadProgressModal from './UploadProgressModal'


const FileUploadComponent = ({ currentUrlId, setNewDropdownOpen, fileInputRef }) => {

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [totalFiles, setTotalFiles] = useState(0)
    const [percentage, setPercentage] = useState(0)
    const [isProgressModalExiting, setIsProgressModalExiting] = useState(false)
    
    const handleFileChange = (event) => {
        // setNewDropdownOpen(false)
        const files = event.target.files 

        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }

        setTimeout(() => {
            setIsModalVisible(true);
        }, 0);
        setTotalFiles(files.length);

        const updateProgress = (progressEvent) => {
            const { loaded, total } = progressEvent
            const totalPercentage = Math.round((loaded * 100) / total)
            setPercentage(totalPercentage)
        }

        const endpoint = currentUrlId ? driveService.uploadFileToSpecificDirectory(currentUrlId, formData, updateProgress) : driveService.uploadDirectoryToRootDirectory(formData, updateProgress)

        endpoint
            .then((response) => {
                if(response.status == 201) {
                    toast.success('File uploaded successfully')
                    setTimeout(() => {
                        setIsProgressModalExiting(true); 
                        setTimeout(() => {
                          onClose(); 
                          setIsProgressModalExiting(false); 
                        }, 500); 
                    }, 8000);
                }
            }) 
            .catch((error) => {
                if (!error.response) {
                    toast.error('No internet connection. Please check your network.');
                } else if (error.response.status === 400) {
                    toast.error(`Bad Request: ${error.response.data.message}`);
                } else if (error.response.status === 401) {
                    toast.error(`Unauthorized: ${error.response.data.message}`);
                } else if (error.response.status === 500) {
                    toast.error('Server error. Please try again later.');
                } else {
                    toast.error('Something went wrong. Please try again.');
                }
                setIsModalVisible(false)
            })
    }

    return (
        <React.Fragment>
            <input 
                type="file" 
                ref={fileInputRef} 
                style={{ display: 'none' }} 
                onChange={handleFileChange}
                multiple
            />

            <UploadProgressModal 
                isVisible={isModalVisible}
                totalFiles={totalFiles}
                percentage={percentage}
                onClose={() => setIsModalVisible(false)}
                isProgressModalExiting={isProgressModalExiting}
            />
        </React.Fragment>
    )
}

export default FileUploadComponent