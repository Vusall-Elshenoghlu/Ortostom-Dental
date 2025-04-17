import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LanguageContext } from '../../../context/LanguageContext';

function Pregnancy() {
  const {lang,darkMode} = useContext(LanguageContext)
  const translations = {
    az: {
      heroTitle: "Gülümsəməniz Bizim Üçün Önəmlidir",
      heroText: "Peşəkar diş həkimlərimiz sizin sağlam dişlərə sahib olmağınızı təmin edir.",
      care: "Diş qayğısı",
      dentalCareIntro: "Hamiləlik dövründə yaxşı ağız gigiyenasını qorumaq çox vacibdir, dişləri fırçalamağa və diş ipi istifadə etməyə davam etməlisiniz, hətta diş əti şişkin və ağrılı olsa da.",
      pregnancyGingivitis: "Hamiləlik gingivitisi ümumiyyətlə hamiləliyin son dövründə daha şiddətlidir və doqquzuncu ayda azalır. Bəzən ağrılı diş ətindən şişkinliklər inkişaf edə bilər, amma onlar adətən zərərsizdir və müdaxilə edilmədən, yalnız narahat olduqda və ya danışmağa mane olduqda müalicə edilə bilər.",
      researchSupport: "Araşdırmalar, hamiləlik zamanı yalnız təcili hallarda rentgen şüalarının çəkilməsini dəstəkləyir, çünki müalicə edilmədikdə infeksiyalar hamiləliyi çətinləşdirə bilər. Tetratsiklin və Aspirin kimi ağrı kəsiciləri istifadə edilməməlidir, lakin Penicillin, Amoxicillin və Tylenol həkimlə məsləhətləşməklə istifadə edilə bilər.",
      electiveTreatment: "Ümumiyyətlə, seçilmiş diş müalicələri doğumdan sonra ertələnməlidir, lakin qırıq dişlər və dolğular və ya çürük kimi lazımi müalicələr ikinci trimestrdə ən yaxşı şəkildə müalicə edilə bilər.",
      prePregnancyCheckup: "Ailə qurmağı planlaşdırarkən, hamiləlikdən əvvəlki yoxlamalar və rentgen çəkilişləri çox vacibdir, çünki diaqnoz qoyulmuş hər hansı bir müalicə hamiləlikdən əvvəl edilə bilər. Bu həmçinin hamiləlik dövründə qulluq üçün bir əsas təmin edəcək."
    },
    en: {
      heroTitle: "Your Smile Matters to Us",
      heroText: "Our professional dentists ensure you have healthy teeth.",
      care: "Dental Care",
      dentalCareIntro: "It is crucial to maintain good oral hygiene by brushing and flossing even though the gums are swollen and sore.",
      pregnancyGingivitis: "Pregnancy gingivitis is generally most severe in the latter part of the pregnancy and diminishes during the ninth month. Tumours can sometimes develop from sore gums, but they are usually harmless and require no intervention unless they are uncomfortable or inhibit speech.",
      researchSupport: "Research supports a ban on X-rays during pregnancy except in emergencies, when they may be necessary to diagnose infections, which can spread and complicate a pregnancy if left untreated. Antibiotics such as Tetracycline, and painkillers such as Aspirin and Ibuprofen should be avoided although Penicillin, Amoxicillin and Tylenol may be used after consultation with the attending obstetrician.",
      electiveTreatment: "In general, elective dental treatment should be postponed until after childbirth although necessary treatment such as broken teeth and fillings or cavities are best treated during the second trimester.",
      prePregnancyCheckup: "When planning a family, pre-pregnancy checkups and X-rays are essential, as any treatment diagnosed can then be performed prior to the onset of pregnancy. This will also provide a foundation for maintenance care during pregnancy."
    },
    ru: {
      heroTitle: "Ваша улыбка важна для нас",
      heroText: "Наши профессиональные стоматологи обеспечат вам здоровые зубы.",
      care: "Уход за зубами",
      dentalCareIntro: "Очень важно поддерживать хорошую гигиену полости рта, чистить зубы и пользоваться зубной нитью, даже если дёсна опухли и болят.",
      pregnancyGingivitis: "Гингивит при беременности обычно наиболее выражен в последней части беременности и уменьшается на девятом месяце. Иногда из больных дёсен могут развиваться опухоли, но они обычно безвредны и не требуют вмешательства, если они не вызывают дискомфорт или не мешают речи.",
      researchSupport: "Исследования поддерживают запрет на рентгенографию во время беременности, за исключением экстренных случаев, когда рентген может быть необходим для диагностики инфекций, которые могут распространиться и осложнить беременность, если их не лечить. Такие антибиотики, как тетрациклин, и болеутоляющие средства, такие как аспирин и ибупрофен, следует избегать, хотя пенициллин, амоксициллин и тайленол можно использовать после консультации с акушером-гинекологом.",
      electiveTreatment: "В общем, плановое лечение зубов следует отложить до родов, хотя необходимое лечение, такое как лечение сломанных зубов, пломб или кариеса, лучше всего проводить на втором триместре.",
      prePregnancyCheckup: "При планировании семьи необходимы предварительные осмотры и рентгеновские снимки, так как любые выявленные заболевания могут быть лечены до наступления беременности. Это также создаст основу для ухода за зубами во время беременности."
    }
  };
  
  
  return (
    <Container fluid className="py-5">
      <Row className="justify-content-center align-items-center text-center" style={{ backgroundColor: '#3c1a6f', color: '#fff' }}>
        <Col md={6}>
          <h1 className="display-4">{translations[lang].heroTitle}</h1>
          <p style={{fontSize:"20px"}}>{translations[lang].heroText}</p>
        </Col>
        <Col md={4}>
          <Card className="border-0">
            <Card.Img
              src="/images/pregnancy.webp"
              alt="pregnancy"
              className="rounded"
            />
          </Card>
        </Col>
      </Row>

      <Row className="py-5 mx-5" style={{backgroundColor:`${darkMode ? "#121212" : ""}`}}>
      <h1 style={{ fontWeight: "600", fontSize: "30px" }}>{translations[lang].care}</h1><br /><br />
        <p style={{ color: "#6F3D85", fontSize: "20px", fontWeight: "600" }}>
          {translations[lang].dentalCareIntro}
        </p>
        <br />
        <br />
        <p>{translations[lang].pregnancyGingivitis}</p>
        <br />
        <p>{translations[lang].researchSupport}</p>
        <br />
        <p>{translations[lang].electiveTreatment}</p>
        <br />
        <p>{translations[lang].prePregnancyCheckup}</p>
      </Row>
    </Container>
  );
}

export default Pregnancy;
