import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { LanguageContext } from '../../../context/LanguageContext';

const BabysTeeth = () => {
  const { lang, } = useContext(LanguageContext);

  const translations = {
    az: {
      babyTeethTitle: "Körpənin Dişləri",
      babyTeethIntro: "Diş çıxarma prosesi fərqli uşaqlarda müxtəlif olur və bəzi hallarda çətin ola bilər.",
      brushingImgAlt: "Diş fırçalama",
      careTitle: "Körpənin dişlərinə qulluq",
      careIntro: "Dişlər 6 aylıqdan çıxmağa başlayır. Yenidoğulmuşun diş ətini təmizləmək və masaj etmək vacibdir.",
      careText1: "Diş ətləri nəm tənziflə gündə iki dəfə silinməlidir. Yeni bir tənzifi barmağa dolayın, ilıq su ilə isladın və yumşaq şəkildə diş ətlərinə sürtün.",
      careText2: "Uşaqlar üçün yumşaq naylon tüklü bir diş fırçası istifadə olunmalıdır.",
      careTip1: "Fərqli marka diş pastası və ya heç pasta istifadə etməyin.",
      careTip2: "Sevdiyi cizgi film xarakterli diş fırçası alın.",
      careTip3: "Ona öz dişlərini fırçalamağa icazə verin.",
      teethingText: "Diş çıxarma prosesi fərdi olaraq dəyişir və bəzi hallarda ağrılı ola bilər.",
      symptomsTitle: "Diş çıxarma simptomları:",
      symptom1: "Ağız suyu axması",
      symptom2: "İrritasiya və ağlama",
      symptom3: "Çeynəmə istəyi",
      symptom4: "Qızdırma",
      symptom5: "Yuxu problemləri",
      soothingText: "Bu dövrdə uşağa çoxlu rahatlıq verilməlidir. Soyudulmuş qida və ya diş halqası ağrını yüngülləşdirə bilər.",
      nursingBottleText: "Yatmazdan əvvəl südlü və ya şirəli butulkalar dişlərə ciddi zərər verə bilər. Bunun əvəzinə, isti su verin.",
    },
    en: {
      babyTeethTitle: "Baby's Teeth",
      babyTeethIntro: "Teething is different for each child and can sometimes be a difficult process.",
      brushingImgAlt: "Brushing teeth",
      careTitle: "Taking care of baby's teeth",
      careIntro: "Teeth first erupt at 6 months. It's important to clean and massage the gums in newborns.",
      careText1: "Gums should be wiped with wet gauze twice a day. Wrap a fresh piece of gauze around your finger, moisten it with warm water, and gently rub it along the gums.",
      careText2: "A soft nylon bristle children's toothbrush should be used.",
      careTip1: "Try a different brand of toothpaste or use none at all.",
      careTip2: "Buy a toothbrush with a cartoon character they like.",
      careTip3: "Let them brush their own teeth while you assist.",
      teethingText: "The teething process varies and can sometimes be painful.",
      symptomsTitle: "Symptoms of teething:",
      symptom1: "Drooling",
      symptom2: "Irritability and crying",
      symptom3: "Biting and chewing",
      symptom4: "Fever",
      symptom5: "Difficulty sleeping",
      soothingText: "This can be a tough period for both parent and child. Cold foods or teething rings can help soothe irritation.",
      nursingBottleText: "Using milk or juice in a baby bottle as a pacifier can lead to severe dental damage. Instead, offer warm water.",
    },
    ru: {
      babyTeethTitle: "Зубы малыша",
      babyTeethIntro: "Процесс прорезывания зубов у каждого ребенка индивидуален и может быть болезненным.",
      brushingImgAlt: "Чистка зубов",
      careTitle: "Уход за зубами малыша",
      careIntro: "Зубы начинают прорезываться в 6 месяцев. Важно очищать и массировать десны у новорожденных.",
      careText1: "Десны следует протирать влажной марлей два раза в день. Оберните чистый кусочек марли вокруг пальца, смочите теплой водой и аккуратно протрите десны.",
      careText2: "Детская зубная щетка с мягкой нейлоновой щетиной должна использоваться.",
      careTip1: "Попробуйте другую марку зубной пасты или вовсе без нее.",
      careTip2: "Купите зубную щетку с любимым персонажем.",
      careTip3: "Позвольте ребенку самому чистить зубы, помогая ему.",
      teethingText: "Процесс прорезывания зубов может варьироваться и быть болезненным.",
      symptomsTitle: "Симптомы прорезывания зубов:",
      symptom1: "Слюнотечение",
      symptom2: "Раздражительность и плач",
      symptom3: "Желание что-то грызть",
      symptom4: "Повышенная температура",
      symptom5: "Проблемы со сном",
      soothingText: "Этот период может быть сложным для родителей и ребенка. Охлажденные продукты или прорезыватели могут помочь облегчить дискомфорт.",
      nursingBottleText: "Использование молока или сока в бутылочке перед сном может привести к серьезному повреждению зубов. Вместо этого давайте теплую воду.",
    }
  };
  return (
    <>
      <Container fluid className="py-5" style={{ backgroundColor: '#3c1a6f', color: '#fff' }}>
        <Row className="justify-content-center align-items-center text-center">
          <Col md={6}>
            <h1 className="display-4">{translations[lang].babyTeethTitle}</h1>
            <p>{translations[lang].babyTeethIntro}</p>
          </Col>
          <Col md={4}>
            <Card className="border-0">
              <Card.Img
                src="/images/babyTeeth.webp"
                alt={translations[lang].brushingImgAlt}
                className="rounded"
              />
            </Card>
          </Col>
        </Row>
      </Container>

      <div className="container mt-5">
        <h1 className="text-primary mb-4">{translations[lang].careTitle}</h1>
        <h3 className="text-secondary">{translations[lang].careIntro}</h3>
        <p>{translations[lang].careText1}</p>
        <p>{translations[lang].careText2}</p>
        <ul style={{ listStyleType: "none" }}>
          <li>&#x25B8; {translations[lang].careTip1}</li>
          <li>&#x25B8; {translations[lang].careTip2}</li>
          <li>&#x25B8; {translations[lang].careTip3}</li>
        </ul>
        <p>{translations[lang].teethingText}</p>
        <h4>{translations[lang].symptomsTitle}</h4>
        <ul style={{ listStyleType: "none" }}>
          <li>&#x25B8; {translations[lang].symptom1}</li>
          <li>&#x25B8; {translations[lang].symptom2}</li>
          <li>&#x25B8; {translations[lang].symptom3}</li>
          <li>&#x25B8; {translations[lang].symptom4}</li>
          <li>&#x25B8; {translations[lang].symptom5}</li>
        </ul>
        <p>{translations[lang].soothingText}</p>
        <p>{translations[lang].nursingBottleText}</p>
      </div>
    </>
  );
};

export default BabysTeeth;
