import React, { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext";
import HeroSection from "../../../components/User/HeroSection";
import Helmet from "react-helmet"
import "./Home.css"
import DoctorList from "../Doctors";
import Mapp from "../../../components/User/Map";
import Features from "../../../components/User/Cards";
import Information from "../../../components/User/Information";
import About from "../../../components/User/About";

const Home = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="home-container">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HeroSection language = "az"/>
      <DoctorList language = "az"/>
      <br /><br /><br />
      <Features/>
      <br /><br />
      <About/>
      <br /><br />
      <Information/>
      <br />
      <Mapp/>
    </div>
  );
};

export default Home;

