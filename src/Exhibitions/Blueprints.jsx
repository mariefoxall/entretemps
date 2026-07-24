import { useTranslation } from "react-i18next";
import groupShot from "../assets/bpob/bpob-wide-shot.jpg";
import TJ from "../assets/bpob/TJ.jpg";

import satinee from "../assets/bpob/satinee.jpg";
import andrea from "../assets/bpob/andrea.jpg";
import lyrael from "../assets/bpob/lyrael.jpg";
import cyanoTee from "../assets/bpob/cyanotype-tee.jpg";
import largeFramed from "../assets/bpob/framed.jpg";
import "./Exhibitions.css";

function BlueprintsOfBelonging() {
  const { t } = useTranslation("exhibitions");

  return (
    <div className="exhibitions-page">
      <h3>BLUEPRINTS OF BELONGING</h3>
      <div className="exhibition-description">
        <p>{t("blueprints.description")}</p>
      </div>
      <div className="exhibition-image-gallery">
        <div className="gallery-image">
          <img
            className="image-in-group"
            src={groupShot}
            alt={t("blueprints.images.wideShot")}
          />
        </div>
        <div className="gallery-image-vert">
          <img
            className="image-in-group"
            src={largeFramed}
            alt={t("blueprints.images.wideShot")}
          />
        </div>
        <div className="gallery-image-vert">
          <img
            className="image-in-group"
            src={TJ}
            alt={t("blueprints.images.portraitOverlay")}
          />
        </div>{" "}
        <div className="gallery-image">
          <img
            className="image-in-group"
            src={lyrael}
            alt={t("blueprints.images.portraitPlexiglass")}
          />
        </div>
        <div className="gallery-image-vert">
          <img
            className="image-in-group"
            src={andrea}
            alt={t("blueprints.images.portraitOverlay")}
          />
        </div>
        <div className="gallery-image-vert">
          <img
            className="image-in-group"
            src={satinee}
            alt={t("blueprints.images.portraitOverlay")}
          />
        </div>
        <div className="gallery-image">
          <img
            className="image-in-group"
            src={cyanoTee}
            alt={t("blueprints.images.cyanoTee")}
          />
        </div>
      </div>
    </div>
  );
}

export default BlueprintsOfBelonging;
