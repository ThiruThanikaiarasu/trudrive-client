import React from 'react'
import useModalContext from '../../hooks/useModalContext'
import { X } from 'lucide-react'

const ModalComponent = () => {

    const { isModalOpen, closeModal, modalContent } = useModalContext()

    if(!isModalOpen) return null

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded shadow-lg">
                
                {modalContent}
                
            </div>
        </div>
    )
}

export default ModalComponent