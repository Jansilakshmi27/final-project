// src/SignIn.js
import React, { useState, useEffect } from 'react';
import './SignIn.css';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

function SponserSignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Set dummy email and password for testing
  useEffect(() => {
    setEmail('swathyvinayak33@gmail.com'); // Dummy email
    setPassword('password123'); // Dummy password
  }, []);

  const handleSignIn = async (e) => {
    e.preventDefault();
  
    // Simulate the email and password check
    if (email === 'hema26@example.com' && password === 'password123') {
      // Simulate a token
      const token = 'dummy-jwt-token';
  
      // Save token to local storage (as it would in a real situation)
      localStorage.setItem('token', token);
  
      // Navigate to the sponsor user page after successful login
      navigate('/sponseruserpage');
    } else {
      setErrorMessage('Invalid email or password');
    }
  };
  
  return (
    <div className="sign-in-form">
      <h2>Sponser Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="submit-btn">Sign In</button>
      </form>
      <p className="signup-link">
        Don't have an account? <Link to="/sponserregistration">Sign Up</Link>
      </p>
    </div>
  );
}

export default SponserSignIn;
