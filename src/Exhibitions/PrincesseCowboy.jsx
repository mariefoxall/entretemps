import { useTranslation } from "react-i18next";
import vitrine from "../assets/princesse-et-cowboy-vitrine.jpg";
import dechirure from "../assets/dechirure.jpg";
import chasseur from "../assets/chasseur-de-reve.jpg";
import repos from "../assets/repos1.jpg";
import repos2 from "../assets/repos2.jpg";
import chevet1 from "../assets/chevet1.jpg";
import livreCowboy from "../assets/livre-cowboy.jpg";
import cowboy from "../assets/cowboy.jpg";
import table from "../assets/table-loup.jpg";

function PrincesseEtCowboy() {
  const { t } = useTranslation("exhibitions");

  return (
    <div className="exhibitions-page">
      <div className="exhibition-section">
        <h3>PRINCESSE & COWBOY</h3>
        <p>Loup Gauvin-Dufresne & Laurence Savard-Gagnon</p>
        <img
          className="gallery-image-vert"
          src={vitrine}
          alt={t("princesseCowboy.images.vitrine")}
        />
        <img
          className="gallery-image-vert"
          src={dechirure}
          alt={t("princesseCowboy.images.dechirure")}
        />
        <img
          className="gallery-image"
          src={chasseur}
          alt={t("princesseCowboy.images.chasseur")}
        />
        <img
          className="gallery-image-vert"
          src={livreCowboy}
          alt={t("princesseCowboy.images.book")}
        />
        <img
          className="gallery-image-vert"
          src={cowboy}
          alt={t("princesseCowboy.images.book")}
        />

        <img
          className="gallery-image-vert"
          src={chevet1}
          alt={t("princesseCowboy.images.chevet1")}
        />
        <img
          className="gallery-image-vert"
          src={table}
          alt={t("princesseCowboy.images.table")}
        />
        <img
          className="gallery-image-vert"
          src={repos}
          alt={t("princesseCowboy.images.repos")}
        />
        <img
          className="gallery-image-vert"
          src={repos2}
          alt={t("princesseCowboy.images.repos")}
        />
      </div>
    </div>
  );
}

export default PrincesseEtCowboy;
