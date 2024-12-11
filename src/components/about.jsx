import React from 'react';
import './about.css'; // Add styles here

const About = () => {
  return (
    <div className="about-page">
      <header className="hero-section">
        <h1>Empowering Agriculture Through Technology</h1>
        <p>Innovative solutions for a sustainable agricultural future.</p>
        <img src="images/fertilizer5.jpg" alt="Agriculture Field" />
      </header>
      
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to leverage technology to support farmers, enhance crop
          productivity, and promote sustainable farming practices. We aim to bridge
          the gap between traditional farming techniques and modern innovations.
        </p>
      </section>
      
      <section className="features-section">
        <h2>What We Offer</h2>
        <ul>
          <li>Smart irrigation systems</li>
          <li>Weather-based crop advisory</li>
          <li>Fertilizer and pesticide recommendations</li>
          <li>Real-time soil monitoring</li>
          <li>Market price insights</li>
        </ul>
      </section>
      
      <section className="impact-section">
        <h2>Our Impact</h2>
        <p>
          With over 5000 farmers benefited and 10,000 acres of land optimized,
          we continue to make a difference in the agricultural community.
        </p>
        <img src="images/fertilizer3.jpg" alt="Farmers" />
      </section>
      
      <footer className="contact-section">
        <h2>Get in Touch</h2>
        <p>Email: ravisatesh@agritech.com | Phone: +91 12345 67890</p>
      </footer>
    </div>
  );
};

export default About;
