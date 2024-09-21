import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignOut.css';

const SignOut = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    setShowConfirmation(true); // Show the confirmation box
  };

  const confirmSignOut = () => {
    // Redirect to home page on confirmation
    navigate('/');
  };

  const cancelSignOut = () => {
    setShowConfirmation(false); // Hide the confirmation box on cancel
  };

  return (
    <div className="signout-container">
      {!showConfirmation ? (
        <div className="confirmation">
          <p>Are you sure you want to sign out?</p>
          <div className="confirmation-buttons">
            <button onClick={handleSignOut} className="confirm-btn">Sign Out</button>
          </div>
        </div>
      ) : (
        <div className="confirmation">
          <p>Please confirm your action:</p>
          <div className="confirmation-buttons">
            <button onClick={confirmSignOut} className="confirm-btn">Confirm</button>
            <button onClick={cancelSignOut} className="cancel-btn">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignOut;
