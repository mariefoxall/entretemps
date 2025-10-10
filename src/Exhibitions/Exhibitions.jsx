import { Link } from "react-router-dom";
import doggyPoster from "../assets/yo-doggy-poster.png";
import waitingPoster from "../assets/english_purgatory.jpg";
import calissePoster from "../assets/calisse-de-goblet-poster-square.png";
// import lamp from "../assets/entretemps-lamp.jpg";
// import key from "../assets/entretemps-key.jpg";
// import beadMaze from "../assets/bead-maze-close.jpg";
import princesseCowboy from "../assets/princesse-et-cowboy.jpg";
import monDepPoster from "../assets/dep-poster-letter-web.jpg";
import BPOB from "../assets/BlueprintsOfBelongingPoster.jpg";
import "./Exhibitions.css";

function Exhibitions() {
  return (
    <div className="exhibitions-page">
      {/* <div className="current">
        <h2>Current Exhibition:</h2>
        
      </div> */}
      <div className="upcoming">
        <h2>Upcoming Exhibitions:</h2>
        <div className="exhibition-section">
          <div className="exhibition-header">
            <h3>CALISSE DE GOBLET</h3>{" "}
          </div>
          <img
            className="gallery-image-vert"
            src={calissePoster}
            alt="Poster for the group art show exhibition Calisse de Goblet"
          />{" "}
        </div>
      </div>
      <div className="previous">
        <h2>Previous Exhibitions:</h2>
        <div className="exhibition-section">
          <div className="exhibition-header">
            <h3>MON DÉPANNEUR</h3>{" "}
          </div>
          <img
            className="gallery-image-vert"
            src={monDepPoster}
            alt="Poster group art show exhibition Mon Dépanneur"
          />{" "}
        </div>{" "}
        <div className="exhibition-section">
          <div className="exhibition-header">
            <h3>BLUEPRINTS OF BELONGING</h3>
            <p>Lawrence Fafard</p>
          </div>
          <img
            className="gallery-image-vert"
            src={BPOB}
            alt="Blueprints of Belonging photo exhibition poster"
          />{" "}
        </div>
        <div className="exhibition-section">
          {" "}
          <div className="exhibition-header">
            <h3>PRINCESSE & COWBOY</h3>
            <p>Loup Gauvin-Dufresne & Laurence Savard-Gagnon</p>
          </div>
          <Link to="/exhibitions/princesse-et-cowboy">
            <img
              className="gallery-image-vert"
              src={princesseCowboy}
              alt="Poster for upcoming exhibition Princesse et Cowboy"
            />{" "}
          </Link>
        </div>
        <div className="exhibition-section">
          <div className="exhibition-header">
            <h3>YO DOGGY!</h3>
          </div>
          <Link to="/exhibitions/yo-doggy">
            <img
              className="gallery-image-vert"
              src={doggyPoster}
              alt="Poster for previous exhibition YO DOGGY!"
            />{" "}
          </Link>
        </div>{" "}
        <div className="exhibition-section">
          <div className="exhibition-header">
            <h3>Purgatory is a Waiting Room</h3>
            <p>Etty Anderson & Marie Foxall</p>
          </div>
          <Link to="/exhibitions/purgatory-is-a-waiting-room">
            <img
              className="gallery-image-vert"
              src={waitingPoster}
              alt="Poster for previous exhibition Purgatory is a Waiting Room"
            />{" "}
          </Link>
        </div>
      </div>{" "}
    </div>
  );
}

export default Exhibitions;
