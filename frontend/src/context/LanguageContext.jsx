import React, { useState, createContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const LanguageContext = createContext();

const translations = {
  az: { home: "Ana səhifə", about: "Haqqımızda", contact: "Əlaqə", reservation: "Rezervasiya", video_call: "Video Zəng", language: "Dil Seçimi", dark_mode: "Qaranlıq rejim", login:"Daxil ol", register:"Qeydiyyat",name:"Ad",surname:"Soyad",email:"Email",password:"Parol",account:"Artıq hesabınız var?",dontAccount:"Hesabınız yoxdur?",confirm:"Təsdiqlə",confirmCode:"Kodunuzu təsdiqləyin",enterConfirm:"Təsdiq kodunu daxil edin" },
  en: { home: "Home", about: "About Us", contact: "Contact", reservation: "Reservation", video_call: "Video Call", language: "Language", dark_mode: "Dark Mode", login:"Login", register:"Register",name:"Name",surname:"Surname",email:"Email",password:"Password",account:"Already have an account?",dontAccount:"Don't have an account?",confirm:"Confirm",confirmCode:"Confirm your code",enterConfirm:"Enter Confirmation Code" },
  ru: { home: "Главная", about: "О нас", contact: "Контакты", reservation: "Бронирование", video_call: "Видеозвонок", language: "Выбор языка", dark_mode: "Тёмный режим", login:"Вход", register:"Регистрация",name:"Имя",surname:"Фамилия",email:"Электронная почта",password:"Пароль",account:"У вас уже есть аккаунт?",dontAccount:"У вас нет аккаунта?",confirm:"Подтвердить",confirmCode:"Подтвердите ваш код",enterConfirm:"Введите код подтверждения" },
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
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, darkMode, setDarkMode, translations, content }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
