// SponsorRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sponsor from './Sponsor'; // Sidebar component
import Profile from './Profile'; // Sponsor's profile component
import Donate from './Donate'; // Sponsor's donate component
import Transactions from './Transactions'; // Sponsor's transactions component
import ViewNGOs from './ViewNGOs'; // Viewing NGOs component

const SponsorRoutes = () => {
  return (
    <div className="sponsor-dashboard">
      <Sponsor /> {/* Sidebar stays fixed on the page */}

      {/* Define the routes for the components within the sponsor's user page */}
      <div className="sponsor-content">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/viewngos" element={<ViewNGOs />} />
        </Routes>
      </div>
    </div>
  );
};

export default SponsorRoutes;
