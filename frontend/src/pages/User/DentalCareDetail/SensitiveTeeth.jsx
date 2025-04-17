import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LanguageContext } from '../../../context/LanguageContext';

function SentitiveTeeth() {
  const {lang,darkMode} = useContext(LanguageContext)
  const translations = {
    az: {
      sensitiveTeeth: "Həssas Dişlər",
      introduction: "Diş həssaslığı, dişlərin isti, soyuq, şirin və ya turşu təsirlərinə məruz qalmasından sonra ağrılı reaksiyadır.",
      dealingWithSensitiveTeeth: "Həssas dişlərlə məşğul olmaq",
      causes: "Həssas dişlərin səbəbləri:",
      toothDecay: "Diş çürüməsi dişi bakteriyalara məruz qoyur.",
      brushingTooHard: "Çox sərt fırçalama diş minasının aşınmasına və altındakı daha həssas dentin təbəqəsinin ortaya çıxmasına səbəb olur.",
      gumRecession: "Diş əti çəkilməsi.",
      grindingTeeth: "Dişlərin sıxılması.",
      poorOralHygiene: "Pis ağız gigiyenası.",
      dentalExamination: "Diş həkimi müayinəsi həssaslığın səbəbini müəyyən etmək və uyğun müalicə etmək üçün vacibdir.",
      treatment: "Həssas dişlərin müalicəsi:",
      fillingDecayedTeeth: "Çürümüş dişlərin doldurulması.",
      softToothbrush: "Yumşaq diş fırçası ilə fırçalama.",
      fluoridatedToothpaste: "Həssas dişlər üçün florlu diş pastası istifadə etmək, hansı ki, təsirlənmiş sahələrə birbaşa tətbiq edilə bilər və 15 dəqiqə saxlanıldıqdan sonra qarqara edilə bilər.",
      fluorideRinse: "Florid qarqarası istifadə etmək.",
      nightGuard: "Diş sıxılması simptomlarını yüngülləşdirmək üçün gecə qoruyucu istifadə etmək.",
      goodOralHygiene: "Yaxşı ağız gigiyenası, diş çöküntülərini və toxuma iltihabını azaltmağa kömək edir.",
      regularCheckups: "Müntəzəm diş həkimi müayinələri."
    },
    en: {
      sensitiveTeeth: "Sensitive Teeth",
      introduction: "Tooth sensitivity is a painful reaction following exposure of the teeth to hot, cold, sweet or sour stimuli.",
      dealingWithSensitiveTeeth: "Dealing with sensitive teeth",
      causes: "Causes of sensitive teeth:",
      toothDecay: "Tooth decay exposing the tooth to bacteria.",
      brushingTooHard: "Brushing too hard causing abrasion of the enamel and exposure of the more sensitive dentin under layer.",
      gumRecession: "Gum recession.",
      grindingTeeth: "Grinding teeth.",
      poorOralHygiene: "Poor oral hygiene.",
      dentalExamination: "A dental examination is necessary to determine the cause of sensitivity followed by appropriate treatment.",
      treatment: "Treatment for sensitive teeth:",
      fillingDecayedTeeth: "Filling decayed teeth.",
      softToothbrush: "Brushing with a soft toothbrush.",
      fluoridatedToothpaste: "Using a fluoridated toothpaste for sensitive teeth which can be directly spread over the affected areas and left on for 15 minutes followed by rinsing.",
      fluorideRinse: "Using a fluoride rinse.",
      nightGuard: "Wearing a night guard to alleviate symptoms of tooth grinding.",
      goodOralHygiene: "Good oral hygiene to reduce plaque build up and tissue irritation.",
      regularCheckups: "Regular dental check ups."
    },
    ru: {
      sensitiveTeeth: "Чувствительные зубы",
      introduction: "Чувствительность зубов — это болезненная реакция после воздействия на зубы горячих, холодных, сладких или кислых раздражителей.",
      dealingWithSensitiveTeeth: "Как справляться с чувствительными зубами",
      causes: "Причины чувствительных зубов:",
      toothDecay: "Кариес, который подвергает зуб бактериям.",
      brushingTooHard: "Слишком сильная чистка зубов, вызывающая стирание эмали и обнажение более чувствительного слоя дентина.",
      gumRecession: "Отступление десен.",
      grindingTeeth: "Скрежетание зубами.",
      poorOralHygiene: "Плохая гигиена полости рта.",
      dentalExamination: "Необходима стоматологическая проверка, чтобы определить причину чувствительности и провести соответствующее лечение.",
      treatment: "Лечение чувствительных зубов:",
      fillingDecayedTeeth: "Пломбирование кариозных зубов.",
      softToothbrush: "Чистка зубов мягкой зубной щеткой.",
      fluoridatedToothpaste: "Использование фторсодержащей зубной пасты для чувствительных зубов, которую можно прямо нанести на пораженные участки и оставить на 15 минут, а затем прополоскать.",
      fluorideRinse: "Использование фтористого ополаскивателя.",
      nightGuard: "Ношение ночной каппы для облегчения симптомов скрежетания зубами.",
      goodOralHygiene: "Хорошая гигиена полости рта для уменьшения накопления налета и раздражения тканей.",
      regularCheckups: "Регулярные стоматологические осмотры."
    }
  };
  
  
  return (
    <Container fluid className="py-5">
      <Row className="justify-content-center align-items-center text-center" style={{ backgroundColor: '#3c1a6f', color: '#fff' }}>
        <Col md={6}>
          <h1 className="display-4">{translations[lang].sensitiveTeeth}</h1>
          <p style={{ fontSize: "20px" }}>{translations[lang].introduction}</p>
        </Col>
        <Col md={4}>
          <Card className="border-0">
            <Card.Img
              src="/images/sensitiveTeeth.webp"
              alt="sensitive teeth"
              className="rounded"
            />
          </Card>
        </Col>
      </Row>

      <Row className="py-5 mx-5" style={{backgroundColor:`${darkMode ? "#121212" : ""}`}}>
        <h1 style={{ fontWeight: "600", fontSize: "30px" }}>{translations[lang].dealingWithSensitiveTeeth}</h1><br /><br />
        <p style={{ color: "#6F3D85", fontSize: "20px", fontWeight: "600" }}>
          {translations[lang].introduction}
        </p>
        <br />
        <br />
        
        <h2>{translations[lang].causes}</h2>

        <ul style={{ listStyleType: "none" }}>
          <li>&#x25B6; {translations[lang].toothDecay}</li> <br />
          <li>&#x25B6; {translations[lang].brushingTooHard}</li><br />
          <li>&#x25B6; {translations[lang].gumRecession}</li><br />
          <li>&#x25B6; {translations[lang].grindingTeeth}</li><br />
          <li>&#x25B6; {translations[lang].poorOralHygiene}</li><br />
        </ul>
        <br />
        <p>{translations[lang].dentalExamination}</p>
        <h2>{translations[lang].treatment}</h2>
        <ul style={{ listStyleType: "none" }}>
          <li>&#x25B6; {translations[lang].fillingDecayedTeeth}</li><br />
          <li>&#x25B6; {translations[lang].softToothbrush}</li><br />
          <li>&#x25B6; {translations[lang].fluoridatedToothpaste}</li><br />
          <li>&#x25B6; {translations[lang].fluorideRinse}</li><br />
          <li>&#x25B6; {translations[lang].nightGuard}</li><br />
          <li>&#x25B6; {translations[lang].goodOralHygiene}</li><br />
          <li>&#x25B6; {translations[lang].regularCheckups}</li><br />
        </ul>
      </Row>
    </Container>
  );
}

export default SentitiveTeeth;
