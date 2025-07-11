import Booking from "./Booking";
import "./Visit.css";

function Visit() {
  return (
    <div className="visit-page">
      <h2>Check us out IRL</h2>
      <div className="visit-section">
        <h3>You can find us at:</h3>
        <p>4307 rue Sainte Catherine E</p>
        <p>Montreal QC</p>
      </div>
      <div className="visit-section">
        <h3>Opening hours:</h3>

        <br />
        <p>Saturdays & Sundays: 12pm - 5pm</p>
        {/* <p>- from time to time</p> */}
        <p>Weekdays: by appointment</p>
      </div>
      <Booking />
    </div>
  );
}

export default Visit;
