import { Link } from "react-router-dom";
import doggyPoster from "../assets/yo-doggy-poster.png";
import waitingPoster from "../assets/english_purgatory.jpg";
// import lamp from "../assets/entretemps-lamp.jpg";
// import key from "../assets/entretemps-key.jpg";
// import beadMaze from "../assets/bead-maze-close.jpg";
import princesseCowboy from "../assets/princesse-et-cowboy.jpg";
import monDepOpenCall from "../assets/mon-depanneur-open-call-eng.jpg";
import "./Exhibitions.css";

function Exhibitions() {
  return (
    <div className="exhibitions-page">
      <h2>Upcoming Exhibition:</h2>
      <div className="exhibition-section">
        <h3>MON DÉPANNEUR</h3>
        <p>Applications open until March 31</p>
        <Link to="/contact">
          <img
            className="gallery-image-vert"
            src={monDepOpenCall}
            alt="Poster calling for submissions for upcoming exhibition Mon Dépanneur"
          />{" "}
        </Link>
      </div>
      <h2>Previous Exhibitions:</h2>
      <div className="exhibition-section">
        <h3>PRINCESSE & COWBOY</h3>
        <p>Loup Gauvin-Dufresne & Laurence Savard-Gagnon</p>
        <Link to="/exhibitions/princesse-et-cowboy">
          <img
            className="gallery-image-vert"
            src={princesseCowboy}
            alt="Poster for upcoming exhibition Princesse et Cowboy"
          />{" "}
        </Link>
      </div>
      <div className="exhibition-section">
        <h3>YO DOGGY!</h3>
        <Link to="/exhibitions/yo-doggy">
          <img
            className="gallery-image-vert"
            src={doggyPoster}
            alt="Poster for previous exhibition YO DOGGY!"
          />{" "}
        </Link>
      </div>{" "}
      <div className="exhibition-section">
        <h3>Purgatory is a Waiting Room</h3>
        <p>Etty Anderson & Marie Foxall</p>
        <Link to="/exhibitions/purgatory-is-a-waiting-room">
          <img
            className="gallery-image-vert"
            src={waitingPoster}
            alt="Poster for previous exhibition Purgatory is a Waiting Room"
          />{" "}
        </Link>
      </div>
    </div>
  );
}

export default Exhibitions;
