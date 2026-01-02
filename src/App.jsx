import entretempsLogo from "./assets/entretemps-logo.png";
import "./App.css";
import Menu from "./Menu/Menu";
import Exhibitions from "./Exhibitions/Exhibitions";
import Contact from "./Contact/Contact";
import Visit from "./Visit/Visit";
// import Shop from "./Shop/Shop";
import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Purgatory from "./Exhibitions/Purgatory";
import YoDoggy from "./Exhibitions/Doggy";
import PrincesseEtCowboy from "./Exhibitions/PrincesseCowboy";
import MonDepanneur from "./Exhibitions/Depanneur";
import CalisseDeGoblet from "./Exhibitions/Goblet";
import BlueprintsOfBelonging from "./Exhibitions/Blueprints";
import JardinSecret from "./Exhibitions/JardinSecret";
function App() {
  return (
    <Router>
      <header>
        <button className="home-button">
          <Link to="/">
            <img src={entretempsLogo} className="logo" alt="Entretemps logo" />
          </Link>
        </button>
        <Menu />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exhibitions" element={<Exhibitions />} />
        <Route
          path="/exhibitions/purgatory-is-a-waiting-room"
          element={<Purgatory />}
        />
        <Route path="/exhibitions/yo-doggy" element={<YoDoggy />} />
        <Route path="/exhibitions/mon-depanneur" element={<MonDepanneur />} />
        <Route
          path="/exhibitions/calisse-de-goblet"
          element={<CalisseDeGoblet />}
        />
        <Route
          path="/exhibitions/blueprints-of-belonging"
          element={<BlueprintsOfBelonging />}
        />
        <Route path="/exhibitions/jardin-secret" element={<JardinSecret />} />
        <Route
          path="/exhibitions/princesse-et-cowboy"
          element={<PrincesseEtCowboy />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/visit" element={<Visit />} />
        {/* <Route path="/shop" element={<Shop />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
