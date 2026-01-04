import { Link } from "react-router-dom";
import doggyPoster from "../assets/yo-doggy-poster.png";
import waitingPoster from "../assets/english_purgatory.jpg";
import calissePoster from "../assets/calisse-de-goblet-poster.jpg";
import princesseCowboy from "../assets/princesse-et-cowboy.jpg";
import monDepPoster from "../assets/dep-poster-letter-web.jpg";
import BPOB from "../assets/BlueprintsOfBelongingPoster.jpg";
import call from "../assets/jardin-secret/jardin-secret-call-submissions.jpg";
import appel from "../assets/jardin-secret/jardin-secret-appel-dossiers.jpg";
import "./Exhibitions.css";

function Exhibitions() {
  return (
    <div className="exhibitions-page">
      {/* <div className="current">
        <h2>Current Exhibition:</h2>
        <div className="exhibition-section">
          <div className="exhibition-header">
            <h3>CALISSE DE GOBLET</h3>{" "}
          </div>
          <img
            className="poster-image"
            src={calissePoster}
            alt="Poster for the group art show exhibition Calisse de Goblet"
          />{" "}
        </div>
      </div> */}
      <div className="upcoming">
        <h2>Expositions à venir / Upcoming Exhibitions:</h2>
        <div className="open-call">
          <div>
            <Link to="https://forms.gle/8xXYR12jPh1bhE1D6">
              <img
                className="open-call-poster"
                src={appel}
                alt="Poster for open call for Jardin Secret Exhibition with link to application form in French"
              />
            </Link>
          </div>
          <div>
            <Link to="https://forms.gle/PAeWjrwNRnXGGGG37">
              <img
                className="open-call-poster"
                src={call}
                alt="Poster for open call for Jardin Secret Exhibition with link to application form in English"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="previous">
        <h2>
          Expositions passées /<br /> Previous Exhibitions:
        </h2>
        <p>Click the poster for images from that show!</p>
        <div className="previous-posters">
          <div className="exhibition-section">
            <Link to="/exhibitions/calisse-de-goblet">
              <img
                className="poster-image"
                src={calissePoster}
                alt="Poster for the group art show exhibition Calisse de Goblet"
              />{" "}
            </Link>
          </div>{" "}
          <div className="exhibition-section">
            <Link to="/exhibitions/mon-depanneur">
              <img
                className="poster-image"
                src={monDepPoster}
                alt="Poster group art show exhibition Mon Dépanneur"
              />{" "}
            </Link>
          </div>{" "}
          <div className="exhibition-section">
            <Link to="/exhibitions/blueprints-of-belonging">
              <img
                className="poster-image"
                src={BPOB}
                alt="Blueprints of Belonging photo exhibition poster"
              />{" "}
            </Link>
          </div>
          <div className="exhibition-section">
            {" "}
            <Link to="/exhibitions/princesse-et-cowboy">
              <img
                className="poster-image"
                src={princesseCowboy}
                alt="Poster for upcoming exhibition Princesse et Cowboy"
              />{" "}
            </Link>
          </div>
          <div className="exhibition-section">
            <Link to="/exhibitions/yo-doggy">
              <img
                className="poster-image"
                src={doggyPoster}
                alt="Poster for previous exhibition YO DOGGY!"
              />{" "}
            </Link>
          </div>{" "}
          <div className="exhibition-section">
            <Link to="/exhibitions/purgatory-is-a-waiting-room">
              <img
                className="poster-image"
                src={waitingPoster}
                alt="Poster for previous exhibition Purgatory is a Waiting Room"
              />{" "}
            </Link>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Exhibitions;
