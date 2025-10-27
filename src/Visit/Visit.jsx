import Booking from "./Booking";
import "./Visit.css";

function Visit() {
  return (
    <div className="visit-page">
      <h2>Venez nous voir / Check us out IRL</h2>
      <div className="visit-section">
        <h3>Vous pouvez nous trouver au:</h3>
        <p>4307 rue Sainte Catherine E</p>
        <p>Montreal QC</p>
      </div>
      <div className="visit-section">
        <h3>Heures d&apos;ouverture:</h3>

        <br />
        <p>Lors d&apos;une exposition:</p>
        <p>samedi & dimanche: 12h - 17h</p>
        <p>jours de semaine: sur rendez-vous</p>
        <br></br>
        <br></br>
        <h3>Opening hours:</h3>
        <br></br>
        <p>During an exhibition:</p>
        <p>Saturdays & Sundays: 12pm - 5pm</p>
        {/* <p>- from time to time</p> */}
        <p>Weekdays: by appointment</p>
      </div>
      <Booking />
    </div>
  );
}

export default Visit;
