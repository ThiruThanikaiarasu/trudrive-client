import React from 'react'
import logo from '../../assets/img/logo.png'
import SearchBarComponent from '../SearchBarComponent/SearchBarComponent'
import useUserContext from '../../hooks/useUserContext'

const HeaderComponent = () => {

    const { userProfile } = useUserContext()

    return (
        <div className="w-full pt-1 pl-2 bg-[#f8faff] flex items-center ">
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
            <div className="w-[14%] flex justify-end items-center">
                {/* User Account */}
                {
                    userProfile && 

                        userProfile?.image ? (
                            <div>hello</div>
                        ) : (
                            <div 
                                className={`cursor-pointer h-8 w-8 xl:h-7 xl:w-7 lg:h-7 lg:w-7 md:h-8 md:w-8 sm:w-8 sm:h-8 max-h-full max-w-full object-cover rounded-full flex items-center justify-center`}
                                style={{ 
                                    backgroundColor: userProfile?.profile?.background, 
                                    color: userProfile?.profile?.color 
                                }}
                            >
                                <p className="text-[16px] font-semibold select-none">
                                    {userProfile?.profile?.letter}
                                </p>
                            </div>
                        )

                }
            </div>
        </div>
    )
}

export default HeaderComponent
