import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LanguageContext } from '../../../context/LanguageContext';

function TMJDisorder() {
  const {lang} = useContext(LanguageContext)
  const translations = {
    az: {
      tmjDisorder: "TMJ Pozulması",
      tmjDescription: "Mandibula, baş sümüyü ilə iki oynaq vasitəsilə birləşən yarmıçevrə şəklində bir sümüklə təmsil olunur. Hər iki oynağın top və yuva formasında olduğunu düşünün; top hissələri alt çənədə, yuva hissələri isə baş sümüyündədir.",
      whatIsTMJDisorder: "TMJ Pozulması Nədir?",
      tmjJointDescription: "Bir yastıq və ya disk “top və yuva” arasına yerləşir və bu oynağın hamar şəkildə hərəkət etməsinə kömək edir. Aşağı çənəni baş sümüyünə bağlayan bu mürəkkəb oynaqlara temporomandibular oynaq (TMJ) deyilir.",
      tmjFunction: "TMJ-lər xüsusidir ki, birgə işləyərək çənəyə çeynəmə funksiyalarını təmin etmək üçün lazım olan geniş hərəkət çeşidini verir.",
      tmjDisorderCauses: "TMJ pozulmasının səbəbləri tam olaraq anlaşılmasa da, bu pozulmaya səbəb olan bir çox məlum amillər vardır:",
      incorrectBite: "Yanlış diş yerləşməsi, müalicə edilmədikdə",
      sportsInjury: "İdman zamanı qəflətən yaralanma",
      vehicleInjury: "Avtomobil qəzası",
      arthritis: "Artrit",
      clenchingGrinding: "Dişləri sıxmaq və ya dişləmək",
      tmjSymptoms: "Bəzi əlamətlər davamlı baş ağrıları, qulaq ağrıları, oynağın pop səsi və ya çatlama, çənənin açılması ilə bağlı məhdudiyyətlərdir.",
      tmjTreatment: "Kəskin əlamətlərin müalicəsi üçün yumşaq pəhriz, isti kompreslər və ya soyuq kompreslər, əzələ rahatladıcıları və ağrıkəsicilər tövsiyə olunur. Maloklüziyanı düzəltmək üçün ortodontik müalicə tələb oluna bilər. Bruxizm halında oynağa təzyiqi azaldan akril parçalar istifadə edilir. Ekstremal hallarda cərrahiyyə son çarə olaraq təklif edilir."
    },
    en: {
      tmjDisorder: "TMJ Disorder",
      tmjDescription: "The mandible is a horseshoe-shaped bone that is joined to the base of the skull by two joints. Each joint is like a ball fitting into a socket; with the ball portions being on the lower jaw while the two sockets are on the skull.",
      whatIsTMJDisorder: "What is TMJ Disorder?",
      tmjJointDescription: "A cushion or disc lies between the “ball and socket” and this helps the joint to glide smoothly. These complicated joints that connect the lower jaw to the skull are called the temporomandibular joints.",
      tmjFunction: "TMJ are unique in that they work in tandem, giving the mandible the wide variety of movements necessary for the functions of chewing.",
      tmjDisorderCauses: "TMJ disorder is not fully understood, however, there are a number of known factors that contribute to this disorder:",
      incorrectBite: "An incorrect bite if left untreated",
      sportsInjury: "Sudden injury during sports",
      vehicleInjury: "A motor vehicle injury",
      arthritis: "Arthritis",
      clenchingGrinding: "Clenching or grinding the teeth",
      tmjSymptoms: "Some of the symptoms include persistent headaches, earaches, popping or crackling of the joint, and a limited mouth opening.",
      tmjTreatment: "For the treatment of acute symptoms, a soft diet, hot compresses or a cold pack with muscle relaxants and painkillers is recommended. Orthodontics may be required to correct a malocclusion. In the case of bruxism, an acrylic splint is worn to relieve the pressure on the joint. In extreme cases, surgery is indicated as a last resort."
    },
    ru: {
      tmjDisorder: "Расстройства ВНЧС",
      tmjDescription: "Нижняя челюсть – это кость в форме подковы, которая соединена с основанием черепа двумя суставами. Каждый сустав работает как шар в гнезде, при этом шаровая часть находится на нижней челюсти, а два гнезда – на черепе.",
      whatIsTMJDisorder: "Что такое расстройства ВНЧС?",
      tmjJointDescription: "Между “шаром и гнездом” находится амортизатор или диск, который помогает суставу двигаться плавно. Эти сложные суставы, которые соединяют нижнюю челюсть с черепом, называются височно-нижнечелюстными суставами.",
      tmjFunction: "ВНЧС уникальны тем, что работают совместно, предоставляя нижней челюсти широкий спектр движений, необходимых для функций жевания.",
      tmjDisorderCauses: "Расстройства ВНЧС не до конца изучены, однако есть несколько известных факторов, которые способствуют этому расстройству:",
      incorrectBite: "Неправильный прикус, если не лечить",
      sportsInjury: "Внезапная травма при занятиях спортом",
      vehicleInjury: "Травма при автомобильной аварии",
      arthritis: "Артрит",
      clenchingGrinding: "Сжатие или скрежет зубами",
      tmjSymptoms: "Некоторые из симптомов включают постоянные головные боли, боль в ушах, щелчки или треск сустава и ограничение открывания рта.",
      tmjTreatment: "Для лечения острых симптомов рекомендуется мягкая диета, горячие компрессы или холодные пакеты с мышечными расслабляющими средствами и болеутоляющими. Для коррекции малокклюзии может потребоваться ортодонтия. В случае бруксизма используется акриловая шина, чтобы снять давление с сустава. В крайних случаях показана хирургия как последняя мера."
    }
  };
  

  return (
    <Container fluid className="py-5">
      <Row className="justify-content-center align-items-center text-center" style={{ backgroundColor: '#3c1a6f', color: '#fff' }}>
        <Col md={6}>
          <h1 className="display-4">{translations[lang].tmjDisorder}</h1>
          <p style={{ fontSize: "20px" }}>{translations[lang].tmjDescription}</p>
        </Col>
        <Col md={4}>
          <Card className="border-0">
            <Card.Img
              src="/images/tmjDisorder.jpg"
              alt="TMJ Disorder"
              className="rounded"
            />
          </Card>
        </Col>
      </Row>

      <Row className="py-5 bg-light text-dark mx-5">
        <h1 style={{ fontWeight: "600", fontSize: "30px" }}>{translations[lang].whatIsTMJDisorder}</h1><br /><br />
        <p style={{ color: "#6F3D85", fontSize: "20px", fontWeight: "600" }}>
          {translations[lang].tmjJointDescription}
        </p>
        <br />
        <br />
        <p style={{ fontSize: "19px", color: "#9A9DA0" }}>{translations[lang].tmjFunction}</p><br />
        <br />
        <p style={{ fontSize: "19px", color: "#9A9DA0" }}>{translations[lang].tmjDisorderCauses}</p><br />

        <br />

        <ul style={{ listStyleType: "none" }}>
          <li>&#x25B6; {translations[lang].incorrectBite}</li> <br />
          <li>&#x25B6; {translations[lang].sportsInjury}</li><br />
          <li>&#x25B6; {translations[lang].vehicleInjury}</li><br />
          <li>&#x25B6; {translations[lang].arthritis}</li><br />
          <li>&#x25B6; {translations[lang].clenchingGrinding}</li> <br />
        </ul>
        <br />
        <p>{translations[lang].tmjSymptoms}</p> <br /><br />
        <p>{translations[lang].tmjTreatment}</p>
      </Row>
    </Container>
  );
}

export default TMJDisorder;
