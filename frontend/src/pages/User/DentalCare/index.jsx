import React, { useContext } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { LanguageContext } from "../../../context/LanguageContext";
import { Link } from "react-router";

const DentalCare = () => {
  const { lang, translations } = useContext(LanguageContext);
  const topics = [
    { id: 1, az: "Körpənin Dişləri", en: "Baby's Teeth", ru: "Зубы младенцев" },
    { id: 2, az: "Braket Baxımı", en: "Braces Care", ru: "Уход за брекетами" },
    { id: 3, az: "Diqqətlə Təmizləmə", en: "Brushing", ru: "Чистка зубов" },
    { id: 4, az: "Uşaqların Dişləri", en: "Children's Teeth", ru: "Детские зубы" },
    { id: 5, az: "Diş ipi", en: "Flossing", ru: "Чистка зубной нитью" },
    { id: 6, az: "Diş əti sağlığı", en: "Gum Health", ru: "Забота о деснах" },
    { id: 7, az: "Implant Baxımı", en: "Implant Care", ru: "Уход за имплантами" },
    { id: 8, az: "Məhsul Bələdçisi", en: "Product Guide", ru: "Руководство по продуктам" }
  ];

  const dentalInformation = [
    { id: 9, az: "Pis nəfəs", en: "Bad Breath", ru: "Неприятный запах" },
    { id: 10, az: "Bondinq", en: "Bonding", ru: "Бондинг" },
    { id: 11, az: "Bruksizm", en: "Bruxism", ru: "Бруксизм" },
    { id: 12, az: "Diş qorxusu", en: "Dental Phobia", ru: "Стоматофобия" },
    { id: 13, az: "Diabet", en: "Diabetes", ru: "Диабет" },
    { id: 14, az: "Quru ağız", en: "Dry Mouth", ru: "Сухость во рту" },
    { id: 15, az: "Diş ətlərinin xəstəliyi", en: "Gum Disease", ru: "Заболевание десен" },
    { id: 16, az: "Yeni protezlər", en: "New Dentures", ru: "Новые протезы" },
    { id: 17, az: "Ağız lezyonları", en: "Oral Lesions", ru: "Оральные поражения" },
    { id: 18, az: "Ağız pirsinqləri", en: "Oral Piercings", ru: "Оральные пирсинги" },
    { id: 19, az: "Çıxarış sonrası", en: "Post-Extractions", ru: "После удаления" },
    { id: 20, az: "Hamiləlik", en: "Pregnancy", ru: "Беременность" },
    { id: 21, az: "Həssas dişlər", en: "Sensitive Teeth", ru: "Чувствительные зубы" },
    { id: 22, az: "TMJ pozğunluğu", en: "TMJ Disorder", ru: "Дисфункция ВНЧС" },
    { id: 23, az: "Tütün", en: "Tobacco", ru: "Табак" },
    { id: 24, az: "Ağıl dişləri", en: "Wisdom Teeth", ru: "Зубы мудрости" }
  ];


  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <motion.div
          className="col-md-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="../../../../public/images/dentalCare.webp"
            alt="Oral Care"
            className="img-fluid rounded shadow"
            style={{ width: "500px", height: "500px" }}
          />
          <h3 className="text-center">{translations[lang].care}</h3>
        </motion.div>

        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          {topics.map((topic, index) => (
            <Link key={index} to={`/dental-care/${topic.id}`}>
              <button className="btn btn-lg btn-primary w-100 my-2 d-flex align-items-center justify-content-start">
                <span className="me-2">➤</span> {topic[lang]}
              </button>
            </Link>
          ))}

        </motion.div>
      </div>

      <br /><br /><br />

      <div className="row align-items-center">
        <motion.div
          className="col-md-6 text-center d-md-none"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src="../../../../public/images/dentalInformation.webp"
            alt="Dental Information"
            className="img-fluid rounded shadow"
            style={{ width: "500px", height: "350px" }}
          />
          <h3 className="text-center">{translations[lang].info}</h3>
        </motion.div>

        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="row row-cols-1 row-cols-md-2 g-2">
            {dentalInformation.map((info, index) => (
              <div className="col" key={index}>
                <Link to={`/dental-care/${info.id}`}>
                  <button className="btn btn-lg btn-primary w-100 my-2 d-flex align-items-center justify-content-start">
                    <span className="me-2">➤</span> {info[lang]}
                  </button>
                </Link>
              </div>
            ))}

          </div>
        </motion.div>

        <motion.div
          className="col-md-6 text-center d-none d-md-block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <img
            src="../../../../public/images/dentalInformation.webp"
            alt="Dental Information"
            className="img-fluid rounded shadow"
            style={{ width: "550px", height: "550px" }}
          />
          <h3 className="text-center">{translations[lang].info}</h3>
        </motion.div>
      </div>
    </div>
  );
};

export default DentalCare;
