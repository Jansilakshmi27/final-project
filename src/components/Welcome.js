import React from 'react';
import './welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-message">
        <h1>Welcome to the Sponsor Portal</h1>
        <p>
          As a sponsor, you can easily manage your donations, view transaction history, and explore NGOs that align with your values. Let’s work together to make a difference!
        </p>
      </div>
      
      <div className="user-guide">
        <h2>How to Use the Portal</h2>
        <ol>
          <li><strong>Manage Donations:</strong> Keep track of all your donations and their impact.</li>
          <li><strong>View Transactions:</strong> Access a detailed report of your sponsorship transactions.</li>
          <li><strong>Explore NGOs:</strong> Discover new organizations working on causes that matter to you.</li>
        </ol>
      </div>

    </div>
  );
};

export default Welcome;
