import React from 'react';
import './book.css';

const BookShow = ({ image, name, rating, author }) => {
  return (
    <div className="book-card">
    <div className="dot"></div>
    
    <img src={image} alt={name} className="book-image" />
    <h2 className="book-name">{name}</h2>
    <p className="book-author">by {author}</p>
    <p className="book-rating">Rating: {rating}</p>
    {/* <button className="read-more">Read More</button> */}
  </div>
  );
};

export default BookShow;
