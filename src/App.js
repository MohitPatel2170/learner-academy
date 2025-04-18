import React, { useEffect, useLocation, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Course from './components/Courses';
import CourseSection from './components/CourseSection';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import MentorProfile from './components/MentorSection';
import Navbar from './components/Navbar';
import UserProfile from './components/UserProfile';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';

const ModalManager = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    // Show modal when path is /login
    setLoginModalOpen(location.pathname === '/login');
  }, [location]);
  
  return isLoginModalOpen ? <LoginModal /> : null;
};

function App() {

  // Add this useEffect hook here
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Add a default user if none exist
    if (users.length === 0) {
      const defaultUser = [
        {
        username: "admin",
        password: "password123",
        role: "learner"
      },
      {
        username: "mentor",
        password: "mentor123",
        role: "mentor"
      }];
      
      localStorage.setItem('users', JSON.stringify(defaultUser));
      console.log("Default user created: ");
    }
  }, []);
  return (
    <AuthProvider>
    <Router>
    <div className="App">
      <Navbar />
      <main className="main-content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/course" element={<CourseSection />} />
        <Route path="/mentorSection" element={<MentorProfile />} />
        <Route path="/courses" element={<Course />} />

      </Routes>
     <Footer/>
      </main>
    </div>
  </Router>
  </AuthProvider>
  );
}

export default App;
