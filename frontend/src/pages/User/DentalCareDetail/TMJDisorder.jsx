import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LanguageContext } from '../../../context/LanguageContext';

function TMJDisorder() {
  const { lang, } = useContext(LanguageContext);
  const translations = {
    az: {
      title:"Çıxarış sonrası",
      subtitle:"Hər hansı bir cərrahiyyə proseduru bədən üçün travmatikdir və əməliyyat yerinin sağalmasına kömək etmək üçün bədənin təbii müdafiə mexanizminin işə düşməsi üçün gərgin fiziki fəaliyyətlərdən kifayət qədər istirahət vacibdir.",
      description:"Çıxarış sonrası məsləhətlər",
      par4:"Diş çıxarılması və ya ağızda edilən hər hansı bir cərrahiyyə əməliyyatından sonra az miqdarda şişlik, ağrı və qanama gözlənilə bilər və aşağıdakı tədbirlərin görülməsi bu əlamətləri minimuma endirməyə kömək edəcək:",
      bleeding: "**Qanama**: Yara yerinə 10 dəqiqə müddətində möhkəm və sabit təzyiq tətbiq edilməlidir. Yaranın qırılmaması üçün ağızı yaxalamaq və ya tüpürməkdən qaçın. Qanın gəlməsini dayandırmaq üçün nəmli çay torbası istifadə edə bilərsiniz. Əgər qanama davam edərsə, ofisimizlə və ya tibbi mütəxəssislə əlaqə saxlayın.",
      diet: "**Pəhriz**: Yumşaq pəhriz izləyin; çoxlu su və təzə şirələr için.",
      oralHygiene: "**Ağız gigiyenası**: 12 saat sonra normal diş fırçalama tətbiq edin, amma əməliyyat yerindəki dişlərin ətrafını yumşaq şəkildə pambıq çubuqla təmizləyin. Yaranın və qan pıhtısının pozulmasına icazə verməyin.",
      limitedMouthOpening: "**Ağız açılması məhdudiyyəti**: Bu, bədənin zədələnmiş ərazini hərəkətsizləşdirməsi ilə əlaqədar bir reaksiyadır və öz-özünə keçməlidir.",
      medication: "**Dərmanlar**: Dərman istifadəsi təlimatlarına riayət edin. Antibiotik müalicəsini tam şəkildə bitirdiyinizdən əmin olun, ağrı kəsici təyin olunubsa, maşın sürməyin və ya hər hansı bir mexanizm işlətməyin.",
      pain: "**Ağrı**: Şəbəkə ağrı kəsicilərini istifadə edin, amma aspirinin məhsullarından qaçın, çünki bu, qanamaya səbəb ola bilər.",
      smoking: "**Siqaret çəkmək**: Ən az 24 saat siqaret çəkməyin, çünki bu, qan pıhtısının dağılmasına və sağalma prosesini pozmağa səbəb ola bilər.",
      sutures: "**Dikişlər**: Dikişlər əməliyyat yerini təmir etmək üçün qoyulmuşdur və bu dikişlər adətən bir həftə sonra çıxarılır.",
      swelling: "**Şişlik**: Şişlik və bənövşəyi rənglənmə gözləniləndir. İlk 24 saat ərzində üzünüzün xarici hissəsinə buz tətbiq etməklə şişliyi nəzarət altına almış olarsınız. 72 saatdan sonra istilik tətbiq etmək qan dövranını artıracaq və şişlik və bənövşəyi rənglənməni azaldacaq."
    },
    en: {
      title:"Post-Extractions",
      subtitle:"Surgical procedures of any kind are traumatic for the body, and adequate rest from strenuous physical activity is necessary to allow the natural defence mechanism of the body help heal the surgical site.",
      description:"Post Extraction Advice",
      par4:"Slight swelling, pain, and bleeding are to be expected after an extraction or any surgery performed in the mouth and taking the following precautions will help minimize these symptoms:",
      bleeding: "**Bleeding**: Firm steady pressure should be applied to the site for at least 10 minutes. Avoid rinsing or spitting, as this will disturb the clot. Use a moistened tea bag to help control any oozing. If the bleeding doesn't subside, please contact our office or a medical professional.",
      diet: "**Diet**: Follow a soft diet; drink lots of water and fresh juices.",
      oralHygiene: "**Oral Hygiene**: Brush normally after 12 hours but use a cotton swab around the surgical site to gently clean around the teeth. Do not disturb the clot or the wound.",
      limitedMouthOpening: "**Limited mouth opening**: This is the response of the body to immobilize the traumatized area and should resolve on its own.",
      medication: "**Medication**: Follow the directions on the medications. Make sure you complete the antibiotic course and if pain medication has been prescribed, avoid driving a car or using any machinery.",
      pain: "**Pain**: Use over-the-counter painkillers but avoid aspirin products as they may interfere with the clotting mechanism causing bleeding.",
      smoking: "**Smoking**: Do not smoke for at least 24 hours as this may cause the clot to break down and hinder the healing process.",
      sutures: "**Sutures**: Sutures may have been placed to secure the wound, and these are usually removed a week later.",
      swelling: "**Swelling**: Swelling and bruising are to be expected, and the application of ice to the outside of the face for the first 24 hours will help in controlling this. Heat should be applied after 72 hours as this increases the blood circulation, which will reduce any swelling or bruising."
    },
    ru: {
      title:"После удаления зубов",
      subtitle:"Любая хирургическая процедура является травматичной для организма, и необходим достаточный отдых от интенсивной физической активности, чтобы естественный защитный механизм организма помог заживлению хирургического участка.",
      description:"Рекомендации после удаления зуба",
      par4:" Легкое опухание, боль и кровотечение ожидаются после удаления зуба или любой операции в полости рта, и соблюдение следующих мер поможет минимизировать эти симптомы:",
      bleeding: "**Кровотечение**: На место необходимо приложить сильное постоянное давление в течение минимум 10 минут. Избегайте полоскания или плевания, так как это нарушит образование сгустка. Используйте увлажненный чайный пакетик, чтобы помочь контролировать любую каплю. Если кровотечение не прекращается, пожалуйста, свяжитесь с нашим офисом или медицинским специалистом.",
      diet: "**Диета**: Следуйте мягкой диете; пейте много воды и свежих соков.",
      oralHygiene: "**Оральная гигиена**: Чистите зубы как обычно через 12 часов, но используйте ватную палочку вокруг хирургического участка, чтобы осторожно очистить зубы. Не нарушайте сгусток или рану.",
      limitedMouthOpening: "**Ограничение открывания рта**: Это реакция организма, чтобы обездвижить травмированную область, и это должно пройти самостоятельно.",
      medication: "**Лекарства**: Следуйте инструкциям по применению лекарств. Убедитесь, что вы завершили курс антибиотиков, а если прописаны обезболивающие, избегайте вождения автомобиля или работы с механизмами.",
      pain: "**Боль**: Используйте обезболивающие без рецепта, но избегайте продуктов с аспирином, так как они могут повлиять на механизм свертывания крови, вызывая кровотечение.",
      smoking: "**Курение**: Не курите минимум 24 часа, так как это может разрушить сгусток и помешать процессу заживления.",
      sutures: "**Швы**: Возможно, были наложены швы для закрепления раны, и они обычно удаляются через неделю.",
      swelling: "**Отёк**: Ожидается опухоль и синяки, и приложение льда к внешней стороне лица в первые 24 часа поможет контролировать это. Тепло следует применять после 72 часов, так как это улучшит кровообращение, что снизит опухоль и синяки."
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

      <Row className="py-5 bg-light text-dark">
        <h1 style={{ fontWeight: "600", fontSize: "30px" }}>{translations[lang].description}</h1><br /><br />
        <p style={{ color: "#6F3D85", fontSize: "20px", fontWeight: "600" }}>
          {translations[lang].subtitle}
        </p>
        <br />
        <br />
        <p style={{fontSize:"19px",color:"#9A9DA0"}}>{translations[lang].higyen}</p>
        
        <br />

        <ul style={{ listStyleType: "none" }}>
          <li>&#x25B6; <b>{translations[lang].bleeding}</b> </li> <br />
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

export default TMJDisorder;
