import React from 'react';
import AboutSection from '../components/AboutSection';
import CourseSection from '../components/CourseSection';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import UserTypeButtons from '../components/UserTypeButtons';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <UserTypeButtons />
      <CourseSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default HomePage;