import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Hoteladmin.css'
function Hoteladmin() {
  const [dataList, setDataList] = useState([]); // Fix variable name here

  useEffect(() => {
    const fetchTaskData = async () => {
      const token = localStorage.getItem('token');
      console.log(token);
      try {
        const response = await axios.get('http://localhost:8181/hotelShowDetails', {
          headers: {
            "cache-control": 'no-cache',
            "Authorization": `Bearer ${token}`, // Add the token to the request headers
          },
        });

        setDataList(response.data);
        console.log("response.data",response)
      } catch (error) {
        console.log(error);
      }
    };

    fetchTaskData();
  }, []);

  useEffect(() => {
    console.log(dataList); // This will log the updated dataList whenever it changes.
  }, [dataList]);

  return (
    <>
<center>

    <div>
      <div className="homebutton">
        <Link to="/Adminnavbar">&#8592;Back</Link>
      </div>
      <table className="gen" border={2} width={"100%"}>
        <div className="container12">
          <thead >
          <tr className="form-title">
              <th className="header-cell">ID</th>
              <th className="header-cell">Date</th>
              <th className="header-cell">Destination</th>
            </tr>          </thead>
          <tbody>
            {dataList.map((task) => (
               <tr width={"100%"} height={"50px"}  key={task.id}>
               <td>{task.id}</td>
               <td>{task.date}</td>
               <td>{task.destination}</td>
             </tr>
            ))}
          </tbody>
        </div>
      </table>
    </div>
</center>
    </>
  );
}

export default Hoteladmin;