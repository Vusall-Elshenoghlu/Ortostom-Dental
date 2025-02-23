import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LanguageContext } from '../../../context/LanguageContext';

function WisdomTeeth() {
  const { lang } = useContext(LanguageContext)
  const translations = {
    az: {
      wisdomTeeth: "Ağıl dişləri",
      wisdomTeethDescription: "Ağıl dişləri 17-25 yaş arasında çıxan dişlərə deyilir, yəni insanın yetkinləşdiyi dövrdə Ağılda görünür.",
      adviceOnWisdomTeeth: "Ağıl dişləri haqqında məsləhətlər",
      wisdomTeethProblematic: "Ağıl dişləri ağılda ən son çıxan dişlərdir və çənədə yer olmaması səbəbindən ön dişlərlə sıxışaraq ‘impakt’ vəziyyətinə gələ bilər.",
      wisdomTeethRemovalReasons: "Bu, problem yarada bilər və bu dişin aşağıdakı səbəblərdən dolayı çıxarılması lazım ola bilər:",
      decay: "Çürük",
      decayDescription: "Plaqanın dişlər arasında çətinliklə təmizlənə bilən yerlərdə yığılması çürük yaranmasına səbəb ola bilər.",
      pericoronitis: "Perikoronit",
      pericoronitisDescription: "Bu, çıxan dişi əhatə edən diş əti infeksiyasının səbəb olduğu ağrılı vəziyyətdir.",
      periodontal: "Periodontal xəstəlik",
      periodontalDescription: "Üçüncü moların ətrafında diş fırçalama və diş ipi istifadə etmək çətin olduğu üçün yemək və plaqa bu sahədə toplanır. Bu, diş əti xəstəliyinə səbəb olur və nəhayət diş itkisinə gətirib çıxara bilər.",
      orthodontics: "Ortodontiya",
      orthodonticsDescription: "Ortodontik müalicə bitdikdən sonra ağıl dişlərinin çıxarılması tövsiyə edilir, çünki bu, dişlərin təzyiqə görə hərəkət etməsinin qarşısını alır.",
      cyst: "Sist",
      cystDescription: "Ağıl dişlərinin saxlanılması bəzən sistanın yaranmasına səbəb ola bilər. Bu vəziyyət nadir olsa da, müntəzəm rentgen çəkilişi ilə izlənilməlidir.",
      wisdomTeethSurgery: "Hər hansı bir əməliyyatda olduğu kimi, yaranan komplikasiyaları tam başa düşmək vacibdir. Qanama, ofisdən çıxdıqdan sonra sıx şəkildə sıxmaq və təzyiq tətbiq etməyə davam etmək lazımdır. Qanama ofisdən çıxdıqdan sonra dayandırılacaq, amma evdə təzyiq tətbiq etmək davam etdirilməlidir.",
      wisdomTeethHealing: "Ümumiyyətlə, ağıl dişləri nə qədər asan çıxarılırsa, komplikasiyalar bir o qədər az olur. Ümumi sağlamlıq və siqaret çəkmək, spirtli içki istehlakı kimi vərdişlər çıxarılma sahəsinin sağalmasına da təsir edə bilər."
    },
    en: {
      wisdomTeeth: "Wisdom Teeth",
      wisdomTeethDescription: "Wisdom teeth are so called because they appear in the mouth between the ages of 17-25 years when a person has matured.",
      adviceOnWisdomTeeth: "Advice on Wisdom Teeth",
      wisdomTeethProblematic: "Wisdom Teeth are the very last teeth in the mouth to erupt and due to the lack of space in the jaw can become lodged or 'impacted' against the tooth in front.",
      wisdomTeethRemovalReasons: "This can be problematic and the offending tooth may have to be removed for the following reasons:",
      decay: "Decay",
      decayDescription: "Plaque can easily gather in the inaccessible area between the teeth leading to tooth decay.",
      pericoronitis: "Pericoronitis",
      pericoronitisDescription: "This is a painful condition caused by an infection in the gum surrounding the erupting tooth.",
      periodontal: "Periodontal",
      periodontalDescription: "Due to difficulty in brushing and flossing around the third molar, food and plaque accumulate in this area. This can lead to gum disease, which can eventually cause the loss of not only the wisdom, but also the adjacent tooth.",
      orthodontics: "Orthodontics",
      orthodonticsDescription: "It is recommended that wisdom teeth be removed after orthodontic treatment, in order to prevent further shifting of the teeth due to pressure.",
      cyst: "Cyst",
      cystDescription: "The retention of wisdom teeth can sometimes lead to cyst formation. Although the condition is uncommon it should be monitored by means of regular X-rays.",
      wisdomTeethSurgery: "As with any surgery, it is important to fully understand the complications that may arise. While bleeding is controlled prior to you leaving the office you must continue to clamp down tightly on the packing, applying pressure on the area.",
      wisdomTeethHealing: "Generally, the easier it is to remove wisdom teeth the lesser the complications. Overall, general health and habits such as smoking and excessive alcohol consumption can also have impact on the healing of an extraction site."
    },
    ru: {
      wisdomTeeth: "Зубы мудрости",
      wisdomTeethDescription: "Зубы мудрости так называются, потому что они появляются в рту в возрасте от 17 до 25 лет, когда человек уже становится зрелым.",
      adviceOnWisdomTeeth: "Советы по поводу зубов мудрости",
      wisdomTeethProblematic: "Зубы мудрости — это последние зубы, которые появляются в рту, и из-за нехватки места в челюсти они могут застрять или быть 'врезанными' в зуб впереди.",
      wisdomTeethRemovalReasons: "Это может быть проблематичным, и этот зуб может потребоваться удалить по следующим причинам:",
      decay: "Кариес",
      decayDescription: "Плака может легко скапливаться в недоступных местах между зубами, что приводит к кариесу.",
      pericoronitis: "Перикоронит",
      pericoronitisDescription: "Это болезненное состояние, вызванное инфекцией в десне вокруг прорезывающегося зуба.",
      periodontal: "Периодонтит",
      periodontalDescription: "Из-за трудности чистки и использования зубной нити вокруг третьего моляра, пища и плёнка скапливаются в этой области. Это может привести к заболеванию десен, что в конечном итоге приведет к потере не только зуба мудрости, но и соседнего зуба.",
      orthodontics: "Ортодонтия",
      orthodonticsDescription: "Рекомендуется удалять зубы мудрости после ортодонтического лечения, чтобы предотвратить дальнейшее смещение зубов из-за давления.",
      cyst: "Киста",
      cystDescription: "Задержка зубов мудрости иногда может привести к образованию кисты. Хотя это состояние встречается редко, его следует контролировать с помощью регулярных рентгеновских снимков.",
      wisdomTeethSurgery: "Как и в случае с любой операцией, важно полностью понять возможные осложнения. Хотя кровотечение контролируется до того, как вы покинете офис, вы должны продолжать плотно сжимать повязку, прикладывая давление к области.",
      wisdomTeethHealing: "Как правило, чем проще удалить зубы мудрости, тем меньше осложнений. В целом, общее состояние здоровья и такие привычки, как курение и чрезмерное потребление алкоголя, также могут повлиять на заживление места удаленной зуба."
    }
  };
  return (
    <Container fluid className="py-5">
      <Row className="justify-content-center align-items-center text-center" style={{ backgroundColor: '#3c1a6f', color: '#fff' }}>
        <Col md={6}>
          <h1 className="display-4">{translations[lang].wisdomTeeth}</h1>
          <p style={{ fontSize: "20px" }}>{translations[lang].wisdomTeethDescription}</p>
        </Col>
        <Col md={4}>
          <Card className="border-0">
            <Card.Img
              src="/images/wisdomTeeth.jpg"
              alt="Wisdom teeth"
              className="rounded"
            />
          </Card>
        </Col>
      </Row>

      <Row className="py-5 bg-light text-dark mx-5">
        <h1 style={{ fontWeight: "600", fontSize: "30px" }}>{translations[lang].adviceOnWisdomTeeth}</h1><br /><br />
        <p style={{ color: "#6F3D85", fontSize: "20px", fontWeight: "600" }}>
          {translations[lang].wisdomTeethProblematic}
        </p>
        <br />
        <br />
        <p style={{ fontSize: "19px", color: "#9A9DA0" }}>{translations[lang].wisdomTeethRemovalReasons}</p>
        <br />

        <ul style={{ listStyleType: "none" }}>
          <li>&#x25B6; <b>{translations[lang].decay}:</b> {translations[lang].decayDescription}</li><br />
          <li>&#x25B6; <b>{translations[lang].pericoronitis}:</b> {translations[lang].pericoronitisDescription}</li><br />
          <li>&#x25B6; <b>{translations[lang].periodontal}:</b> {translations[lang].periodontalDescription}</li><br />
          <li>&#x25B6; <b>{translations[lang].orthodontics}:</b> {translations[lang].orthodonticsDescription}</li><br />
          <li>&#x25B6; <b>{translations[lang].cyst}:</b> {translations[lang].cystDescription}</li><br />
        </ul>
        <p>{translations[lang].wisdomTeethSurgery}</p>
        <p>{translations[lang].wisdomTeethHealing}</p>
      </Row>
    </Container>
  );
}

export default WisdomTeeth;
