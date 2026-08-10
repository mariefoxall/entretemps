import "./Goblet2.css";
import CDG2Logo from "../assets/calisse2/logo-gold.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Goblet2() {
  const { i18n } = useTranslation();
  const isFrench = i18n.language === "fr";

  const submissionTitleText = isFrench
    ? "Appel de dossiers ouvert!"
    : "Now accepting submissions!";
  const buttonText = isFrench ? "Soumettre ici" : "Apply here";
  const linkUrl = isFrench
    ? "https://forms.gle/5edSJNWsbNsMq25G8"
    : "https://forms.gle/FMoCRaib7rknY42M6";

  return (
    <div className="exhibitions-page">
      <h3>CALISSE DE GOBLET</h3>
      <div className="exhibition-description">
        <img
          src={CDG2Logo}
          alt="Calisse de Goblet logo"
          className="goblet-logo-spin"
        />
        <p className="exhibition-text">
          No matter comment tu le dis, the goblet perseveres à travers le temps
          et l’espace: jamais left behind. Goths, kings and plebs, tous poignent
          le mighty chalice with reverence or normality, ritual or pomp. Verser
          ton potion, wine ou gatorade and behold Calisse de Goblet!
        </p>
      </div>
      <div>
        <div className="submission-section">
          <h3>{submissionTitleText}</h3>
          <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            <button className="apply-button">{buttonText}</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Goblet2;
