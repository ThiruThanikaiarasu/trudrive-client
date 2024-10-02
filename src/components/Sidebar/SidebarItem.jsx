import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ to, icon: Icon, label, isActive, handleSetActiveIcon, isSidebarOpen }) => {
    const activeIconClass = 'text-blue-500 text-md';
    const inactiveIconClass = 'font-light';
    const activeIconTextClass = 'text-base font-semibold ml-2';
    const inactiveIconTextClass = 'font-normal ml-2';
    const lineIndictor = 'h-4 w-1 rounded-md';
    const activeLineIndicator = 'bg-blue-600';
    const inactiveLineIndicator = 'group-hover:bg-gray-400';

    return (
        <li className="py-1 flex items-center group">
            <div className={`${lineIndictor} ${isActive ? activeLineIndicator : inactiveLineIndicator}`} />
            <Link
                to={to}
                className={`transition duration-300 flex items-center hover:bg-[#e7e8eb] ${isSidebarOpen ? 'h-8 w-full py-2 px-2 mx-2 rounded-md' : 'h-8 ml-3 py-2 px-2 mx-2 rounded-md'}`}
                onClick={() => handleSetActiveIcon(label.toLowerCase())}
            >
                <span className="text-xl">
                    <Icon size={20} strokeWidth={isActive ? 1.5 : 1} className={`${isActive ? activeIconClass : inactiveIconClass}`} />
                </span>
                {isSidebarOpen && <span className={`${isActive ? activeIconTextClass : inactiveIconTextClass}`}>{label}</span>}
            </Link>
        </li>
    );
};

export default SidebarItem;
