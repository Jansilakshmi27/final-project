import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import logo from '../assets/logo.png';
import bgImage from '../assets/bg.jpg';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${bgImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      height: '120vh'  }}
    >
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Atruserve Logo" /> 
          {/* <span className="logo-text">ALTRUSERVE</span> */}
        </div>
        <div className="logotext" >
  
</div>


        <ul className="nav-links">
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/about')}>About Us</li>
          <li onClick={() => navigate('/SponserRegistration')}>Sponsor Login</li>
          <li onClick={() => navigate('/ngosignin')}>NGO Login</li>
          <li onClick={() => navigate('/join')}>Join Us</li>
        </ul>
      </nav>
      

      <div className="content">
        <h1> Empowering NGOs for a Better Tomorrow</h1>
        <p>
          We provide a space where organizations can share their missions, achievements,
          and goals, while sponsors can highlight their contributions to meaningful causes.
        
        </p>
      
        <button 
  style={{ backgroundColor:  '#0056b3', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }} 
  onClick={() => navigate('/register')}
>
  Register
</button>

      </div>
    </div>
  );
};

export default Home;
