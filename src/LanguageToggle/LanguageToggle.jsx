import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import i18n, { SUPPORTED_LANGUAGES } from "../i18n/i18n";
import { stripLangPrefix } from "../i18n/paths";
import "./LanguageToggle.css";

function buildPathForLanguage(pathname, targetLanguage) {
  const rest = stripLangPrefix(pathname);
  return `/${targetLanguage}${rest ? `/${rest}` : ""}`;
}

function LanguageToggle() {
  const { t } = useTranslation("common");
  const { lang } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSelect = (targetLanguage) => {
    if (targetLanguage === lang) return;
    i18n.changeLanguage(targetLanguage);
    navigate(buildPathForLanguage(location.pathname, targetLanguage));
  };

  return (
    <div
      className="language-toggle"
      role="group"
      aria-label={t("languageToggle.groupLabel")}
    >
      {SUPPORTED_LANGUAGES.map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          className="language-toggle__option"
          aria-current={lang === code ? "true" : undefined}
          onClick={() => handleSelect(code)}
        >
          {t(`languageToggle.${code}`)}
        </button>
      ))}
    </div>
  );
}

export default LanguageToggle;
