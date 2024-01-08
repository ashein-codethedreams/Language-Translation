// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // English translations go here
      },
    },
    fr: {
      translation: {
        // French translations go here
      },
    },
    // Add more languages as needed
  },
  lng: "en", // default language
  fallbackLng: "en", // fallback language in case translation for the current language is not available
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
