import React from 'react'

const SearchBar = ({ onChange }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '30px' }}>
            <input type="text" placeholder='Search' onChange={(e) => { onChange(e.target.value) }} />

        </div>
    )
}

export default SearchBar