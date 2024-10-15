import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import HeaderComponent from '../components/HeaderComponent/HeaderComponent'
import SidebarComponent from '../components/Sidebar/SidebarComponent'

const MainLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    return (
        <React.Fragment>
            <HeaderComponent />
            <div className="flex">
                <SidebarComponent isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-280' : 'ml-27'} w-full`}>
                    <Outlet />
                </div>
            </div>
        </React.Fragment>
    )
}

export default MainLayout