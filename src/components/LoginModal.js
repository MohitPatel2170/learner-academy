import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../pages/AuthPages.css';

const LoginModal = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  // Get the login function from AuthContext
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.username === 'admin' && formData.password === 'password123') {
        // Login with admin user data
        login({
          username: 'admin',
          role: 'admin'
        });
        
        // Navigate to profile page
        navigate('/profile');
      } else {
        setError('Invalid username or password');
      }
    };

    const handleClose = () => {
      navigate('/'); // Go back to homepage
    };

  return (
    <div className="modal-overlay">
    <div className="modal-content">
      <div className="modal-header">
        <button className="close-button" onClick={handleClose}>✕</button>
      </div>
      
      <h1>Log in to your account</h1>
      
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
        
        <button type="submit" className="auth-button">Log in</button>
      </form>
      
      <p className="auth-redirect">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  </div>
);
}
export default LoginModal;