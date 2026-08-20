import { useTranslation } from "react-i18next";
import "./About.css";

function About() {
  const { t } = useTranslation("about");

  return (
    <div className="about-page">
      <h2>{t("pageHeading")}</h2>
      <div className="about-image-placeholder" aria-hidden="true"></div>
      <p>{t("paragraph1")}</p>
      <p>{t("paragraph2")}</p>
      <p>{t("paragraph3")}</p>
    </div>
  );
}

export default About;
