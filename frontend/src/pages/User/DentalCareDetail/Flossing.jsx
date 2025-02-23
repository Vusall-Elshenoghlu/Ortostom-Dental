import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LanguageContext } from '../../../context/LanguageContext';

function Flossing() {
  const { lang, } = useContext(LanguageContext);
  const translations = {
    az: {
      title: "Diş ipi ilə təmizləmə",
      subtitle: "Düzgün diş fırçalama texnikası dişlərin səthlərindəki bütün ərpi təmizləyəcək, lakin yalnız diş ipi ilə təmizləmə dişlər arasındakı ərpi aradan qaldıra bilər.",
      description: "Diş ipi ilə təmizləmə məsləhətləri və addımlar",
      higyen: "Bizim gigiyenistimiz ağızınıza ən uyğun diş ipi növünü və diş ipi istifadə texnikasını seçməkdə sizə kömək edə bilər.",
      thumbSucking:"Diş ipinin təxminən bir yarım fut uzunluğunda bir parçasını istifadə edin.",
      nursingBottleCavities: "Diş ipini barmaq uclarınıza dolayın.",
      eruptionOfTeeth: "Diş ipini dişlərinizin arasına yumşaqca salmaq üçün baş barmaqlarınızı və ya orta barmaqlarınızı istifadə edin.",
      dentalEmergencies: "Diş ipini bir dişin ətrafına dolayın və onu yuxarı və aşağı hərəkət etdirməklə diş əti xəttinə qədər hamar bir şəkildə sürüşdürün.",
      grinding: "Diş ipini çıxarmadan, onu eyni şəkildə digər dişin ətrafına dolayın, ta ki, hər iki bitişik dişin tərəfləri tamamilə təmizlənənə qədər.",
      orthodontics: "Bunu bütün dişlər arasında təkrarlayın.",
    },
    en: {
      title: "Flossing",
      subtitle: "A proper brushing technique will remove all the plaque from the surfaces of the teeth but only flossing can remove the plaque between the teeth.",
      description: "Flossing advice and steps",
      higyen: "Our hygienist can guide you in choosing the right floss type and the flossing technique best suited to your mouth.",
      thumbSucking:"Use a piece of floss about a foot and a half long.",
      nursingBottleCavities: "Wrap the floss around your index fingers.",
      eruptionOfTeeth: "Use your thumbs or middle fingers to guide the floss gently between your teeth.",
      dentalEmergencies: "Wrap the floss around one tooth and slide it smoothly up to the gum line with an up and down motion.",
      grinding: "Without removing the floss, wrap it around the other tooth in the same manner until the sides of both adjacent teeth are squeaky clean.",
      orthodontics: "Repeat this between all teeth",
    },
    ru: {
      title: "Молочные зубы важны",
      subtitle: "Правильная техника чистки зубов удалит весь налет с поверхностей зубов, но только чистка зубной нитью может удалить налет между зубами.",
      description: "Советы и шаги по использованию зубной нити.",
      higyen: "Наш гигиенист может помочь вам выбрать подходящий тип зубной нити и технику чистки, которая лучше всего подходит для вашего рта.",
      thumbSucking:"Используйте отрезок зубной нити длиной около полтора фута.",
      nursingBottleCavities: "Обвяжите зубную нить вокруг указательных пальцев.",
      eruptionOfTeeth: "Используйте большие пальцы или средние пальцы, чтобы аккуратно направить зубную нить между зубами.",
      dentalEmergencies: "Обвяжите зубную нить вокруг одного зуба и плавно проведите её вверх до линии десны движением вверх и вниз.",
      grinding: "Не снимая зубную нить, обвяжите её вокруг другого зуба таким же образом, пока боковые поверхности обоих соседних зубов не будут чистыми.",
      orthodontics: "Повторите это между всеми зубами.",
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
              src="/images/floss.webp"
              alt="Person brushing teeth"
              className="rounded"
            />
          </Card>
        </Col>
      </Row>

      <Row className="py-5 bg-light text-dark mx-5">
        <h1 style={{ fontWeight: "600", fontSize: "30px" }}>{translations[lang].description}</h1><br /><br />
        <p style={{ color: "#6F3D85", fontSize: "20px", fontWeight: "600" }}>
          {translations[lang].subtitle}
        </p>
        <br />
        <br />
        <p style={{fontSize:"19px",color:"#9A9DA0"}}>{translations[lang].higyen}</p>
        
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

export default Flossing;
