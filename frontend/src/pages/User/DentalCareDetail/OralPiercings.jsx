import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LanguageContext } from '../../../context/LanguageContext';

function OralPiercings() {
  const { lang,darkMode } = useContext(LanguageContext);
  const translations = {
    az: {
      title: "Ağız Pirsinqi",
      subtitle: "Ciddi sağlamlıq riskləri mövcuddur ki, bunlar nəzərə alınmalıdır.",
      description: "Ağız pirsinqləri ilə bağlı məsləhətlər",
      higyen: "Son illərdə dodaq, dil və yanaqların pirsinqi gənc nəsil arasında populyarlaşmışdır. Ciddi sağlamlıq riskləri mövcuddur ki, bunlar nəzərə alınmalıdır.",
      thumbSucking:"Pirsinq edilən ərazini təmiz saxlamaq, infeksiyaların qarşısını almaq üçün vacibdir. Ağız bakteriyalar üçün bir yerdir və ağız boşluğunun hər hansı bir hissəsinin deşilməsi bu bakteriyaları qan dövranına və bədənin həyati orqanlarına daxil edə bilər.",
      nursingBottleCavities: "İnfeksiyalar bakterial ola bilər və ətraf toxumaları da təsir edə bilər. Dilin ciddi şişməsi, hava yollarının tıxanmasına səbəb ola bilər. Hepatit və ya HIV kimi viral infeksiyalar da yayıla bilər.",
      eruptionOfTeeth: "Qanama komplikasiya ola bilər, çünki ağız çox qan damarlarına malik bir ərazidir.",
      dentalEmergencies: "Qırıq zərgərlik əşyasının ağciyərlərə daxil olması ciddi cərrahi əməliyyata səbəb ola bilər.",
      grinding: "Dişlərin sərt zərgərlik əşyası ilə təmasda olması diş sındırılmasına səbəb ola bilər və bu da asanlıqla bahalı diş müalicəsinə yol aça bilər.",
      orthodontics: "Salya axması, sinir zədələnməsi və danışıq pozuntuları.",
    },
    en: {
      title: "Oral Piercings",
      subtitle: "There are serious health risks involved that should be taken into consideration.",
      description: "Advice on oral piercings",
      higyen: "In recent years piercing of the lips, tongue and cheeks has become popular with the younger generation. There are serious health risks involved that should be taken into consideration.",
      thumbSucking:"Keeping the pierced area clean is essential in preventing any infections. The mouth is a harbour for bacteria and the puncturing of any part of the oral cavity can introduce these bacteria into the blood stream and the vital organs of the body.",
      nursingBottleCavities: "Infections can be bacterial and may involve the surrounding tissues. A severe swelling of the tongue could cause a blocking of the air-way. A viral infection such as hepatitis or HIV can also be transmitted.",
      eruptionOfTeeth: "Bleeding can be a complication as the mouth is a very vascular region.",
      dentalEmergencies: "Inhaling a piece of loose jewelry into the lungs can lead to major surgery.",
      grinding: "Fracture of teeth coming into contact with a hard piece of jewelry can easily lead to expensive dental treatment.",
      orthodontics: "Drooling, nerve damage, and speech impairments.",
    },
    ru: {
      title: "Оральные пирсинги",
      subtitle: "Существуют серьезные риски для здоровья, которые следует учитывать.",
      description: "Советы по поводу оральных пирсингов",
      higyen: "В последние годы пирсинг губ, языка и щек стал популярен среди молодежи. Существуют серьезные риски для здоровья, которые следует учитывать.",
      thumbSucking:"Поддержание чистоты проколотой области необходимо для предотвращения инфекций. Рот является средой для бактерий, и прокол любой части ротовой полости может ввести эти бактерии в кровоток и жизненно важные органы тела.",
      nursingBottleCavities: "Инфекции могут быть бактериальными и затрагивать окружающие ткани. Серьезное отекание языка может привести к блокировке дыхательных путей. Также могут передаваться вирусные инфекции, такие как гепатит или ВИЧ.",
      eruptionOfTeeth: "Кровотечение может быть осложнением, так как рот является очень сосудистым участком.",
      dentalEmergencies: "Вдыхание кусочка расшатанных украшений в легкие может привести к серьезной операции.",
      grinding: "Перелом зубов при контакте с жестким украшением может легко привести к дорогостоящему стоматологическому лечению.",
      orthodontics: "Слюнотечение, повреждение нервов и нарушения речи.",
    }


  }
  return (
    <Container fluid className="py-5">
      <Row className="justify-content-center align-items-center text-center" style={{ backgroundColor: '#3c1a6f', color: '#fff' }}>
        <Col md={6}>
          <h1 className="display-4">{translations[lang].title}</h1>
          <p style={{fontSize:"20px"}}>{translations[lang].subtitle}</p>
        </Col>
        <Col md={4}>
          <Card className="border-0">
            <Card.Img
              src="/images/piercing.jpg"
              alt="Oral piercing"
              className="rounded"
            />
          </Card>
        </Col>
      </Row>

      <Row className="py-5 mx-5" style={{backgroundColor:`${darkMode ? "#121212" : ""}`}}>
        <h1 style={{ fontWeight: "600", fontSize: "30px" }}>{translations[lang].description}</h1><br /><br />
        <p style={{ color: "#6F3D85", fontSize: "20px", fontWeight: "600" }}>
          {translations[lang].higyen}
        </p>
        <br />
        <br />
         
        <br />

        <ul style={{ listStyleType: "none" }}>
          <li>&#x25B6; <b>{translations[lang].thumbSucking}</b> </li> <br />
          <li>&#x25B6; <b>{translations[lang].nursingBottleCavities}</b></li><br />
          <li>&#x25B6; <b>{translations[lang].eruptionOfTeeth}</b></li><br />
          <li>&#x25B6; <b>{translations[lang].dentalEmergencies}</b></li><br />
          <li>&#x25B6; <b>{translations[lang].grinding}</b></li> <br />
          <li>&#x25B6; <b>{translations[lang].orthodontics}</b></li>
        </ul>
      </Row>
    </Container>
  );
}

export default OralPiercings;
