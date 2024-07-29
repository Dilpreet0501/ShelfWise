import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <>
    <div className='contact'>
        <div className='txt'>
        <h1 className='ctc'>Contact Us!</h1></div>
    <div className="contact-container">
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="your-email@example.com" />

        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="Subject" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Your Message"></textarea>

        <button type="submit">Send Message</button>
      </form>
      <div class="image-fader">
  <img src="/ctc1.png" alt="ctc1"/>
  <img src="/ctc5.png" alt='ctc5' />
  <img src="/ctc3.png" alt='ctc3' />
  <img src="/ctc4.png" alt='ctc4'/>

      </div>
    </div>
    </div>
    </>
  );
};

export default Contact;

