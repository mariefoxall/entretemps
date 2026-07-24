import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import "./Home.css";
import { makeTextWavy } from "../animations";

function Home() {
  const { t } = useTranslation("home");
  const { lang } = useParams();
  const animated = useRef(null);

  useEffect(() => {
    if (animated && animated.current) {
      makeTextWavy("entre\ntemps", animated.current);
    }
  }, []);

  return (
    <>
      <div className="home-section">
        <Link to={`/${lang}/exhibitions`} aria-label={t("heroLinkLabel")}>
          <h1 className="home-heading" ref={animated} aria-hidden="true"></h1>
        </Link>{" "}
        <p className="studio-gallery">{t("tagline")}</p>
      </div>
    </>
  );
}

export default Home;
