import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import doggyPoster from "../assets/yo-doggy-poster.png";
import waitingPoster from "../assets/english_purgatory.jpg";
import calissePoster from "../assets/calisse-de-goblet-poster.jpg";
import princesseCowboy from "../assets/princesse-et-cowboy.jpg";
import monDepPoster from "../assets/dep-poster-letter-web.jpg";
import BPOB from "../assets/BlueprintsOfBelongingPoster.jpg";
import call from "../assets/jardin-secret/jardin-secret-call-submissions.jpg";
import appel from "../assets/jardin-secret/jardin-secret-appel-dossiers.jpg";
import jsPoster from "../assets/JS-poster.jpg";
import canicule from "../assets/canicule/canicule-heat-wave-poster.jpg";
import calissePoster2 from "../assets/calisse2/calisse-de-goblet-2-poster.jpg";
import "./Exhibitions.css";

function Exhibitions() {
  const { t } = useTranslation("exhibitions");
  const { lang } = useParams();

  return (
    <div className="exhibitions-page">
      {/* <div className="current">
        <h2>{t("listing.currentHeading")}</h2>
       
      </div> */}
      <div className="upcoming">
        <h2>
          Expositions à venir / <br />
          Upcoming Exhibitions:
        </h2>
        <div className="open-call">
          <div className="exhibition-section">
            <Link to="/exhibitions/calisse-de-goblet-2">
              <img
                className="poster-image"
                src={calissePoster2}
                alt="Poster for the open call for submissions for the exhibition Calisse de Goblet"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="previous">
        <h2>{t("listing.previousHeading")}</h2>
        <p>{t("listing.clickPosterHint")}</p>
        <div className="previous-posters">
          <div className="exhibition-section">
            <div className="exhibition-header">
              {/* <h3>CANICULE</h3>{" "} */}
            </div>
            <Link to={`/${lang}/exhibitions/canicule`}>
              <img
                className="poster-image"
                src={canicule}
                alt={t("canicule.posterAlt")}
              />
            </Link>
          </div>
          <div className="exhibition-section">
            <Link to={`/${lang}/exhibitions/jardin-secret`}>
              <img
                className="poster-image"
                src={jsPoster}
                alt={t("jardinSecret.posterAlt")}
              />
            </Link>
          </div>
          <div className="exhibition-section">
            <Link to={`/${lang}/exhibitions/calisse-de-goblet`}>
              <img
                className="poster-image"
                src={calissePoster}
                alt={t("goblet.posterAlt")}
              />{" "}
            </Link>
          </div>{" "}
          <div className="exhibition-section">
            <Link to={`/${lang}/exhibitions/mon-depanneur`}>
              <img
                className="poster-image"
                src={monDepPoster}
                alt={t("depanneur.posterAlt")}
              />{" "}
            </Link>
          </div>{" "}
          <div className="exhibition-section">
            <Link to={`/${lang}/exhibitions/blueprints-of-belonging`}>
              <img
                className="poster-image"
                src={BPOB}
                alt={t("blueprints.posterAlt")}
              />{" "}
            </Link>
          </div>
          <div className="exhibition-section">
            {" "}
            <Link to={`/${lang}/exhibitions/princesse-et-cowboy`}>
              <img
                className="poster-image"
                src={princesseCowboy}
                alt={t("princesseCowboy.posterAlt")}
              />{" "}
            </Link>
          </div>
          <div className="exhibition-section">
            <Link to={`/${lang}/exhibitions/yo-doggy`}>
              <img
                className="poster-image"
                src={doggyPoster}
                alt={t("doggy.posterAlt")}
              />{" "}
            </Link>
          </div>{" "}
          <div className="exhibition-section">
            <Link to={`/${lang}/exhibitions/purgatory-is-a-waiting-room`}>
              <img
                className="poster-image"
                src={waitingPoster}
                alt={t("purgatory.posterAlt")}
              />{" "}
            </Link>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Exhibitions;
