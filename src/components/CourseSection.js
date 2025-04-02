import React from 'react';
import MathIcon from '../assets/math-icon.png';
import ProgrammingIcon from '../assets/Programming-icon.png';
import ScienceIcon from '../assets/science-icon.jpg';
import './CourseSection.css';

const CourseSection = () => {
  const courses = [
    {
      id: 1,
      title: 'Mathematics',
      description: 'Learn arithmetic, algebra, geometry, calculus and more',
      image: MathIcon,
    },
    {
      id: 2,
      title: 'Computer Programming',
      description: 'Learn to code with JavaScript, Python, and more',
      image: ProgrammingIcon,
    },
    {
      id: 3,
      title: 'Science',
      description: 'Explore biology, chemistry, physics, and other sciences',
      image: ScienceIcon,
    },
  ];

  return (
    <div className="course-section">
      <h2>Explore our Popular courses</h2>
      <div className="course-cards">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-icon">
              <img src={course.image} alt={course.title} />
            </div>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button className="course-button">Explore</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSection;