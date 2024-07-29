import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPeace } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import About from "./../../pages/About/about"
 import "./home.css"
import Contact from '../../pages/Contact/contact';

const Home = () => {
  return (
    <>
    
    
        <div className="main-content">
          <div className="text-content">
            <h1 className='h1'> Book Recommendation Engine <FontAwesomeIcon icon={faHandPeace} style={{color: "#c51550",}} /></h1>
           <br/>
           <br/> <p className='p'><b>Get perfect book recommendations just for you.
             Take our Reader Type quiz and discover what to read next.</b></p>
               <br/> <br/>
               <span className='span'>Start making custom lists, leave unique book reviews, and receive personalized book recommendations based on your reading personality. Created by book lovers, for book lovers. Bookfinity makes it easy to discover your next favorite read.</span>
               <br/> <br/><NavLink to="/quiz"><button className="read-more">Start Quiz</button></NavLink>
          </div>
          <div className="img-swap">
          </div>
       
        </div>
        <About/>
        <Contact/>
  </>
  );
};

export default Home;
