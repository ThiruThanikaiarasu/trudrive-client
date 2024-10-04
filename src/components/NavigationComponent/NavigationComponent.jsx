import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import SidebarComponent from '../Sidebar/SidebarComponent'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import AppRoutes from '../../routes/AppRoutes'

const NavigationComponent = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    return (
        <Router>
            <div>
                <HeaderComponent />
                <div className="flex">
                    <SidebarComponent isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                    <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-280' : 'ml-27'} w-full`}>
                        <AppRoutes />
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default NavigationComponent
