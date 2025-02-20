import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LanguageContext } from '../../../context/LanguageContext';

function ImplantCare() {
  const { lang, } = useContext(LanguageContext);
  const translations = {
    az: {
      title: "İmplant Baxımı",
      subtitle: "İmplantlar itirilmiş dişlərin əvəzlənməsi və diş protezlərinin ağızda saxlanması üsulunu dəyişdirib.",
      description: "İmplantlara Baxım",
      higyen: "Protez diş istifadəçiləri indi süni dişlərinin yerindən çıxması utanclığı olmadan çeynəmə, danışma və gülmə azadlığı və inamına malikdirlər.",
      replace:"Dişlər qonşu dişlərin müdaxiləsi olmadan əvəz edilə bilər.",
      rep2:"Bu yeni əldə olunan azadlıq maliyyə, vaxt və cərrahi yanaşma tələb edir. Buna görə də, düzgün ağız gigiyenası ilə baxılmalı və müntəzəm olaraq ofisimizə gəlməyiniz çox vacibdir.",
      thumbSucking:"Akkusuz elektrikli diş fırçası, kiçik başlığı ilə postsuz yerlərə daxil olmaq üçün idealdır.",
      brushing:"Diş fırçalama",
      nursingBottleCavities: "Bunlar qida hissəciklərini yerindən çıxarmaq üçün mükəmməldir.",
      oral:"Ağız yuyucuları",
      eruptionOfTeeth: "Müntəzəm diş ipi istifadəsi vacibdir və bəzən 'bar' implantlarının ətrafında və ya körpü formasında birləşdirilmiş implantlar arasında diş ipi yerləşdirmə aləti istifadə olunmalıdır.",
      flos:"Diş ipi istifadəsi",
      dentalEmergencies: "Bunlar dişlər arasına daxil olmaq üçün nəzərdə tutulmuş kiçik fırçalardır, stimulyatorlar isə diş ətlərini yumşaqca masaj etmək üçün istifadə oluna bilər.",
      inter:"Dişlərarası fırçalar və stimulyatorlar",
      par:"İmplantlara düzgün qayğı yalnız onların estetik görünüşünü yaxşılaşdırmaqla qalmayacaq, həm də uzunömürlülüyünü təmin edəcəkdir. Bütün diş prosedurlarında olduğu kimi, bir implantın uğuru, onun yerləşdirilməsi üçün lazım olan bacarıq qədər, onun baxımına da bağlıdır."
      
    },
    en: {
      title: "Implant Care",
      subtitle: "Implants have changed the way we think of replacing lost teeth and the way dentures are retained in the mouth.",
      description: "Taking care of implants",
      higyen: "Denture wearers now have the freedom and confidence of being able to chew, talk and laugh without the embarrassment of dislodging their artificial teeth",
      replace:"Teeth can be replaced with no involvement of the adjacent teeth.",
      rep2:"This new found freedom requires an investment of money, time, and a surgical approach. It is therefore of paramount importance that it is looked after and maintained with proper oral hygiene and regular visits to our office.",
      thumbSucking:"A cordless electric toothbrush with a small head is ideal for getting in and around the posts.",
      brushing:"Brushing ",
      nursingBottleCavities: "These are excellent for dislodging food particles.",
      oral:"Oral irrigators",
      eruptionOfTeeth: "Regular flossing is essential and sometimes a floss threader has to be used around “bar” implants or in between implants that are joined to form a bridge.",
      flos:"Flossing ",
      dentalEmergencies: "hese are small brushes designed for getting between teeth while the stimulators can be used to gently massage the gums",
      inter:"Interproximal brushes and stimulators",
      par:"Proper care of implants will not only enhance their aesthetics, but will ensure there longevity. As in all dental procedures, an implant’s success depends as much on its maintenance as on the skill required of placing it"
      
    },
    ru: {
      title: "Уход за имплантатами",
      subtitle: "Имплантаты изменили подход к замене потерянных зубов и удержанию зубных протезов в полости рта.",
      description: "Уход за имплантатами",
      higyen: "Носители зубных протезов теперь имеют свободу и уверенность в том, что могут жевать, говорить и смеяться без страха, что их искусственные зубы выпадут.",
      replace:"Зубы могут быть заменены без участия соседних зубов.",
      rep2:"Эта новая свобода требует инвестиций в деньги, время и хирургического подхода. Поэтому крайне важно ухаживать за имплантатами и поддерживать их с помощью правильной гигиены полости рта и регулярных визитов в наш офис.",
      thumbSucking:"Беспроводная электрическая зубная щетка с маленькой головкой идеально подходит для того, чтобы добраться до имплантатов и вокруг них.",
      brushing:"Чистка зубов",
      nursingBottleCavities: "Они отлично подходят для удаления частиц пищи.",
      oral:"Оральные ирригаторы",
      eruptionOfTeeth: "Регулярное использование зубной нити крайне важно, и иногда необходимо использовать нитевдеватель вокруг имплантатов 'бар' или между имплантатами, соединёнными в мост.",
      flos:"Использование зубной нити",
      dentalEmergencies: "Это маленькие щетки, предназначенные для чистки между зубами, в то время как стимуляторы могут быть использованы для мягкого массажа десен.",
      inter:"Межзубные щетки и стимуляторы",
      par:"Правильный уход за имплантатами не только улучшит их эстетику, но и обеспечит их долговечность. Как и в любых стоматологических процедурах, успех имплантата зависит не только от мастерства его установки, но и от его ухода."
      
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
              src="/images/implant.jpg"
              alt="Person brushing teeth"
              className="rounded"
            />
          </Card>
        </Col>
      </Row>

      <Row className="py-5 bg-light text-dark px-5">
        <h1 style={{ fontWeight: "600", fontSize: "30px" }}>{translations[lang].description}</h1><br /><br />
        <p style={{ color: "#6F3D85", fontSize: "20px", fontWeight: "600" }}>
          {translations[lang].subtitle}
        </p>
        <br />
        <br />
        <p style={{fontSize:"19px",color:"#9A9DA0"}}>{translations[lang].higyen}</p>
        
        <br />
        <p style={{fontSize:"19px"}}>{translations[lang].replace}</p>
        
        <br />
        <p style={{fontSize:"19px",}}>{translations[lang].rep2}</p>
        
        <br />


        <ul style={{ listStyleType: "none" }}>
          <li>&#x25B6; <b>{translations[lang].brushing}</b> - {translations[lang].thumbSucking}</li> <br />
          <li>&#x25B6; <b>{translations[lang].oral}</b> - {translations[lang].nursingBottleCavities}</li><br />
          <li>&#x25B6; <b>{translations[lang].flos}</b> - {translations[lang].eruptionOfTeeth}</li><br />
          <li>&#x25B6; <b>{translations[lang].inter}</b> - {translations[lang].dentalEmergencies}</li><br />
          
        </ul>

        <br />
        <p style={{fontSize:"19px",}}>{translations[lang].par}</p>
      </Row>
    </Container>
  );
}

export default ImplantCare;
