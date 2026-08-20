import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "../locales/en/common.json";
import frCommon from "../locales/fr/common.json";
import enHome from "../locales/en/home.json";
import frHome from "../locales/fr/home.json";
import enExhibitions from "../locales/en/exhibitions.json";
import frExhibitions from "../locales/fr/exhibitions.json";
import enContact from "../locales/en/contact.json";
import frContact from "../locales/fr/contact.json";
import enVisit from "../locales/en/visit.json";
import frVisit from "../locales/fr/visit.json";
import enForms from "../locales/en/forms.json";
import frForms from "../locales/fr/forms.json";
import enAbout from "../locales/en/about.json";
import frAbout from "../locales/fr/about.json";

export const SUPPORTED_LANGUAGES = ["fr", "en"];
export const FALLBACK_LANGUAGE = "fr";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: FALLBACK_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES,
    load: "languageOnly",
    ns: ["common", "home", "exhibitions", "contact", "visit", "forms", "about"],
    defaultNS: "common",
    resources: {
      en: {
        common: enCommon,
        home: enHome,
        exhibitions: enExhibitions,
        contact: enContact,
        visit: enVisit,
        forms: enForms,
        about: enAbout,
      },
      fr: {
        common: frCommon,
        home: frHome,
        exhibitions: frExhibitions,
        contact: frContact,
        visit: frVisit,
        forms: frForms,
        about: frAbout,
      },
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
    saveMissing: import.meta.env.DEV,
    missingKeyHandler: import.meta.env.DEV
      ? (languages, namespace, key) => {
          console.warn(`Missing translation key: ${namespace}:${key} (${languages})`);
        }
      : undefined,
  });

const syncDocumentLang = (language) => {
  document.documentElement.lang = language;
};

i18n.on("languageChanged", syncDocumentLang);
i18n.on("initialized", () => syncDocumentLang(i18n.resolvedLanguage ?? i18n.language));

export default i18n;
