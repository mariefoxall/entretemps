import groupShot from "../assets/bpob/bpob-wide-shot.jpg";
import TJ from "../assets/bpob/TJ.jpg";
// import largeFramed from "../assets/bpob/blueprints-large-framed.jpg";
import satinee from "../assets/bpob/satinee.jpg";
import andrea from "../assets/bpob/andrea.jpg";
import lyrael from "../assets/bpob/lyrael.jpg";
import cyanoTee from "../assets/bpob/cyanotype-tee.jpg";
import "./Exhibitions.css";

function BlueprintsOfBelonging() {
  return (
    <div className="exhibitions-page">
      <h3>BLUEPRINTS OF BELONGING</h3>
      <div className="exhibition-description">
        <p>
          Blueprints of Belonging est une exposition photographique qui trace
          une cartographie sensible des regards, des gestes et des fragments de
          quotidien de personnes trans et non binaires. Principalement réalisées
          en cyanotypes, les œuvres évoquent la mémoire, l'empreinte et la
          construction - comme des plans architecturaux d'une appartenance en
          perpétuelle négociation. En déconstruisant et recomposant les visages,
          l'exposition devient un acte de résistance et de réclama-tion. Elle
          compose une archive vivante où les vies trans ne sont pas seulement
          visibles. mais enracinées, affirmées et habitées.
        </p>
      </div>
      <div className="exhibition-image-gallery">
        <div className="gallery-image">
          <img
            className="image-in-group"
            src={groupShot}
            alt="Various works by photographer Lawrence Fafard in the Blueprints of Belonging exhibition, installed on the walls and on plinths"
          />
        </div>
        {/* <div className="gallery-image-vert">
          <img
            className="image-in-group"
            src={largeFramed}
            alt="Various works by photographer Lawrence Fafard in the Blueprints of Belonging exhibition, installed on the walls and on plinths"
          />
        </div> */}
        <div className="gallery-image-vert">
          <img
            className="image-in-group"
            src={TJ}
            alt="Overlay acetate photographic portrait in black/white/blue by Lawrence Fafard"
          />
        </div>{" "}
        <div className="gallery-image">
          <img
            className="image-in-group"
            src={lyrael}
            alt="Overlay plexiglass photographic portrait in greyscale by Lawrence Fafard"
          />
        </div>
        <div className="gallery-image-vert">
          <img
            className="image-in-group"
            src={andrea}
            alt="Overlay acetate photographic portrait in black/white/blue by Lawrence Fafard"
          />
        </div>
        <div className="gallery-image-vert">
          <img
            className="image-in-group"
            src={satinee}
            alt="Overlay acetate photographic portrait in black/white/blue by Lawrence Fafard"
          />
        </div>
        <div className="gallery-image">
          <img
            className="image-in-group"
            src={cyanoTee}
            alt="cyanotype botanical t-shirt by Lawrence Fafard"
          />
        </div>
      </div>
    </div>
  );
}

export default BlueprintsOfBelonging;
