import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LanguageContext } from '../../../context/LanguageContext';

function DentalPhobia() {
  const { lang,darkMode } = useContext(LanguageContext);
  const translations = {
    az: {
      title: "Diş həkimi qorxusu",
      subtitle: "Sən tək deyilsən, əhalinin 50%-dən çoxu diş həkiminə getmir və bunlardan 10%-i diş prosedurlarından qorxduğu üçün ofisə getməməyə üstünlük verir.",
      description: "Biz anlayırıq və kömək etmək istəyirik.",
      higyen: "Diş müalicəsindən qaçmağın təsirləri yalnız fiziki rifahınıza deyil, həm də sosial həyatınıza və iş mühitinizə böyük zərər verə bilər. Güclü, sağlam və çürüksüz dişlər xoşbəxt və sağlam bir həyat tərzinə töhfə verir.",
      thumbSucking:"Diş müalicəsindən qaçmaq ciddi nəticələrə səbəb ola bilər. Çürük və sındırılmış dişlər, düzgün çeynəmək və qidanı həzm etmək qabiliyyətini azaldır. Mualicə edilməmiş diş ətinin xəstəliyi pis ağız qoxusuna, diş itirilməsinə və estetik olmayan bir görkəmə səbəb ola bilər, bu da nəticədə özünə inamınıza təsir göstərə bilər.",
      nursingBottleCavities: "Diş qorxusu çox vaxt diş həkimi ofisində yaşanan mənfi uşaqlıq təcrübələrinə bağlıdır. Bu narahatlıq, növbəti diş müalicələrinə qədər daşıyılır və nəticədə diş müalicəsindən tamamilə qaçınmağa səbəb olur.",
      eruptionOfTeeth: "Diş qorxusunun yaygın əlamətləri bunlardır:",
      dentalEmergencies: "Ən güclü ağrı olsa belə, müalicədən qaçmaq.",
      grinding: "Təkrarlanan şəkildə təyinatları ləğv etmək və ya təxirə salmaq.",
      orthodontics: "Əllərdə tərləmə və çarəsizlik hissi.",
    },
    en: {
      title: "Dental Phobia",
      subtitle: "You are not alone, more than 50% of the population does not visit a dentist and 10% of these avoid an office visit because of fear of dental procedures.",
      description: "We understand and want to help",
      higyen: "The effects of avoiding dental care can be devastating not only to your physical well-being but also to your social life and work environment. Strong healthy decay free teeth contribute to a happy healthy lifestyle.",
      thumbSucking:"Avoiding dental treatment can have serious ramifications. Decayed and broken teeth decrease the ability to properly chew and digest food. Untreated gum disease can result in bad breath, tooth loss and an unaesthetic appearance, which can ultimately affect your self-confidence.",
      nursingBottleCavities: "Dental fear can often be traced to adverse childhood experiences in the dental office. This anxiety is often carried to subsequent dental visits resulting in avoidance of dental treatment altogether.",
      eruptionOfTeeth: "Common signs of dental phobia include:",
      dentalEmergencies: "Avoidance of treatment even with extreme pain.",
      grinding: "Frequently canceling or postponing appointments.",
      orthodontics: "Sweaty palms and feeling of helplessness.",
    },
    ru: {
      title: "Страх перед стоматологом",
      subtitle: "Ты не один, более 50% населения не посещают стоматолога, и 10% из них избегают визитов из-за страха перед стоматологическими процедурами.",
      description: "Мы понимаем и хотим помочь.",
      higyen: "Последствия избегания стоматологического лечения могут быть разрушительными не только для вашего физического благополучия, но и для вашей социальной жизни и рабочего окружения. Крепкие, здоровые, без кариеса зубы способствуют счастливому и здоровому образу жизни.",
      thumbSucking:"Избегание стоматологического лечения может иметь серьезные последствия. Кариозные и сломанные зубы уменьшают способность правильно жевать и переваривать пищу. Лечение не полученные заболевания десен могут привести к плохому запаху изо рта, потере зубов и неэстетичному виду, что в конечном итоге повлияет на вашу уверенность в себе.",
      nursingBottleCavities: "Страх перед стоматологом часто связан с негативным опытом детства в стоматологическом кабинете. Эта тревога часто сохраняется и переносится на последующие визиты к стоматологу, что в конечном итоге приводит к избеганию стоматологического лечения.",
      eruptionOfTeeth: "Общие признаки страха перед стоматологом включают:",
      dentalEmergencies: "Избежание лечения даже при сильной боли.",
      grinding: "Частое отмена или перенос записей.",
      orthodontics: "Потливые ладони и чувство беспомощности.",
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
              src="/images/dentalPhobia.webp"
              alt="Dental phobia"
              className="rounded"
            />
          </Card>
        </Col>
      </Row>

      <Row className="py-5 mx-5" style={{backgroundColor:`${darkMode ? "#121212" : ""}`}}>
        <h1 style={{ fontWeight: "600", fontSize: "30px" }}>{translations[lang].description}</h1><br /><br />
        <p style={{ color: "#6F3D85", fontSize: "20px", fontWeight: "600" }}>
          {translations[lang].subtitle}
        </p>
        <br />
        <br />
        <p style={{fontSize:"19px",color:"#9A9DA0"}}>{translations[lang].higyen}</p>
        
        <br />
        
       <b>{translations[lang].thumbSucking}</b> 
       <br /><br /><br />
       <b>{translations[lang].nursingBottleCavities}</b>
       <br /><br /><br />
       <b>{translations[lang].eruptionOfTeeth}</b>
       <br /><br />

        <ul style={{ listStyleType: "none" }}>
          
          <li>&#x25B6; <b>{translations[lang].dentalEmergencies}</b></li><br />
          <li>&#x25B6; <b>{translations[lang].grinding}</b></li> <br />
          <li>&#x25B6; <b>{translations[lang].orthodontics}</b></li>
        </ul>
      </Row>
    </Container>
  );
}

export default DentalPhobia;
