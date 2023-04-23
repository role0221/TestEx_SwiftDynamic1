import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  th: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      "Language":"ภาษา",
      "MoveShape":"เลื่อนรูปแบบ",
      "MovePosition":"ขยับตำแหน่ง",
      "Layout&Style":"การจัดการเว็บ"
    }
  },
  en: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
      "ภาษา":"Language",
      "เลื่อนรูปแบบ":"MoveShape",
      "ขยับตำแหน่ง":"MovePosition"
    
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;