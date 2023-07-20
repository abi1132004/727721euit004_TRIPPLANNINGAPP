// ContactUs.js

import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message"></textarea>
        </div>
        <a href= "mailto:727721euit004@skcet.ac.in ? {subject} = {subject}" > To send message </a>  
      </form>
    </div>
  );
};

export default ContactUs;
