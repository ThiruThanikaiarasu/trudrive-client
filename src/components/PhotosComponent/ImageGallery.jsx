import React, { useState, useEffect } from "react"
import { Gallery } from "react-grid-gallery"
import useImageContext from "../../hooks/useImageContext"
import Button from "../../elements/Button"

const ImageGallery = ({ images }) => {
    const { updateGlobalImages, clearAllSelections } = useImageContext()
    const [localImages, setLocalImages] = useState(images)

    useEffect(() => {
        setLocalImages(images) 
    }, [images])

    const handleSelect = (index) => {
        const nextImages = localImages.map((image, i) =>
            i === index ? { ...image, isSelected: !image.isSelected } : image
        )
        setLocalImages(nextImages)
        updateGlobalImages(nextImages) 
    }

    const handleSelectAllClick = () => {
        const isAnySelected = localImages.some((image) => image.isSelected)
        const nextImages = localImages.map((image) => ({
            ...image,
            isSelected: !isAnySelected ? true : image.isSelected ? false : image.isSelected,
        }))
        setLocalImages(nextImages)
        updateGlobalImages(nextImages)
    }

    const getImageStyle = (isSelected) => ({
        border: isSelected ? "4px solid rgba(0, 0, 0, 0.8)" : "2px solid rgba(0, 0, 0, 0.1)",
        filter: isSelected ? "brightness(70%)" : "none",
        transition: "0.3s ease",
        margin: "20px"
    })

    return (
        <div>
            <div className="pt-1 pb-1">
                <Button onClick={handleSelectAllClick}>
                    {localImages.some((image) => image.isSelected)
                        ? `${localImages.filter((img) => img.isSelected).length} selected`
                        : "Select all"}
                </Button>
            </div>
            <Gallery
                images={localImages.map((image) => ({
                    ...image,
                    thumbnailStyle: getImageStyle(image.isSelected),
                }))}
                onSelect={handleSelect}
            />
        </div>
    )
}

export default ImageGallery
