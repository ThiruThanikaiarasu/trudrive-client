import { useContext } from "react"

import ImageContext from "../context/ImageContext"


const useImageContext = () => {
    return useContext(ImageContext)
}

export default useImageContext