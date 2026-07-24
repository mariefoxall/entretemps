import { useTranslation } from "react-i18next";
import dogAndKong from "../assets/dog-kong.jpg";
import captive from "../assets/captive-collar-stand.jpg";
import overallYoDoggy from "../assets/yo-doggy-right-side.jpg";
import bestInShowCups from "../assets/best-in-show-cups.jpg";
import bestInShowTrophy from "../assets/best-in-show-trophy.jpg";
import woofWoofNight from "../assets/woof-woof-night.jpg";
import "./Exhibitions.css";

function YoDoggy() {
  const { t } = useTranslation("exhibitions");

  return (
    <div className="exhibitions-page">
      <h3>YO DOGGY!</h3>
      <img
        className="gallery-image"
        src={overallYoDoggy}
        alt={t("doggy.images.overall")}
      />
      <img
        className="gallery-image-vert"
        src={dogAndKong}
        alt={t("doggy.images.dogAndKong")}
      />
      <img
        className="gallery-image-vert"
        src={captive}
        alt={t("doggy.images.captive")}
      />
      <img
        className="gallery-image"
        src={woofWoofNight}
        alt={t("doggy.images.woofWoofNight")}
      />
      <img
        className="gallery-image-vert"
        src={bestInShowTrophy}
        alt={t("doggy.images.bestInShowTrophy")}
      />
      <img
        className="gallery-image-vert"
        src={bestInShowCups}
        alt={t("doggy.images.bestInShowCups")}
      />
    </div>
  );
}

export default YoDoggy;
