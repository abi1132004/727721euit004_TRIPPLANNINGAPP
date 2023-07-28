
// import React from 'react';
// import { connect } from 'react-redux';
// import './Feedback.css';
// import {
//   updateFirstName,
//   updateLastName,
//   updateEmail,
//   updatePhoneNumber,
//   updateRating,
//   updateQuery,
//   submitForm
// } from './actions';

// function Feedback(props) {
//   const {
//     firstName,
//     lastName,
//     email,
//     phoneNumber,
//     rating,
//     query,
//     isSubmitted,
//     formError,
//     handleFirstNameChange,
//     handleLastNameChange,
//     handleEmailChange,
//     handlePhoneNumberChange,
//     handleRatingChange,
//     handleQueryChange,
//     handleSubmit,
//     isFormValid
//   } = props;

//   return (
//     <div>
//       <div className="contact_us_2">
//         <div className="responsive-container8-block big-container8">
//           <div className="blueBG"></div>
//           <div className="responsive-container8-block container8">
//             <center>
//           <form className="form-box1" onSubmit={handleSubmit}>
//               <div className="container8-block form-wrapper">
//                 <p className="text-blk contactus-head">Great To See You Here</p>
//                 <p className="text-blk contactus-subhead">Your Feedbacks Are Valuable To Us</p>
//                 <div className="responsive-container8-block">
//                   <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
//                     <p className="text-blk input-title">FIRST NAME</p>
//                     <input
//                       type="text"
//                       className="input23"
//                       id="ijowk"
//                       name="FirstName"
//                       placeholder="Enter first name..."
//                       required
//                       value={firstName}
//                       onChange={handleFirstNameChange}
//                     />
//                   </div>
//                   <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
//                     <p className="text-blk input-title">LAST NAME</p>
//                     <input
//                       type="text"
//                       className="input23"
//                       id="indfi"
//                       name="Last Name"
//                       placeholder="Enter last name..."
//                       required
//                       value={lastName}
//                       onChange={handleLastNameChange}
//                     />
//                   </div>
//                   <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
//                     <p className="text-blk input-title">EMAIL</p>
//                     <input
//                       type="email"
//                       className="input23"
//                       id="ipmgh"
//                       name="Email"
//                       placeholder="Enter email..."
//                       required
//                       value={email}
//                       onChange={handleEmailChange}
//                     />
//                   </div>
//                   <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
//                     <p className="text-blk input-title">PHONE NUMBER</p>
//                     <input
//                       type="tel"
//                       className="input23"
//                       id="imgis"
//                       name="PhoneNumber"
//                       placeholder="Enter phone number..."
//                       required
//                       value={phoneNumber}
//                       onChange={handlePhoneNumberChange}
//                     />
//                     </div>
//                     <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
//                     <p className="text-blk input-title">Rating</p>
//                     <input
//                       type="number"
//                       className="input23"
//                       id="imgis"
//                       name="rating"
//                       placeholder="out 0f 10"
//                       required
//                       value={rating}
//                       onChange={handleRatingChange}
//                     />
//                   </div>
//                   <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i">
//                     <p className="text-blk input-title">WHAT DO YOU HAVE IN MIND?</p>
//                     <textarea
//                       type="text"
//                       className="textinput"
//                       id="i5vyy"
//                       placeholder="Please enter query..."
//                       required
//                       value={query}
//                       onChange={handleQueryChange}
//                     ></textarea>
//                   </div>
//                 </div>
//                 {formError && <div className="error-message">{formError}</div>}
//                 {isSubmitted ? (
//                   <div className="feedback-message">
//                     Feedback Submitted <span className="tick-mark">&#10004;</span>
//                   </div>
//                 ) : (
//                   <button class="button-27" role="button" disabled={!isFormValid}>Submit</button>
//                 )}
//               </div>
//             </form>
//             </center>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   const { firstName, lastName, email, phoneNumber, query, isSubmitted, formError } = state;
//   const isFormValid = firstName !== '' && lastName !== '' && email !== '' && phoneNumber !== '' && query !== '';

//   return {
//     firstName,
//     lastName,
//     email,
//     phoneNumber,
//     query,
//     isSubmitted,
//     formError,
//     isFormValid
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleFirstNameChange: (event) => dispatch(updateFirstName(event.target.value)),
//     handleLastNameChange: (event) => dispatch(updateLastName(event.target.value)),
//     handleEmailChange: (event) => dispatch(updateEmail(event.target.value)),
//     handlePhoneNumberChange: (event) => dispatch(updatePhoneNumber(event.target.value)),
//     handleQueryChange: (event) => dispatch(updateQuery(event.target.value)),
//     handleSubmit: (event) => {
//       event.preventDefault();
//       dispatch(submitForm());
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Feedback);

// FeedbackForm.js
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { submitFeedback } from './actions';

// const Feedback = () => {
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');
//   const dispatch = useDispatch();
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const feedbackData = {
//       name,
//       message,
//     };
//     dispatch(submitFeedback(feedbackData));
//     // Optionally, you can reset the form fields here
//     setName('');
//     setMessage('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name:</label>
//       <input
//         type="text"
//         id="name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <br />
//       <label htmlFor="message">Message:</label>
//       <textarea
//         id="message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       ></textarea>
//       <br />
//       <button type="submit">Submit Feedback</button>
//     </form>
//   );
// };

// export default Feedback;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './Feedback.css';

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handleMessage = (event) => {
    event.preventDefault();
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    const token= localStorage.getItem("token");
    event.preventDefault();
    setErrors(validateForm({ name, email, message}));
    try{
      const response=await axios.post('http://localhost:8181/api/v1/auth/send',{
        name:name,
        email:email,
        message:message
  
      },
      {
        headers:{
          'Authorization':`BEARER ${token}`,
          'cache-control': 'no-cache'
        }
      });
      console.log(response.status);
      if(response.status===200){
        setName("");
        setEmail('');
        setMessage('');
        navigate('/Mainpage');
      }
      
    }
    catch(error){
      alert(error);
      setIsSubmit(false);
  
    }
    if (isSubmit) {
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (values.name.trim() === '') {
      errors.name = 'Username is required';
      setIsSubmit(false);
    }

    if (values.email.trim() === '') {
      errors.email = 'Email is required';
      setIsSubmit(false);
    }
    setIsSubmit(Object.keys(errors).length === 0);

    return errors;
  };

  return (
    <>
      <div className='register7'>
        <form onSubmit={handleSubmit}>
          <h1>Feedback</h1>
              <br /><br /><br />
            <div className='form-group5'>
              <label htmlFor='nm'>Username</label>
              <input
                type='name'
                className='form-control6'
                placeholder='username'
                value={name}
                id='nm'
                onChange={handleName}
              />
            {errors.name}
            </div><br/><br /><br />
          <div className='form-group5'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='form-control6'
              placeholder='email'
              id='email'
              value={email}
              onChange={handleEmail}
            />
          {errors.email && <span>{errors.email}</span>}
          </div><br/><br /><br />
          
          <div className='form-group5'>
            <label htmlFor='gender'>Do you like it?</label>
            <input
              type='Text'
              className='form-control6'
              placeholder='yes/no'
              id='gender'
            />
          </div><br/><br /><br />
          <div className='form-group5'>
            <label htmlFor='State,City'>Message</label>
            <input
              type='text'
              maxlength="20" required
              className='form-control7'
              placeholder='message'
              value={message}
              id='nm'
              onChange={handleMessage}
            />
            {errors.message}
          </div>
          <br/><br /><br />
          <button
            type='submit'
            className='btn btn-secondary3'
          >
            Submit
          </button>
        </form>
        
      </div>
    </>
  );
};

export default Feedback;