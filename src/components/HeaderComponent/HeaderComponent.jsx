import React from 'react'
import logo from '../../assets/img/logo.png'
import SearchBarComponent from '../SearchBarComponent/SearchBarComponent'

const HeaderComponent = () => {
    return (
        <div className="pt-1 pl-2 bg-[#f8faff] flex items-center ">
            <div 
                className="flex items-center p-4 cursor-pointer w-[15%]"
                onClick={() => location.href = '/'}
            >
                <img src={logo} alt="" className="w-8 h-8" />
                <h1 className="text-xl ml-4 cursor-pointer">Drive</h1>
            </div>
            <div className="w-[70%] flex justify-center items-center">
                <SearchBarComponent />
            </div>
            <div>
                {/* User Account */}
            </div>
        </div>
    )
}

export default HeaderComponent
