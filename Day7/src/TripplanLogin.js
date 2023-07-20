import React, { useState } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import './Tripplan.css';
import { Link } from 'react-router-dom';
function TripplanLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Reset previous errors
    setEmailError('');
    setPasswordError('');

    // Validate email
    if (!email) {
      setEmailError('Email is required');
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setEmailError('Invalid email format');
    }

    // Validate password
    if (!password) {
      setPasswordError('Password is required');
    } else if (password.length < 8) {
      setPasswordError('Password should be at least 8 characters long');
    }

    // Perform additional actions if form is valid
    if (email && password) {
      // Perform login or other actions
      console.log('Form is valid. Email:', email, 'Password:', password);
    }
  };

  return (
    <div>
      <div className="trip-plan">
        <h2 className="login">TRIP PLANNING LOGIN</h2>
        <center>
          <img
            className="image5"
            src="https://img.icons8.com/?size=1x&id=108639&format=png"
            alt="Logo"
          />
        </center>
        <br />
        <br />
        <form onSubmit={handleFormSubmit}>
          <TextField
            id="outlined-basic"
            type="email"
            label="Email"
            variant="outlined"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError !== ''}
            helperText={emailError}
          />
          <br />
          <br />
          <br />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            type="password"
            label="Password"
            variant="outlined"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError !== ''}
            helperText={passwordError}
          />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Link to="/Mainpage"><Button variant="contained" className="submitbutton" color="success" type="submit">
            Login
          </Button></Link>
          <br />
          <br />
          <br />
          <Link to="/RegisterPage"><Button variant="contained" className="submitbutton" color="success" type="submit">
            Register if not Registered
          </Button></Link>
          <br />
          <br />
          <a href="www.google.com">Forgot password?</a>
        </form>
      </div>
      <img src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=600"
         className="image4" alt="Background Image"/>
    </div>
  );
}

export default TripplanLogin;
