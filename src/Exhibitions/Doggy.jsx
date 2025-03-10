import dogAndKong from "../assets/dog-kong.jpg";
import captive from "../assets/captive-collar-stand.jpg";
import overallYoDoggy from "../assets/yo-doggy-right-side.jpg";
import bestInShowCups from "../assets/best-in-show-cups.jpg";
import bestInShowTrophy from "../assets/best-in-show-trophy.jpg";
import woofWoofNight from "../assets/woof-woof-night.jpg";
import "./Exhibitions.css";

function YoDoggy() {
  return (
    <div className="exhibition-section">
      <h3>YO DOGGY!</h3>
      <img
        className="gallery-image"
        src={overallYoDoggy}
        alt="Wide shot of art gallery with multicolored sculptures all over"
      />
      <img
        className="gallery-image-vert"
        src={dogAndKong}
        alt="Screenprint of dog and ceramic kong-shaped lamp"
      />
      <img
        className="gallery-image-vert"
        src={captive}
        alt="Bronze and suede ornate dog collar on a brass and wooden stand"
      />
      <img
        className="gallery-image"
        src={woofWoofNight}
        alt="Ceramic double leash & collar in a gallery window at night"
      />
      <img
        className="gallery-image-vert"
        src={bestInShowTrophy}
        alt="Ceramic trophy with carved ceramic poodle figurine on top"
      />
      <img
        className="gallery-image-vert"
        src={bestInShowCups}
        alt="Ceramic goblets with carved poodle head base"
      />
    </div>
  );
}

export default YoDoggy;
