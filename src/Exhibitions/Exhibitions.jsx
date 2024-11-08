import cigarettes from "../assets/cigarettes.jpg";
import lamp from "../assets/portal-lamp-cropped.jpg";
import lampAndMaze from "../assets/chainmail-lamp-bead-maze.jpg";
import overall from "../assets/overall.jpg";
import chair from "../assets/tall-chair.jpg";
import doggyPoster from "../assets/yo-doggy-poster.png";
// import lamp from "../assets/entretemps-lamp.jpg";
// import key from "../assets/entretemps-key.jpg";
// import beadMaze from "../assets/bead-maze-close.jpg";
import ceramicCorner from "../assets/ceram-corner.jpg";
import waitingPoster from "../assets/english_purgatory.jpg";
import "./Exhibitions.css";

function Exhibitions() {
  return (
    <div className="exhibitions-page">
      <div className="exhibition-section">
        <h2>Upcoming Exhibitions:</h2>
        <h3>YO DOGGY!</h3>

        <img
          className="gallery-image-vert"
          src={doggyPoster}
          alt="Poster for upcoming exhibition YO DOGGY!"
        />
      </div>{" "}
      <div className="exhibition-section">
        <h2>Previous Exhibitions:</h2>
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
