import Footer from "./Footer";
import Home from "./Home";
import CategoryPage from "./CategoryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import SingleHotelView from "./SingleHotelView";
import GlobleCotext from "./GlobleContex";
import TripplanLogin from './TripplanLogin.js'
import Header from "./Header";
import Mainpage from "./Mainpage";
import Aboutus from "./Aboutus"
import RegisterPage from "./RegisterPage";
import ContactUs from "./ContactUs"
import Feedback from "./Feedback";
function App() {
  return (
    <>
    {/* <GlobleCotext> */}
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<TripplanLogin/>}></Route>
          <Route path="/RegisterPage" element={<RegisterPage/>}></Route>
          <Route path="/TripplanLogin" element={<TripplanLogin/>}></Route>
          <Route path="/Mainpage" element={<Mainpage/>}/>
          <Route path="/Feedback" element={<Feedback/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/Aboutus" element={<Aboutus/>}/>
          <Route path="/Header" element={<Header/>}/>
          <Route path="/Category" element={<CategoryPage/>}/>
          <Route path={`/SingleHotelView/:id`} element={<SingleHotelView/>} />
          {/* <Route path="*" element={<ErrorPage/>}/> */}
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
      {/* </GlobleCotext> */}
    </>
  );
}

export default App;