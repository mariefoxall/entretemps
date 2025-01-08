import cigarettes from "../assets/cigarettes.jpg";
import lamp from "../assets/portal-lamp-cropped.jpg";
import lampAndMaze from "../assets/chainmail-lamp-bead-maze.jpg";
import overall from "../assets/overall.jpg";
import chair from "../assets/tall-chair.jpg";
import doggyPoster from "../assets/yo-doggy-poster.png";
import dogAndKong from "../assets/dog-kong.jpg";
import captive from "../assets/captive-collar-stand.jpg";
import overallYoDoggy from "../assets/yo-doggy-right-side.jpg";
import bestInShowCups from "../assets/best-in-show-cups.jpg";
import bestInShowTrophy from "../assets/best-in-show-trophy.jpg";
import woofWoofNight from "../assets/woof-woof-night.jpg";
// import lamp from "../assets/entretemps-lamp.jpg";
// import key from "../assets/entretemps-key.jpg";
// import beadMaze from "../assets/bead-maze-close.jpg";
import ceramicCorner from "../assets/ceram-corner.jpg";
import waitingPoster from "../assets/english_purgatory.jpg";
import "./Exhibitions.css";

function Exhibitions() {
  return (
    <div className="exhibitions-page">
      <h2>Previous Exhibitions:</h2>
      <div className="exhibition-section">
        {/* <h2>Current Exhibition:</h2> */}
        <h3>YO DOGGY!</h3>

        <img
          className="gallery-image-vert"
          src={doggyPoster}
          alt="Poster for upcoming exhibition YO DOGGY!"
        />
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
      </div>{" "}
      <div className="exhibition-section">
        <h3>Purgatory is a Waiting Room</h3>
        <p>by Etty Anderson & Marie Foxall</p>
        <img
          className="gallery-image-vert"
          src={waitingPoster}
          alt="Poster for previous exhibition Purgatory is a Waiting Room"
        />{" "}
        <img
          className="gallery-image"
          src={overall}
          alt="Wide shot of art gallery with multicolored sculptures all over"
        />
        <img
          className="gallery-image-vert"
          src={lamp}
          alt="Multicolored 6-foot tall paper mache lamp and palm tree"
        />
        <img
          className="gallery-image-vert"
          src={lampAndMaze}
          alt="Ceramic and lucite chainmail lamp hanging above lucite structure with ceramic and wood beads"
        />
        <img
          className="gallery-image"
          src={cigarettes}
          alt="Silver ceramic lustre ashtray full of beaded cigarettes"
        />
        <img
          className="gallery-image-vert"
          src={ceramicCorner}
          alt="Tall ceramic lamp, pink ceramic table with rounded edges and a wacky multicolored vessel placed on top"
        />
        <img
          className="gallery-image-vert"
          src={chair}
          alt="Comically tall lime green & clear lucite chair with speckled ceramic bag and giant ceramic cigarette butt"
        />
      </div>
    </div>
  );
}

export default Exhibitions;
