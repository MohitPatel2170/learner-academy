// src/components/UserProfile.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './UserProfile.css'; // You'll need to create this CSS file

const UserProfile = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  
  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Welcome, {user.username}!</h1>
        <p>Role: {user.role}</p>
      </div>
      
      <div className="profile-content">
        <h2>Your Learning Dashboard</h2>
        
        <div className="dashboard-section">
          <h3>Recommended Courses</h3>
          <div className="course-cards">
            {/* Example course cards */}
            <div className="course-card">
              <h4>Introduction to Programming</h4>
              <p>Learn the basics of programming with our interactive lessons.</p>
              <button className="continue-btn">Continue Learning</button>
            </div>
            <div className="course-card">
              <h4>Web Development Fundamentals</h4>
              <p>Master HTML, CSS, and JavaScript for web development.</p>
              <button className="start-btn">Start Course</button>
            </div>
          </div>
        </div>
        
        <div className="dashboard-section">
          <h3>Your Progress</h3>
          <div className="progress-summary">
            <div className="progress-stat">
              <span className="stat-value">3</span>
              <span className="stat-label">Courses in Progress</span>
            </div>
            <div className="progress-stat">
              <span className="stat-value">12</span>
              <span className="stat-label">Lessons Completed</span>
            </div>
            <div className="progress-stat">
              <span className="stat-value">85%</span>
              <span className="stat-label">Current Course Progress</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;