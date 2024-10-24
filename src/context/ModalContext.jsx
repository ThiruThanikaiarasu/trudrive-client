import { createContext, useState } from "react";


const ModalContext = createContext()

const ModalProvider = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState(null)

    const openModal = (content) => {
        setModalContent(content)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setModalContent(null)
    }

    const value = {
        isModalOpen,
        openModal,
        closeModal,
        modalContent,

    }

    return (
        <ModalContext.Provider
            value={value}
        >
            {children}
        </ModalContext.Provider>
    )
}

export { ModalContext, ModalProvider }