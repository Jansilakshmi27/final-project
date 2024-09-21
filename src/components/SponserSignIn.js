// src/SignIn.js
import React, { useState } from 'react';
import './SignIn.css';
import { Link, useNavigate } from 'react-router-dom';

function SponserSignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    
    // Simulate sign-in validation logic
    if (email === 'valid@example.com' && password === 'validPassword') {
      console.log('Sign In successful');
      // Clear any previous error message
      setErrorMessage('');
      // Navigate to the sponser user page after successful login
      navigate('/sponseruserpage');
    } else {
      console.log('Invalid credentials');
      // Show error message in red
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="sign-in-form">
      <h2> Sponser Sign In</h2>
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
        {/* Display error message if credentials are invalid */}
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
