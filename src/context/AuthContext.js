// src/context/AuthContext.js
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  
  
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    const currentUser = localStorage.getItem('currentUser'); // Fixed case sensitivity
    
    // Only set authenticated if explicitly true
    if (authStatus === 'true' && currentUser) {
      try {
        setUser(JSON.parse(currentUser));
        setIsAuthenticated(true);
      } catch (error) {
        // Handle potential JSON parse error
        console.error("Error parsing user data:", error);
        // Clear invalid data
        localStorage.removeItem('currentUser');
        localStorage.removeItem('isAuthenticated');
      }
    }
  }, []);
  
  // Login function
  const login = (userData) => {
    // For local dummy authentication:
    // 1. In a real app, you'd validate credentials against a backend
    // 2. Here we'll just store the user data and set authenticated
    
    setUser(userData);
    setIsAuthenticated(true);
    
    // Save to localStorage
    localStorage.setItem('currentUser', JSON.stringify(userData));
    localStorage.setItem('isAuthenticated', 'true');
  };
  
  // Logout function
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    
    // Clear localStorage
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isAuthenticated');
  };
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};