import React from 'react';
import './Aboutus.css';
import aboutimg from '../assets/about.jpg';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-header">
        <h2>ALTRUSERVE</h2>
        <p><h3>Empowering communities for a sustainable future.</h3></p>
      </header>

      <section className="about-section">
        <div className="about-image">
          <img src={aboutimg} alt="NGO Team" />
        </div>
        <div className="about-text">
          <h2>who we are</h2>
          <p>
            <h5>
            Altruserve is a provider of managed IT services, offering businesses comprehensive technology solutions, including cloud computing, cybersecurity, and IT infrastructure management. They specialize in ensuring optimal system performance, data security, and disaster recovery. Their services are designed to minimize downtime and streamline operations through proactive monitoring and maintenance. Altruserve also tailors its offerings to fit the specific needs of different organizations.
            </h5>
            </p>
        
        </div>
      </section>

      <section className="vision-mission">
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
          To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and security. We strive to be the trusted partner for companies seeking reliable IT infrastructure, robust cybersecurity, and seamless cloud services. Our goal is to create an environment where businesses can thrive, free from technology-related concerns, while embracing growth and transformation. At Altruserve, we envision a future where technology fuels business success and resilience.






</p>
          </div>
        <div className="mission">
          <h2>Our Mission</h2>
          <p> 
          Altruserve mission is to provide exceptional IT services that enhance business efficiency, security, and resilience. They are dedicated to delivering customized technology solutions that meet the unique needs of each client, ensuring long-term success.
          </p>
        </div>
      </section>

      <footer className="about-footer">
        <p>© 2024 ALTRUSERVE NGO Management. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
