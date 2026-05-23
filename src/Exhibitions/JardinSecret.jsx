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
  return (
    <div className="exhibitions-page">
      <h3>JARDIN SECRET</h3>
      <div className="exhibition-description">
        <p>
          Une précieuse forteresse de sentiments ou de pensées intimes que nous
          voulons garder exclusivement pour nous. Nos mots cachés, notre poésie
          intime, un lieu où nous nous sentons en sécurité et protégés. <br />
          <br />A precious fortress of intimate feelings or thoughts that we
          want to keep exclusively for ourselves. Our hidden words, our intimate
          poetry, a place where we feel safe and held.
        </p>
      </div>
      <div className="exhibition-image-gallery">
        <div className="gallery-image">
          <img
            className="image-in-group"
            src={groupShot}
            alt="Various works by artists in the Jardin Secret exhibition, installed on the walls and on plinths"
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
            alt="Crocheted cocoon with colourful yarn spilling out, photos of experiential installation with a human wearing a similar cocoon"
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
            alt="Ceramic iris vase with beaded mobile and ceramic creatures hidden inside"
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
            alt="Glass terrarium with ceramic and cloth sculptures inside - condensation on the glass obscures the view of the sculptures inside"
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
            alt="Metal terrarium with resting on a bed of soil, glass shards inside"
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
            alt="Vases by Mao & Chris, Beaded diary by Marie Foxall, Ceramic stacked shards by Bridget Fairbank"
          />
        </div>
        <div className="gallery-image-vert">
          <img
            className="image-in-group"
            src={JK}
            alt="Abstract painting on tiled ceramics by Jason Mitchell, grid of colourful polaroids by Karolanne Solis"
          />
        </div>
        <div className="gallery-image">
          <img
            className="image-in-group"
            src={gigi}
            alt="Three ceramic sculptures on a plinth, abstract gargoyle creatures"
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
            alt="Sterling silver locket with bean inside and handmade chain with pearls"
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
            alt="Ceramic life-sized cereal boxes arranged as a fort"
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
