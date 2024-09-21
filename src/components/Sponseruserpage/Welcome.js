import React from 'react';
import './WelcomePage.css';  // Import styles

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      {/* Welcome Message Section */}
      <section className="welcome-message">
        <h1>Welcome to AltruServe</h1>
        <p>
          AltruServe is your platform to support NGOs, track your donations, and manage your contributions. Whether you're a sponsor or a registered NGO, we provide tools to make giving easier and more impactful.
        </p>
      </section>

      {/* Dashboard or Overview Section */}
      <section className="dashboard-overview">
        <h2>Dashboard Overview</h2>
        <div className="overview-grid">
          {/* Upcoming Events */}
          <div className="card upcoming-events">
            <h3>Upcoming Events</h3>
            <ul>
              <li>Charity Run 2024 - May 15</li>
              <li>NGO Fundraiser Gala - June 5</li>
              <li>Tree Planting Initiative - July 10</li>
            </ul>
            <button className="btn">View All Events</button>
          </div>

          {/* Recent Activities */}
          <div className="card recent-activities">
            <h3>Recent Activities</h3>
            <ul>
              <li>Donation of $500 to Clean Water Initiative</li>
              <li>Registered for "Education for All" campaign</li>
              <li>Volunteered at Local Community Center</li>
            </ul>
            <button className="btn">View Activity Log</button>
          </div>
        </div>
      </section>

      {/* Instruction and Call to Action Section */}
      <section className="instructions">
        <h2>Get Started</h2>
        <p>Here are a few ways you can start making a difference:</p>
        <div className="cta-buttons">
          <button className="btn primary">Register as a Sponsor</button>
          <button className="btn secondary">View NGOs</button>
          <button className="btn primary">Make a Donation</button>
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
