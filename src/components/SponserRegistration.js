import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import './RegistrationForm.css';

function SponserRegistration() {
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [submitted, setSubmitted] = useState(false); // Correct useState declaration
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const country = e.target.country.value;
    const phone = e.target.phone.value;

    let valid = true;

    // Validate email
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    } else {
      setEmailError('');
    }

    // Validate password
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters long.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      try {
        // Send POST request to your MongoDB backend API
        const response = await axios.post('http://localhost:5002/api/register', {
          name,
          email,
          password,
          country,
          phone
        });

        if (response.status === 201) {
          alert('Account Created Successfully!');
          navigate('/sponsor'); // Redirect after successful registration
        }
      } catch (error) {
        console.error('Error creating account:', error);
        alert('Failed to create account. Please try again.');
      }

      // Set submitted state
      setSubmitted(true);
    }
  };

  return (
    <div className="registration-form">
      <h2>Sponsor Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" id="email" placeholder="Enter your email" required />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Enter your password" required />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select name="country" id="country" required>
            <option value="">Select your country</option>
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="Japan">Japan</option>
            <option value="China">China</option>
            <option value="Brazil">Brazil</option>
            <option value="South Africa">South Africa</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="text" name="phone" id="phone" placeholder="Enter your phone number" required />
        </div>
        <div className="col-12 text-center">
          <button className="btn btn-primary" type="submit">Create Account</button>
        </div>
      </form>
      <p className="signin-link">
        Already have an account? <Link to="/SponserSignin">Sign In</Link>
      </p>
    </div>
  );
}

export default SponserRegistration;

