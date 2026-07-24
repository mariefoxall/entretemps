import { useTranslation } from "react-i18next";
import cigarettes from "../assets/cigarettes.jpg";
import lamp from "../assets/portal-lamp-cropped.jpg";
import lampAndMaze from "../assets/chainmail-lamp-bead-maze.jpg";
import overall from "../assets/overall.jpg";
import chair from "../assets/tall-chair.jpg";
import ceramicCorner from "../assets/ceram-corner.jpg";
import "./Exhibitions.css";

function Purgatory() {
  const { t } = useTranslation("exhibitions");

  return (
    <div className="exhibitions-page">
      <div className="exhibition-section">
        <h3>Purgatory is a Waiting Room</h3>
        <p>Etty Anderson & Marie Foxall</p>
        <img
          className="gallery-image"
          src={overall}
          alt={t("purgatory.images.overall")}
        />
        <img
          className="gallery-image-vert"
          src={lamp}
          alt={t("purgatory.images.lamp")}
        />
        <img
          className="gallery-image-vert"
          src={lampAndMaze}
          alt={t("purgatory.images.lampAndMaze")}
        />
        <img
          className="gallery-image"
          src={cigarettes}
          alt={t("purgatory.images.cigarettes")}
        />
        <img
          className="gallery-image-vert"
          src={ceramicCorner}
          alt={t("purgatory.images.ceramicCorner")}
        />
        <img
          className="gallery-image-vert"
          src={chair}
          alt={t("purgatory.images.chair")}
        />
      </div>
    </div>
  );
}

export default Purgatory;
