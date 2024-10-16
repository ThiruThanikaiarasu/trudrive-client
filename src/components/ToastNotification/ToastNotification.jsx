import React from 'react'
import { Toaster } from 'react-hot-toast'

const ToastNotification = () => {
    return (
        <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
                // Global options
                success: {
                    duration: 3000,
                    style: {
                        border: '1px solid green',
                    },
                },
                error: {
                    duration: 3000,
                    style: {
                        border: 'red',
                    },
                },
            }}
        />
    )
}

export default ToastNotification