import React, { useState, createContext, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const LanguageContext = createContext();

const translations = {
  az: {
    home: "Ana səhifə",
    about: "Haqqımızda",
    contact: "Əlaqə",
    reservation: "Rezervasiya",
    video_call: "Video Zəng",
    language: "Dil Seçimi",
    dark_mode: "Qaranlıq rejim",
    login:"Daxil ol",
    register:"Qeydiyyat"
  },
  en: {
    home: "Home",
    about: "About Us",
    contact: "Contact",
    reservation: "Reservation",
    video_call: "Video Call",
    language: "Language",
    dark_mode: "Dark Mode",
    login:"Login",
    register:"Register"
  },
  ru: {
    home: "Главная",
    about: "О нас",
    contact: "Контакты",
    reservation: "Бронирование",
    video_call: "Видеозвонок",
    language: "Выбор языка",
    dark_mode: "Тёмный режим",
    login:"Вход",
    register:"Регистрация"
  },
};

const content = {
    az: {
      heroTitle: "Gülümsəməniz Bizim Üçün Önəmlidir",
      heroText: "Peşəkar diş həkimlərimiz sizin sağlam dişlərə sahib olmağınızı təmin edir.",
      button: "Randevu al"
    },
    en: {
      heroTitle: "Your Smile Matters to Us",
      heroText: "Our professional dentists ensure you have healthy teeth.",
      button: "Book an Appointment"
    },
    ru: {
      heroTitle: "Ваша улыбка важна для нас",
      heroText: "Наши профессиональные стоматологи обеспечат вам здоровые зубы.",
      button: "Записаться на прием"
    }
  };

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("az");
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <LanguageContext.Provider value={{ lang, setLang, darkMode, setDarkMode, translations,content }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;