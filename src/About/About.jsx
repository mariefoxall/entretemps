import { useTranslation } from "react-i18next";
import "./About.css";
import galleryAtNight from "../assets/entretemps-gallery-front-night.jpg";

function About() {
  const { t } = useTranslation("about");

  return (
    <div className="about-page">
      <h2>{t("pageHeading")}</h2>
      <img
        src={galleryAtNight}
        alt={t(
          "facade of Entretemps gallery at night, with a well-lit art exhibition inside",
        )}
        className="about-image"
      />
      <p>{t("paragraph1")}</p>
      <p>{t("paragraph2")}</p>
      <p>{t("paragraph3")}</p>
    </div>
  );
}

export default About;
