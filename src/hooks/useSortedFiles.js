const useSortedFiles = (files, sortField, sortOrder) => {
    const compareValues = (a, b, field) => {
        if (field === 'size') {
            const sizeA = parseFloat(a.size) * (a.size.includes('MB') ? 1024 : 1)
            const sizeB = parseFloat(b.size) * (b.size.includes('MB') ? 1024 : 1)
            return sizeA - sizeB
        } else if (field === 'opened') {
            return new Date(a.opened) - new Date(b.opened)
        } else {
            return a[field].localeCompare(b[field])
        }
    }

    const sortedFolders = [...files.filter(file => file.type === 'Folder')].sort((a, b) => {
        const result = compareValues(a, b, sortField)
        return sortOrder === 'asc' ? result : -result
    })

    const sortedOtherFiles = [...files.filter(file => file.type !== 'Folder')].sort((a, b) => {
        const result = compareValues(a, b, sortField)
        return sortOrder === 'asc' ? result : -result
    })

    return [...sortedFolders, ...sortedOtherFiles]
}

export default useSortedFiles