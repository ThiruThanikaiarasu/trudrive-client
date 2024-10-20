import React, { useRef, useState } from 'react'
import driveService from '../../api/driveService'
import toast from 'react-hot-toast'
import UploadProgressModal from './UploadProgessModal'
import Button from '../../elements/Button'
import { MdOutlineUploadFile } from 'react-icons/md'

const FileUploadComponent = ({ currentUrlId, setNewDropdownOpen }) => {

    const fileInputRef = useRef()

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [totalFiles, setTotalFiles] = useState(0)
    const [percentage, setPercentage] = useState(0)
    const [isProgressModalExiting, setIsProgressModalExiting] = useState(false)

    const handleNewFileUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }
    
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

        driveService.uploadFileToDirectory(currentUrlId, formData, updateProgress)
            .then((response) => {
                if(response.status == 201) {
                    toast.success('File uploaded successfully')
                    setTimeout(() => {
                        setIsProgressModalExiting(true); // Start exit animation
                        setTimeout(() => {
                          onClose(); // Close the modal after animation ends
                          setIsProgressModalExiting(false); // Reset for next time
                        }, 500); // Duration matches the CSS transition time
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
        <div>
            <input 
                type="file" 
                ref={fileInputRef} 
                style={{ display: 'none' }} 
                onChange={handleFileChange}
                multiple
            />
            <Button
                className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-[#e7e8eb]"
                onClick={handleNewFileUpload}
            >
                <span className="text-xl mr-4"><MdOutlineUploadFile /></span>
                <p>New File</p>
            </Button>

            <UploadProgressModal 
                isVisible={isModalVisible}
                totalFiles={totalFiles}
                percentage={percentage}
                onClose={() => setIsModalVisible(false)}
                isProgressModalExiting={isProgressModalExiting}
            />
        </div>
    )
}

export default FileUploadComponent