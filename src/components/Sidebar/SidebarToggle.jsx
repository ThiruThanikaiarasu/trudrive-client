import React from 'react'
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react'
import Button from '../../elements/Button'

const SidebarToggle = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <li
            onClick={toggleSidebar}
            title="Navigation Panel"
            className="cursor-pointer"
        >
            <div className="h-8 py-2 px-2 rounded-full transition duration-300 flex items-center">
                {isSidebarOpen && <span className="text-base font-semibold w-48">Thirunavukkarasu T</span>}
                <Button className="text-xl ml-4 flex justify-center">
                    {isSidebarOpen ? <ArrowLeftFromLine size={20} /> : <ArrowRightFromLine size={20} />}
                </Button>
            </div>
        </li>
    )
}

export default SidebarToggle
