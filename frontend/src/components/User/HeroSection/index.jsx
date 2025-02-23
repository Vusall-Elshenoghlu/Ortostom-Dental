import React, { useContext, useState } from "react";
import { motion } from "framer-motion"; 
import "./HeroSection.css";
import { LanguageContext } from "../../../context/LanguageContext";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const HeroSection = () => {
  const { lang,content } = useContext(LanguageContext);
  const [token,setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : "")

  const navigate = useNavigate()
  function handleNavigate(){
    toast.warn(content[lang].logAppoint)
    navigate("/login")
  }

  function handleReservation(){
    toast.warn(content[lang].navDoctor)
    navigate("/doctors")
  }

  const heroTextVariants = {
    hidden: { opacity: 0, y: -50 },  
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },  
  };

  const heroImageVariants = {
    hidden: { opacity: 0, scale: 0.8 },  
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2 } },  
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
          {
            token 
            ? <button className="hero-button" onClick={() => handleReservation()}>{content[lang].button}</button>
            : <button className="hero-button" onClick={() =>handleNavigate()}>{content[lang].button}</button>
          }
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
