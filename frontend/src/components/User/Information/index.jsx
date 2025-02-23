import React, { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // motion-u import edin
import "./Information.css";
import { LanguageContext } from "../../../context/LanguageContext";

const Information = () => {
  const navigate = useNavigate();
  const {lang} = useContext(LanguageContext)
  const information = {
    az:{care:"Dişlərinizin Qayğısına Qalın!",text:"Gözəl bir təbəssüm üçün dişlərinizə düzgün qayğı göstərməlisiniz. Gündəlik fırçalama, diş ipindən istifadə və mütəmadi diş həkimi ziyarətləri ilə sağlam dişlərə sahib olun!",more:"Daha ətraflı"},
    en:{care:"Take Care of Your Teeth!",text:"For a beautiful smile, you should take proper care of your teeth. Achieve healthy teeth with daily brushing, using dental floss, and regular visits to the dentist!",more:"Show more"},
    ru:{care:"Заботьтесь о своих зубах!",text:"Для красивой улыбки необходимо правильно ухаживать за зубами. Заботьтесь о здоровых зубах с помощью ежедневной чистки, использования зубной нити и регулярных посещений стоматолога!",more:"Показать больше."}
  }

  return (
    <section className="dental-care-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <motion.img
              src="/images/slider1.webp"
              alt="Diş Sağlamlığı"
              className="img-fluid rounded"
              style={{ width: "500px" }}
              initial={{ opacity: 0 }} // Başlanğıc vəziyyəti
              animate={{ opacity: 1 }} // Hədəf vəziyyəti
              transition={{ duration: 1 }} // Animasiya müddəti
            />
          </Col>
          <Col md={6}>
            <motion.h2
              className="section-title"
              initial={{ x: -100, opacity: 0 }} // Başlanğıc vəziyyəti
              animate={{ x: 0, opacity: 1 }} // Hədəf vəziyyəti
              transition={{ duration: 1 }} // Animasiya müddəti
            >
              {information[lang].care}
            </motion.h2>
            <motion.p
              className="section-description"
              initial={{ opacity: 0 }} // Başlanğıc vəziyyəti
              animate={{ opacity: 1 }} // Hədəf vəziyyəti
              transition={{ duration: 1, delay: 0.3 }} // Animasiya müddəti və gecikmə
            >
             {information[lang].text}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Button
                variant="primary"
                className="care-button mt-3"
                onClick={() => navigate("/dental-care")}
              >
                {information[lang].more}
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Information;
