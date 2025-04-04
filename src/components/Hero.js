import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import indianFlag from '../assets/indian-flag.jpg';
import './Hero.css';

// Import your slide images
import slideImage1 from '../assets/slide-image1.jpg';
import slideImage2 from '../assets/slide-image2.jpg';
import slideImage3 from '../assets/slide-image3.jpg';

const Hero = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slideImages = [
    { src: slideImage1, alt: "Learning experience 1" },
    { src: slideImage2, alt: "Learning experience 2" },
    { src: slideImage3, alt: "Learning experience 3" }
  ];
  
  // Handle phone number input
  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/signup');
  };
  
  // Image slider functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideImages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="hero-container">
      <div className="hero-box user-input-box">
        <h1 className="hero-title">Crack your goals with<br/> India's top educators</h1>
        <p className="hero-subtitle">
          Over <span className="highlight-text">10 crore</span> learners trust us for their preparation
        </p>
        <form onSubmit={handleSubmit} className="phone-form">
          <div className="input-container">
          <div className="country-code">
              <img src={indianFlag} alt="Indian flag" className="flag-icon" />
              <span>+91</span>
              <span className="dropdown-arrow">▼</span>
              </div>
            <input
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="Enter your phone number"
              className="phone-input"
            />
          </div>
          <p className="otp-text">We'll send an OTP for verification</p>

          <button type="submit" className="start-free-button">
            Start for free
          </button>
        </form>
      </div>
      
      <div className="hero-box slider-box">
        <div className="slider-container">
          {slideImages.map((image, index) => (
            <div 
              key={index} 
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="slide-image" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;