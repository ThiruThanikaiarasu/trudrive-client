import React, { useState } from 'react'
import { FileIcon, defaultStyles  } from 'react-file-icon' 
import FilterComponent from '../FilterComponent/FilterComponent' 
import { Ellipsis, Share2 } from 'lucide-react'

const HomeComponent = () => {
    const [filter, setFilter] = useState('All')

    const files = [
        { name: 'Artificial Intelligence (AI) Startup Business Plan', type: 'PowerPoint', opened: 'Thu at 9:15 PM', owned: 'Thirunavukkarasu' },
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
                <table className="w-full h-full">
                <thead>
                    <tr className="text-left">
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Opened</th>
                    <th className="px-4 py-2">Owned</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredFiles.map((file, index) => {
                        const extension = file.type === 'PowerPoint' ? 'ppt' : file.type === 'Excel' ? 'xls' : 'docx';

                        const style = defaultStyles[extension] || {};

                        return (
                            <tr key={index} className="relative mx-2 border-t h-14 cursor-pointer hover:bg-[#f5f5f5] group"> 
                                <td className="px-4 py-2 mt-2 flex items-center justify-between whitespace-nowrap overflow-hidden relative">
                                    <div className="flex items-center">
                                    <div className="w-6 h-6">
                                        <FileIcon 
                                        extension={extension} 
                                        {...style} 
                                        />
                                    </div>
                                    <span className="ml-4 truncate w-3/4">{file.name}</span> {/* Added w-1/2 and truncate */}
                                    </div>

                                    {/* Container for icons with absolute positioning */}
                                    <div className="absolute right-0 flex opacity-0 group-hover:opacity-100 transition-opacity duration-200"> 
                                    <div className="p-2 rounded-md mr-2 hover:bg-[#e0e0e0]">
                                        <Ellipsis size={14} />
                                    </div>
                                    <div className='p-2 rounded-md mr-2 hover:bg-[#e0e0e0]'>
                                        <Share2 size={14} />
                                    </div>
                                    </div>
                                </td>

                                <td className="px-4 py-2 text-ellipsis">{file.opened}</td>
                                <td className="px-4 py-2 text-ellipsis">{file.owned}</td>
                            </tr>

                        );
                    })}

                </tbody>
                </table>
            </div>
        </div>
    )
}

export default HomeComponent
