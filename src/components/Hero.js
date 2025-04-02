import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/hero-image.jpg'; // You'll need to add this image
import './Hero.css';


const Hero = () => {
    const navigate = useNavigate();
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>For every student, every classroom. Real results.</h1>
          <p>
            We're a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.
          </p>
          <button className="hero-button" onClick={() =>navigate ('/Courses')}>Start learning now</button>
        </div>
        <div className="hero-image-container">
          <img src={heroImage} alt="Students learning" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;