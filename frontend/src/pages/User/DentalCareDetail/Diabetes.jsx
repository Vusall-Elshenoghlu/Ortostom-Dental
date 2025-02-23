import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LanguageContext } from '../../../context/LanguageContext';

function Diabetes() {
  const { lang, } = useContext(LanguageContext);
  const translations = {
    az: {
      title: "Şəkər xəstəliyi",
      subtitle: "Tibbi vəziyyətinizi bizə bildirmək vacibdir ki, uyğun tədbirlər görə bilək.",
      description: "Normal, sağlam bir həyat yaşa.",
      higyen: "Şəkər xəstəliyi ciddi tibbi bir vəziyyətdir və yaxşı tibbi idarəetmə tələb edir. Şəkər xəstəliyi olan xəstələr diş ətinin xəstəliklərinə və infeksiyalara daha həssasdırlar. Bu infeksiyalar daha uzun müddətdə sağalır və ağır hallarda dişlərin sarsılmasına və tökülməsinə səbəb ola bilər.",
      thumbSucking:"Diş ətinə vurulan ziyanın minimuma endirilməsində ən vacib amil qan şəkəri səviyyələrinin nəzarətidir.",
      nursingBottleCavities: "Azerbaycanca: Tibbi vəziyyətinizi bizə bildirmək vacibdir ki, uyğun tədbirlər görə bilək. Diş müayinələri daha çox səhər saatlarına təyin olunur, çünki bu zaman qanda yüksək qlükoza və aşağı insulin fəaliyyəti müşahidə olunur. Dərmanınızı qəbul etdiyinizə və yüngül bir qəlyanaltı yediyinizə əmin olun. Əgər müayinə zamanı insulin reaksiya əlamətləri hiss edirsinizsə, dərhal bizə bildirin.",
      eruptionOfTeeth: "Diş müalicəsi yerli anesteziya ilə daha yaxşı idarə olunur, çünki ümumi anesteziya hiperglisemiya yarada bilər.",
      dentalEmergencies: "Nəzarət altına alınmamış şəkər xəstəliyinin bəzi ağız sağlamlığı ilə bağlı fəsadları aşağıdakılardır:",
      dry:"Quru Ağız",
      infec:"Təkrarlanan infeksiyalar.",
      heal:"Gecikmiş sağalma.",
      increase:"Diş əti xəstəliklərinə qarşı artan həssaslıq.",
      burn:"Ağızda yanma hissi.",
      ting:"Ağızda titrəmə, uyuşma və ya ağrı.",
      last:"Şəkər xəstələri hər 6 aydan bir diş müayinəsindən keçməli və diş ətinin sağlamlığından asılı olaraq hər 3-6 aydan bir dərindən təmizlik etməlidirlər. Yaxşı ev baxımı, o cümlədən diş fırçalama və diş ipi istifadə etmək vacibdir. Diş əti xəstəliyinə səbəb olan bakteriyaları məhv etmək və diş əti toxumalarına zərəri məhdudlaşdırmaq üçün antibakterial ağız yuyusu tövsiyə edə bilərik."
      
    },
    en: {
      title: "Diabetes",
      subtitle: "It is important to inform us of your medical condition in order for us to take the proper precautions.",
      description: "Lead a normal, healthy life",
      higyen: "Diabetes is a serious medical condition that requires good medical management. Patients with diabetes are more susceptible to gum disease and infections. These infections take longer to heal and in severe cases can cause the teeth to loosen and fall out.",
      thumbSucking:"The most crucial factor in minimizing the damage caused to gum tissue is the control of blood sugar levels.",
      nursingBottleCavities: "It is important to inform us of your medical condition in order for us to take the proper precautions. Dental appointments are preferably scheduled in the morning, as this is a time of high glucose and low insulin activity. Make sure you have taken your medication and that you have had a light snack. If you feel the symptoms of an insulin reaction during the appointment let us know immediately.",
      eruptionOfTeeth: "Dental treatment is better managed with local anesthetics as general anesthetics can produce hyperglycemia.",
      dentalEmergencies: "Some of the oral complications of uncontrolled diabetes are as follows:",
      dry:"Dry Mouth",
      infec:"Reoccurring infections.",
      heal:"Delayed healing.",
      increase:"Increased susceptibility to gum disease.",
      burn:"Burning sensation in the mouth.",
      ting:"Tingling, numbness or pain in the mouth.",
      last:"Diabetics should have dental check ups every 6 months and thorough cleanings every 3-6 months depending on the health of their gums. Good home care including brushing and flossing is essential. We may recommend an antibacterial mouthwash to destroy the bacteria causing gum disease thereby limiting the damage to the gum tissues."
      
    },
    ru: {
      title: "Диабет",
      subtitle: "Важно сообщить нам о вашем медицинском состоянии, чтобы мы могли принять необходимые меры предосторожности.",
      description: "Ведите нормальную, здоровую жизнь",
      higyen: "Диабет — это серьезное медицинское заболевание, требующее хорошего медицинского контроля. Пациенты с диабетом более подвержены заболеваниям десен и инфекциям. Эти инфекции заживают дольше, а в тяжелых случаях могут привести к расшатыванию и выпадению зубов.",
      thumbSucking:"Наиболее важным фактором в минимизации повреждений десневой ткани является контроль уровня сахара в крови.",
      nursingBottleCavities: "Важно сообщить нам о вашем медицинском состоянии, чтобы мы могли принять необходимые меры предосторожности. Стоматологические приёмы предпочтительно назначать на утро, так как в это время наблюдается высокий уровень глюкозы и низкая активность инсулина. Убедитесь, что вы приняли лекарства и съели лёгкий перекус. Если вы почувствуете симптомы реакции на инсулин во время приёма, немедленно сообщите нам.",
      eruptionOfTeeth: "Стоматологическое лечение лучше проводить с использованием местной анестезии, так как общая анестезия может вызвать гипергликемию.",
      dentalEmergencies: "Некоторые из оральных осложнений неконтролируемого диабета следующие:",
      dry:"Сухость во рту.",
      infec:"Повторяющиеся инфекции.",
      heal:"Задержка заживления.",
      increase:"Повышенная восприимчивость к заболеваниям десен.",
      burn:"Жжение в рту.",
      ting:"Покалывание, онемение или боль в рту.",
      last:"Диабетики должны проходить стоматологические осмотры каждые 6 месяцев и тщательно очищать зубы каждые 3-6 месяцев в зависимости от состояния их десен. Хороший уход за полостью рта, включая чистку зубов и использование зубной нити, имеет решающее значение. Мы можем порекомендовать антибактериальный ополаскиватель для рта, чтобы уничтожить бактерии, вызывающие заболевания десен, тем самым ограничив повреждения тканей десен."
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
              src="/images/diabet.webp"
              alt="Diabetes"
              className="rounded"
            />
          </Card>
        </Col>
      </Row>

      <Row className="py-5 bg-light text-dark mx-5">
        <h1 style={{ fontWeight: "600", fontSize: "30px" }}>{translations[lang].description}</h1><br /><br />
        <p style={{ color: "#6F3D85", fontSize: "20px", fontWeight: "600" }}>
          {translations[lang].higyen}
        </p>
        <br />
        <br />
        <p style={{fontSize:"19px",color:"#9A9DA0"}}>{translations[lang].thumbSucking}</p>
        <p style={{fontSize:"19px",color:"#9A9DA0"}}>{translations[lang].nursingBottleCavities}</p>
        <p style={{fontSize:"19px",color:"#9A9DA0"}}>{translations[lang].eruptionOfTeeth}</p>
        <p style={{fontSize:"19px",color:"#9A9DA0"}}>{translations[lang].dentalEmergencies}</p>
        
        <br />

        <ul style={{ listStyleType: "none" }}>
          <li>&#x25B6; <b>{translations[lang].dry}</b> </li> <br />
          <li>&#x25B6; <b>{translations[lang].infec}</b></li><br />
          <li>&#x25B6; <b>{translations[lang].heal}</b></li><br />
          <li>&#x25B6; <b>{translations[lang].increase}</b></li><br />
          <li>&#x25B6; <b>{translations[lang].burn}</b></li> <br />
          <li>&#x25B6; <b>{translations[lang].ting}</b></li>
        </ul>
        <b>{translations[lang].last}</b>
      </Row>
    </Container>
  );
}

export default Diabetes;
