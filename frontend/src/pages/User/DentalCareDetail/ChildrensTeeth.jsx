import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LanguageContext } from '../../../context/LanguageContext';

function ChildrensTeeth() {
  const { lang, } = useContext(LanguageContext);
  const translations = {
    az: {
      care: "Diş qayğısı",
      misalignedTeeth: "Düzgün olmayan dişlər diş ətinin iltihabına, diş çürüməsinə və nitq pozuntularına səbəb ola bilər.",
      createSmile: "Mükəmməl təbəssüm yaradın",
      orthodonticsEffect: "Ortodontiya dişlərin düzgün düzülməsi ilə mükəmməl təbəssüm yarada bilər və bu, şəxsin özünə inamına çox müsbət təsir göstərə bilər.",
      alignmentDescription: "Dişlərin düzülməsi adətən müəyyən bir müddət ərzində taxılan sabit və ya çıxarılan cihazlar vasitəsilə həyata keçirilir. Bu cihazlar, düzgün saxlanmadıqda, diş problemlərinə səbəb ola bilər.",
      toothBrushing: "Diş fırçalama",
      toothBrushingDesc: "Diş fırçasını braketlərin altına qoyun və titrəyən hərəkətlə fırçalayın; sonra fırçanı braketlərin üstünə qoyub aşağı istiqamətə fırçalayın.",
      interdentalBrush: "İnterdental fırça",
      interdentalBrushDesc: "Bu növ fırçanın kiçik başı braketlər arasına çatmaq üçün idealdır.",
      flossThreader: "Diş sapı keçirmə",
      flossThreaderDesc: "Dişlər arasında diş sapı istifadə etmək vacibdir və bu yalnız sap keçirmə vasitəsi ilə əldə edilə bilər.",
      oralIrrigation: "Ağız suvarma",
      oralIrrigationDesc: "Bu cihazlar qida hissəciklərini çıxarmaq üçün faydalıdır, lakin yuxarıda qeyd edilən məhsullarla birgə istifadə edilməlidir.",
      diet: "Dieta",
      dietDesc: "Bu cihazlar qida hissəciklərini çıxarmaq üçün faydalıdır, lakin yuxarıda qeyd edilən məhsullarla birgə istifadə edilməlidir.",
      homeCare: "Evdə qayğıya adi haldan bir az çox vaxt lazım olacaq, lakin gözəl təbəssüm üçün vaxt ayırmağa dəyər."
    },
    en: {
      care: "Dental care",
      misalignedTeeth: "Misaligned teeth may lead to gum disease, tooth decay, and speech impairment.",
      createSmile: "Create the perfect smile",
      orthodonticsEffect: "Orthodontics can create the perfect smile through proper alignment of the teeth, which can have a positive effect on self-esteem.",
      alignmentDescription: "The alignment of teeth is usually achieved by means of fixed or removable appliances worn over a period of time. These appliances, although effective, can create dental problems if not maintained correctly.",
      toothBrushing: "Tooth brushing",
      toothBrushingDesc: "Place the toothbrush below the brackets and brush upwards, then above the brackets and brush downwards.",
      interdentalBrush: "Interdental brush",
      interdentalBrushDesc: "The small head on this brush is ideal for reaching between brackets.",
      flossThreader: "Floss threader",
      flossThreaderDesc: "Flossing between teeth is important and can be achieved with a floss threader.",
      oralIrrigation: "Oral irrigation",
      oralIrrigationDesc: "These devices are helpful for dislodging food particles but should be used alongside the above products.",
      diet: "Diet",
      dietDesc: "These devices are useful for removing food particles but should be used alongside the products above.",
      homeCare: "Home care will take a bit longer than usual, but the benefits of a beautiful smile are worth the extra time."
    },
    ru: {
      care: "Уход за зубами",
      misalignedTeeth: "Неправильное расположение зубов может привести к воспалению десен, кариесу и нарушению речи.",
      createSmile: "Создайте идеальную улыбку",
      orthodonticsEffect: "Ортодонтия может создать идеальную улыбку за счет правильного расположения зубов, что положительно влияет на самооценку.",
      alignmentDescription: "Выравнивание зубов обычно достигается с помощью несъемных или съемных аппаратов, которые носят в течение определенного времени. Однако при неправильном уходе они могут вызвать проблемы с зубами.",
      toothBrushing: "Чистка зубов",
      toothBrushingDesc: "Разместите зубную щетку под брекетами и чистите вверх, затем над брекетами и чистите вниз.",
      interdentalBrush: "Межзубная щетка",
      interdentalBrushDesc: "Маленькая головка этой щетки идеально подходит для очистки пространства между брекетами.",
      flossThreader: "Зубная нить с нитьевдевателем",
      flossThreaderDesc: "Чистка зубной нитью между зубами важна и может быть выполнена с помощью нитьевдевателя.",
      oralIrrigation: "Орошение полости рта",
      oralIrrigationDesc: "Эти устройства помогают удалять остатки пищи, но их следует использовать вместе с вышеуказанными средствами.",
      diet: "Диета",
      dietDesc: "Эти устройства помогают удалять остатки пищи, но их следует использовать в сочетании с вышеуказанными средствами.",
      homeCare: "Уход за зубами дома займет немного больше времени, но красивая улыбка того стоит."
    }
  };



  return (
    <Container fluid className="py-5" style={{ backgroundColor: '#3c1a6f', color: '#fff' }}>
      <Row className="justify-content-center align-items-center text-center">
        <Col md={6}>
          <h1 className="display-4">{translations[lang].care}</h1>
          <p>{translations[lang].misalignedTeeth}</p>
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
        <h1 style={{ fontWeight: "600", fontSize: "50px" }}>{translations[lang].createSmile}</h1>
        <p style={{ color: "#6F3D85", fontSize: "23px", fontWeight: "600" }}>
          {translations[lang].orthodonticsEffect}
        </p>
        <br />
        <br />
        <p style={{ color: "#54595F", fontSize: "20px" }}>
          {translations[lang].alignmentDescription}
        </p>
        <ul style={{ listStyleType: "none" }}>
          <li>&#x25B8; <b>{translations[lang].toothBrushing}</b> - {translations[lang].toothBrushingDesc}</li>
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
