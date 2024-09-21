
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SNregister.css';
import logo from '../../assets/logo.png'; // Ensure the logo path is correct

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Atruserve Logo" />
          {/* <span className="logo-text">ALTRUSERVE</span>  */}
        </div>
        <ul className="nav-links">
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/about')}>About Us</li>
        
        
        </ul>
      </nav>
      <div>
       <h1>Join Us to Make a Difference!</h1>
       <div className="buttons">
       <button onClick={() => navigate('/sponserregistration')}>Sponser Registration</button>
       <button onClick={() => navigate('/ngoregistration')}>Ngo Registration</button>
        
     </div>
    </div>
      
    </div>
  );
};

export default Home;
