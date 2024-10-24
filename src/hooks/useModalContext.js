import { useContext } from "react"

import { ModalContext } from "../context/ModalContext"


const useModalContext = () => {
    return useContext(ModalContext)
}

export default useModalContext