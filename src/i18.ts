import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import localeEN from './locales/en/translation.json';
import localeES from './locales/es/translation.json';

console.log(localeEN);
i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {

      en:{
        translation: localeEN
      },
      es:{
        translation: localeES
      },
      

    },
  });

export default i18n;