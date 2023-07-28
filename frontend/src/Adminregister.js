
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './RegisterPage.css';

const Adminregister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(validateForm({ name, email, password }));
    try{
      const response=await axios.post('http://localhost:8181/api/v1/auth/register',{
        name:name,
        email:email,
        password:password
  
      });
      console.log(response.status);
      if(response.status===200){
        setName("");
        setEmail('');
        setPassword('');
  
        
  
      }
      
    }
    catch(error){
      alert(error);
      setIsSubmit(false);
  
    }
    if (isSubmit) {
      navigate('/AdminLogin');
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

    if (values.password.trim() === '') {
      errors.password = 'Password is required';
      setIsSubmit(false);
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      setIsSubmit(false);
    }

    setIsSubmit(Object.keys(errors).length === 0);

    return errors;
  };

  return (
    <>
      <div className='register'>
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
              <br />
            <div className='form-group'>
              <label htmlFor='nm'>Username</label>
              <input
                type='name'
                className='form-control'
                placeholder='username'
                value={name}
                id='nm'
                onChange={handleName}
              />
            {errors.name}
            </div><br/>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='form-control'
              placeholder='email'
              id='email'
              value={email}
              onChange={handleEmail}
            />
          {errors.email && <span>{errors.email}</span>}
          </div><br/>
        
            <div className='form-group'>
              <label htmlFor='pwd'>Password</label>
              <input
                type='password'
                className='form-control'
                placeholder='password'
                id='pwd'
                value={password}
                onChange={handlePassword}
              />
            
            
            {errors.password && <span>{errors.password}</span>}
          </div><br/>
          <div className='form-group'>
            <label htmlFor='age'>Age</label>
            <input
              type='number'
              className='form-control'
              placeholder='age'
              id='age'
            />
          </div><br/>
          <div className='form-group'>
            <label htmlFor='gender'>Gender</label>
            <input
              type='gender'
              className='form-control'
              placeholder='gender'
              id='gender'
            />
          </div><br/>
          <div className='form-group'>
            <label htmlFor='State,City'>State,City</label>
            <input
              type='text'
              className='form-control'
              placeholder='state'
              id='city'
            />
          </div>
          <br/>
          <button
            type='submit'
            className='btn btn-secondary'
            style={{
              background: 'black',
              color: 'white',
              width: 180,
              height: 50,
              margin: 70,
            }}
          >
            Sign Up
          </button>
        </form>
        
      </div>
    </>
  );
};

export default Adminregister;