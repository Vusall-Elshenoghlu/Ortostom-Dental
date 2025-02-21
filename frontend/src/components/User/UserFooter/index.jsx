import React, { useContext } from 'react';
import './Footer.css'; 
import { LanguageContext } from '../../../context/LanguageContext';

const UserFooter = () => {
  const { lang, } = useContext(LanguageContext );
  const translations = {
    az: { home: "Ana səhifə", about: "Haqqımızda", contact: "Əlaqə", care: "Diş qayğısı",rights:"Bütün hüquqlar qorunur." },
    en: { home: "Home", about: "About Us", contact: "Contact", care: "Dental care",rights:"All Rights Reserved." },
    ru: { home: "Главная", about: "О нас", contact: "Контакты", care: "Уход за зубами", rights: "Все права защищены." },
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <div className="logo-container"></div>
          <p>Dental Clinic</p>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#">{translations[lang].home}</a></li>
            <li><a href="#">{translations[lang].care}</a></li>
            <li><a href="#">{translations[lang].about}</a></li>
            <li><a href="#">{translations[lang].contact}</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <p><strong>{translations[lang].contact}:</strong></p>
          <p>Email: <a href="mailto:hvusal085@gmail.com?subject=Admine Mesaj&body=Salam," style={{ textDecoration: "none", color: "white" }}>hvusal085@gmail.com</a></p>
          <p>Phone: <a href="tel:+994603727246" style={{ textDecoration: "none", color: "white" }}>+994603727246</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Dental Clinic. {translations[lang].care}. {translations[lang].rights}</p>
      </div>
    </footer>
  );
};

export default UserFooter;
