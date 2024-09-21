import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchFilter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = () => {
    onSearch({ searchTerm, category });
  };

  return (
    <div className="search-filter">
      <div className="container mt-5">
        <input
          type="text"
          className="form-control"
          placeholder="Search for NGOs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="form-select mt-3"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="education">Education</option>
          <option value="health">Health</option>
          <option value="environment">Environment</option>
          {/* Add more categories as needed */}
        </select>
        <button className="btn btn-primary mt-3" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
