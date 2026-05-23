import { Link } from "react-router-dom";
import "./Canicule.css";

function Canicule() {
  return (
    <div className="exhibitions-page">
      <h3>CANICULE</h3>
      <div className="exhibition-description">
        <p>
          Notre exposition estivale arrive à grands pas ! Vous sentez la chaleur
          monter ? Joignez-vous à nous pour célébrer (ou déplorer) les semaines
          les plus chaudes de l'année et soumettez vos œuvres d'art les plus
          torrides. <br />
          Faites votre demande ici:
        </p>
        <Link
          to="https://forms.gle/uThyqkQ8xirXx59eA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="application-button">Formulaire en français</button>
        </Link>
        <br />
        <p>
          Our summer show is coming! Can you feel the heat? Join us to celebrate
          (or bemoan) the hottest weeks of the year, and submit your steamiest
          works of art. <br />
          Apply here:
        </p>

        <Link
          to="https://forms.gle/ukHUNavamB9f5BTr5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="application-button">Form in English</button>
        </Link>
      </div>
    </div>
  );
}

export default Canicule;
