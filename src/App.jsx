import React from 'react'
import './App.css'
import { ImageProvider } from './context/ImageContext'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <React.Fragment>
        <ImageProvider>
            <AppRoutes />
        </ImageProvider>
    </React.Fragment>
  )
}

export default App