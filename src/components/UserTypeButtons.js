import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './UserTypeButtons.css';

const UserTypeButtons = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);
    const handleUserTypeSelection = (userType) => {
        if (userType === 'learner') {
          // For learner: check if already logged in
          if (isAuthenticated) {
            // If logged in, go directly to profile
            navigate('/profile');
          } else {
            // If not logged in, store user type and go to login
            localStorage.setItem('selectedUserType', 'learner');
            navigate('/login');
          }
        } else if (userType === 'mentor') {
          // For mentor: always go to mentor section regardless of auth status
          navigate('/mentorSection');
        }
      };
  return (
    <div className="user-type-section">
      <h2>How would you like to use our platform?</h2>
      <div className="button-container">
        <button className="user-type-button learner-button" onClick={() => handleUserTypeSelection('learner')}>
          <span className="button-icon">👨‍🎓</span>
          <h3>Learner</h3>
          <p>Learn at your own pace, get help when you're stuck, and master any subject.</p>
        </button>
        
        <button className="user-type-button mentor-button" onClick={() => handleUserTypeSelection('mentor')}>
          <span className="button-icon">👨‍🏫</span>
          <h3>Mentor</h3>
          <p>Create courses, track progress, and help learners achieve their goals.</p>
        </button>
      </div>
    </div>
  );
};

export default UserTypeButtons;