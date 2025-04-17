import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LanguageContext } from '../../../context/LanguageContext';

function PostExtractions() {
  const { lang,darkMode } = useContext(LanguageContext);
  
  const content = {
    en: {
      title: "Post-Extractions",
      description: "Surgical procedures of any kind are traumatic for the body, and adequate rest from strenuous physical activity is necessary to allow the natural defence mechanism of the body help heal the surgical site.",
      adviceTitle: "Post Extraction Advice",
      subtitle:"Slight swelling, pain, and bleeding are to be expected after an extraction or any surgery performed in the mouth and taking the following precautions will help minimize these symptoms:",
      advice: [
        { term: "Bleeding", content: "Firm steady pressure should be applied to the site for at least 10 minutes. Avoid rinsing or spitting, as this will disturb the clot. Use a moistened tea bag to help control any oozing. If the bleeding doesn't subside please contact our office or a medical professional." },
        { term: "Oral Hygiene", content: "Brush normally after 12 hours but use a cotton swab around the surgical site to gently clean around the teeth. Do not disturb the clot or the wound." },
        { term: "Limited mouth opening", content: "This is the response of the body to immobilize the traumatized area and should resolve on its own." },
        { term: "Medication", content: "Follow the directions on the medications. Make sure you complete the antibiotic course and if pain medication has been prescribed avoid driving a car or using any machinery." },
        { term: "Pain", content: "Use over the counter painkillers but avoid aspirin products as they may interfere with the clotting mechanism causing bleeding." },
        { term: "Smoking", content: "Do not smoke for at least 24 hours as this may cause the clot to break down and hinder the healing process." },
        { term: "Sutures", content: "Sutures may have been placed to secure the wound and these are usually removed a week later." },
        { term: "Swelling", content: "Swelling and bruising is to be expected and application of ice to the outside of the face for the first 24 hours will help in controlling this. Heat should be applied after 72 hours as this increases the blood circulation; which will reduce any swelling or bruising." },
        { term: "Diet", content: "Follow a soft diet; drink lots of water and fresh juices." },
      ]
    },
    az: {
      title: "Çıxarma Sonrası",
      description: "Hər hansı bir cərrahi əməliyyat bədən üçün travmatikdir və bədənin təbii müdafiə mexanizminin cərrahi sahəni sağaltmasına kömək etməsi üçün gərgin fiziki fəaliyyətə düzgün istirahət vacibdir.",
      adviceTitle: "Çıxarma Sonrası Tövsiyələr",
      subtitle:"Çəkilmə və ya ağızda aparılan hər hansı bir cərrahiyyə əməliyyatından sonra az miqdarda şişlik, ağrı və qanama gözlənilir və aşağıdakı ehtiyat tədbirlərinin görülməsi bu simptomları minimuma endirməyə kömək edəcək:",
      advice: [
        { term: "Qanama", content: "Yeri 10 dəqiqə ərzində möhkəm və sabit təzyiq tətbiq olunmalıdır. Qatıq və ya tüpürmədən qaçın, çünki bu, trombun pozulmasına səbəb olacaq. Hər hansı bir sızmanı idarə etməyə kömək etmək üçün nəmli çay kisəsi istifadə edin. Əgər qanama dayanmazsa, zəhmət olmasa ofisimizlə və ya tibbi mütəxəssislə əlaqə saxlayın." },
        { term: "Ağız Gigiyenası", content: "12 saat sonra normal diş fırçalayın, amma cərrahi sahə ətrafında pambıq budağı ilə nazik şəkildə təmizləyin. Trombu və ya yarayı pozmayın." },
        { term: "Ağız açılması məhdudiyyəti", content: "Bu, bədənin travmatizasiya edilmiş sahəni hərəkətsizləşdirmək cavabıdır və öz-özünə həll olunmalıdır." },
        { term: "Dərmanlar", content: "Dərmanların təlimatlarına əməl edin. Antibiotik müalicəsini tamamlamağınızdan əmin olun və əgər ağrı dərmanları təyin edilibsə, maşın sürməməyə və ya hər hansı bir maşından istifadə etməməyə diqqət edin." },
        { term: "Ağrı", content: "Əczaxanadan alınan ağrı kəsiciləri istifadə edin, amma aspirin məhsullarından çəkinin, çünki bunlar qanamağa səbəb ola bilər." },
        { term: "Siqaret çəkmək", content: "Ən azı 24 saat siqaret çəkməyin, çünki bu, trombun pozulmasına və sağalma prosesini çətinləşdirə bilər." },
        { term: "Dikişlər", content: "Dikişlər yaraya təhlükəsizliyini təmin etmək üçün qoyulmuş ola bilər və adətən bir həftə sonra çıxarılır." },
        { term: "Şişkinlik", content: "Şişkinlik və çürümə gözlənilir və ilk 24 saat ərzində üzə buz tətbiq edilməsi bunu idarə etməyə kömək edəcəkdir. 72 saatdan sonra istilik tətbiq edin, çünki bu, qan dövranını artırır və şişkinlik və ya çürüməni azaldır." },
        { term: "Pəhriz", content: "Yumşaq pəhriz izləyin; bol su və təzə şirələr içirin." }
      ]
    },
    ru: {
      title: "После удаления",
      description: "Хирургические процедуры любого рода являются травмой для организма, и необходимы адекватные перерывы от физической активности, чтобы естественные защитные механизмы организма помогли заживлению хирургического участка.",
      adviceTitle: "Советы после удаления",
      subtitle:"После удаления зуба или любой другой хирургической операции в рту ожидаются небольшие отеки, боль и кровотечение, и принятие следующих мер поможет минимизировать эти симптомы:",
      advice: [
        { term: "Кровотечение", content: "Приложите стабильное давление на место в течение как минимум 10 минут. Избегайте полоскания или плевания, так как это нарушит сгусток. Используйте смоченный чайный пакетик для контроля за выделением жидкости. Если кровотечение не остановится, пожалуйста, свяжитесь с нашим офисом или медицинским специалистом." },
        { term: "Оральная гигиена", content: "Чистите зубы как обычно через 12 часов, но используйте ватную палочку для мягкой очистки вокруг хирургического участка. Не нарушайте сгусток или рану." },
        { term: "Ограниченное открытие рта", content: "Это реакция организма, чтобы обездвижить травмированную область, и это должно пройти самостоятельно." },
        { term: "Медикаменты", content: "Следуйте инструкциям на лекарствах. Убедитесь, что вы завершили курс антибиотиков, и если вам прописали обезболивающие, избегайте вождения автомобиля или использования техники." },
        { term: "Боль", content: "Используйте обезболивающие, которые продаются без рецепта, но избегайте препаратов с аспирином, так как они могут нарушить механизм свертывания, вызывая кровотечение." },
        { term: "Курение", content: "Не курите хотя бы 24 часа, так как это может привести к разрушению сгустка и замедлить процесс заживления." },
        { term: "Швы", content: "Швы могли быть наложены для обеспечения раны, и их обычно удаляют через неделю." },
        { term: "Отек", content: "Отек и синяки ожидаются, и нанесение льда на наружную сторону лица в течение первых 24 часов поможет контролировать это. После 72 часов применяйте тепло, так как это увеличит кровообращение, что снизит отек или синяки." },
        { term: "Диета", content: "Следуйте мягкой диете; пейте много воды и свежих соков." },
      ]
    }
  };

  const selectedContent = content[lang] || content.en;

  return (
    <Container fluid className="py-5">
      <Row className="justify-content-center align-items-center text-center" style={{ backgroundColor: '#3c1a6f', color: '#fff' }}>
        <Col md={6}>
          <h1 className="display-4">{selectedContent.title}</h1>
          <p style={{fontSize:"20px"}}>{selectedContent.description}</p>
        </Col>
        <Col md={4}>
          <Card className="border-0">
            <Card.Img
              src="/images/extraction.webp"
              alt="extraction"
              className="rounded"
            />
          </Card>
        </Col>
      </Row>

      <Row className="py-5 mx-5" style={{backgroundColor:`${darkMode ? "#121212" : ""}`}}>
        <h1 style={{ fontWeight: "600", fontSize: "36px"}} className='mx-4' >{selectedContent.adviceTitle}</h1><br />
        <h2 style={{color: "#6F3D85",}} className='mx-4'>{content[lang].subtitle}</h2>
        <p style={{  fontSize: "18px", fontWeight: "400" }}>
          {selectedContent.advice.map((item, index) => (
            <ul key={index} style={{ listStyleType: "none" }}>
              <li>&#x25B6; <b>{`${item.term}:`}</b> {item.content}</li>
            </ul>
          ))}
        </p>
      </Row>
    </Container>
  );
}

export default PostExtractions;
