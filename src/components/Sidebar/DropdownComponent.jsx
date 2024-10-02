import React from 'react';
import { MdOutlineCreateNewFolder, MdOutlineUploadFile, MdOutlineDriveFolderUpload } from 'react-icons/md';

const DropdownComponent = ({ isSidebarOpen, handleOpenModal }) => {
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
                    <button className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-[#e7e8eb]">
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
    );
};

export default DropdownComponent;
