import { X } from 'lucide-react'
import React, { useState } from 'react'
import useModalContext from '../../hooks/useModalContext'

const CreateFolderFormComponent = () => {

    const { closeModal } = useModalContext()

    const [folderName, setFolderName] = useState('');

    const handleInputChange = (e) => {
        setFolderName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the folder creation logic here
        console.log('Folder Created:', folderName);
    };

    return (
        <div className=" p-2 rounded-lg w-96 relative">
            <h2 className="text-lg font-semibold mb-4">Create a folder</h2>
            
            <button 
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
            >
                <X />
            </button>
            
            <form onSubmit={handleSubmit} className="mt-10">
                <div className="my-4">
                    <input 
                        type="text" 
                        className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:border-blue-500 text-sm" 
                        placeholder="Enter your folder name" 
                        value={folderName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex justify-end">
                    <button 
                        type="submit" 
                        className={`text-md px-4 py-2 rounded text-white ${folderName ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'}`}
                        disabled={!folderName}
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateFolderFormComponent