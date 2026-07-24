import { useTranslation } from "react-i18next";
import vitrine from "../assets/depanneur/outside-sunny-mon-dep.jpg";
import depLaura from "../assets/depanneur/dep-Laura-Tiphaine-Lenaik.jpg";
import dontForget from "../assets/depanneur/dont-forget-kasia-sosnowski.jpg";
import smallDepWorksFramed from "../assets/depanneur/eighty-a-day-alissa-osumi-andras-csaszar.jpg";
import groupShot from "../assets/depanneur/group-shot-mon-dep.jpg";
import heritage from "../assets/depanneur/heritage-fruits-et-legumes-camille-zurini.jpg";
import jarjar from "../assets/depanneur/jar-jar-binks-visits-new-york-Etty-Anderson.jpg";
import pointDaide from "../assets/depanneur/point-daide-Katya-Konioukhova.jpg";
import vieuxMontreal from "../assets/depanneur/vieux-montreal-jade-fred.jpg";

import vers from "../assets/depanneur/vers-marie-foxall.jpg";
import "./Exhibitions.css";

function MonDepanneur() {
  const { t } = useTranslation("exhibitions");

  return (
    <div className="exhibitions-page">
      <h3>MON DÉPANNEUR</h3>
      <div className="exhibition-description">
        <p>{t("depanneur.description")}</p>
      </div>
      <div className="exhibition-image-gallery">
        <div className="gallery-image">
          <img
            className="image-in-group"
            src={groupShot}
            alt={t("depanneur.images.groupShot")}
          />
          <div className="artist-info">
            <p className="artist-name"> </p>
            <p className="title-of-work"> </p>
            <p className="medium"> </p>
          </div>
        </div>

        <div className="gallery-image-vert">
          <img
            className="image-in-group"
            src={dontForget}
            alt={t("depanneur.images.dontForget")}
          />
          <div className="artist-info">
            <p className="artist-name"> Kasia Sosnowski</p>
            <p className="title-of-work"> Don't Forget</p>
            <p className="medium">Polymer clay</p>
          </div>
        </div>
        <div className="gallery-image-vert">
          <img
            className="image-in-group"
            src={vieuxMontreal}
            alt={t("depanneur.images.vieuxMontreal")}
          />
          <div className="artist-info">
            <p className="artist-name"> Fred Bouin & Jade Boutilier</p>
            <p className="title-of-work"> Those were the days</p>
            <p className="medium">Walnut, white bronze, yellow bronze</p>
          </div>
        </div>

        <div className="gallery-image">
          <img
            className="image-in-group"
            src={depLaura}
            alt={t("depanneur.images.depLaura")}
          />{" "}
          <div className="artist-info">
            <p className="artist-name"> Tiphaine Lenaïk</p>
            <p className="title-of-work">
              {" "}
              Retro dep between my 3 1/2 and Rosemont
            </p>
            <p className="medium">Ink and acrylic on canvas</p>
          </div>
        </div>

        <div className="gallery-image-vert">
          <img
            className="image-in-group"
            src={jarjar}
            alt={t("depanneur.images.jarjar")}
          />
          <div className="artist-info">
            <p className="artist-name"> Etty Anderson</p>
            <p className="title-of-work">Jar Jar Binks visits New York </p>
            <p className="medium">Salt-fired porcelain</p>
          </div>
        </div>
        <div className="gallery-image-vert">
          <img
            className="image-in-group"
            src={pointDaide}
            alt={t("depanneur.images.pointDaide")}
          />{" "}
          <div className="artist-info">
            <p className="artist-name">Katya Konioukhova</p>
            <p className="title-of-work">
              point d'aide I & II
              <p className="medium">
                impression jet d'encre sur papier 100% cotton, <br />
                cadre sur mesure par Cool Cadre
              </p>
            </p>
          </div>
        </div>

        <div className="gallery-image-vert">
          <img
            className="image-in-group"
            src={heritage}
            alt={t("depanneur.images.heritage")}
          />{" "}
          <div className="artist-info">
            <p className="artist-name">Camille Zurini</p>
            <p className="title-of-work">
              Héritage fruits et légumes <br />
              Shakoor (héritage fruits et légumes)
            </p>
            <p className="medium">Transfert d’image et acrylique sur bois</p>
          </div>
        </div>
        <div className="gallery-image-vert">
          <img
            className="image-in-group"
            src={vers}
            alt={t("depanneur.images.vers")}
          />{" "}
          <div className="artist-info">
            <p className="artist-name">Marie Foxall</p>
            <p className="title-of-work">VERS</p>
            <p className="medium">glass beads, lucite, thread & plastic</p>
          </div>
        </div>

        <img
          className="gallery-image"
          src={smallDepWorksFramed}
          alt={t("depanneur.images.heritage")}
        />
      </div>
    </div>
  );
}

export default MonDepanneur;
