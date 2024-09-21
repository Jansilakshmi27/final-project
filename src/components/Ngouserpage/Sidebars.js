import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDonate, faFileInvoiceDollar, faMoneyBillWave, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Sidebars.css'; // Correct the CSS import

// Correct the logo import
import logo from '../../assets/logo.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="NGO Logo" className="logo" />
      </div>
      <ul>
        <li className="sidebar-item">
          <Link to="/profile">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <span className="text">Profile</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/deposits">
            <FontAwesomeIcon icon={faMoneyBillWave} className="icon" />
            <span className="text">Deposits</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/expenditure">
            <FontAwesomeIcon icon={faDonate} className="icon" />
            <span className="text">Expenditure</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/transactions">
            <FontAwesomeIcon icon={faFileInvoiceDollar} className="icon" />
            <span className="text">Transactions</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/signout">
            <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
            <span className="text">Sign Out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
