import React from 'react';
import '../styles/search.css'

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div>
      <input type="text" placeholder="Search" ref={searchInput} value={search} onChange={handleSearch} className="search" />
    </div>
  )
}

export default Search;
