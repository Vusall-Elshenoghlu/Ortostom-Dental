import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LanguageContext } from '../../../context/LanguageContext';

function DryMouth() {
  const { lang, } = useContext(LanguageContext);
  const translations = {
    az: {
      title: "Quru ağız",
      subtitle: "The treatment for dry mouth can vary depending on the cause. It is important to see the dentist or physician for examination and diagnosis.",
      description: "Quru ağızdan necə qaçınmaq olar?",
      higyen: "Bizim gigiyenistimiz ağızınıza ən uyğun diş ipi növünü və diş ipi istifadə texnikasını seçməkdə sizə kömək edə bilər.",
      thumbSucking:"Simptomlar:",
      nursingBottleCavities: "Ağız və boğazın quruluğu və yanması.",
      eruptionOfTeeth: " Çatlamış dodaqlar",
      dentalEmergencies: " Çeynəmə, udma və danışmaqda çətinlik.",
      grinding: "Tez-tez susuzluq.",
      orthodontics: "Ağız quruluğunun müalicəsi səbəbdən asılı olaraq dəyişə bilər. Müayinə və diaqnoz üçün diş həkimi və ya həkimə müraciət etmək vacibdir. Dərmanların səbəb olduğu ağız quruluğu dərman dəyişdirilməsi və ya dozanın tənzimlənməsi ilə müalicə edilə bilər, ya da digər səbəblərdən yaranırsa, tüpürcək əvəzedicilərinin istifadəsi və suyun tez-tez içilməsi tövsiyə oluna bilər.",
    },
    en: {
      title: "Dry Mouth",
      subtitle: "The treatment for dry mouth can vary depending on the cause. It is important to see the dentist or physician for examination and diagnosis.",
      description: "How to avoid dry mouth",
      higyen: "Dry mouth is a condition caused by the lack of saliva necessary to moisten the mouth. Saliva is important for several reasons. A moist mouth is necessary to facilitate in chewing, swallowing and speaking and prevents tooth decay by washing away food and bacteria.",
      thumbSucking:"Symptoms:",
      nursingBottleCavities: "Dryness and burning of the mouth and throat.",
      eruptionOfTeeth: "Cracked lips",
      dentalEmergencies: "Difficulty chewing, swallowing and speaking.",
      grinding: "Frequent thirst.",
      orthodontics: "The treatment for dry mouth can vary depending on the cause. It is important to see the dentist or physician for examination and diagnosis. Medication induced dry mouth can be treated by changing the medication or adjusting the dose, or if caused by other reasons the use of saliva substitutes may be recommended along with frequent sipping of water.",
    },
    ru: {
      title: "Сухость во рту",
      subtitle: "Лечение сухости во рту может варьироваться в зависимости от причины. Важно обратиться к стоматологу или врачу для обследования и диагностики.",
      description: "Как избежать сухости во рту?",
      higyen: "Симптомы:",
      thumbSucking:"Используйте отрезок зубной нити длиной около полтора фута.",
      nursingBottleCavities: "Сухость и жжение во рту и горле.",
      eruptionOfTeeth: "Треснувшие губы",
      dentalEmergencies: "Трудности при жевании, глотании и разговоре.",
      grinding: "Частое чувство жажды.",
      orthodontics: "Лечение сухости во рту может варьироваться в зависимости от причины. Важно обратиться к стоматологу или врачу для осмотра и постановки диагноза. Сухость во рту, вызванная медикаментами, может быть лечена путем замены лекарства или корректировки дозы, а в случае других причин может быть рекомендовано использование заменителей слюны и частое питье воды.",
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
              src="/images/dryMouth.jpg"
              alt="Dry mouth"
              className="rounded"
            />
          </Card>
        </Col>
      </Row>

      <Row className="py-5 bg-light text-dark mx-5">
        <h1 style={{ fontWeight: "600", fontSize: "30px" }}>{translations[lang].description}</h1><br /><br />
        <p style={{ color: "#6F3D85", fontSize: "20px", fontWeight: "600" }}>
          {translations[lang].higyen}
        </p>
        <br />
        <br />
        
        <br />

           <b>{translations[lang].thumbSucking}</b> <br /><br />
        <ul style={{ listStyleType: "none" }}>
          <li>&#x25B6; <b>{translations[lang].nursingBottleCavities}</b></li><br />
          <li>&#x25B6; <b>{translations[lang].eruptionOfTeeth}</b></li><br />
          <li>&#x25B6; <b>{translations[lang].dentalEmergencies}</b></li><br />
          <li>&#x25B6; <b>{translations[lang].grinding}</b></li> <br />
        </ul>
        <br /><br />
          <b>{translations[lang].orthodontics}</b>
      </Row>
    </Container>
  );
}

export default DryMouth;
