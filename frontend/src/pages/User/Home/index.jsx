import React, { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext";
import HeroSection from "../../../components/User/HeroSection";
import Slider from "../../../components/User/Slider";
import Helmet from "react-helmet"

const Home = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="home-container">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HeroSection language = "az"/>
      <Slider/>
    </div>
  );
};

export default Home;

