import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/search.png';
import { AuthContext } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isSearchOpen) {
        setIsSearchOpen(false);
      }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setIsSearchOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY + 50 && currentScrollY > 100) {
        setIsNavbarVisible(false);
        if (isSearchOpen) setIsSearchOpen(false);
      } else if (currentScrollY < lastScrollY - 10) {
        setIsNavbarVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isSearchOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-mobile-controls">
          <button 
            className={`menu-toggle ${isMenuOpen ? 'menu-open' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="menu-icon-bar"></span>
            <span className="menu-icon-bar"></span>
            <span className="menu-icon-bar"></span>
            
          </button>
        </div>
        
        <div className="navbar-center">
          <Link to="/" className="logo-container">Learner 
           {/*} <img src={logo} alt="Khan Academy Logo" className="logo" />*/}
          </Link>
        </div>
        
        <div className="navbar-desktop-controls">
          <form className="search-form desktop-search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              autoFocus
            />
            <button type="submit" className="search-button">
              <img src={searchIcon} alt="Search" className="search-icon" />
            </button>
          </form>
          {isAuthenticated ? (
            <div className="user-profile-section">
              <Link to={user.role === 'learner' ? '/profile' : '/'} className="username-display">
                {user.username}
              </Link>
              <button onClick={logout} className="logout-button">
                Logout
              </button>
            </div>
          ) : (
            <div className="auth-links desktop-auth">
              <Link to="/login" className="login-button">Log in</Link>
              <Link to="/signup" className="signup-button">Sign up</Link>
            </div>
          )}
        </div>

        <div className="navbar-mobile-controls right">
          <button 
            className="search-toggle"
            onClick={toggleSearch}
            aria-label="Toggle search"
          >
            <img src={searchIcon} alt="Search" className="search-icon" />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {isAuthenticated ? (
            <div className="mobile-user-profile">
              <Link to={user.role === 'learner' ? '/profile' : '/'} className="mobile-nav-link" onClick={toggleMenu}>
                {user.username}
              </Link>
              <button onClick={() => {logout(); toggleMenu();}} className="mobile-nav-link logout-link">
                Logout
              </button>
            </div>
          ) : (  
            <div className="mobile-auth-links">
              <Link to="/login" className="mobile-nav-link" onClick={toggleMenu}>Log in</Link>
              <Link to="/signup" className="mobile-nav-link" onClick={toggleMenu}>Sign up</Link>
            </div>
          )}
          <div className="mobile-nav-links">
            <Link to="/" className="mobile-nav-link" onClick={toggleMenu}>Home</Link>
            <Link to="/courses" className="mobile-nav-link" onClick={toggleMenu}>Courses</Link>
            <Link to="/profile" className="mobile-nav-link" onClick={toggleMenu}>My profile</Link>
            <Link to="/about" className="mobile-nav-link" onClick={toggleMenu}>About</Link>
          </div>
        </div>
      </div>

      <div className={`mobile-search-dropdown ${isSearchOpen ? 'open' : ''}`}>
        <form className="mobile-search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search courses, videos, and more..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mobile-search-input"
            autoFocus={isSearchOpen}
          />
          <button type="submit" className="mobile-search-button">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
