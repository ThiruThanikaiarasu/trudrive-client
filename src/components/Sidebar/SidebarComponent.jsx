import React, { useEffect, useRef, useState } from 'react'
import { Home, FolderClosed, Image, Users, Trash2, User, Plus } from 'lucide-react'
import SidebarItem from './SidebarItem'
import DropdownComponent from './DropdownComponent'
import SidebarToggle from './SidebarToggle'

const SidebarComponent = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const [activeIcon, setActiveIcon] = useState('home')
    const [newDropdownOpen, setNewDropdownOpen] = useState(false)
    const newDropdownRef = useRef(null)

    const sidebarItems = [
        { to: '/', icon: Home, label: 'Home' },
        { to: '/my-file', icon: FolderClosed, label: 'My Files' },
        { to: '/photos', icon: Image, label: 'Photos' },
        { to: '/shared', icon: Users, label: 'Shared' },
        { to: '/recycle-bin', icon: Trash2, label: 'Recycle Bin' },
        { to: '/people', icon: User, label: 'People' },
    ]

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const handleSetActiveIcon = (icon) => {
        setActiveIcon(icon)
    }

    const handleOpenModal = () => {
        // Modal open logic here
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
                        <div className={`absolute left-4 top-8 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all ease-out duration-200 z-auto`}>
                            <DropdownComponent handleOpenModal={handleOpenModal} />
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
                            isActive={activeIcon === item.label.toLowerCase()}
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
