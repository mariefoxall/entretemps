import vitrine from "../assets/princesse-et-cowboy-vitrine.jpg";
import dechirure from "../assets/dechirure.jpg";
import chasseur from "../assets/chasseur-de-reve.jpg";
import repos from "../assets/repos1.jpg";
import repos2 from "../assets/repos2.jpg";
import chevet1 from "../assets/chevet1.jpg";
import livreCowboy from "../assets/livre-cowboy.jpg";
import cowboy from "../assets/cowboy.jpg";
import table from "../assets/table-loup.jpg";

function PrincesseEtCowboy() {
  return (
    <div className="exhibitions-page">
      <div className="exhibition-section">
        <h3>PRINCESSE & COWBOY</h3>
        <p>Loup Gauvin-Dufresne & Laurence Savard-Gagnon</p>
        <img
          className="gallery-image-vert"
          src={vitrine}
          alt="Overall photo of exhibition through the window"
        />
        <img
          className="gallery-image-vert"
          src={dechirure}
          alt="Textile & charcoal hanging work"
        />
        <img
          className="gallery-image"
          src={chasseur}
          alt="mixed media found object sculpture"
        />
        <img
          className="gallery-image-vert"
          src={livreCowboy}
          alt="Mixed media collaged & hand-illustrated coffee table book"
        />
        <img
          className="gallery-image-vert"
          src={cowboy}
          alt="Mixed media collaged & hand-illustrated coffee table book"
        />

        <img
          className="gallery-image-vert"
          src={chevet1}
          alt="Mixed media sculpture with shadow box and clay candle"
        />
        <img
          className="gallery-image-vert"
          src={table}
          alt="Mixed media sculpture made of wood, paint & found objects"
        />
        <img
          className="gallery-image-vert"
          src={repos}
          alt="Mixed media sculpture made of wood, clay & found objects"
        />
        <img
          className="gallery-image-vert"
          src={repos2}
          alt="Mixed media sculpture made of wood, clay & found objects"
        />
      </div>
    </div>
  );
}

export default PrincesseEtCowboy;
