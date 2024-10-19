import { useEffect, useState } from "react"
import FileRowComponent from "./FileRowComponent"
import useSortedFiles from "../../hooks/useSortedFiles"
import { ArrowDown, ArrowUp, ChevronDown } from "lucide-react"
import useUserContext from "../../hooks/useUserContext"
import { useNavigate, useSearchParams } from "react-router-dom"

const MyFileComponent = () => {

    const { userProfile } = useUserContext()
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    useEffect(() => {
        setSearchParams({ id: userProfile.rootUrlId })
    },[userProfile, setSearchParams])

    const [sortField, setSortField] = useState('name') 
    const [sortOrder, setSortOrder] = useState('asc') 

    const files = [
        { name: 'Desktop', type: 'Folder', opened: 'Jul 19', owned: 'Thirunavukkarasu', size: '1.59 MB' },
        { name: 'Downloads', type: 'Folder', opened: 'Jan 29', owned: 'Thirunavukkarasu', size: '1.80 MB' },
        { name: 'Personal', type: 'Folder', opened: 'Apr 04', owned: 'Thirunavukkarasu', size: '1.80 MB' },
        { name: 'Accounts', type: 'Excel', opened: 'Jun 18', owned: 'Thirunavukkarasu', size: '4.6 MB' },
        { name: 'AQLR_thiru', type: 'Word', opened: 'May 13', owned: 'Thirunavukkarasu', size: '15 MB' },
        { name: 'MPMC_Automatic_Door_Opener', type: 'Word', opened: 'May 11', owned: 'Thirunavukkarasu', size: '25 KB' },
        { name: 'Design of a Microprocessor Based Automatic Gate MPMC_Automatic_Door_Opener MPMC_Automatic_Door_Opener', type: 'Word', opened: 'May 11', owned: 'Thirunavukkarasu', size: '15 KB' },
    ]

    const handleSort = (field) => {
        if (sortField === field) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
        } else {
            setSortField(field)
            setSortOrder('asc')
        }
    }

    const sortedFiles = useSortedFiles(files, sortField, sortOrder)

    return (
        <div className="p-4 bg-[#f8faff]">
            <div className="title-container p-4">
                <h2 className="text-xl font-semibold">My Files</h2>
            </div>
            <div 
                className="bg-white rounded-xl"
                style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px" }}
            >
                <table className="min-w-full table-auto border-collapse text-sm">
                    <thead>
                        <tr>
                            <th className="w-[40%] max-w-[300px] px-2 py-2 text-left">
                                 <div 
                                    className="flex items-center px-2 py-1 rounded-md cursor-pointer hover:bg-[#eae8e8]"
                                    onClick={() => handleSort('name')}
                                >
                                    <span className="font-semibold mr-1">Name</span>
                                    <span
                                        className='mr-1'
                                    >
                                        {sortField === 'name' && 
                                            (sortOrder === 'asc' 
                                                ? 
                                                    <ArrowDown size={14} strokeWidth={1} /> 
                                                : 
                                                    <ArrowUp size={14} strokeWidth={1} />
                                            )
                                        }
                                    </span>
                                    <span
                                        className="pt-1"
                                    >
                                        <ChevronDown size={16} strokeWidth={1} />
                                    </span>
                                </div>
                            </th>
                            <th className="w-[15%] max-w-[100px] px-2 py-2 text-left">
                                <div 
                                    className="flex items-center px-2 py-1 rounded-md cursor-pointer hover:bg-[#eae8e8]"
                                    onClick={() => handleSort('opened')}
                                >
                                    <span className="font-semibold mr-1">Opened</span>
                                    <span
                                        className='mr-1'
                                    >
                                        {sortField === 'opened' && 
                                            (sortOrder === 'asc' 
                                                ? 
                                                    <ArrowDown size={14} strokeWidth={1} /> 
                                                : 
                                                    <ArrowUp size={14} strokeWidth={1} />
                                            )
                                        }
                                    </span>
                                    <span
                                        className="pt-1"
                                    >
                                        <ChevronDown size={16} strokeWidth={1} />
                                    </span>
                                </div>
                            </th>
                            <th className="w-[15%] max-w-[100px] px-2 py-2 text-left">
                                <div 
                                    className="flex items-center px-2 py-1 rounded-md cursor-pointer hover:bg-[#eae8e8]"
                                    onClick={() => handleSort('size')}
                                >
                                    <span className="font-semibold mr-1">Size</span>
                                    <span
                                        className='mr-1'
                                    >
                                        {sortField === 'size' && 
                                            (sortOrder === 'asc' 
                                                ? 
                                                    <ArrowDown size={14} strokeWidth={1} /> 
                                                : 
                                                    <ArrowUp size={14} strokeWidth={1} />
                                            )
                                        }
                                    </span>
                                    <span
                                        className="pt-1"
                                    >
                                        <ChevronDown size={16} strokeWidth={1} />
                                    </span>
                                </div>
                            </th>
                            <th className="w-[15%] max-w-[100px] px-4 py-4 text-left">
                                <span className="font-semibold">Shared</span>
                            </th>
                            <th className="w-[25%] max-w-[100px] px-4 py-2 text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedFiles.map((file, index) => (
                            <FileRowComponent key={index} file={file} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyFileComponent