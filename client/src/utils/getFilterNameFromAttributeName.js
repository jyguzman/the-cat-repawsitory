const getFilterNameFromAttributeName = (attribute) => {
    return attribute.split('_').map(word => 
    	word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
}

export default getFilterNameFromAttributeName;