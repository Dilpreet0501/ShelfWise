import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

 import "./about.css"

const Home = () => {
  return (
    <>
    
    
        <div className="content">
          
          <div className="img">
            <img  className='grp' src="./group_mini.png" alt='grp'/>
            </div>
          <div className="text">
            <h1 className='head'><FontAwesomeIcon icon={faHandPointRight} style={{color: "#c51550",}} /> About <b>ShelfWise</b> </h1>
           <br/>
           <br/> <span className='para'>At ShelfWise, we enhance your reading experience by providing personalized book recommendations. Our recommendation system uses advanced collaborative filtering techniques, incorporating K-Nearest Neighbors (KNN) and Singular Value Decomposition (SVD) methods.
  <br/><br/>
<h2 className='sub'>How It Works?</h2>

Our collaborative recommendation system analyzes ratings of books and authors to tailor suggestions just for you. By leveraging the preferences of similar users through KNN and uncovering hidden patterns with SVD, we ensure that our recommendations are accurate and relevant.
<br/>
Discover your next favorite book with ShelfWise—where your reading journey becomes personalized and enjoyable.
<br/><br/>

<h3 className='redhead'>Happy Reading!</h3></span>
              
          </div>
          </div>
       
      
  </>
  );
};

export default Home;