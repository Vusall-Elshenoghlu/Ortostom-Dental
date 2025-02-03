import React, { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext";
import HeroSection from "../../../components/User/HeroSection";
import Slider from "../../../components/User/Slider";

const Home = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="home-container">
      <HeroSection language = "az"/>
      <Slider/>
    </div>
  );
};

export default Home;

