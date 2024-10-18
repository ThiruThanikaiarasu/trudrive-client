import React, { useEffect, useRef, useState } from 'react'
import { Home, FolderClosed, Image, Users, Trash2, User, Plus, LocateIcon } from 'lucide-react'
import SidebarItem from './SidebarItem'
import DropdownComponent from './DropdownComponent'
import SidebarToggle from './SidebarToggle'
import { useLocation } from 'react-router-dom'

const SidebarComponent = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const location = useLocation()
    const path = location.pathname == "/" ? 'home' : location.pathname.slice(1)
    
    const newDropdownRef = useRef(null)

    const [activeIcon, setActiveIcon] = useState(path)
    const [newDropdownOpen, setNewDropdownOpen] = useState(false)    

    const sidebarItems = [
        { to: '/', icon: Home, label: 'Home', path: 'home' },
        { to: '/my-file', icon: FolderClosed, label: 'My File', path: 'my-file' },
        { to: '/photos', icon: Image, label: 'Photos', path: 'photos' },
        { to: '/shared', icon: Users, label: 'Shared', path: 'shared' },
        { to: '/recycle-bin', icon: Trash2, label: 'Recycle Bin', path: 'recycle-bin' },
        { to: '/people', icon: User, label: 'People', path: 'people' },
    ]

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const handleSetActiveIcon = (icon) => {
        // setActiveIcon(icon)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (newDropdownRef.current && !newDropdownRef.current.contains(event.target)) {
                setNewDropdownOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    useEffect(() => {
        const path = location.pathname === '/' ? 'home' : location.pathname.slice(1)
        setActiveIcon(path)
    }, [location.pathname])

    return (
        <div className={`flex h-screen fixed transition-all duration-300 ${isSidebarOpen ? 'w-60' : 'w-16'}`}>
            <div className="flex-shrink-0 bg-[#f8faff]">
                
                <div className="flex justify-start items-center py-4 px-4 relative" ref={newDropdownRef}>
                    <button
                        className="shadow-xl bg-white text-black py-2 px-6 flex items-center rounded-xl"
                        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
                        onClick={() => setNewDropdownOpen(!newDropdownOpen)}
                    >
                        <span className="text-xl"><Plus /></span>
                        {isSidebarOpen && <span className="ml-2">New</span>}
                    </button>
                    {newDropdownOpen && (
                        <div className={`absolute left-4 top-8 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all ease-out duration-200 z-50 overflow-visible`}>
                            <DropdownComponent />
                        </div>
                    )}
                </div>

                
                <ul className="px-4 py-4">
                    <SidebarToggle isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                </ul>

                
                <ul className="px-4">
                    {sidebarItems.map(item => (
                        <SidebarItem
                            key={item.label}
                            to={item.to}
                            icon={item.icon}
                            label={item.label}
                            isActive={activeIcon === item.path}
                            handleSetActiveIcon={handleSetActiveIcon}
                            isSidebarOpen={isSidebarOpen}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SidebarComponent
