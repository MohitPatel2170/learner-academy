import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './MentorSection.css';

const MentorSection = () => {
  const { isAuthenticated, user } = useContext(AuthContext);

 // if (!isAuthenticated || user.role !== 'mentor') {
 //   return <Navigate to="/login" />;
 // }

  const username = user ? user.username : 'Guest';

  const courses = [
    { id: 1, title: 'Advanced JavaScript', studentsEnrolled: 25 },
    { id: 2, title: 'React Mastery', studentsEnrolled: 30 },
    { id: 3, title: 'Full-Stack Development', studentsEnrolled: 40 },
  ];

  return (
    <div className="teacher-profile-container">
      <div className="teacher-profile-header">
        <h1>Welcome, {username}!</h1>
        <p>Role: Mentor / Instructor</p>
      </div>

      <div className="teacher-profile-content">
        <h2>Your Courses</h2>
        <button className="offered-courses-btn">Offered Courses</button>

        <div className="courses-list">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <h3>{course.title}</h3>
              <p>Total Students Enrolled: {course.studentsEnrolled}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorSection;