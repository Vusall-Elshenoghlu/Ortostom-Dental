import React, { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext";
import HeroSection from "../../../components/User/HeroSection";
import Slider from "../../../components/User/Slider";
import Helmet from "react-helmet"
import "./Home.css"
import DoctorList from "../Doctors";
import Mapp from "../../../components/User/Map";
import About from "../About";

const Home = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="home-container">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HeroSection language = "az"/>
      <Slider/>
      <DoctorList language = "az"/>
      <br /><br />
      <About/>
      <br />
      <Mapp/>
      
    </div>
  );
};

export default Home;

