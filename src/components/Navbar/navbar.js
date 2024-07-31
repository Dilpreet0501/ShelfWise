import React, { useState, useRef } from 'react';
import { FaSun, FaMoon, FaSearch } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDarkMode } from '../../Darkmode';
import axios from 'axios';
import './navbar.css';

const Navbar = () => {
  // const [DarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navRef = useRef(null);
  const navigate = useNavigate();  
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  // const toggleDarkMode = () => {
  //   setIsDarkMode(!DarkMode);
  // };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    
    if (searchQuery.trim() === '') return; 

    console.log('Searching for:', searchQuery);

    try {
      const response = await axios.post('https://shelfwise-backend-render.onrender.com/booksget',{  
        book_name: searchQuery
      });
       
      const data = response.data;
      if (response.status === 200){
      console.log(data.getbooks)
        navigate('/books', { state: { recommendations: data.getbooks } });
      
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    
    setSearchQuery(''); 
    if (navRef.current) {
      navRef.current.value = ''; 
    }
  };
const  switchpg=async()=>{
  try {
    const response = await axios.get('https://shelfwise-backend-render.onrender.com/high-rated')
 
     
    const data = response.data;
    if (response.status === 200){
    console.log(data)
      navigate('/books', { state: { recommendations: data } });
    
    } else {
      console.error(data.error);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
  return (
    <div className='bar'>
      <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="navbar-brand">
          <div className={`logo ${isDarkMode ? 'dark' : 'light'}`}/>
        </div>
        <div className="navbar-menu">
          <ul>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/about" >About Us</NavLink></li>
            <li><NavLink to="/quiz" >Explore</NavLink></li>
            <li onClick={switchpg} style={{cursor:'pointer'}}>Popular Books</li>
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
