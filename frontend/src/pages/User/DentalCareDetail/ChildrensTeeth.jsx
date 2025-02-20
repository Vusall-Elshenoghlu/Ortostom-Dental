import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LanguageContext } from '../../../context/LanguageContext';

function ChildrensTeeth() {
  const { lang, } = useContext(LanguageContext);
  const translations = {
    az: {
      title: "Süd dişləri önəmlidir",
      par1:"Uşaq dişlərinin düzgün qayğısına onlara ağızda çıxmağa başladığı andan etibarən başlanmalıdır. İlk olaraq, dişləri 'parlatmaq' üçün nəmlənmiş üz örtüyü istifadə edilməli, lakin daha çox diş çıxmağa başladıqca, uşağın diş fırçası ən azı gündə iki dəfə yumşaq şəkildə istifadə olunmalıdır. Düzgün dozada verilən florid, diş minəsini daha güclü edir. Bir çox icmalarda sudan florid əlavə olunsa da, bu həmçinin hər peşəkar təmizləmədən sonra dişlərə tətbiq olunur.",
      subtitle: "Ön dişlər 6 yaşında dəyişir. Ancaq arxa süd dişləri 10-13 yaşa qədər dəyişmir.",
      description: "Süd dişləri çeynəmə, daimi dişlər üçün yer saxlama və çənənin normal inkişafına kömək edir.",
      thumbSucking: "Barmaq əmmə",
      nursingBottleCavities: "Biberon kariyesi",
      eruptionOfTeeth: "Dişlərin çıxması",
      dentalEmergencies: "Diş təcili yardımı",
      grinding: "Diş qıcama (Bruksizm)",
      orthodontics: "Ortodontiya"
    },
    en: {
      title: "Primary teeth are important",
      subtitle: "The front teeth are replaced by the age of 6 years. However, the primary posterior teeth are not replaced by their counterparts until age 10 to 13 years.",
      par1:"Proper care of baby teeth should begin as soon as they start to appear in the mouth. At first, a moist face cloth should be used to “polish” the teeth, but as more teeth erupt, a child’s toothbrush should be used gently at least twice a day. Fluoride administered in the correct dosage makes enamel stronger. Although many communities have fluoride added to the water, it is also applied to teeth after every professional cleaning.",
      description: "Primary teeth are important for chewing, maintaining space for permanent teeth, and aiding jaw development.",
      thumbSucking: "Thumb sucking",
      thumb:"This habit usually disappears by the age of 4 years. The persistence of this habit can have a detrimental effect on the teeth and the surrounding bone. Upper teeth are pushed out, lower teeth pushed in, resulting in a gap between upper and lower teeth causing difficulty in chewing, swallowing, and speech. An oral appliance can be placed in the child’s mouth to prevent thumb sucking. This device can break the habit in a few days.",
      nursingBottleCavities: "Nursing bottle cavities",
      eruptionOfTeeth: "Eruption of teeth",
      dentalEmergencies: "Dental emergencies",
      grinding: "Grinding (Bruxism)",
      orthodontics: "Orthodontics"
    },
    ru: {
      title: "Молочные зубы важны",
      subtitle: "Передние зубы меняются в 6 лет, но задние молочные зубы сохраняются до 10-13 лет.",
      part1:"Правильный уход за молочными зубами должен начинаться, как только они начинают появляться в рту. Сначала следует использовать влажную салфетку для 'полировки' зубов, но с появлением большего числа зубов следует аккуратно использовать детскую зубную щетку хотя бы дважды в день. Фтор в правильной дозировке делает эмаль более прочной. Хотя во многих общинах фтор добавляется в воду, его также наносят на зубы после каждой профессиональной чистки.",
      description: "Молочные зубы важны для жевания, сохранения места для постоянных зубов и нормального развития челюсти.",
      thumbSucking: "Сосание пальца",
      nursingBottleCavities: "Кариес от бутылочки",
      eruptionOfTeeth: "Прорезывание зубов",
      dentalEmergencies: "Стоматологическая неотложная помощь",
      grinding: "Скрежетание зубами (Бруксизм)",
      orthodontics: "Ортодонтия"
    }


  }
  return (
    <Container fluid className="py-5" style={{ backgroundColor: '#3c1a6f', color: '#fff' }}>
      <Row className="justify-content-center align-items-center text-center">
        <Col md={6}>
          <h1 className="display-4">{translations[lang].title}</h1>
          <p>{translations[lang].subtitle}</p>
        </Col>
        <Col md={4}>
          <Card className="border-0">
            <Card.Img
              src="/images/brecet.webp"
              alt="Person brushing teeth"
              className="rounded"
            />
          </Card>
        </Col>
      </Row>

      <Row className="py-5 bg-light text-dark">
        <h1 style={{ fontWeight: "600", fontSize: "25px" }}>{translations[lang].description}</h1>
        <p style={{ color: "#6F3D85", fontSize: "20px", fontWeight: "600" }}>
          {translations[lang].par1}
        </p>
        <br />
        <br />
        
        <br />

        <ul style={{ listStyleType: "none" }}>
          <li>&#x25B8; <b>{translations[lang].thumbSucking}</b> - {translations[lang].toothBrushingDesc}</li>
          <li>&#x25B8; <b>{translations[lang].interdentalBrush}</b> - {translations[lang].interdentalBrushDesc}</li>
          <li>&#x25B8; <b>{translations[lang].flossThreader}</b> - {translations[lang].flossThreaderDesc}</li>
          <li>&#x25B8; <b>{translations[lang].oralIrrigation}</b> - {translations[lang].oralIrrigationDesc}</li>
          <li>&#x25B8; <b>{translations[lang].diet}</b> - {translations[lang].dietDesc}</li>
        </ul>
        <p>{translations[lang].homeCare}</p>
      </Row>
    </Container>
  );
}

export default ChildrensTeeth;
