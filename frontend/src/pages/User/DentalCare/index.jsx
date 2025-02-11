import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LanguageContext } from "../../../context/LanguageContext";

const DentalCare = () => {
  const { lang, translations } = useContext(LanguageContext); 
  const topics = {
    az: ["Bebeğin Dişləri", "Braket Baxımı", "Diqqətlə Təmizləmə", "Uşaqların Dişləri", "Diş Telini Təmizləmə", "Diqqət Edilməli Gəmiricilər", "Implant Baxımı", "Məhsul Bələdçisi"],
    en: ["Baby's Teeth", "Braces Care", "Brushing", "Children's Teeth", "Flossing", "Gum Health", "Implant Care", "Product Guide"],
    ru: ["Зубы младенцев", "Уход за брекетами", "Чистка зубов", "Детские зубы", "Чистка зубной нитью", "Забота о деснах", "Уход за имплантами", "Руководство по продуктам"]
  };
  const dentalInformation = {
    az: [
      "Pis nəfəs", "Bondinq", "Bruksizm", "Diş qorxusu", "Diabet", "Quru ağız", "Diş ətlərinin xəstəliyi", "Yeni protezlər", "Ağız lezyonları", "Ağız pirsinqləri", "Çıxarış sonrası", "Hamiləlik", "Həssas dişlər", "TMJ pozğunluğu", "Tütün", "Ağıl dişləri"
    ],
    en: [
      "Bad Breath", "Bonding", "Bruxism", "Dental Phobia", "Diabetes", "Dry Mouth", "Gum Disease", "New Dentures", "Oral Lesions", "Oral Piercings", "Post-Extractions", "Pregnancy", "Sensitive Teeth", "TMJ Disorder", "Tobacco", "Wisdom Teeth"
    ],
    ru: [
      "Неприятный запах", "Бондинг", "Бруксизм", "Стоматофобия", "Диабет", "Сухость во рту", "Заболевание десен", "Новые протезы", "Оральные поражения", "Оральные пирсинги", "После удаления", "Беременность", "Чувствительные зубы", "Дисфункция ВНЧС", "Табак", "Зубы мудрости"
    ]
  };

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img
            src="../../../../public/images/dentalCare.webp"
            alt="Oral Care"
            className="img-fluid rounded shadow"
            style={{ width: "500px", height: "500px" }}
          />
          <h3 className="text-center">{translations[lang].care}</h3> 
        </div>

        <div className="col-md-6">
          {topics[lang].map((topic, index) => (
            <button
              key={index}
              className="btn btn-lg btn-primary w-100 my-2 d-flex align-items-center justify-content-start"
            >
              <span className="me-2">➤</span> {topic}
            </button>
          ))}
        </div>
      </div>
      <br /><br /><br />
      <div className="row align-items-center">
        <div className="col-md-6 text-center d-md-none">
          <img
            src="../../../../public/images/dentalInformation.webp"
            alt="Dental Information"
            className="img-fluid rounded shadow"
            style={{ width: "500px", height: "350px" }}
          />
          <h3 className="text-center">{translations[lang].info}</h3>
        </div>
        <div className="col-md-6">
          <div className="row row-cols-1 row-cols-md-2 g-2">
            {dentalInformation[lang].map((topic, index) => (
              <div className="col" key={index}>
                <button
                  className="btn btn-lg btn-primary w-100 my-2 d-flex align-items-center justify-content-start"
                >
                  <span className="me-2">➤</span> {topic}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-6 text-center d-none d-md-block">
          <img
            src="../../../../public/images/dentalInformation.webp"
            alt="Dental Information"
            className="img-fluid rounded shadow"
            style={{ width: "550px", height: "550px" }}
          />
          <h3 className="text-center">{translations[lang].info}</h3>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
