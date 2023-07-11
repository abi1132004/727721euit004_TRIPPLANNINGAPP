import './Tripplan.css';
function Tripplan(){
return (
    <div className="trip-plan">
      <h2>Trip Planning</h2>
      <form>
        <br/><br/><br/><br/>
        <div className="form">
          <label>Start Date-</label>
          <input
            type="date"
            id="start-date"
          />
        </div>
        <br/><br/><br/><br/>
        <div className="form">
          <label>End Date-</label>
          <input
            type="date"
            id="end-date"
          />
        </div><br/><br/><br/><br/>
        <div className="form">
          <button className="destinationbtn">Destination</button>
          {/* <input
            type="text"
            id="destination"
          /> */}
        </div><br/><br/>
        <button type="submit">Plan Trip</button>
      </form>
    </div>
  );
};
export default Tripplan;
