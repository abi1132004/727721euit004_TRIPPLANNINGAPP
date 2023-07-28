// // import React, { useState } from 'react';
// // import { Button } from '@mui/material';
// // import TextField from '@mui/material/TextField';
// // import './Tripplan.css';
// // import { Link } from 'react-router-dom';
// // function TripplanLogin() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [emailError, setEmailError] = useState('');
// //   const [passwordError, setPasswordError] = useState('');

// //   const handleFormSubmit = (event) => {
// //     event.preventDefault();
// //     setEmailError('');
// //     setPasswordError('');
// //     if (!email) {
// //       setEmailError('Email is required');
// //     } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
// //       setEmailError('Invalid email format');
// //     }
// //     if (!password) {
// //       setPasswordError('Password is required');
// //     } 
// //     else if (password.length < 8) {
// //       setPasswordError('Password should be at least 8 characters long');
// //     }
// //     if (email && password) {
// //       console.log('Form is valid. Email:', email, 'Password:', password);
// //     }
// //   };
// //   return (
// //     <div>
// //       <div className="trip-plan">
// //         <h2 className="login">TRIP PLANNING LOGIN</h2>
// //         <center>
// //           <img
// //             className="image5"
// //             src="https://img.icons8.com/?size=1x&id=108639&format=png"
// //             alt="Logo"
// //           />
// //         </center>
// //         <br />
// //         <br />
// //         <form onSubmit={handleFormSubmit}>
// //           <TextField
// //             id="outlined-basic"
// //             type="email"
// //             label="Email"
// //             variant="outlined"
// //             required
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             error={emailError !== ''}
// //             helperText={emailError}
// //           />
// //           <br />
// //           <br />
// //           <br />
// //           <br />
// //           <br />
// //           <TextField
// //             id="outlined-basic"
// //             type="password"
// //             label="Password"
// //             variant="outlined"
// //             required
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             error={passwordError !== ''}
// //             helperText={passwordError}
// //           />
// //           <br />
// //           <br />
// //           <br />
// //           <br />
// //           <br />
// //           <Link to="/Mainpage"><Button variant="contained" className="submitbutton" color="success" type="submit">
// //             Login
// //           </Button></Link>
// //           <br />
// //           <br />
// //           <br />
// //           <Link to="/RegisterPage"><Button variant="contained" className="submitbutton" color="success" type="submit">
// //             Register if not Registered
// //           </Button></Link>
// //           <br />
// //           <br />
// //           <a href="www.google.com">Forgot password?</a>
// //         </form>
// //       </div>
// //       <img src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=600"
// //          className="image4" alt="Background Image"/>
// //     </div>
// //   );
// // }

// // export default TripplanLogin;

// import React, { useState } from 'react';
// import { Button } from '@mui/material';
// import TextField from '@mui/material/TextField';
// import './Tripplan.css';
// import { Link } from 'react-router-dom';

// function TripplanLogin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     // Reset previous errors
//     setEmailError('');
//     setPasswordError('');

//     // Validate email
//     if (!email) {
//       setEmailError('Email is required');
//     } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
//       setEmailError('Invalid email format');
//     }

//     // Validate password
//     if (!password) {
//       setPasswordError('Password is required');
//     } else if (password.length < 8) {
//       setPasswordError('Password should be at least 8 characters long');
//     }

//     if (email && password) {
//       try {
//         const response = await fetch('api/vi/auth/authenticate', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email, password }),
//         });

//         const data = await response.json();

//         if (response.ok) {
//           // Save the token to local storage
//           localStorage.setItem('token', data.token);

//           // Redirect or perform other actions for a successful login
//           console.log('Login successful');
//         } else {
//           // Handle login failure
//           console.log('Login failed');
//         }
//       } catch (error) {
//         console.error('Error:', error.message);
//       }
//     }
//   };


//   return (
//     <div>
//       <div className="trip-plan">
//         <h2 className="login">TRIP PLANNING LOGIN</h2>
//         <center>
//           <img
//             className="image5"
//             src="https://img.icons8.com/?size=1x&id=108639&format=png"
//             alt="Logo"
//           />
//         </center>
//         <br />
//         <br />
//         <form onSubmit={handleFormSubmit}>
//           <TextField
//             id="outlined-basic"
//             type="email"
//             label="Email"
//             variant="outlined"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             error={emailError !== ''}
//             helperText={emailError}
//           />
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <TextField
//             id="outlined-basic"
//             type="password"
//             label="Password"
//             variant="outlined"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             error={passwordError !== ''}
//             helperText={passwordError}
//           />
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <Link to="/Mainpage"><Button variant="contained" className="submitbutton" color="success" type="submit">
//             Login
//           </Button></Link>
//           <br />
//           <br />
//           <br />
//           <Link to="/RegisterPage"><Button variant="contained" className="submitbutton" color="success" type="submit">
//             Register if not Registered
//           </Button></Link>
//           <br />
//           <br />
//           <a href="www.google.com">Forgot password?</a>
//         </form>
//       </div>
//       <img src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=600"
//          className="image4" alt="Background Image"/>
//     </div>
//   );
// }

// export default TripplanLogin;

// // import React from 'react'
// // import { useState,useEffect } from 'react'
// // import { redirect, useNavigate } from 'react-router-dom'
// // import { Button } from '@mui/material';
// // import './Tripplan.css'
// // import axios from 'axios'
// // import { useDispatch } from "react-redux";
// // import { Link } from 'react-router-dom'
// // // import { login } from '../redux/userSlice';
// // // import Footer from './Footer';
// // const TripplanLogin = () => {
// //  const [name,setName]=useState('')
// //  const [id,setId]=useState('')  
// //  const [password,setPassword]=useState('')
// //  const [errors, setErrors] = useState({});
// //  const[isSubmit,setIsSubmit]=useState(false);
// //  const navigate =useNavigate();
// //  const dispatch=useDispatch();

// //  const handleName=(event)=>{
// //     event.preventDefault();
// //     setName(event.target.value)
// //   }
 
// //   const handleId=(event)=>{
// //     event.preventDefault();
// //     setId(event.target.value)
// //   }
// //   const handlePassword=(event)=>{
// //     event.preventDefault();
// //     setPassword(event.target.value)
// //   }
// //   const handleSubmit=async (event)=>{
// //     event.preventDefault();
// //     setErrors(validateForm({name,id,password}));
// //     try{
// //       const response=await axios.post('http://localhost:8181/api/v1/auth/login',{
        
// //         email:id,
// //         password:password
  
// //       });
// //       navigate('/mainpage');
// //       let token=response.data.token;
// //       localStorage.setItem('token',token);
// //       console.log(response.status);
// //       if(response.status===200){
// //         setName("");
// //         setId('');
// //         setPassword('');
  
        
  
// //       }
      
// //     }
// //     catch(error){
// //       console.log(error);
// //       setIsSubmit(false);
  
// //     }
// //     // setIsSubmit(true);
// //     // if(isSubmit===true){
// //     //     navigate('/home');
// //     // }
    
// //     // dispatch(
// //     //   login({
// //     //     name:name,
// //     //     id:id,
// //     //     password:password,
// //     //   })
// //     // );
   
// // };
  

// //   const validateForm = (values) => {
// //     const errors = {};

// //     if (values.name.trim() === '') {
// //       errors.name = 'Name is required';
// //       setIsSubmit(false);
// //     }

// //     else if (values.id.trim() === '') {
// //       errors.id = 'email is required';
// //       setIsSubmit(false);
// //     } 

// //     else if (values.password.trim() === '') {
// //       errors.password = 'Password is required';
// //       setIsSubmit(false);
// //     } else if (values.password.length < 6) {
// //       errors.password = 'Password must be at least 6 characters long';
// //       setIsSubmit(false);
// //     }
// //     else{
// //         setIsSubmit(true)
// //     }
// //     return errors;

// //     // setErrors(errors);
// //   };

  

// //   return (
// //     <>
  
// //     <div className='login'>
// //         <form className='login_form' onSubmit={handleSubmit}>
// //             <h1>Admin Login</h1>
// //             <div className='loginbox'>
// //             <div className='form-floating mb-3'>
// //             <input type='name' className='form-control'
// //             placeholder='name'
// //             value={name} id='nm'
// //             onChange={handleName} />
// //             <label for='nm'>Name</label>
// //             </div>
// //             {errors.name}
// //             </div>
           
// //             <div className='loginbox'>
// //             <div className='form-floating mb-3'>
// //             <input type='email' className='form-control'
// //             placeholder='id'
// //             value={id} id='id'
// //             onChange={handleId}/>
// //             <label for='id'>email</label>
// //             </div>
// //             {errors.id && <span >{errors.id}</span>}
// //             </div>

// //             <div className='loginbox'>
// //             <div className='form-floating mb-3'>
// //             <input type='password' className='form-control'
// //             placeholder='password' id='pwd'
// //             value={password}
// //             onChange={handlePassword}/>
// //             <label for='pwd'>Password</label>
// //             </div>
// //             {errors.password && <span>{errors.password}</span>}
// //             </div>
// //             <button  type='submit' className='btn btn-secondary' style={{background:'black',color:'white',width:400,height:50,margin:40}}>sign in</button>
// //             <Link to="/RegisterPage">
// //               <Button variant="contained" className="submitbutton" color="success" type="submit">
// //              Register if not Registered
// //            </Button></Link>
// //         </form>
        
// //     </div>
// //     {/* <Footer/> */}
// //     </>
// //   )
// // }

// // export default TripplanLogin
import React from 'react'
import { useState,useEffect } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import './Tripplan.css'
import { Button } from '@mui/material';
import axios from 'axios'
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
const TripplanLogin = () => {
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
      navigate('/Mainpage');
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
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
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
            <button  type='submit' className='submitbutton' style={{background:'black',color:'white',width:180,height:50,margin:40}}>Sign In</button>
            

        </form>
        <br></br><br></br>
        <h2>Don't have an account? <a href='/RegisterPage'>SignUp then...</a></h2>
        </div>
        <img src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="image4" alt="Background Image"/>
    </div>
    
    </>
  )
}

export default TripplanLogin;
// import React from 'react'
// import { useState,useEffect } from 'react'
// import { redirect, useNavigate } from 'react-router-dom'
// // import './Login.css'
// import axios from 'axios'
// import { useDispatch } from "react-redux";

// import { Link } from 'react-router-dom'



// const TripplanLogin = () => {
//  const [name,setName]=useState('')
//  const [id,setId]=useState('')  
//  const [password,setPassword]=useState('')
//  const [errors, setErrors] = useState({});
//  const[isSubmit,setIsSubmit]=useState(false);
//  const navigate =useNavigate();
//  const dispatch=useDispatch();

//  const handleName=(event)=>{
//     event.preventDefault();
//     setName(event.target.value)
//   }
 
//   const handleId=(event)=>{
//     event.preventDefault();
//     setId(event.target.value)
//   }
//   const handlePassword=(event)=>{
//     event.preventDefault();
//     setPassword(event.target.value)
//   }
//   const handleSubmit=async (event)=>{
//     event.preventDefault();
//     setErrors(validateForm({name,id,password}));
//     try{
//       const response=await axios.post('http://localhost:8181/api/v1/auth/authenticate',{
        
//         email:name,
//         password:password
  
//       });
//       navigate('/Mainpage');
//       let token=response.data.token;
//       localStorage.setItem('token',token);
//       console.log(response.status);
//       if(response.status===200){
//         setName("");
//         setId('');
//         setPassword('');
  
        
  
//       }
      
//     }
//     catch(error){
//       console.log(error);
//       setIsSubmit(false);
  
//     }
//     // setIsSubmit(true);
    
    
   
// };
  

//   const validateForm = (values) => {
//     const errors = {};

//     if (values.name.trim() === '') {
//       errors.name = 'Email is required';
//       setIsSubmit(false);
//     }

//     else if (values.password.trim() === '') {
//       errors.password = 'Password is required';
//       setIsSubmit(false);
//     } else if (values.password.length < 6) {
//       errors.password = 'Password must be at least 6 characters long';
//       setIsSubmit(false);
//     }
//     else{
//         setIsSubmit(true)
//     }
//     return errors;

//     // setErrors(errors);
//   };

  

//   return (
//     <>
  
//     <div className='login'>
//         <form className='login_form' onSubmit={handleSubmit}>
//             <h1>Login</h1>
//             <div className='gogo'>
//             <div className='form-floating mb-3'>
//             <label for='nm'>Email</label>
//             <br></br>
//             <input type='email' className='form-control'
//             placeholder='abc@gmail.com'
//             value={name} id='nm'
//             onChange={handleName} />
//             </div>
//             {errors.name}
//             </div>

//             <div className='loginbox'>
//               <div className="jo">
//             <div className='form-floating mb-3'>
//             <label for='pwd'>Password</label>
//             <input type='password' className='form-control'
//             placeholder='password' id='pwd'
//             value={password}
//             onChange={handlePassword}/>
//             </div>
//             </div>
//             {errors.password && <span>{errors.password}</span>}
//             </div>
            
//             <button  type='submit' className='btn btn-secondary' style={{background:'black',color:'white',width:180,height:50,margin:40}}>Sign In</button>

//         </form>
//         <br></br><br></br>
//         <h2>Don't have an account? <a href='/RegisterPage'>SignUp</a></h2>
//     </div>
    
//     </>
//   )
// }

// export default TripplanLogin