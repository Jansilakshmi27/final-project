// SponsorRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebars';
import NGODashboard from './Profiles';
import Deposits from './Deposits';
import Expenditures from './Expenditure';
import Transactions from './Transactions';
import SignOut from './SignOut';

const NgoRoutes = () => {
  return (
    <div className="sponsor-dashboard">
      <Sidebar /> {/* Sidebar stays fixed on the page */}

      {/* Define the routes for the components within the sponsor's user page */}
      <div className="sponsor-content">
        <Routes>
          <Route path="/profile" element={<NGODashboard />}/>
          <Route path="/deposits" element={<Deposits />} />
          <Route path="/expenditure" element={<Expenditures />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/signout" element={<SignOut />} />
        </Routes>
      </div>
    </div>
  );
};

export default NgoRoutes;
