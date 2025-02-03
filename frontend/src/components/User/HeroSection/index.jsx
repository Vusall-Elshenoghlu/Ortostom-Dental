import React, { useContext } from "react";
import "./HeroSection.css";
import { LanguageContext } from "../../../context/LanguageContext";

const HeroSection = () => {
  const { content, lang } = useContext(LanguageContext);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>{content[lang].heroTitle}</h1>
          <p>{content[lang].heroText}</p>
          <button className="hero-button">{content[lang].button}</button>
        </div>
        <div className="hero-image">
          <img src="../../../public/images/dent.webp" alt="White-toothed smile" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
