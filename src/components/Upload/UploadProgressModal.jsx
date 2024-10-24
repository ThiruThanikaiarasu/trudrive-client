import { CircleCheckBig, Loader, X } from 'lucide-react'
import React, { useEffect, useRef } from 'react'

const UploadProgressModal = ({ isVisible, totalFiles, percentage, onClose, isProgressModalExiting }) => {
    
    return (
        isVisible && (
        <div className="fixed bottom-4 inset-x-0 flex justify-center items-center z-50">
                <div 
                    className={`bg-black text-white p-4 rounded shadow-lg w-full max-w-sm transform transition-all duration-500 ${
                        isProgressModalExiting ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'
                      }`}
                >
                    <div className="flex justify-between items-center">
                            {percentage === 100 ? (
                            <CircleCheckBig
                                className="text-green-500 text-lg mr-2" 
                                size={18}
                            />
                            ) : (
                            <Loader 
                                className="animate-spin text-blue-500 text-lg mr-2" 
                                size={18}
                            />
                            )}

                            <p className='text-sm'>
                                {percentage === 100
                                    ? `Uploaded ${totalFiles} ${totalFiles > 1 ? 'files' : 'file'}`
                                    : `Uploading ${totalFiles} ${totalFiles > 1 ? 'files' : 'file'}`
                                }
                            </p>


                        <button onClick={onClose}>
                            <X 
                                size={18}
                            />
                        </button>
                    </div>

                    {percentage < 100 && (
                        <div className="flex items-center pt-4">
                        <div className="w-full bg-gray-200 rounded-full h-1 mr-2">
                            <div
                            className="bg-blue-600 h-1 rounded-full"
                            style={{ width: `${percentage}%` }}
                            />
                        </div>
                        <p className="text-sm">{`${percentage}%`}</p>
                        </div>
                    )}
                </div>
        </div>
        )
    )
}

export default UploadProgressModal
