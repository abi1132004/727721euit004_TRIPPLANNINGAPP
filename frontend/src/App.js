import { BrowserRouter, Routes, Route } from "react-router-dom";
import TripplanLogin from './TripplanLogin.js'
import Mainpage from "./Mainpage";
import Aboutus from "./Aboutus"
import RegisterPage from "./RegisterPage";
import ContactUs from "./ContactUs"
import Feedback from "./Feedback";
import Hom from "./Hom";
import Hotel from "./Hotel";
import List from "./List";
import Payment from "./Payment";
import Destination from "./Destination";
import Booktrip from "./Booktrip";
import UpdateTrip from "./UpdateTrip";
import Canceltrip from "./Canceltrip";
import SearchItem from "./SearchItem.js";
import Hoteladmin from "./Hoteladmin.js";
import LAUpage from "./LAUpage.js";
import AdminLogin from "./AdminLogin.js";
import Adminnavbar from "./Adminnavbar.js"
import Adminregister from "./Adminregister.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LAUpage/>}></Route>
          <Route path="/TripplanLogin" element={<TripplanLogin/>}></Route>
          <Route path="/AdminLogin" element={<AdminLogin/>}></Route>
          <Route path="/RegisterPage" element={<RegisterPage/>}></Route>
          <Route path="/Adminregister" element={<Adminregister/>}></Route>
          <Route path="/AdminLogin" element={<AdminLogin/>}></Route>
          <Route path="/TripplanLogin" element={<TripplanLogin/>}></Route>
          <Route path="/Adminnavbar" element={<Adminnavbar/>}></Route>
          <Route path="/Mainpage" element={<Mainpage/>}/>
          <Route path="/Feedback" element={<Feedback/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/Hoteladmin" element={<Hoteladmin/>}/>
          <Route path="/Aboutus" element={<Aboutus/>}/>
          <Route path="/Destination" element={<Destination/>}/>
          <Route path="/Hom" element={<Hom/>}/>
          <Route path="/hotels" element={<List/>}/>
          <Route path="/hotels/:id" element={<Hotel/>}/>
          <Route path="/Payment" element={<Payment/>}/>
          <Route path="/Booktrip" element={<Booktrip/>}/>
          <Route path="/SearchItem" element={<SearchItem/>}/>
          <Route path="/Canceltrip" element={<Canceltrip/>}/>
          <Route path="/Updatetrip" element={<UpdateTrip/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;