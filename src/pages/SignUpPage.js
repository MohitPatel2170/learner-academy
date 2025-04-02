import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AuthPages.css';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    role: 'learner' // Default role
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    // Get existing users or initialize empty array
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if username already exists
    if (users.some(user => user.username === formData.username)) {
      setError('Username already exists');
      return;
    }
    
    // Add new user
    const newUser = {
      username: formData.username,
      password: formData.password,
      role: formData.role
    };
    
    // Save to localStorage
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
    
    // Auto login the user
    localStorage.setItem('currentUser', JSON.stringify({
      username: newUser.username,
      role: newUser.role
    }));
    
    // Redirect to home page
    navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Create your account</h1>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>I am a:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="learner"
                  checked={formData.role === 'learner'}
                  onChange={handleChange}
                />
                Learner
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="mentor"
                  checked={formData.role === 'mentor'}
                  onChange={handleChange}
                />
                Mentor
              </label>
            </div>
          </div>
          
          <button type="submit" className="auth-button">Sign up</button>
        </form>
        
        <p className="auth-redirect">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
