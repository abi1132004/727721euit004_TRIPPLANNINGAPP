// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './RegisterPage.css';
// const RegisterPage=({history})=>{
//   const[username, setusername] = useState('');
//   const[gender, setGender] = useState('');
//   const[age, setAge] = useState('');
//   const[email, setEmail] = useState('');
//   const[password, setPassword] = useState('');
//   const[phone, setPhone] = useState('');
//   const[state, setState] = useState('');
//   const[isRegistered, setIsRegistered] = useState(false);
//   const handleSubmit=async(event)=>{
//     event.preventDefault();
//     const data = {
//       username,
//       gender,
//       age,
//       email,
//       password,
//       phone,
//       state
//     };
//     try
//     {
//       await axios.post('http://127.0.0.1:8080/api/vi/auth/register', data);
//       setIsRegistered(true);
//       setTimeout(()=>{
//         setIsRegistered(false);
//       },3000);
//     } 
//     catch(error){
//       console.error('Registration failed:',error);
//     }
//   };
//   return (
//     <div className="register">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="firstName">User Name:</label>
//           <input
//             type="text"
//             id="firstName"
//             value={username}
//             onChange={(event) => setusername(event.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="gender">Gender:</label>
//           <select
//             id="gender"
//             value={gender}
//             onChange={(event) => setGender(event.target.value)}
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="age">Age:</label>
//           <input
//             type="number"
//             id="age"
//             value={age}
//             onChange={(event) => setAge(event.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="phone">Phone:</label>
//           <input
//             type="text"
//             id="phone"
//             value={phone}
//             onChange={(event) => setPhone(event.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="state">State:</label>
//           <input
//             type="text"
//             id="state"
//             value={state}
//             onChange={(event) => setState(event.target.value)}
//           />
//         </div>
//        <button type="submit" className="register-button">Register</button>
        
//       </form>
//       {isRegistered && (
//         <div className="toast-message">
//           Registration successful!...
//         </div>
//       )}
//       <Link to="/TripplanLogin"><button type="submit">Now LOGIN</button></Link>
//       {/* <p>
//          <Link to="/TripplanLogin">Login</Link>
//       </p> */}
//     </div>
//   );
// };
// export default RegisterPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './RegisterPage.css';

const RegisterPage = () => {
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
      navigate('/TripplanLogin');
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

export default RegisterPage;