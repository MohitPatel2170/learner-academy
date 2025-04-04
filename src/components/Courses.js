import React, { useState } from 'react';
import './Courses.css';

// Import icons (you'll need to add these to your project)
import educatorsIcon from '../assets/educators-icon.jpg';
import exploreIcon from '../assets/explore-icon.jpg';
import mathIcon from '../assets/math-icon.png';
import scienceIcon from '../assets/science-icon.jpg';
import stateIcon from '../assets/state-icon.png';

const Course = () => {
  // State to track which dropdowns are open
  const [openDropdowns, setOpenDropdowns] = useState({});

  // Toggle dropdown state
  const toggleDropdown = (id) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Course data
  const leftCourses = [
    {
      id: 'math-ncert',
      icon: mathIcon,
      title: 'Math (NCERT)',
      content: [
        'Numbers and Operations',
        'Algebra',
        'Geometry',
        'Measurement',
        'Data Analysis and Probability'
      ]
    },
    {
      id: 'math-revision',
      icon: mathIcon,
      title: 'Math (NCERT) Revision',
      content: [
        'Practice Problems',
        'Mock Tests',
        'Previous Year Questions',
        'Quick Review Materials'
      ]
    },
    {
      id: 'math-foundations',
      icon: mathIcon,
      title: 'Math foundations',
      content: [
        'Arithmetic',
        'Basic Algebra',
        'Geometry Basics',
        'Number Theory',
        'Logic and Reasoning'
      ]
    },
    {
      id: 'math-maharashtra',
      icon: mathIcon,
      title: 'Math (Maharashtra)',
      content: [
        'Maharashtra Board Syllabus',
        'State-specific Problems',
        'Exam Preparation',
        'Local Curriculum'
      ]
    }
  ];

  const rightCourses = [
    {
      id: 'science-ncert',
      icon: scienceIcon,
      title: 'Science (NCERT)',
      content: [
        'Physics',
        'Chemistry',
        'Biology',
        'Earth Science',
        'Environmental Science'
      ]
    },
    {
      id: 'state-boards',
      icon: stateIcon,
      title: 'All State boards',
      content: [
        'Maharashtra Board',
        'Karnataka Board',
        'Tamil Nadu Board',
        'Kerala Board',
        'Other State Boards'
      ]
    },
    {
      id: 'explore-more',
      icon: exploreIcon,
      title: 'Explore more',
      content: [
        'Computer Science',
        'Economics',
        'Arts & Humanities',
        'Test Preparation',
        'Life Skills'
      ]
    },
    {
      id: 'khan-educators',
      icon: educatorsIcon,
      title: 'Khan for Educators',
      content: [
        'Teacher Resources',
        'Classroom Activities',
        'Progress Tracking',
        'Professional Development',
        'Community Forum'
      ]
    }
  ];

  // Function to render course items
  const renderCourseItem = (course) => {
    const isOpen = openDropdowns[course.id] || false;
    
    return (
      <div key={course.id} className="course-item">
        <div 
          className="course-header"
          onClick={() => toggleDropdown(course.id)}
        >
          <div className="course-title-container">
            <div className={`course-icon ${course.id}`}>
              <img src={course.icon} alt={course.title} />
            </div>
            <span className="course-title">{course.title}</span>
          </div>
          <div className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>
            &#9662;
          </div>
        </div>
        
        {isOpen && (
          <div className="dropdown-content">
            <ul>
              {course.content.map((item, index) => (
                <li key={index}>
                  <a href={`#${course.id}-${index}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="divider"></div>
      </div>
    );
  };

  return (
    <div className="courses-container">
      <div className="courses-row">
        <div className="courses-column">
          {leftCourses.map(course => renderCourseItem(course))}
        </div>
        
        <div className="courses-column">
          {rightCourses.map(course => renderCourseItem(course))}
        </div>
      </div>
    </div>
  );
};

export default Course;