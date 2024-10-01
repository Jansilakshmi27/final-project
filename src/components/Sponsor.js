import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDonate, faFileInvoiceDollar, faHandsHelping, faSearch, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';


const Sponsor = () => {
  return (
    
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="/path/to/altruserve.png" alt="AltruServe Logo" className="logo" />
      </div>

      <ul>
        <li className="sidebar-item">
          <Link to="/Profile">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <span className="text">Profile</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/donate">
            <FontAwesomeIcon icon={faDonate} className="icon" />
            <span className="text">Donate</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/transactions">
            <FontAwesomeIcon icon={faFileInvoiceDollar} className="icon" />
            <span className="text">Transactions</span>
          </Link>
        </li> 
        <li className="sidebar-item">
          <Link to="/viewngos">
            <FontAwesomeIcon icon={faHandsHelping} className="icon" />
            <span className="text">View NGOs</span>
          </Link>
        </li>
        
      
      </ul>
    </div>
  );
};

export default Sponsor;
