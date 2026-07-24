import { useTranslation } from "react-i18next";
import Booking from "./Booking";
import "./Visit.css";

function Visit() {
  const { t } = useTranslation("visit");

  return (
    <div className="visit-page">
      <h2>{t("pageHeading")}</h2>
      <div className="visit-section">
        <h3>{t("findUsHeading")}</h3>
        <p>{t("addressLine1")}</p>
        <p>{t("addressLine2")}</p>
      </div>
      <div className="visit-section">
        <h3>{t("hoursHeading")}</h3>
        <br />
        <p>{t("duringExhibition")}</p>
        <p>{t("weekendHours")}</p>
        {/* <p>- from time to time</p> */}
        <p>
          {t("weekdayPrefix")} <Booking />
        </p>
      </div>
    </div>
  );
}

export default Visit;
