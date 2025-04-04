import React from 'react';
import AboutSection from '../components/AboutSection';
import Courses from '../components/Courses';
import CourseSection from '../components/CourseSection';
import Hero from '../components/Hero';
import Information from '../components/Information';
import LearnerPlatform from '../components/LearnerPlatform';
import UserTypeButtons from '../components/UserTypeButtons';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <UserTypeButtons />
      <Courses/>
      <LearnerPlatform />
      
      
      <AboutSection />
      <Information />
      <CourseSection />
    
    </div>
  );
};

export default HomePage;