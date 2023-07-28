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
const UpdateTrip = () => {
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
  const handleId= (event) => {
    event.preventDefault();
    setId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token= localStorage.getItem("token");
    try{
      const response=await axios.put('http://localhost:8181/hotelUpdateDetails',{
        destination:destination,
        date:date,
        id:id
      },
      {
        headers:{
          "Authorization":`Bearer ${token}`,
          "cache-control":'no-cache',
        }
      }
  );
      console.log(response.status);
      if(response.status===200){
        setDestination("");
        setDate('');
        navigate('/Mainpage');
      }
      
    }
    catch(error){
      alert(error);
      setIsSubmit(false);
    }
    if (isSubmit) {
      navigate('/');
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
              <label htmlFor='nm'>Id:</label>
              <input
                type='id'
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
            Update
          </button>
        </form>
      </div>
      <br/>
      <br/>
    </>
  );
};
export default UpdateTrip;
