import { useEffect, useRef } from "react";
import "./Home.css";
import { makeTextWavy } from "../animations";
import { Link } from "react-router-dom";

function Home() {
  const animated = useRef(null);

  useEffect(() => {
    if (animated && animated.current) {
      makeTextWavy("entre\ntemps", animated.current);
    }
  }, []);

  return (
    <>
      <div className="home-section">
        <Link to="/exhibitions">
          <h1 className="home-heading" ref={animated}></h1>
        </Link>{" "}
        <p className="studio-gallery">atelier / galerie</p>
        <p className="studio-gallery">studio / gallery</p>
      </div>
    </>
  );
}

export default Home;
