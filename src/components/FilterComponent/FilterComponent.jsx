import React from 'react';
import { FileIcon, defaultStyles } from 'react-file-icon';

const FilterComponent = ({ filter, setFilter }) => {
    const filterOptions = [
        { label: 'All', type: 'all' },
        { label: 'Word', type: 'docx' },
        { label: 'Excel', type: 'xls' },
        { label: 'PowerPoint', type: 'ppt' },
    ]

    return (
        <div className="flex justify-start mb-4 bg-[#f8faff]">
            {filterOptions.map((option) => (
                <button
                    key={option.type}
                    className={`flex items-center justify-center mr-2 py-1 px-4 border-gray-200 border-1 rounded-full ${
                        filter === option.label
                        ? 'bg-[#ebf3fc] border-2 border-blue-800 hover:bg-[#cfe4fa]'
                        : 'border-2 border-gray-400 hover:bg-[#ebebeb] hover:border-gray-500'
                    }`}
                    onClick={() => setFilter(option.label)}
                >
                    {option.type !== 'all' && (
                        <div className="w-4 h-4 mr-2">
                            <FileIcon
                            extension={option.type}
                            {...defaultStyles[option.type]}
                            className="inline-block"
                            />
                        </div>
                    )}
                    <span>
                        {option.label}
                    </span>
                </button>
            ))}
        </div>
    )
}

export default FilterComponent;
