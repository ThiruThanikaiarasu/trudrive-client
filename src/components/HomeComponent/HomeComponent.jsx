import React, { useState } from 'react'
import { FileIcon, defaultStyles } from 'react-file-icon'
import FilterComponent from '../FilterComponent/FilterComponent'
import { Ellipsis, Share2 } from 'lucide-react'

const HomeComponent = () => {
    const [filter, setFilter] = useState('All')

    const files = [
        { name: 'Artificial Intelligence (AI) Startup Business Plan', type: 'PowerPoint', opened: 'Jul 19', owned: 'Thirunavukkarasu' },
        { name: 'Accounts', type: 'Excel', opened: 'Jun 18', owned: 'Thirunavukkarasu' },
        { name: 'AQLR_thiru', type: 'Word', opened: 'May 13', owned: 'Thirunavukkarasu' },
        { name: 'MPMC_Automatic_Door_Opener', type: 'Word', opened: 'May 11', owned: 'Thirunavukkarasu' },
        { name: 'Design of a Microprocessor Based Automatic Gate MPMC_Automatic_Door_Opener MPMC_Automatic_Door_Opener', type: 'Word', opened: 'May 11', owned: 'Thirunavukkarasu' },
    ]

    const filteredFiles = filter === 'All' ? files : files.filter(file => file.type === filter)

    return (
        <div className="p-4 bg-[#f8faff]">

            <FilterComponent filter={filter} setFilter={setFilter} />

            <div className="bg-white shadow-md rounded-xl">
                <table className="min-w-full table-auto border-collapse text-sm">
                    <thead>
                        <tr>
                            <th className="w-[60%] max-w-[300px] px-4 py-4 text-left font-semibold">Name</th>
                            <th className="w-[20%] max-w-[100px] px-4 py-4 text-left font-semibold">Opened</th>
                            <th className="w-[20%] max-w-[100px] px-4 py-4 text-left font-semibold">Owned</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredFiles.map((file, index) => {
                            const extension = file.type === 'PowerPoint' ? 'ppt' : file.type === 'Excel' ? 'xls' : 'docx'

                            const style = defaultStyles[extension] || {}

                            return (
                                <tr key={index} className="mx-2 border-t h-14 cursor-pointer hover:bg-[#eae8e8] group">
                                    <td className="w-[60%] max-w-[300px] px-4 py-2 mt-2 truncate whitespace-nowrap overflow-hidden text-ellipsis relative">
                                        <div
                                            className="flex"
                                        >
                                            <div
                                                className="file-details flex items-center w-full"
                                            >
                                                <div
                                                    className="icon-container w-6 h-6"
                                                >
                                                    <FileIcon 
                                                    extension={extension} 
                                                    {...style} 
                                                    />
                                                </div>
                                                <span className="ml-4 truncate w-[85%]">{file.name}</span>
                                            </div>
                                            <div
                                                className="options-container flex opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute right-0"
                                            >
                                                <div className='p-2 rounded-md mr-2 hover:bg-[#e0e0e0]'>
                                                    <Share2 size={14} />
                                                </div>
                                                <div className="p-2 rounded-md mr-2 hover:bg-[#e0e0e0]">
                                                    <Ellipsis size={14} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="w-[20%] max-w-[100px] px-4 py-2 truncate whitespace-nowrap overflow-hidden text-ellipsis">{file.opened}</td>
                                    <td className="w-[20%] max-w-[100px] px-4 py-2 truncate whitespace-nowrap overflow-hidden text-ellipsis">{file.owned}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HomeComponent
