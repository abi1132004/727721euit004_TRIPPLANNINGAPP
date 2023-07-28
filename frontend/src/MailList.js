import "./mailList.css"
const MailList=()=>{
    return(
        <div className="mail">
           <h1 className="mailTitle">Save Time, Save Money</h1>
           <span className="mailDesc">Sign up and we'll send the best deals to you</span>
           <div className="mailInputContainer">
             <input type="text" placeholder="Your Email" />
             <a mailto="727721euit004@skcet.ac.in">Send</a>
           </div>
        </div>
    )
}
export default MailList;