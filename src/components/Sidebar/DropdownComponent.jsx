import { useRef } from "react";
import { useSearchParams } from 'react-router-dom'
import { FileUp, FolderUp, FolderPlus } from 'lucide-react'

import useModalContext from '../../hooks/useModalContext'
import CreateFolderFormComponent from '../Forms/CreateFolderFormComponent'
import FileUploadComponent from '../Upload/FileUploadComponent'
import DropdownItem from './DropdownItems'


const DropdownComponent = ({ setNewDropdownOpen }) => {

    const fileInputRef = useRef()

    const [ currentDirectory ] = useSearchParams()
    const currentUrlId = currentDirectory.get('id')

    const { openModal } = useModalContext()

    const handleNewFolderClick = () => {
        setNewDropdownOpen(false)
        openModal(<CreateFolderFormComponent currentUrlId={currentUrlId}/>)
    }

    const handleNewFileUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }

    const handleNewFolderUpload = () => {

    }

    return (
        <div className="py-1">
            <ul>
                
                <DropdownItem
                    onClick={handleNewFolderClick}
                    icon={<FolderPlus size={20}/>}
                    title="New Folder"
                />

                <DropdownItem
                    onClick={handleNewFileUpload}
                    icon={<FileUp size={20}/>}
                    title="New File"
                >
                    <FileUploadComponent 
                        currentUrlId={currentUrlId}
                        setNewDropdownOpen={setNewDropdownOpen}
                        fileInputRef={fileInputRef}
                    />
                </DropdownItem>

                <DropdownItem
                    onClick={handleNewFolderUpload}
                    icon={<FolderUp size={20}/>}
                    title="Upload Folder"
                />

            </ul>
        </div>
    )
}

export default DropdownComponent
