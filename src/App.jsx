import React from 'react'
import './App.css'
import { ImageProvider } from './context/ImageContext'
import AppRoutes from './routes/AppRoutes'
import { UserProvider } from './context/UserContext'
import ToastNotification from './components/ToastNotification/ToastNotification'
import { ModalProvider } from './context/ModalContext'
import ModalComponent from './components/ModalComponent/ModalComponent'

const App = () => {
  return (
    <React.Fragment>
        <UserProvider>
            <ImageProvider>
                <ModalProvider>
                    <AppRoutes />
                    <ModalComponent />
                </ModalProvider>
            </ImageProvider>
        </UserProvider>
        <ToastNotification />
        
    </React.Fragment>
  )
}

export default App