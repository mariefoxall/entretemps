import groupShot from "../assets/calisse/calisse-group-shot.jpg";
import "./Exhibitions.css";

function CalisseDeGoblet() {
  return (
    <div className="exhibitions-page">
      <h3>CALISSE DE GOBLET</h3>
      <div className="exhibition-description">
        <p>
          No matter comment tu le dis, the goblet perseveres à travers le temps
          et l’espace: jamais left behind. Goths, kings and plebs, tous pognent
          le mighty chalice with reverence or normality, ritual or pomp. Verser
          ton potion, wine ou gatorade and behold Calisse de Goblet!
        </p>
      </div>
      <div className="exhibition-image-gallery">
        <div className="gallery-image">
          <img
            className="image-in-group"
            src={groupShot}
            alt="Various works by artists in the Calisse de Goblet exhibition, installed on the walls and on plinths"
          />
          <div className="artist-info">
            <p className="artist-name"> </p>
            <p className="title-of-work"> </p>
            <p className="medium"> </p>
          </div>
        </div>

        {/* <div className="gallery-image-vert">
          <img
            className="image-in-group"
            src={dontForget}
            alt="Sculpted post-it-notes by Kasia Sosnowski in Polymer clay"
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
            alt="Those were the days by Fred Bouin & Jade Boutilier. Turned wood beer bottle in walnut, with cast label in white bronze, yellow bronze"
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
            alt="Retro dep between my 3 1/2 and Rosemont by Tiphaine Lenaïk. Ink and acrylic on canvas"
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
            alt="Salt-fired porcelain Thank You bag by Etty Anderson"
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
            alt="Asymmetrically framed photographs with blue and yellow mats by Katya Konioukhova"
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
            alt="Shakoor (héritage fruits et légumes) par Camille Zurini. Transfert d’image et acrylique sur bois"
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
            alt="Beaded gummy worms in a plastic bag by Marie Foxall"
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
          alt="Shakoor (héritage fruits et légumes) par Camille Zurini. Transfert d’image et acrylique sur bois"
        /> */}
      </div>
    </div>
  );
}

export default CalisseDeGoblet;
