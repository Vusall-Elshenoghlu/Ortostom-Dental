import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LanguageContext } from '../../../context/LanguageContext';

function GumHealth() {
  const { lang,darkMode } = useContext(LanguageContext);
  const translations = {
    az: {
      title: " Diş Əti Sağlığı",
      subtitle: "Periodont xəstəliyi ilkin mərhələlərdə tamamilə simptomsuz olur və aşkar edilməzsə, diş itkisinə səbəb ola bilər. Diş əti xəstəliyini izləmək üçün müntəzəm yoxlamalar hər hansı bir diş müayinəsinin vacib hissəsidir.",
      description: "Diş Əti Xəstəliyini İzləmək",
      higyen: "Diş əti çəhrayı, möhkəm və sağlam görünməlidir. Periodontal problemə işarə edən bəzi erkən əlamətlər aşağıdakılardır:",
      thumbSucking: "Diş fırçalama və diş ipi istifadə edərkən diş əti qanaması.",
      nursingBottleCavities: "Şişmiş, dolğun diş əti, diş səthindən ayrılmış",
      eruptionOfTeeth: "Pisləşmiş nəfəs.",
      dentalEmergencies: "Dişlər və diş əti arasından iltihab axıntısı.",
      grinding: "Dişlər arasında məsafənin artması.",
      par1:"Diş əti xəstəliyi ən çox plağa səbəb olur. Plaq, qida hissəcikləri və bakteriyalardan ibarət yapışqan, ağ bir maddədir. Əgər müdaxilə edilməzsə, bu maddə diş əti üzərində qıcıq yaradır və iltihablanmasına səbəb olur. Diş əti sağlamlığı və ümumi qayğı üçün gündə iki dəfə diş fırçalamaq və diş aralarını təmizləmək çox vacibdir. Diş əti xəstəliyinin olub-olmamasını yoxlamaq üçün müntəzəm olaraq diş həkiminə getmək vacibdir.",
      par2:"Diş əti xəstəliyini nəzarət altında saxlamaq və diş ətini sağlam saxlamaq üçün ən effektiv üsul müntəzəm təmizləmələr, evdə diş fırçalamaq və diş arası ipindən istifadə etməkdir."
    },
    en: {
      title: "Gum Health",
      subtitle: "Periodontal disease in its initial stages is completely symptom-less and if left undetected will cause tooth loss. Regular check ups to monitor gum disease are an important part of any dental exam.",
      description: "Monitoring gum disease",
      higyen: "The gums should be pink, firm and healthy looking. Some of the early warning signs of periodontal breakdown are as follows:",
      thumbSucking: "Bleeding gums during brushing and flossing.",
      nursingBottleCavities: "Swollen puffy gums that have separated from the tooth surface.",
      eruptionOfTeeth: "Bad breath",
      dentalEmergencies: "Pus draining between teeth and gums.",
      grinding: "Spaces between the teeth increasing.",
      par1: "Gum disease is most commonly caused by plaque. Plaque is a sticky white substance made up of food particles and bacteria, which if left undisturbed will irritate the gums causing them to be inflamed. Brushing and flossing twice a day is essential to the overall care and well being of the gums. Regular checkups are important to evaluate the gums for periodontal disease.",
      par2:"Regular cleanings along with flossing and brushing at home are the most effective method of controlling periodontal disease and keeping the gums healthy."
    },
    ru: {
      title: "Здоровье десен",
      subtitle: "Периодонтит на ранних стадиях полностью бессимптомен, и если его не обнаружить, он может привести к потере зубов. Регулярные осмотры для контроля заболеваний десен являются важной частью любого стоматологического осмотра.",
      description: "Контроль за заболеванием десен",
      higyen: "Десны должны быть розовыми, крепкими и здоровыми на вид. Некоторые из ранних признаков развития заболеваний периодонта следующие:",
      thumbSucking: "Кровоточивость десен при чистке зубов и использовании зубной нити.",
      nursingBottleCavities: "Опухшие, отекшие десны, отдалившиеся от поверхности зуба.",
      eruptionOfTeeth: "Неприятный запах изо рта.",
      dentalEmergencies: " Гной, выделяющийся между зубами и деснами.",
      grinding: " Гной, выделяющийся между зубами и деснами.",
      par1:"Заболевания десен чаще всего вызваны налетом. Налет — это липкое белое вещество, состоящее из остатков пищи и бактерий, которое, если не удалить, раздражает десны, вызывая их воспаление. Чистка зубов и использование зубной нити дважды в день имеют решающее значение для общего ухода за деснами и их здоровья. Регулярные проверки важны для оценки состояния десен на предмет заболеваний пародонта.",
      par2:"Регулярные чистки, а также чистка зубов и использование зубной нити дома являются наиболее эффективным методом контроля заболеваний пародонта и поддержания здоровья десен."
    }


  }
  return (
    <Container fluid className="py-5">
      <Row className="justify-content-center align-items-center text-center" style={{ backgroundColor: '#3c1a6f', color: '#fff' }}>
        <Col md={6}>
          <h1 className="display-4">{translations[lang].title}</h1>
          <p style={{ fontSize: "20px" }}>{translations[lang].subtitle}</p>
        </Col>
        <Col md={4}>
          <Card className="border-0">
            <Card.Img
              src="/images/Gum.jpg"
              alt="Gum"
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

        <ul style={{ listStyleType: "none" }}>
          <li>&#x25B6; <b>{translations[lang].thumbSucking}</b> </li> <br />
          <li>&#x25B6; <b>{translations[lang].nursingBottleCavities}</b></li><br />
          <li>&#x25B6; <b>{translations[lang].eruptionOfTeeth}</b></li><br />
          <li>&#x25B6; <b>{translations[lang].dentalEmergencies}</b></li><br />
          <li>&#x25B6; <b>{translations[lang].grinding}</b></li> <br />
        </ul> <br />
        <p style={{fontSize:"20px"}}>{translations[lang].par1}</p> <br />
        <p style={{fontSize:"20px"}}>{translations[lang].par1}</p> <br />
      </Row>
    </Container>
  );
}

export default GumHealth;
