import React from 'react';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name or ingredients..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
