import Featured from "./Featured";
import FeaturedProperties from "./FeaturedProperties";
import Header from "./Header";
import Navbar1 from "./Navbar1";
import PropertyList from "./PropertyList";
import MailList from "./MailList";
import "./home1.css";
import Footer2 from "./Footer2";
const Hom=()=>{
    return(
    <div>
        <Navbar1/>
        <Header/>
        <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer2/>
        </div>
     </div>
    )
}
export default Hom;