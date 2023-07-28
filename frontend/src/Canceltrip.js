import "./list.css";
import Navbar1 from "./Navbar1";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { Navigate,useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import SearchItem from "./SearchItem";
import axios from "axios";
const Canceltrip = () => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [id, setId] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleDestination = (event) => {
    event.preventDefault();
    setDestination(event.target.value);
  };

  const handleDate = (event) => {
    event.preventDefault();
    setDate(event.target.value);
  };
  const handleId = (event) => {
    event.preventDefault();
    setId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response=await axios.delete(`http://localhost:8181/hotelDelete/${id}`,{
        destination:destination,
        date:date
      });
      console.log(response.status);
      if(response.status===200){
        setDestination("");
        setDate('');
      }
      
    }
    catch(error){
      alert(error);
      setIsSubmit(false);
  
    }
    if (isSubmit) {
      navigate('/Payment');
    }
  };

  return (
    <>
      <div className='register'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='destination'>Destination</label>
            <input
              type='destination'
              className='form-control'
              placeholder='destination'
              id='destination'
              value={destination}
              onChange={handleDestination}
            />
          {errors.destination && <span>{errors.destination}</span>}
          </div><br/>
            <div className='form-group'>
              <label htmlFor='nm'>Date</label>
              <input
                type='date'
                className='form-control'
                placeholder='date'
                value={date}
                id='nm'
                onChange={handleDate}
              />
            {errors.date}
            </div><br/>
          <br/>
          <br/>
          <div className='form-group'>
              <label htmlFor='nm'>Id</label>
              <input
                type='number'
                className='form-control'
                placeholder='id'
                value={id}
                id='nm'
                onChange={handleId}
              />
            {errors.id}
            </div><br/>
          <br/>
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
            Cancel
          </button>
        </form>
      </div>
      <br/>
      <br/>
    </>
  );
};
export default Canceltrip;
// import React, { useState } from 'react';
// // import './Task.css';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// function Canceltrip() {
//   const [tripDeleted, setTripDeleted] = useState(false);

//   const handleDeleteTrip = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');

//     // Check if the token is available and valid
//     if (!token) {
//       console.log('No token found. Redirect to login page or handle the error.');
//       return;
//     }

//     const cid = e.target.elements.tid.value;

//     try {
//       await axios.delete(`http://localhost:8181/hotelDelete/${cid}`, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Add the token to the request headers
//         },
//       });

//       setTripDeleted(true);
//     } catch (error) {
//       console.error(error);
//       // Handle the error appropriately, such as showing an error message to the user
//     }
//   };

//   return (
//     <div>
//       <div className="homebutton">
//         <Link to="/Mainpage">&#8592;Back</Link>
//       </div>
//       <div className="gen">
//         <div className="container1">
//           <h1 className="form-title">Cancel Trip</h1>
//           <form onSubmit={handleDeleteTrip}>
//             <div className="task-details-box">
//               <div className="task-input-box2">
//                 <label htmlFor="taskid">Enter Trip ID To Delete</label>
//                 <input type="id" id="id" name="tripName" placeholder="id" required />
//               </div>
//             </div>
//             <div className="form-submit-btn">
//               <input type="submit" value="Delete" />
//             </div>
//             {tripDeleted && (
//               <div className="success-message">
//                 <span className="tick-symbol">&#10004;</span>
//                 <h5 className="success">Trip Deleted Successfully!</h5>
//               </div>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Canceltrip;

