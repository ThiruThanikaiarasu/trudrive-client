import React from 'react'
import { MdOutlineCreateNewFolder, MdOutlineDriveFolderUpload } from 'react-icons/md'
import useModalContext from '../../hooks/useModalContext'
import CreateFolderFormComponent from './CreateFolderFormComponent'
import Button from '../../elements/Button'
import { useSearchParams } from 'react-router-dom'
import FileUploadComponent from './FileUploadComponent'

const DropdownComponent = ({ setNewDropdownOpen }) => {

    const [ currentDirectory ] = useSearchParams()
    const currentUrlId = currentDirectory.get('id')

    const { openModal } = useModalContext()

    const handleNewFolderClick = () => {
        setNewDropdownOpen(false)
        openModal(<CreateFolderFormComponent currentUrlId={currentUrlId}/>)
    }

    return (
        <div className="py-1">
            <ul>
                <li>
                    <Button className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-[#e7e8eb]" onClick={handleNewFolderClick}>
                        <span className="text-xl mr-4"><MdOutlineCreateNewFolder /></span>
                        <p>New Folder</p>
                    </Button>
                </li>
                <li>
                    <FileUploadComponent currentUrlId={currentUrlId} setNewDropdownOpen={setNewDropdownOpen}/>
                </li>
                <li>
                    <Button className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-[#e7e8eb]">
                        <span className="text-xl mr-4"><MdOutlineDriveFolderUpload /></span>
                        <p>Upload Folder</p>
                    </Button>
                </li>
            </ul>
        </div>
    )
}

export default DropdownComponent
