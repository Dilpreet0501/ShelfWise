import React from 'react';

import BookShow from './bookshow.js';

const Book=()=> {
    const books = [
        {
          image: "./ctc1.png",
          name: 'Diverse Literary Adventures',
          rating: 4.5,
          author: 'Author Name'
        },
        {
          image: "./ctc1.png",
          name: 'Cost-Efficient Reading',
          rating: 4.7,
          author: 'Author Name'
        },
        {
          image: "./ctc1.png",
          name: 'Connect with Like-Minded Readers',
          rating: 4.8,
          author: 'Author Name'
        },
        {
          image: "./ctc1.png",
          name: 'Revitalize Your Bookshelf',
          rating: 4.9,
          author: 'Author Name'
        }
      ];
  return (
    <div className="bookie">
      <div className="books-container">
        {books.map((book, index) => (
          <BookShow
            key={index}
            image={book.image}
            name={book.name}
            rating={book.rating}
            author={book.author}
          />
        ))}
      </div>
    </div>
  );
}

export default Book;
