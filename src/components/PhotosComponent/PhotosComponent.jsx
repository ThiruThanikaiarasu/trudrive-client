import React, { useEffect } from "react"
import useImageContext from "../../hooks/useImageContext"
import ImageGallery from "./ImageGallery"

const PhotosComponent = () => {
    const { globalImages, totalSelectedCount, groupImagesByDate } = useImageContext()
    const groupedImages = groupImagesByDate(globalImages)

    useEffect( () => {
        console.log(totalSelectedCount)
        console.log(globalImages)
    },[totalSelectedCount])

    return (
        <div>
        <div className="pt-1 pb-1">
            <span>{totalSelectedCount} selected</span>
        </div>
        {Object.entries(groupedImages).map(([date, images]) => (
            <div key={date}>
            <h3 className="text-lg font-semibold">{date}</h3>
            <ImageGallery images={images} />
            </div>
        ))}
        </div>
    )
}

export default PhotosComponent
