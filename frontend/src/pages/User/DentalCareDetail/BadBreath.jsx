import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LanguageContext } from '../../../context/LanguageContext';

function BadBreath() {
  const { lang,darkMode } = useContext(LanguageContext);
  const translations = {
    az: {
      title: "Pis nəfəs",
      subtitle: "Diş əti xəstəliyi pis nəfəsin əsas səbəblərindən biridir və bizim gigiyenistimiz hər hansı bir periodont xəstəliyinin gedişatını izləyəcəkdir.",
      description: "Pis nəfəsin qarşısını almaq",
      higyen: "Dişdən gələn pis qoxu və ya halitoz, Şimali Amerikada 40 milyon insanı təsir edən bir vəziyyətdir. Bu vəziyyətin iki növü tanınır",
      transient:"Keçici pis qoxu əsasən qida, tütün, spirtli içkilər və dərmanlar tərəfindən yaranır və adətən 72 saatdan çox davam etmir. Ağız yuyucuları, nəfəs təravətləndiricilər və çeynənən saqqız asanlıqla bu qoxunu gizlədə bilər.",
      thumbSucking:"Ağız və dil",
      nursingBottleCavities: "Burun və sinuslar",
      eruptionOfTeeth: "Ağciyərlər",
      dentalEmergencies: "Mədə",
      grinding: "Sistem xəstəliyi",
      orthodontics: "Hamımız bilirik ki, dişlər arasındakı boşluqlarda pis qoxu yaradan bakteriyalar çoxdur və bu bakteriyaların nəzarətdə saxlanması üçün düzgün diş ipi istifadəsi vacibdir. Çox vaxt nəzərdən qaçırılan isə dilin səthindəki kobud sahələrdir. Bu sahələrdən qida hissəciklərini təmizləmək üçün dil fırçalanmalıdır. Dilin arxa hissəsini təmizləmək üçün dil təmizləyicisi çox effektiv ola bilər. Bunlar apteklərdə adətən tapılmır, amma aptekinizdən onları xüsusi olaraq sifariş etməsini xahiş edə bilərsiniz.",
    },
    en: {
      title: "Bad Breath",
      subtitle: "Gum disease is a major culprit in the case of bad breath and our hygienist will monitor the progress of any periodontal disease.",
      description: "Preventing bad breath",
      higyen: "Dental malodor or halitosis is a condition that affects 40 million people in North America. There are two types of this condition that are recognized.",
      transient:"Transient malodor is essentially caused by foods, tobacco, alcohol and medications and usually lasts no more than 72 hours. Mouthwashes, breath mints, and chewing gum can easily mask it.",
      thumbSucking:"Mouth and tongue.",
      nursingBottleCavities: "Nose and sinuses.",
      eruptionOfTeeth: "Lungs",
      dentalEmergencies: "Stomach",
      grinding: "Systemic disease.",
      orthodontics: "We are all aware that the spaces between the teeth harbour a large number of odour causing bacteria and proper flossing is needed to keep these under control. What is often overlooked is the rough area on the surface of the tongue, which must be brushed to remove and food particles. A tongue scraper can be very effective in cleansing the back of the tongue. These are not commonly found on the pharmacy shelves, but ask your pharmacist to special order them for you.",
    },
    ru: {
      title: "Необычный запах изо рта",
      subtitle: "Заболевания десен — одна из основных причин неприятного запаха изо рта, и наш гигиенист будет отслеживать развитие любых заболеваний пародонта.",
      description: "Предотвращение неприятного запаха изо рта.",
      higyen: "Зубной запах или галитоз — это состояние, которое затрагивает 40 миллионов людей в Северной Америке. Существует два типа этого состояния, которые признаются.",
      transient:"Преходящий неприятный запах в основном вызывается продуктами питания, табаком, алкоголем и лекарствами и обычно не длится более 72 часов. Полоскания для рта, мятные конфеты и жевательная резинка могут легко скрыть его.",
      thumbSucking:"Рот и язык",
      nursingBottleCavities: "Нос и синусы",
      eruptionOfTeeth: "Легкие",
      dentalEmergencies: "Желудок",
      grinding: "Системное заболевание",
      orthodontics: "Мы все знаем, что промежутки между зубами содержат большое количество бактерий, вызывающих неприятный запах, и для контроля над ними необходима правильная чистка зубной нитью. Однако часто забывают о грубой поверхности языка, которую необходимо чистить, чтобы удалить частицы пищи. Скребок для языка может быть очень эффективным для очистки задней части языка. Эти устройства не часто встречаются на полках аптек, но вы можете попросить своего фармацевта заказать их для вас.",
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
              src="/images/badBreath.webp"
              alt="Bad breath"
              className="rounded"
            />
          </Card>
        </Col>
      </Row>

      <Row className="py-5 mx-5" style={{backgroundColor:`${darkMode ? "#121212" : ""}`}} >
        <h1 style={{ fontWeight: "600", fontSize: "30px" }}>{translations[lang].description}</h1><br /><br />
        <p style={{ color: "#6F3D85", fontSize: "20px", fontWeight: "600" }}>
          {translations[lang].subtitle}
        </p>
        <br />
        <br />
        <h3 style={{fontSize:"19px",fontWeight:"400"}}>{translations[lang].higyen}:</h3><br />
        
        <br />

        <ul style={{ listStyleType: "none" }}>
          <li>&#x25B6; <b>{translations[lang].thumbSucking}</b> </li> <br />
          <li>&#x25B6; <b>{translations[lang].nursingBottleCavities}</b></li><br />
          <li>&#x25B6; <b>{translations[lang].eruptionOfTeeth}</b></li><br />
          <li>&#x25B6; <b>{translations[lang].dentalEmergencies}</b></li><br />
          <li>&#x25B6; <b>{translations[lang].grinding}</b></li> <br />
        </ul>
        <b>{translations[lang].orthodontics}</b>
      </Row>
    </Container>
  );
}

export default BadBreath;
