import React from 'react'
import { useState,useEffect } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import './Tripplan.css'
import { Button } from '@mui/material';
import axios from 'axios'
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
const AdminLogin = () => {
 const [name,setName]=useState('')
 const [id,setId]=useState('')  
 const [password,setPassword]=useState('')
 const [errors, setErrors] = useState({});
 const[isSubmit,setIsSubmit]=useState(false);
 const navigate =useNavigate();
 const dispatch=useDispatch();

 const handleName=(event)=>{
    event.preventDefault();
    setName(event.target.value)
  }
 
  const handleId=(event)=>{
    event.preventDefault();
    setId(event.target.value)
  }
  const handlePassword=(event)=>{
    event.preventDefault();
    setPassword(event.target.value)
  }
  const handleSubmit=async (event)=>{
    event.preventDefault();
    setErrors(validateForm({name,id,password}));
    try{
      const response=await axios.post('http://localhost:8181/api/v1/auth/authenticate',{
        
        email:name,
        password:password
  
      });
      navigate('/Adminnavbar');
      let token=response.data.token;
      localStorage.setItem('token',token);
      console.log(response.status);
      if(response.status===200){
        setName("");
        setId('');
        setPassword('');
      }    
    }
    catch(error){
      console.log(error);
      setIsSubmit(false);
  
    }
    // setIsSubmit(true);
};

  const validateForm = (values) => {
    const errors = {};

    if (values.name.trim() === '') {
      errors.name = 'Email is required';
      setIsSubmit(false);
    }

    else if (values.password.trim() === '') {
      errors.password = 'Password is required';
      setIsSubmit(false);
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      setIsSubmit(false);
    }
    else{
        setIsSubmit(true)
    }
    return errors;

    // setErrors(errors);
  };
  return (
    <>
    <div>
  <div className="trip-plan">
      <h2 className="login">TRIP PLANNING</h2>
        <center>
          <img
           className="image5"
            src="https://img.icons8.com/?size=1x&id=108639&format=png"
             alt="Logo"
         />
        </center>
         <br />
         <br />
        <form onSubmit={handleSubmit}>
            <h1>Admin Login</h1>
            <div className='gogo'>
            <div className='form-floating mb-3'>
            <label for='nm'>Email</label>
            <br></br>
            <input type='email' className='form-control'
            placeholder='abc@gmail.com'
            value={name} id='nm'
            onChange={handleName} />
            </div>
            {errors.name}
            </div>
          <br />
            <div className='loginbox'>
              <div className="jo">
            <div className='form-floating mb-3'>
            <label for='pwd'>Password</label>
            <input type='password' className='form-control'
            placeholder='password' id='pwd'
            value={password}
            onChange={handlePassword}/>
            </div>
            </div>
            {errors.password && <span>{errors.password}</span>}
            </div>
            <button  type='submit' className='submitbutton' style={{background:'green',color:'white',width:180,height:50,margin:40}}>Sign In</button>
            

        </form>
        <br></br><br></br>
        <h2>Don't have an account? <a href='/AdminRegister'>SignUp then...</a></h2>
        </div>
        <img src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="image4" alt="Background Image"/>
    </div>
    
    </>
  )
}

export default AdminLogin;
