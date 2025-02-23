import React, { useContext, useEffect, useState } from "react";
import "./Features.css";
import { Row, Col } from "react-bootstrap";
import { LanguageContext } from "../../../context/LanguageContext";
import { motion } from "framer-motion";

const featuresContent = {
  az: {
    comfortTitle: "Rahatlıq Hər Yerdə",
    comfortDesc: "\"Bu, heç ağrılı deyildi!\" – Bizim ən sevdiyimiz ifadələrdən biridir. Rahatlığınızı təmin etmək üçün demək olar ki, ağrısız inyeksiyalar və sakitləşdirici azot variantları təklif edirik.",
    homeTitle: "Eviniz Kimidir",
    homeDesc: "Biz ailəvi bir diş klinikasıyıq – və bunu hər mənada deyirik. Dost canlısı komandamız sizi ilk gündən ailəmiz kimi hiss etdirəcək.",
    qualityTitle: "Ən Yüksək Keyfiyyətli Müalicə",
    qualityDesc: "Siz ömürlük davam edəcək bir təbəssümə layiqsiniz. Biz ən yüksək keyfiyyətli müalicələr təklif edir və işimizə 3 illik zəmanət veririk."
  },
  en: {
    comfortTitle: "All-Around Comfort",
    comfortDesc: "\"That wasn’t painful at all!\" is one of our favorite things to hear. We’ll make sure you feel completely comfortable with our virtually painless injections and calming nitrous options.",
    homeTitle: "Just Like Home",
    homeDesc: "We’re a family dental office — and we mean that in more ways than one. Our friendly staff is committed to making you feel like part of our family from day one.",
    qualityTitle: "Highest Quality Treatment",
    qualityDesc: "You deserve a smile that lasts forever. We stand behind our work by providing the highest-quality treatments and a 3-year warranty."
  },
  ru: {
    comfortTitle: "Комфорт во всем",
    comfortDesc: "\"Это было совсем не больно!\" – одна из наших любимых фраз. Мы обеспечим вам максимальный комфорт с практически безболезненными уколами и успокаивающим закисью азота.",
    homeTitle: "Как дома",
    homeDesc: "Мы – семейная стоматологическая клиника, и это касается не только названия. Наш дружелюбный персонал с первого дня заставит вас почувствовать себя частью нашей семьи.",
    qualityTitle: "Лечение высочайшего качества",
    qualityDesc: "Вы заслуживаете улыбку, которая сохранится навсегда. Мы гарантируем высокое качество лечения и предоставляем 3-летнюю гарантию на нашу работу."
  }
};

const Features = () => {
  const { lang } = useContext(LanguageContext);
  const content = featuresContent[lang];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("features");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div 
      className="features-container"
      id="features"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <Row className="justify-content-center">
        <Col md={4} className="feature-box hexagon mx-4">
          <motion.div 
            className="feature-box hexagon"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img className="icon" src="/images/comfortable.png" alt="" />
            <h3 className="card-section3">{content.comfortTitle}</h3>
            <p className="p">{content.comfortDesc}</p>
          </motion.div>
        </Col>
        <Col md={4} className="feature-box hexagon mx-4">
          <motion.div 
            className="feature-box hexagon"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img className="icon" src="/images/heartHand.png" alt="" />
            <h3 className="card-section3">{content.homeTitle}</h3>
            <p className="p">{content.homeDesc}</p>
          </motion.div>
        </Col>
        <Col md={4} className="feature-box hexagon mx-4">
          <motion.div 
            className="feature-box hexagon"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img className="icon" src="/images/tooth.png" alt="" />
            <h3 className="card-section3">{content.qualityTitle}</h3>
            <p className="p">{content.qualityDesc}</p>
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Features;