// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <div className="footer-section">
          <h3>Learner</h3>
          <p>Our mission is to provide a free,<p> world-class education to anyone, anywhere.</p></p></div>

        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li><Link to="/about">Our Mission</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><Link to="/help">Help Center</Link></li>
            <li><Link to="/contact">Contact Support</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Community</h3>
          <ul>
            <li><Link to="/mentors">Become a Mentor</Link></li>
            <li><Link to="/contribute">Contribute</Link></li>
            <li><Link to="/forums">Forums</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Learning Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;