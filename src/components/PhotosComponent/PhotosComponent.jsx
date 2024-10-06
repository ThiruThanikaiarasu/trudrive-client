import React, { useEffect } from "react"
import useImageContext from "../../hooks/useImageContext"
import ImageGallery from "./ImageGallery"
import { ArrowDownToLine, CopyPlus, Share2, X } from "lucide-react"

const PhotosComponent = () => {
    const { globalImages, totalSelectedCount, groupImagesByDate, clearAllSelections } = useImageContext()
    const groupedImages = groupImagesByDate(globalImages)

    useEffect( () => {
        console.log(totalSelectedCount)
        console.log(globalImages)
    },[totalSelectedCount])

    return (
        <div className="p-4">
            <div 
                className="h-14 pt-1 pb-1 flex items-center"  
            >
                {
                    totalSelectedCount <= 0 
                        ? 
                            <span
                                className="text-2xl font-semibold"
                            >
                                Gallery
                            </span>
                        :
                            <div>
                                {totalSelectedCount} selected
                            </div>
                }
                
            </div>
            <div className="my-4">
                <span
                    className="text-xl font-semibold"
                >
                    All Photos
                </span>
            </div>
            {Object.entries(groupedImages).map(([date, images]) => (
                <div key={date}>
                <h3 className="text-lg font-semibold mt-4">{date}</h3>
                <ImageGallery images={images} />
                </div>
            ))}
        </div>
    )
}

export default PhotosComponent
