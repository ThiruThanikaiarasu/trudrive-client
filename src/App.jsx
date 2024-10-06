import React from 'react'
import './App.css'
import NavigationComponent from './components/NavigationComponent/NavigationComponent'
import { ImageProvider } from './context/ImageContext'

const App = () => {
  return (
    <React.Fragment>
        <ImageProvider>
            <NavigationComponent />
        </ImageProvider>
    </React.Fragment>
  )
}

export default App