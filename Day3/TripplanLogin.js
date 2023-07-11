import './Tripplan.css';
import { Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
// function TripplanLogin(){
// return (
//     <div>
//     <div className="trip-plan">
//       <h2 className='login'>TRIP PLANNING LOGIN</h2>
//       <center><img className='image' src="https://img.icons8.com/?size=1x&id=108639&format=png"></img></center><br></br><br></br>
//       <TextField id="outlined-basic" type="email" label="Email" variant="outlined" /><br></br><br></br><br></br><br></br>
//       <TextField id="outlined-basic" type="password" label="Password" variant="outlined" /><br></br><br></br><br></br><br></br>
//       <Button variant="contained" className='submitbutton' color="success">Login</Button><br></br><br></br><br></br><br></br>
//       <a href="www.google.com">Forgot password?</a>
//     </div>
//     <img className='image1' src="https://i.pinimg.com/originals/6b/01/b2/6b01b27186eb5990255fd59eefc980e8.jpg"></img>
//     </div>
//   );
// };
// export default TripplanLogin;
function TripplanLogin(){
const [emailError, setEmail] = useState('');
const [passwordError, setPassword] = useState('');
function handleFormSubmit(event) {
  event.preventDefault(); 
  // Perform validation
  if (!emailIsValid()) {
    setEmail('Invalid email');
    return;
  }
  if (!passwordIsValid()) {
      setPassword('Invalid password');
      return;
    }
    
    // Perform login logic here
}
function emailIsValid(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function passwordIsValid() {
  // Implement password validation logic
}
return (
  <div>
    <div className="trip-plan">
    <h2 className='login'>TRIP PLANNING LOGIN</h2> 
   <center><img className='image' src="https://img.icons8.com/?size=1x&id=108639&format=png"></img></center><br></br><br></br>
    <form onSubmit={handleFormSubmit}>
      <TextField
        id="outlined-basic"
        type="email"
        label="Email"
        variant="outlined"
        required
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        error={emailError !== ''}
        helperText={emailError}
      /><br></br><br></br><br></br><br></br>
      <TextField
        id="outlined-basic"
        type="password"
        label="Password"
        variant="outlined"
        required
        minLength={8}
        error={passwordError !== ''}
        helperText={passwordError}
      /><br></br><br></br><br></br><br></br>
      <Button variant="contained" className='submitbutton' color="success">Login</Button><br></br><br></br><br></br><br></br>
      <a href="www.google.com">Forgot password?</a>
    </form>
    </div>
    <img className='image1' src="https://i.pinimg.com/originals/6b/01/b2/6b01b27186eb5990255fd59eefc980e8.jpg"></img>
  </div>
);
};
export default TripplanLogin;
