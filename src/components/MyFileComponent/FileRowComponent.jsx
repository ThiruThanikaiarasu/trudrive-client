import { defaultStyles, FileIcon } from "react-file-icon"
import FolderIcon from '../../assets/img/folder-icon.png'
import { Ellipsis, Share2 } from "lucide-react"


const FileRowComponent = ({ file }) => {
    const extension = file.type === 'PowerPoint' ? 'ppt' : file.type === 'Excel' ? 'xls' : 'docx'
    const style = defaultStyles[extension] || {}

    return (
        <tr className="mx-2 border-t h-12 cursor-pointer hover:bg-[#eae8e8] group">
            <td className="w-[40%] max-w-[300px] px-4 py-2 mt-2 truncate whitespace-nowrap overflow-hidden text-ellipsis relative">
                <div className="flex items-center">
                    <div className="file-details flex items-center w-full">
                        {file.type === 'Folder' 
                            ? <div className="icon-container w-6 h-6">
                                <img src={FolderIcon} alt="" />
                              </div>
                            : <div className="icon-container w-5 h-5">
                                <FileIcon extension={extension} {...style} />
                              </div>
                        }
                        <span className="ml-4 truncate w-[80%]">{file.name}</span>
                    </div>
                    <div className="options-container flex opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute right-0">
                        <div className="p-2 rounded-md mr-2 hover:bg-[#e0e0e0]">
                            <Share2 size={14} />
                        </div>
                        <div className="p-2 rounded-md mr-2 hover:bg-[#e0e0e0]">
                            <Ellipsis size={14} />
                        </div>
                    </div>
                </div>
            </td>
            <td className="w-[15%] max-w-[100px] px-4 py-2 truncate whitespace-nowrap overflow-hidden text-ellipsis">{file.opened}</td>
            <td className="w-[15%] max-w-[100px] px-4 py-2 truncate whitespace-nowrap overflow-hidden text-ellipsis">{file.size}</td>
            <td className="w-[15%] max-w-[100px] px-4 py-2 truncate whitespace-nowrap overflow-hidden text-ellipsis">Private</td>
        </tr>
    )
}

export default FileRowComponent