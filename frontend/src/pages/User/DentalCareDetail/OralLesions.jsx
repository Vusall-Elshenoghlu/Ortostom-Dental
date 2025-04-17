import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LanguageContext } from '../../../context/LanguageContext';

function OralLesions() {
  const { lang,darkMode } = useContext(LanguageContext);
  const translations = {
    az: {
      title: "Ağız lezyonları",
      subtitle: "Tədqiqatlar hələ ağız xərçənginin səbəbini müəyyən etməyib və baxmayaraq ki, genetik faktörlər böyük rol oynayır, bu xəstəliyin başlanmasında müəyyən bir neçə amil də mühüm rol oynayır.",
      description: "Ağız lezyonları ilə bağlı məsləhətlər",
      higyen: " Ağız lezyonlarının əksəriyyəti zərərsizdir. Lakin bunlardan kiçik bir qismi təhlükəlidir və müalicə olunmazsa, ağız xərçənginə çevrilə bilər. Hər hansı bir xərçəng növünün müalicəsində açar, xəstəliyin erkən aşkar edilməsi və dərhal və aqressiv şəkildə müalicə olunmasıdır.",
      thumbSucking:"Tədqiqatlar hələ ağız xərçənginin səbəbini müəyyən etməyib və baxmayaraq ki, genetik faktörlər böyük rol oynayır, bu xəstəliyin başlanmasında müəyyən bir neçə amil də mühüm rol oynayır. Ağız xərçəngi siqaret çəkmə və spirtli içki istehlakı ilə əlaqəlidir; nəticə etibarilə tütün məhsullarından istifadə və böyük miqdarda alkoqol qəbul edilməsi xərçəng riskini artırır.",
      nursingBottleCavities: "Ağız xərçənginin bəzi əlamətləri və simptomları bunlardır:",
      eruptionOfTeeth: "Ağzın yumşaq toxumalarında sərt bir kütlə.",
      dentalEmergencies: "Dodaqlarda, dildə və ya yanaqlarda uyuşma.",
      grinding: "Boğazda sıxılma hissi və udmaqda çətinlik.",
      orthodontics: "Keçməyən xora.",
      last:"Xərçəng lezyonları erkən mərhələlərdə kiçik, düz və tez-tez görünməyən sahələrdə olur. Ofisimizdə mütəmadi olaraq xərçəng skrininqi aparılır. Ziyarətlər arasında erkən əlamətləri yoxlamaq üçün özünü müayinə etmək məsləhət görülür. Skrininq boyun və baş müayinəsi, eləcə də dodaqlar, diş ətləri, yanaqlar, damaq və dilin yoxlanılmasından ibarətdir."
    },
    en: {
      title: "Oral Lesions",
      subtitle: "Research has yet to identify the cause of oral cancer and although we know that genetics has a major role, there are certain contributing factors that play a large part in the onset of this disease.",
      description: "Advice on oral lesions",
      higyen: "The vast majority of oral lesions are harmless. A small number of these, however are dangerous and if untreated may progress to oral cancer. The key to the treatment of any form of cancer is early detection with prompt and aggressive management of the disease.",
      thumbSucking:"Research has yet to identify the cause of oral cancer and although we know that genetics has a major role, there are certain contributing factors that play a large part in the onset of this disease. Oral cancer is related to smoking and alcohol consumption; consequently the use of tobacco and consumption of large amounts of alcohol can increase the chances of cancer.",
      nursingBottleCavities: "Some of the signs and symptoms of oral cancer include the following:",
      eruptionOfTeeth: "A hard lump in the soft tissues of the mouth.",
      dentalEmergencies: "Numbness in the lips, tongue or cheeks.",
      grinding: "Tightness in the throat with difficulty in swallowing.",
      orthodontics: "An ulcer that does not heal.",
      last:"Cancer lesions in the early stages are small, flat and often found in areas that are not visible. A cancer screening is performed at our office at regular intervals. A self-examination between visits to check for any early signs is advisable. A screening consists of a neck and head exam, and checking the lips, gums, cheeks, palate and tongue."
    },
    ru: {
      title: "Оральные поражения",
      subtitle: "Исследования еще не выявили причины рака полости рта, и хотя известно, что генетика играет большую роль, существуют определенные факторы, которые значительно способствуют развитию этого заболевания.",
      description: "Советы по поводу оральных поражений",
      higyen: "Большинство оральных поражений безвредны. Однако небольшая их часть опасна, и если их не лечить, они могут перерасти в рак полости рта. Ключом к лечению любой формы рака является раннее обнаружение с последующим быстрым и агрессивным лечением заболевания.",
      thumbSucking:"Исследования еще не выявили причины рака полости рта, и хотя известно, что генетика играет большую роль, существует несколько факторов, которые в значительной степени способствуют развитию этого заболевания. Рак полости рта связан с курением и употреблением алкоголя; соответственно, использование табачных изделий и потребление больших количеств алкоголя могут увеличить вероятность рака.",
      nursingBottleCavities: "Некоторые из признаков и симптомов рака полости рта включают следующее:",
      eruptionOfTeeth: "Твердая шишка в мягких тканях рта.",
      dentalEmergencies: " Онемение в губах, языке или щеках.",
      grinding: "Ощущение сдавленности в горле с трудностью при глотании.",
      orthodontics: "Язва, которая не заживает.",
      last:"Раковые поражения на ранних стадиях маленькие, плоские и часто находятся в таких местах, которые не видны. Скрининг на рак проводится в нашем кабинете через регулярные промежутки времени. Рекомендуется проводить самообследование между визитами для проверки ранних признаков. Скрининг включает осмотр шеи и головы, а также проверку губ, десен, щек, неба и языка."
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
              src="/images/oralLesion.avif"
              alt="Oral lesion"
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
          <b>{translations[lang].thumbSucking}</b> <br />
          <br /><br /><br />

         <b>{translations[lang].nursingBottleCavities}</b><br /><br />
        <ul style={{ listStyleType: "none" }}>
          <li>&#x25B6; <b>{translations[lang].eruptionOfTeeth}</b></li><br />
          <li>&#x25B6; <b>{translations[lang].dentalEmergencies}</b></li><br />
          <li>&#x25B6; <b>{translations[lang].grinding}</b></li> <br />
          <li>&#x25B6; <b>{translations[lang].orthodontics}</b></li>
        </ul>

          <b>{translations[lang].last}</b>
      </Row>
    </Container>
  );
}

export default OralLesions;
