// // ContactUs.js

// import React from 'react';
// import './ContactUs.css';

// const ContactUs = () => {
//   return (
//     <div className="contact-us">
//       <h2>Contact Us</h2>
//       <form>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message:</label>
//           <textarea id="message"></textarea>
//         </div>
//         <a href= "mailto:727721euit004@skcet.ac.in ? {subject} = {subject}" > To send message </a>  
//       </form>
//     </div>
//   );
// };

// export default ContactUs;

import React from 'react';
import { connect } from 'react-redux';
import { updateName, updateEmail, updateMessage } from './actions';
import './ContactUs.css';

const ContactUs = (props) => {
  const { name, email, message, updateName, updateEmail, updateMessage } = props;

  const handleNameChange = (e) => {
    updateName(e.target.value);
  };

  const handleEmailChange = (e) => {
    updateEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    updateMessage(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission or other actions here
    // You can access the form data from the Redux state using `name`, `email`, and `message`
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" value={message} onChange={handleMessageChange}></textarea>
        </div>
        <button type="submit">Send Message</button>
        <button><a href= "mailto:727721euit004@skcet.ac.in ? {subject} = {subject}" >Email us to </a></button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.name,
  email: state.email,
  message: state.message,
});

const mapDispatchToProps = {
  updateName,
  updateEmail,
  updateMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
