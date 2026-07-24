import { useTranslation } from "react-i18next";
import groupShot from "../assets/jardin-secret/group-shot-right.jpg";
import daria1 from "../assets/jardin-secret/daria-1.webp";
import daria2 from "../assets/jardin-secret/daria-2.webp";
import jade from "../assets/jardin-secret/jade.webp";
import gigi from "../assets/jardin-secret/gigi.webp";
import MCMB from "../assets/jardin-secret/MC-M-B.webp";
import JK from "../assets/jardin-secret/jason-karolanne.webp";
import caro from "../assets/jardin-secret/caro-etchart.jpg";
import elpis from "../assets/jardin-secret/elpis-ii.jpg";
import cereal from "../assets/jardin-secret/cereal.webp";

import "./Exhibitions.css";

function JardinSecret() {
  const { t } = useTranslation("exhibitions");

  return (
    <div className="exhibitions-page">
      <h3>JARDIN SECRET</h3>
      <div className="exhibition-description">
        <p>{t("jardinSecret.description")}</p>
      </div>
      <div className="exhibition-image-gallery">
        <div className="gallery-image">
          <img
            className="image-in-group"
            src={groupShot}
            alt={t("jardinSecret.images.groupShot")}
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
            src={caro}
            alt={t("jardinSecret.images.caro")}
          />
          <div className="artist-info">
            <p className="artist-name">Caro Etchart</p>
            <p className="title-of-work">Coucoun</p>
            <p className="medium">
              Photography, crochet. Textile sculpture: Crochet, embroidery.
              Mixed yarn, beads, metal wire
            </p>
          </div>
        </div>
        <div className="gallery-image-vert">
          <img
            className="image-in-group"
            src={elpis}
            alt={t("jardinSecret.images.elpis")}
          />
          <div className="artist-info">
            <p className="artist-name">Josie-Anne Lemieux</p>
            <p className="title-of-work">Elpis II</p>
            <p className="medium">
              faïence québécoise, pigments, émail, lustre, laitons, quartz,
              grenat, perles d’eau douce, soie.
            </p>
          </div>
        </div>
        <div className="gallery-image">
          <img
            className="image-in-group"
            src={daria1}
            alt={t("jardinSecret.images.daria1")}
          />
          <div className="artist-info">
            <p className="artist-name"> </p>
            <p className="title-of-work"> </p>
            <p className="medium"> </p>
          </div>
        </div>
        <div className="gallery-image">
          <img
            className="image-in-group"
            src={daria2}
            alt={t("jardinSecret.images.daria2")}
          />
          <div className="artist-info">
            <p className="artist-name">Daria Fontaine Pasquali</p>
            <p className="title-of-work">Shifting Immortals</p>
            <p className="medium">
              Aluminium,bronze jaune, terre, argile crue, papier, verre, coton,
              graines de fleurs
            </p>
          </div>
        </div>

        <div className="gallery-image-vert">
          <img
            className="image-in-group"
            src={MCMB}
            alt={t("jardinSecret.images.MCMB")}
          />
        </div>
        <div className="gallery-image-vert">
          <img
            className="image-in-group"
            src={JK}
            alt={t("jardinSecret.images.JK")}
          />
        </div>
        <div className="gallery-image">
          <img
            className="image-in-group"
            src={gigi}
            alt={t("jardinSecret.images.gigi")}
          />
          <div className="artist-info">
            <p className="artist-name">Gigi Wenger</p>
            <p className="title-of-work">
              The gritty, the grunge & the gorgeous
            </p>
            <p className="medium">
              ceramic (red clay, electric fire cone 5, oxydation, various
              glazes)
            </p>
          </div>
        </div>
        <div className="gallery-image">
          <img
            className="image-in-group"
            src={jade}
            alt={t("jardinSecret.images.jade")}
          />
          <div className="artist-info">
            <p className="artist-name">Jade Boutilier</p>
            <p className="title-of-work">Not Yet, But Soon </p>
            <p className="medium">
              Sterling silver with Freshwater pearls, Brecciated Jasper from BC
              carved by Atelier J.A.R., adzuki bean, moss, glass{" "}
            </p>
          </div>
        </div>
        <div className="gallery-image">
          <img
            className="image-in-group"
            src={cereal}
            alt={t("jardinSecret.images.cereal")}
          />
          <div className="artist-info">
            <p className="artist-name">Etty Anderson</p>
            <p className="title-of-work">
              If By Some Magic a Fort of Cereal Boxes Could Render You Invisible
              to Your Older Brothers While You Try and Have a Nice Breakfast
            </p>
            <p className="medium">
              Stoneware, porcelain, stain, glaze. Cone 6 oxidation{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JardinSecret;
