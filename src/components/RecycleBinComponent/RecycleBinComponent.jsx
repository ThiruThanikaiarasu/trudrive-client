import { useState } from "react"
import FileRowComponent from "../MyFileComponent/FileRowComponent"
import useSortedFiles from "../../hooks/useSortedFiles"
import { ArrowDown, ArrowUp, ChevronDown } from "lucide-react"
import BinRowComponent from "./BinRowComponent"

const RecycleBinComponent = () => {
    const [sortField, setSortField] = useState('name') 
    const [sortOrder, setSortOrder] = useState('asc') 

    const deletedFiles = [
        { name: 'Old Project', deletedDate: 'Jul 19', size: '2 MB' },
        { name: 'Sample Document', deletedDate: 'Jan 29', size: '500 KB' },
        { name: 'Music Track', deletedDate: 'Apr 04', size: '3.2 MB' },
        { name: 'Presentation', deletedDate: 'Jun 18', size: '1.5 MB' },
        { name: 'Backup File', deletedDate: 'May 13', size: '5 MB' },
    ]

    const handleSort = (field) => {
        if (sortField === field) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
        } else {
            setSortField(field)
            setSortOrder('asc')
        }
    }

    const sortedFiles = useSortedFiles(deletedFiles, sortField, sortOrder)

    return (
        <div className="p-4 bg-[#f8faff]">
            <div className="title-container p-4">
                <h2 className="text-xl font-semibold">Recycle Bin</h2>
            </div>
            <div 
                className="bg-white rounded-xl"
                style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px" }}
            >
                <table className="min-w-full table-auto border-collapse text-sm">
                    <thead>
                        <tr>
                            <th className="w-[50%] max-w-[300px] px-2 py-2 text-left">
                                <div 
                                    className="flex items-center px-2 py-1 rounded-md cursor-pointer hover:bg-[#eae8e8]"
                                    onClick={() => handleSort('name')}
                                >
                                    <span className="font-semibold mr-1">Name</span>
                                    <span className='mr-1'>
                                        {sortField === 'name' && 
                                            (sortOrder === 'asc' 
                                                ? <ArrowDown size={14} strokeWidth={1} /> 
                                                : <ArrowUp size={14} strokeWidth={1} />
                                            )
                                        }
                                    </span>
                                    <span className="pt-1">
                                        <ChevronDown size={16} strokeWidth={1} />
                                    </span>
                                </div>
                            </th>
                            <th className="w-[25%] max-w-[100px] px-2 py-2 text-left">
                                <div 
                                    className="flex items-center px-2 py-1 rounded-md cursor-pointer hover:bg-[#eae8e8]"
                                    onClick={() => handleSort('deletedDate')}
                                >
                                    <span className="font-semibold mr-1">Deleted Date</span>
                                    <span className='mr-1'>
                                        {sortField === 'deletedDate' && 
                                            (sortOrder === 'asc' 
                                                ? <ArrowDown size={14} strokeWidth={1} /> 
                                                : <ArrowUp size={14} strokeWidth={1} />
                                            )
                                        }
                                    </span>
                                    <span className="pt-1">
                                        <ChevronDown size={16} strokeWidth={1} />
                                    </span>
                                </div>
                            </th>
                            <th className="w-[25%] max-w-[100px] px-2 py-2 text-left">
                                <div 
                                    className="flex items-center px-2 py-1 rounded-md cursor-pointer hover:bg-[#eae8e8]"
                                    onClick={() => handleSort('size')}
                                >
                                    <span className="font-semibold mr-1">Size</span>
                                    <span className='mr-1'>
                                        {sortField === 'size' && 
                                            (sortOrder === 'asc' 
                                                ? <ArrowDown size={14} strokeWidth={1} /> 
                                                : <ArrowUp size={14} strokeWidth={1} />
                                            )
                                        }
                                    </span>
                                    <span className="pt-1">
                                        <ChevronDown size={16} strokeWidth={1} />
                                    </span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedFiles.map((file, index) => (
                            <BinRowComponent key={index} file={file} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RecycleBinComponent
