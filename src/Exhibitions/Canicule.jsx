import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Canicule.css";

function Canicule() {
  const { t } = useTranslation("exhibitions");

  return (
    <div className="exhibitions-page">
      <h3>CANICULE</h3>
      <div className="exhibition-description">
        <p>
          {t("canicule.description")} <br />
          {t("canicule.applyPrompt")}
        </p>
        <Link to={t("canicule.applyUrl")} target="_blank" rel="noopener noreferrer">
          <button className="application-button">
            {t("canicule.applyButtonLabel")}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Canicule;
