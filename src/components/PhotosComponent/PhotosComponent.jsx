import React, { useEffect } from "react"
import useImageContext from "../../hooks/useImageContext"
import ImageGallery from "./ImageGallery"
import { ArrowDownToLine, CopyPlus, Share2, Trash2, X } from "lucide-react"
import Button from "../../elements/Button"

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
                            <div
                                className="w-full h-14 rounded-lg p-1 flex items-center"
                                style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} 
                            >
                                <div>
                                    <ul
                                        className="flex items-center"
                                    >
                                        <li
                                            className="flex items-center mx-1 px-3 py-2 rounded-md hover:bg-[#f0f0f0] hover:text-blue-600 hover:cursor-pointer hover:border-gray-600"
                                        >
                                            <span>
                                                <Share2 
                                                    size={18}
                                                    strokeWidth={1}
                                                />
                                            </span>

                                            <span
                                                className="text-sm pl-2"
                                            >
                                                Share
                                            </span>
                                        </li>
                                        <li
                                            className="flex items-center mx-1 px-3 py-2 rounded-md hover:bg-[#f0f0f0] hover:text-blue-600 hover:cursor-pointer hover:border-gray-600"
                                        >
                                            <span>
                                                <CopyPlus 
                                                    size={18}
                                                    strokeWidth={1}
                                                />
                                            </span>

                                            <span
                                                className="text-sm pl-2"
                                            >
                                                Add to Collection
                                            </span>
                                        </li>
                                        <li
                                            className="flex items-center mx-1 px-3 py-2 rounded-md hover:bg-[#f0f0f0] hover:text-blue-600 hover:cursor-pointer hover:border-gray-600"
                                        >
                                            <span>
                                                <ArrowDownToLine 
                                                    size={18}
                                                    strokeWidth={1}
                                                />
                                            </span>

                                            <span
                                                className="text-sm pl-2"
                                            >
                                                Download
                                            </span>
                                        </li>
                                        <li
                                            className="flex items-center mx-1 px-3 py-2 rounded-md hover:bg-[#f0f0f0] hover:text-blue-600 hover:cursor-pointer hover:border-gray-600"
                                        >
                                            <span>
                                                <Trash2 
                                                    size={18}
                                                    strokeWidth={1}
                                                />
                                            </span>

                                            <span
                                                className="text-sm pl-2"
                                            >
                                                Delete
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="ml-72"
                                >
                                    <Button
                                        className=" flex items-center justify-center text-sm cursor-pointer border border-gray-400 px-3 py-2 rounded-full hover:bg-[#f0f0f0] hover:text-blue-600 hover:border-gray-700"
                                        onClick={clearAllSelections}
                                    >
                                        <span className="mr-1">
                                            <X size={20} strokeWidth={1}/>
                                        </span>
                                        {totalSelectedCount} Selected
                                    </Button>
                                </div>    
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
