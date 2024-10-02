// import React, { useState } from 'react'
// import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom'

// import SidebarComponent from '../Sidebar/SidebarComponent'
// import LoginComponent from '../../pages/LoginComponent/LoginComponent'
// import SignupComponent from '../../pages/SignupComponent/SignupComponent'
// import HomeComponent from '../HomeComponent/HomeComponent'
// import HeaderComponent from '../HeaderComponent/HeaderComponent'

// const NavigationComponent = () => {

//     const [isSidebarOpen, setIsSidebarOpen] = useState(true)

//     return (
//         <Router>
//             <div>
//                 <HeaderComponent />
//                 <div className="flex">
//                     <SidebarComponent isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
//                     <div
//                     className={`transition-all duration-300 ${isSidebarOpen ? 'ml-280' : 'ml-27'} w-full`}
//                     >
//                         <Routes>
//                             <Route path="/" element={<HomeComponent />} />
//                             <Route path="/login" element={<LoginComponent />} />
//                             <Route path="/signup" element={<SignupComponent />} />
//                             <Route path="/my-file" element={<HomeComponent />} />
//                         </Routes>
//                     </div>
                    
//                 </div>
//             </div>
//         </Router>
//     )
// }

// export default NavigationComponent

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
