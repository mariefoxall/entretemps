import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import entretempsLogo from "./assets/entretemps-logo.png";
import "./App.css";
import Menu from "./Menu/Menu";
import LanguageToggle from "./LanguageToggle/LanguageToggle";
import Exhibitions from "./Exhibitions/Exhibitions";
import Contact from "./Contact/Contact";
import Visit from "./Visit/Visit";
// import Shop from "./Shop/Shop";
import Home from "./Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import Purgatory from "./Exhibitions/Purgatory";
import YoDoggy from "./Exhibitions/Doggy";
import PrincesseEtCowboy from "./Exhibitions/PrincesseCowboy";
import MonDepanneur from "./Exhibitions/Depanneur";
import CalisseDeGoblet from "./Exhibitions/Goblet";
import BlueprintsOfBelonging from "./Exhibitions/Blueprints";
import JardinSecret from "./Exhibitions/JardinSecret";
import Canicule from "./Exhibitions/Canicule";
import i18n, { SUPPORTED_LANGUAGES, FALLBACK_LANGUAGE } from "./i18n/i18n";
import { stripLangPrefix, stripKnownLangPrefix } from "./i18n/paths";

// Single source of truth for every page's relative path + element, reused for
// both the /:lang/* tree and the legacy bare-path redirects below — so each
// page is defined once, not once per language.
const contentRoutes = [
  { path: "", element: <Home /> },
  { path: "exhibitions", element: <Exhibitions /> },
  { path: "exhibitions/purgatory-is-a-waiting-room", element: <Purgatory /> },
  { path: "exhibitions/yo-doggy", element: <YoDoggy /> },
  { path: "exhibitions/mon-depanneur", element: <MonDepanneur /> },
  { path: "exhibitions/calisse-de-goblet", element: <CalisseDeGoblet /> },
  { path: "exhibitions/blueprints-of-belonging", element: <BlueprintsOfBelonging /> },
  { path: "exhibitions/jardin-secret", element: <JardinSecret /> },
  { path: "exhibitions/canicule", element: <Canicule /> },
  { path: "exhibitions/princesse-et-cowboy", element: <PrincesseEtCowboy /> },
  { path: "contact", element: <Contact /> },
  { path: "visit", element: <Visit /> },
  // { path: "shop", element: <Shop /> },
];

function getResolvedLanguage() {
  return SUPPORTED_LANGUAGES.includes(i18n.language) ? i18n.language : FALLBACK_LANGUAGE;
}

function LanguageLayout() {
  const { t } = useTranslation("common");
  const { lang } = useParams();
  const location = useLocation();
  const isValidLang = SUPPORTED_LANGUAGES.includes(lang);

  useEffect(() => {
    if (isValidLang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, isValidLang]);

  if (!isValidLang) {
    const rest = stripLangPrefix(location.pathname);
    return (
      <Navigate to={`/${getResolvedLanguage()}${rest ? `/${rest}` : ""}`} replace />
    );
  }

  return (
    <>
      <header>
        <Link to={`/${lang}`} className="home-button" aria-label={t("homeLinkLabel")}>
          <img src={entretempsLogo} className="logo" alt={t("logoAlt")} />
        </Link>
        <LanguageToggle />
        <Menu />
      </header>
      <Outlet />
    </>
  );
}

function LegacyPathRedirect() {
  const location = useLocation();
  const rest = stripKnownLangPrefix(location.pathname);
  return (
    <Navigate to={`/${getResolvedLanguage()}${rest ? `/${rest}` : ""}`} replace />
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:lang" element={<LanguageLayout />}>
          {contentRoutes.map(({ path, element }) => (
            <Route
              key={path || "index"}
              index={path === ""}
              path={path === "" ? undefined : path}
              element={element}
            />
          ))}
        </Route>
        <Route path="/" element={<LegacyPathRedirect />} />
        {contentRoutes
          .filter(({ path }) => path !== "")
          .map(({ path }) => (
            <Route key={`legacy-${path}`} path={`/${path}`} element={<LegacyPathRedirect />} />
          ))}
        <Route path="*" element={<LegacyPathRedirect />} />
      </Routes>
    </Router>
  );
}

export default App;
