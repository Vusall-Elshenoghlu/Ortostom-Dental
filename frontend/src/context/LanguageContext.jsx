import React, { useState, createContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const LanguageContext = createContext();

const translations = {
  az: { home: "Ana səhifə", about: "Haqqımızda", contact: "Əlaqə", reservation: "Rezervasiya", video_call: "Video Zəng", language: "Dil Seçimi", dark_mode: "Qaranlıq rejim", login: "Daxil ol", register: "Qeydiyyat", name: "Ad", surname: "Soyad", email: "E-mail", password: "Parol",confirmPassword:"Parolu təstiqlə", account: "Artıq hesabınız var?", dontAccount: "Hesabınız yoxdur?", confirm: "Təsdiqlə", confirmCode: "Kodunuzu təsdiqləyin", enterConfirm: "Təsdiq kodunu daxil edin", care: "Diş qayğısı",profile: "Profilim",appointments:"Rezervasiyalarım", logout:"Çıxış",remember:"Şifrənizi xatırladınız?",resetLink:"Yeniləmə linkini göndər" },
  en: { home: "Home", about: "About Us", contact: "Contact", reservation: "Reservation", video_call: "Video Call", language: "Language", dark_mode: "Dark Mode", login: "Login", register: "Register", name: "Name", surname: "Surname", email: "Email", password: "Password",confirmPassword:"Confirm Password", account: "Already have an account?", dontAccount: "Don't have an account?", confirm: "Confirm", confirmCode: "Confirm your code", enterConfirm: "Enter Confirmation Code", care: "Dental care",profile:"My Profile",appointments:"My Appointments",logout:"Logout",remember:"Remembered your password?",resetLink:"Send Reset Link" },
  ru: { home: "Главная", about: "О нас", contact: "Контакты", reservation: "Бронирование", video_call: "Видеозвонок", language: "Выбор языка", dark_mode: "Тёмный режим", login: "Вход", register: "Регистрация", name: "Имя", surname: "Фамилия", email: "Электронная почта", password: "Пароль",confirmPassword:"Подтвердите пароль", account: "У вас уже есть аккаунт?", dontAccount: "У вас нет аккаунта?", confirm: "Подтвердить", confirmCode: "Подтвердите ваш код", enterConfirm: "Введите код подтверждения", care: "Уход за зубами",profile:"Мой профиль",appointments:"Мои бронирования",logout:"Выход",remember:"Вспомнили пароль?",resetLink:"Отправить ссылку для сброса" },
};

const doctorss = {
  az: { doctors: "Həkimlərimiz", showMore: "Daha çox göstər", experience: "Təcrübə", year: "il", education: "Təhsil", certificart: "Sertifikatlar", appoint: "Rezervasiya et" },
  en: { doctors: "Our Doctors", showMore: "Show More", experience: "Experience", year: "year", education: "Education", certificart: "Certificates", appoint: "Book an appointment" },
  ru: { doctors: "Hаши врачи", showMore: "Показать больше", experience: "Опыт", year: "Год", education: "Образование", certificart: "Сертификаты", appoint: "Записаться на консультацию" }
}
const daysOfWeek = {
  az: ["BAZ", "B.E", "Ç.A", "ÇƏR", "C.A", "C", "ŞƏN"],
  en: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
  ru: ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"],
};
const profil = {
  en: {
      contact: "Contact Information",
      email: "Email",
      phone: "Phone",
      address: "Address",
      basicInfo: "Basic Information",
      gender: "Gender",
      birthday: "Birthday",
      saveInfo: "Save Information",
      edit: "Edit",
      male: "Male",
      female: "Female",
  },
  az: {
      contact: "Əlaqə Məlumatları",
      email: "E-mail",
      phone: "Telefon",
      address: "Ünvan",
      basicInfo: "Əsas Məlumatlar",
      gender: "Cinsiyyət",
      birthday: "Doğum Tarixi",
      saveInfo: "Məlumatları Yadda Saxla",
      edit: "Redaktə Et",
      male: "Kişi",
      female: "Qadın",
  },
  ru: {
      contact: "Контактная информация",
      email: "Электронная почта",
      phone: "Телефон",
      address: "Адрес",
      basicInfo: "Основная информация",
      gender: "Пол",
      birthday: "Дата рождения",
      saveInfo: "Сохранить информацию",
      edit: "Редактировать",
      male: "Мужчина",
      female: "Женщина",
  },
};


const content = {
  az: {
    heroTitle: "Gülümsəməniz Bizim Üçün Önəmlidir",
    heroText: "Peşəkar diş həkimlərimiz sizin sağlam dişlərə sahib olmağınızı təmin edir.",
    button: "Randevu al",
    logAppoint:"Rezervasiya üçün daxil olun",
    navDoctor:"Rezervasiya üçün həkim seçin"
  },
  en: {
    heroTitle: "Your Smile Matters to Us",
    heroText: "Our professional dentists ensure you have healthy teeth.",
    button: "Book an Appointment",
    logAppoint:"login to appointment",
    navDoctor:"choose doctor for reservation"
  },
  ru: {
    heroTitle: "Ваша улыбка важна для нас",
    heroText: "Наши профессиональные стоматологи обеспечат вам здоровые зубы.",
    button: "Записаться на прием",
    logAppoint:"Войдите для записи на приём",
    navDoctor:"Выберите врача для записи"
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
    <LanguageContext.Provider value={{ lang, setLang, darkMode, setDarkMode, translations, content, doctorss,profil,daysOfWeek }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
