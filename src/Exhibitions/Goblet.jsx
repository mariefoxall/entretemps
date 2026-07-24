import { useTranslation } from "react-i18next";
import groupShot from "../assets/calisse/calisse-group-shot.jpg";
import mariaIda1 from "../assets/calisse/maria-struk-goblet-1.jpg";
import mariaIda2 from "../assets/calisse/maria-struk-goblet-2.jpg";
import mariaIda3 from "../assets/calisse/maria-struk-goblet-3.jpg";
import kaleyFlowers from "../assets/calisse/kaley-flowers.jpg";
import SSmith1 from "../assets/calisse/SSmith-1.jpg";
import SSmith2 from "../assets/calisse/SSmith-2.jpg";
import melLeandra from "../assets/calisse/mel-leandra-1.jpg";
import teresa1 from "../assets/calisse/teresa-bergen-1.jpg";
import teresa2 from "../assets/calisse/teresa-bergen-2.jpg";
import jade from "../assets/calisse/jade.jpg";
import ettyCan from "../assets/calisse/goblet-can-3-web.jpg";
import ettyGrapes from "../assets/calisse/goblet-grapes-2-web.jpg";
import ettyLemon from "../assets/calisse/goblet-lemon-3-web.jpg";
import claraMarie from "../assets/calisse/marie-clara.jpg";

import "./Exhibitions.css";

function CalisseDeGoblet() {
  const { t } = useTranslation("exhibitions");

  return (
    <div className="exhibitions-page">
      <h3>CALISSE DE GOBLET</h3>
      <div className="exhibition-description">
        <p>{t("goblet.description")}</p>
      </div>
      <div className="exhibition-image-gallery">
        <div className="gallery-image">
          <img
            className="image-in-group"
            src={groupShot}
            alt={t("goblet.images.groupShot")}
          />
          <div className="artist-info">
            <p className="artist-name"> </p>
            <p className="title-of-work"> </p>
            <p className="medium"> </p>
          </div>
        </div>
        <div className="gallery-image-trio">
          <img
            className="image-in-group"
            src={mariaIda1}
            alt={t("goblet.images.mariaIda")}
          />
          <div className="artist-info">
            <p className="artist-name">Maria Ida Designs by Maria Struk</p>
            <p className="title-of-work">With a cherry on top</p>
            <p className="medium">Blown glass</p>
          </div>
        </div>
        <div className="gallery-image-trio">
          <img
            className="image-in-group"
            src={mariaIda2}
            alt={t("goblet.images.mariaIda")}
          />
          <div className="artist-info">
            <p className="artist-name"> </p>
            <p className="title-of-work"> </p>
            <p className="medium"> </p>
          </div>
        </div>
        <div className="gallery-image-trio">
          <img
            className="image-in-group"
            src={mariaIda3}
            alt={t("goblet.images.mariaIda")}
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
            src={kaleyFlowers}
            alt={t("goblet.images.kaleyFlowers")}
          />
          <div className="artist-info">
            <p className="artist-name">Kaley Flowers</p>
            <p className="title-of-work">Chalice for the bees</p>
            <p className="medium">Stoneware, glaze, image transfer</p>
          </div>
        </div>
        <div className="gallery-image-vert">
          <img
            className="image-in-group"
            src={SSmith1}
            alt={t("goblet.images.SSmith1")}
          />
          <div className="artist-info">
            <p className="artist-name">Stefanie Smith</p>
            <p className="title-of-work">Watcher Playu Invites You to Imbibe</p>
            <p className="medium">Salt-fired porcelain, pigment</p>
          </div>
        </div>
        <div className="gallery-image-vert">
          <img
            className="image-in-group"
            src={SSmith2}
            alt={t("goblet.images.SSmith2")}
          />
          <div className="artist-info">
            <p className="artist-name">Stefanie Smith</p>
            <p className="title-of-work">Watcher Calamu Presents Their Cup</p>
            <p className="medium">Porcelain, pigment</p>
          </div>
        </div>
        <div className="gallery-image">
          <img
            className="image-in-group"
            src={melLeandra}
            alt={t("goblet.images.melLeandra")}
          />
          <div className="artist-info">
            <p className="artist-name"> Leandra Brandson x Melanie Barnett </p>
            <p className="title-of-work">
              Little Tongues Goblet / Tendril Goblet / Two-Lip Goblet
            </p>
            <p className="medium">
              Soda-fired porcelaneous stoneware, ^10 reduction, high-temp wire
            </p>
          </div>
        </div>
        <div className="gallery-image-vert">
          <img
            className="image-in-group"
            src={teresa1}
            alt={t("goblet.images.teresa1")}
          />
          <div className="artist-info">
            <p className="artist-name">Teresa Bergen</p>
            <p className="title-of-work">Wild Ride </p>
            <p className="medium"> </p>
          </div>
        </div>
        <div className="gallery-image-vert">
          <img
            className="image-in-group"
            src={teresa2}
            alt={t("goblet.images.teresa2")}
          />
          <div className="artist-info">
            <p className="artist-name">Teresa Bergen</p>
            <p className="title-of-work">Long Legged Goblet Girl in a Gale </p>
            <p className="medium"> </p>
          </div>
        </div>
        <div className="gallery-image">
          <img
            className="image-in-group"
            src={jade}
            alt={t("goblet.images.jade")}
          />
          <div className="artist-info">
            <p className="artist-name">Jade Boutilier</p>
            <p className="title-of-work">Thornucopia</p>
            <p className="medium">Cast aluminum</p>
          </div>
        </div>
        <div className="gallery-image-trio">
          <img
            className="image-in-group"
            src={ettyCan}
            alt={t("goblet.images.ettyCan")}
          />
        </div>
        <div className="gallery-image-trio">
          <img
            className="image-in-group"
            src={ettyGrapes}
            alt={t("goblet.images.ettyGrapes")}
          />
        </div>
        <div className="gallery-image-trio">
          <img
            className="image-in-group"
            src={ettyLemon}
            alt={t("goblet.images.ettyLemon")}
          />
        </div>
        <div className="artist-info">
          <p className="artist-name">Etty Anderson</p>
          <p className="title-of-work">
            What If This Is What They Were Like, Normally (I, II, III)
          </p>
          <p className="medium">Colored porcelain, glaze, lustre</p>
        </div>
        <div className="gallery-image">
          <img
            className="image-in-group"
            src={claraMarie}
            alt={t("goblet.images.claraMarie")}
          />
          <div className="artist-info-double">
            <div className="artist-info">
              <p className="artist-name">Marie Foxall</p>
              <p className="title-of-work">GLOB-A-LABRA</p>
              <p className="medium">Beeswax, cotton wick</p>
            </div>
            <div className="artist-info">
              <p className="artist-name">Clara Tissot</p>
              <p className="title-of-work">Anzar (ⴰⵏⵣⴰⵔ)</p>
              <p className="medium">Argile papier, médium, pigments et métal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalisseDeGoblet;
