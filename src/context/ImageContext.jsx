import { createContext, useState } from "react"

import imagesList from "../data/imageData"


const ImageContext = createContext({})

export const ImageProvider = ({ children }) => {
    const [globalImages, setGlobalImages] = useState(imagesList)
    const [totalSelectedCount, setTotalSelectedCount] = useState(0)

    const groupImagesByDate = (images) => {
        const groups = {}
        images.forEach((image) => {
            const date = new Date(image.createdAt)
            const options = { month: "short", day: "numeric", year: "numeric" }
            const formattedDate = date.toLocaleDateString("en-US", options)

            if (!groups[formattedDate]) {
                groups[formattedDate] = []
            }
            groups[formattedDate].push(image)
        })
        return groups
    }

    const updateGlobalImages = (updatedLocalImages) => {
        setGlobalImages((prevGlobalImages) => {
            const updatedGlobalImages = prevGlobalImages.map((image) => {
                const updatedImage = updatedLocalImages.find((img) => img.src === image.src)
                return updatedImage ? { ...image, isSelected: updatedImage.isSelected } : image
            })

            const newTotalSelectedCount = updatedGlobalImages.filter((img) => img.isSelected).length
            setTotalSelectedCount(newTotalSelectedCount)
    
            return updatedGlobalImages
        })
    }

    const clearAllSelections = () => {
        setGlobalImages((prevGlobalImages) => {
            const deselectedImages = prevGlobalImages.map((image) => ({
                ...image,
                isSelected: false
            }))
            setTotalSelectedCount(0)
            return deselectedImages
        })
    }

    const value = {
        globalImages,
        totalSelectedCount,
        groupImagesByDate,
        updateGlobalImages,
        clearAllSelections, // Expose the clear function
    }

    return <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
}

export default ImageContext
