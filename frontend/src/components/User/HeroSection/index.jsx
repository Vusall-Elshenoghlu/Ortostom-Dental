import React, { useContext } from "react";
import { motion } from "framer-motion"; // `motion`-u daxil etdik
import "./HeroSection.css";
import { LanguageContext } from "../../../context/LanguageContext";

const HeroSection = () => {
  const { content, lang } = useContext(LanguageContext);

  // Animasiya tərtibatları (motion properties)
  const heroTextVariants = {
    hidden: { opacity: 0, y: -50 },  // Başlanğıc vəziyyəti
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },  // Görünən vəziyyət
  };

  const heroImageVariants = {
    hidden: { opacity: 0, scale: 0.8 },  // Başlanğıc vəziyyəti
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2 } },  // Görünən vəziyyət
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial="hidden"
          animate="visible"
          variants={heroTextVariants}
        >
          <h1>{content[lang].heroTitle}</h1>
          <p>{content[lang].heroText}</p>
          <button className="hero-button">{content[lang].button}</button>
        </motion.div>
        <motion.div
          className="hero-image"
          initial="hidden"
          animate="visible"
          variants={heroImageVariants}
        >
          <img src="../../../public/images/dent.webp" alt="White-toothed smile" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
