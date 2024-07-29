import React, { useState, useRef } from 'react';
import { FaSun, FaMoon, FaSearch, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
 
  const [searchQuery, setSearchQuery] = useState('');
  const navRef = useRef(null);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

 

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    
    console.log('Searching for:', searchQuery);
    if (navRef.current) {
      navRef.current.value = ''; 
  }
  };

  return (
    <div className='bar'>
      <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="navbar-brand">
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="navbar-menu" >
          <ul>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/about" >About Us</NavLink></li>
            <li><NavLink to="/quiz" >Explore</NavLink></li>
            <li><NavLink to="/books">Popular Books</NavLink></li>
            <li><NavLink to="/contact" >Contact Us</NavLink></li>
            
          </ul>
        </div>
        <div className="navbar-end">
          <form onSubmit={handleSearchSubmit} className="search-form">
            <input
              type="text"
              placeholder="Search books..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
              ref={navRef}
            />
            <button type="submit" className="search-button">
              <FaSearch />
            </button>
          </form>
          <button onClick={toggleDarkMode} className="mode-toggle">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          {/* <button className="menu-toggle" onClick={toggleMenu}>
            <FaBars />
          </button> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;