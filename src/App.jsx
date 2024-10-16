import React from 'react'
import './App.css'
import { ImageProvider } from './context/ImageContext'
import AppRoutes from './routes/AppRoutes'
import { UserProvider } from './context/UserContext'
import ToastNotification from './components/ToastNotification/ToastNotification'

const App = () => {
  return (
    <React.Fragment>
        <UserProvider>
            <ImageProvider>
                <AppRoutes />
            </ImageProvider>
        </UserProvider>
        <ToastNotification />
    </React.Fragment>
  )
}

export default App