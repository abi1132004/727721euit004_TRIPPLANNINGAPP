import "./searchItem.css";
import { Link } from "react-router-dom";
const SearchItem = () => {
  return (
    <>
    <div className="newsearch">
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Le Meridian</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">200000rs</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to="/Payment"><button className="siCheckButton">Pay now</button></Link>
        </div>
      </div>
      <br/><br/>
    </div>
    <div className="searchItem">
    <img
      src="data:image/jpeg;base64,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"
      alt=""
      className="siImg"
    />
    <div className="siDesc">
      <h1 className="siTitle">Italian dinner</h1>
      <span className="siDistance">500m from center</span>
      <span className="siTaxiOp">Free airport taxi</span>
      <span className="siSubtitle">
        Studio Apartment with Air conditioning
      </span>
      <span className="siFeatures">
        Entire studio • 1 bathroom • 21m² 1 full bed
      </span>
      <span className="siCancelOp">Free cancellation </span>
      <span className="siCancelOpSubtitle">
        You can cancel later, so lock in this great price today!
      </span>
    </div>
    <div className="siDetails">
      <div className="siRating">
        <span>Excellent</span>
        <button>8.9</button>
      </div>
      <div className="siDetailTexts">
        <span className="siPrice">`100000rs</span>
        <span className="siTaxOp">Includes taxes and fees</span>
        <Link to="/Payment"><button className="siCheckButton">Pay now</button></Link>
      </div>
    </div>
    <br/><br/>
  </div>
  <div className="searchItem">
      <img
        src="data:image/jpeg;base64,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"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Mexican Restaurant</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">80000rs</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to="/Payment"><button className="siCheckButton">Pay now</button></Link>
        </div>
      </div>
      <br/><br/>
    </div>
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Chinese Restaurant</h1>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">200000rs</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to="/Payment"><button className="siCheckButton">Pay now</button></Link>
        </div>
      </div>
      <br/><br/>
    </div>
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Restaurant ABC</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">150000rs</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to="/Payment"><button className="siCheckButton">Pay now</button></Link>
        </div>
      </div>
      <br/><br/>
    </div>
    </div>
  </>
  );
};

export default SearchItem;