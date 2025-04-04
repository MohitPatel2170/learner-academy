import React, { useEffect, useRef, useState } from 'react';
import learnerImage1 from '../assets/ActiveLearning.jpg';
import learnerImage4 from '../assets/FoundationImage.jpg';
import learnerImage6 from '../assets/JeeNeet.png';
import learnerImage3 from '../assets/LiveLearning.jpg';
import learnerImage2 from '../assets/StudyPack.png';
import learnerImage5 from '../assets/TwoTeachers.png';

import './CourseSection.css';

const CourseSection = () => {
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      setMaxScroll(scrollWidth);
    }
  }, []);

  const courses = [
    {
      id: 1,
      image: learnerImage1,
      ageGroup: 'LKG - Class 3',
      title: 'Learner Early Learn Program',
      description: 'An Active Learning Adventure'
    },
    {
      id: 2,
      image: learnerImage2,
      ageGroup: 'Class 4 - 10',
      title: 'Learner The Learning App',
      description: 'Self-Study Pack'
    },
    {
      id: 3,
      image: learnerImage3,
      ageGroup: 'Class 4 - 10',
      title: 'Learner Live Classes',
      description: 'Learner LIVE Classes'
    },
    {
      id: 4,
      image: learnerImage4,
      ageGroup: 'Class 8 - 10',
      title: 'Learner Foundation Program',
      description: 'Foundation Course JEE | NEET'
    },
    {
      id: 5,
      image: learnerImage5,
      ageGroup: 'Class 4 - 10',
      title: 'Learner Tuition Centre',
      description: 'Two-Teacher Advantage'
    },
    {
      id: 6,
      image: learnerImage6,
      ageGroup: 'Class 11 - 12',
      title: ' Learner Integration Program',
      description: 'Complete JEE/NEET Preparation'
    }
  ];

  const handleScroll = (direction) => {
    const scrollAmount = carouselRef.current.clientWidth * 0.8;
    const newPosition = direction === 'left' 
      ? Math.max(scrollPosition - scrollAmount, 0)
      : Math.min(scrollPosition + scrollAmount, maxScroll);
    
    carouselRef.current.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
    
    setScrollPosition(newPosition);
  };

  return (
    <div className="course-section-container">
      <div className="course-section-header">
        <h1>Explore our learning Programs</h1>
        <button className="explore-all-btn">Explore All</button>
      </div>
      
      <div className="carousel-container">
        <button 
          className={`nav-button prev ${scrollPosition <= 0 ? 'disabled' : ''}`}
          onClick={() => handleScroll('left')}
          aria-label="Previous courses"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>
        
        <div className="carousel" ref={carouselRef}>
          {courses.map(course => (
            <div className="course-card" key={course.id}>
              <div className="course-image-container">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="course-image"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300x200?text=BYJU'S+Course";
                  }}
                />
                <div className="course-badge">{course.ageGroup}</div>
                {course.description && (
                  <div className="course-description">{course.description}</div>
                )}
              </div>
              <div className="course-info">
                <h3>{course.title}</h3>
                <a href="#" className="read-more-link">Read more</a>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className={`nav-button next ${scrollPosition >= maxScroll ? 'disabled' : ''}`}
          onClick={() => handleScroll('right')}
          aria-label="Next courses"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CourseSection;