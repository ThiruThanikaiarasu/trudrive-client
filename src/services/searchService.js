export const fetchSearchResults = async (query) => {
    
    const response = await fetch(`/api/search?q=${query}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (!response.ok) {
        throw new Error('Failed to fetch search results')
    }

    return await response.json() 
}
