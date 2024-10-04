import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { fetchSearchResults } from '../../services/searchService'

const SearchBarComponent = () => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = async (e) => {
        e.preventDefault()
        if (searchQuery.trim() !== '') {
            try {
                const results = await fetchSearchResults(searchQuery)
                console.log(results)  
            } catch (error) {
                console.error('Search failed:', error)
            }
        }
    }

    return (
        <form 
            className="flex items-center px-2 py-1 rounded-full bg-[#ffffff] w-[60%]"
            style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}
            onSubmit={handleSearch}
        >
            <Search size={18} />
            <input 
                type="text"
                placeholder="Search everything"
                className="w-full px-2 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </form>
    )
}

export default SearchBarComponent
