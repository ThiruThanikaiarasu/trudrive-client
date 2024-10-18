import axios from 'axios'
import React, { useRef, useState } from 'react'
import { MdOutlineCreateNewFolder, MdOutlineUploadFile, MdOutlineDriveFolderUpload } from 'react-icons/md'

const DropdownComponent = ({ isSidebarOpen, handleOpenModal }) => {

    const fileInputRef = useRef()

    const [uploadedFiles, setUploadedFiles] = useState()

    const handleNewFileUpload = () => {
        // console.log(first)
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0] 
        let extendedFileData
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader()

            reader.onload = (e) => {
                const img = new Image()
                img.src = e.target.result

                img.onload = () => {
                    // Create a new object containing file details and image dimensions
                    extendedFileData = {
                        name: file.name,
                        size: file.size,
                        type: file.type,
                        lastModified: file.lastModified,
                        lastModifiedDate: file.lastModifiedDate,
                        webkitRelativePath: file.webkitRelativePath,
                        width: img.width,  
                        height: img.height,
                    }

                    setUploadedFiles(extendedFileData) // Save it to state
                    console.log(extendedFileData) // Log the new file object with width and height
                }
            }

            reader.readAsDataURL(file) // Read the file as a Data URL
        }
        const formData = new FormData()
        formData.append("image", file)
        console.log(formData) 
        axios.post('http://localhost:3500/api/v1/file/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Explicitly setting it just in case
            }
        })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="py-1">
            <ul>
                <li>
                    <button className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-[#e7e8eb]" onClick={handleOpenModal}>
                        <span className="text-xl mr-4"><MdOutlineCreateNewFolder /></span>
                        <p>New Folder</p>
                    </button>
                </li>
                <li>
                    <input 
                        type="file" 
                        ref={fileInputRef} 
                        style={{ display: 'none' }} 
                        onChange={handleFileChange}
                    />
                    <button 
                        className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-[#e7e8eb]"
                        onClick={handleNewFileUpload}
                    >
                        <span className="text-xl mr-4"><MdOutlineUploadFile /></span>
                        <p>New File</p>
                    </button>
                </li>
                <li>
                    <button className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-[#e7e8eb]">
                        <span className="text-xl mr-4"><MdOutlineDriveFolderUpload /></span>
                        <p>Upload Folder</p>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default DropdownComponent
