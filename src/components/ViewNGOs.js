import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ViewNGOOs.css'; // Ensure the path is correct

import ngosData from './ngos.json'; // Adjust the path according to your folder structure

const ViewNGOs = () => {
  const [ngos, setNgos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setNgos(ngosData);
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredNgos = ngos.filter((ngo) =>
    ngo.ngoname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="ngos-list">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search NGOs..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      {filteredNgos.map((ngo) => (
        <div key={ngo.id} className="ngo-card">
          <h2>{ngo.ngoname}</h2>
          <p>{ngo.description}</p>
          <p><strong>Since:</strong> {ngo.since}</p>
          <p><strong>Motto:</strong> {ngo.motto}</p>
          <div className="ngo-actions">
            <button className="view-details">View Details</button>
            <Link to={`/donate/${ngo.upiId}`}>
              <button className="donate">Donate</button>
            </Link>
            <Link to={`/ngo/${ngo.id}`}>
              <button className="know-more">Know More</button>
            </Link>
            <a href={ngo.website} target="_blank" rel="noopener noreferrer" className="visit-site">
              Visit Site
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewNGOs;
