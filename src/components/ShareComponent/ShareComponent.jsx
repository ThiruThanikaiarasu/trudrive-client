import React, { useState } from 'react'
import { ArrowDown, ArrowUp, ChevronDown } from 'lucide-react'
import FilterComponent from '../FilterComponent/FilterComponent'
import { FileIcon, defaultStyles } from 'react-file-icon'

const ShareComponent = () => {
    const [filter, setFilter] = useState('All')  // Set initial filter to 'All'
    const [sortField, setSortField] = useState('name')  // Set initial sorting field
    const [sortOrder, setSortOrder] = useState('asc')  // Set initial sorting order

    const sharedFiles = [
        { name: 'Project Proposal', type: 'Word', date: 'Jul 19', sharedBy: 'Alice' },
        { name: 'Financial Report', type: 'Excel', date: 'Jun 18', sharedBy: 'Bob' },
        { name: 'Design Brief', type: 'PowerPoint', date: 'May 13', sharedBy: 'Carol' },
        { name: 'Meeting Notes', type: 'Word', date: 'May 11', sharedBy: 'Dave' },
        { name: 'Marketing Plan', type: 'Word', date: 'Apr 25', sharedBy: 'Eve' }
    ]

    const filteredFiles = filter === 'All' ? sharedFiles : sharedFiles.filter(file => file.type === filter)

    const handleSort = (field) => {
        if (sortField === field) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
        } else {
            setSortField(field)
            setSortOrder('asc')
        }
    }

    const sortedFiles = [...filteredFiles].sort((a, b) => {
        const fieldA = a[sortField].toString().toLowerCase()
        const fieldB = b[sortField].toString().toLowerCase()
        return sortOrder === 'asc' ? fieldA.localeCompare(fieldB) : fieldB.localeCompare(fieldA)
    })

    return (
        <div className="p-4 bg-[#f8faff]">
            <FilterComponent filter={filter} setFilter={setFilter} />

            <div className="bg-white shadow-md rounded-xl">
                <table className="min-w-full table-auto border-collapse text-sm">
                    <thead>
                        <tr>
                            <th className="w-[40%] px-4 py-2 text-left">
                                <div className="flex items-center cursor-pointer" onClick={() => handleSort('name')}>
                                    <span className="font-semibold mr-1">Name</span>
                                    {sortField === 'name' && (sortOrder === 'asc' ? <ArrowDown size={14} /> : <ArrowUp size={14} />)}
                                    <ChevronDown size={16} />
                                </div>
                            </th>
                            <th className="w-[20%] px-4 py-2 text-left">
                                <div className="flex items-center cursor-pointer" onClick={() => handleSort('date')}>
                                    <span className="font-semibold mr-1">Date</span>
                                    {sortField === 'date' && (sortOrder === 'asc' ? <ArrowDown size={14} /> : <ArrowUp size={14} />)}
                                    <ChevronDown size={16} />
                                </div>
                            </th>
                            <th className="w-[20%] px-4 py-2 text-left">
                                <div className="flex items-center cursor-pointer" onClick={() => handleSort('sharedBy')}>
                                    <span className="font-semibold mr-1">Shared By</span>
                                    {sortField === 'sharedBy' && (sortOrder === 'asc' ? <ArrowDown size={14} /> : <ArrowUp size={14} />)}
                                    <ChevronDown size={16} />
                                </div>
                            </th>
                            <th className="w-[20%] px-4 py-2 text-left">
                                <span className="font-semibold"></span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedFiles.map((file, index) => {
                            const extension = file.type === 'PowerPoint' ? 'ppt' : file.type === 'Excel' ? 'xls' : 'docx';

                            const style = defaultStyles[extension] || {}
                            
                            return (    
                                <tr key={index} className="mx-2 border-t h-12 cursor-pointer hover:bg-[#eae8e8]">
                                    <td className="px-4 py-2 mt-2 truncate whitespace-nowrap overflow-hidden text-ellipsis relative">
                                        <div
                                            className="file-details flex items-center w-full"
                                        >
                                            <div
                                                className="icon-container w-5 h-5"
                                            >
                                                <FileIcon 
                                                extension={extension} 
                                                {...style} 
                                                />
                                            </div>
                                            <span className="ml-4 truncate w-[85%]">{file.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 truncate">{file.date}</td>
                                    <td className="px-4 py-2 truncate">{file.sharedBy}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShareComponent
