import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LanguageContext } from '../../../context/LanguageContext';

function Tobacco() {
  const {lang,darkMode} = useContext(LanguageContext)
  const translations = {
    az: {
      tobacco: "Tütün",
      tobaccoDescription: "Çoxumuz tütün məhsulları, məsələn siqaret, siqar, tütün borusu və tütünsüz siqaretin ürək və ağciyər xəstəlikləri ilə əlaqəsini bilirik. Lakin bu məhsulların ağız sağlamlığına mənfi təsirləri daha az məlumdur.",
      smokingAndDentalHealth: "Siqaret çəkmək və diş sağlamlığı",
      smokingDescription: "Siqaret çəkmə ilə əlaqəli bəzi problemlər arasında pis nəfəs, dişlərin və dilin ləkələnməsi, və dad hissiyatının azalması var. Daha ciddi problemlərə diş əti xəstəliyi və ağız xərçəngi daxildir.",
      smokingGumDisease: "Siqaret çəkmək diş əti xəstəliyinin inkişafında mühüm amildir. Siqaret çəkənlər dişlərdə tartar (bərk çöküntü) yığılmasına daha çox meyllidirlər. Bu, diş əti toxumasının infeksiyaya məruz qalmasına və dişlərin ətrafında ciblərin əmələ gəlməsinə səbəb olur. Bu cibdəki bakteriyalar toxuma və sümüyü məhv edərək diş əti geri çəkilməsi, dişlərin aşkar olması, infeksiya və nəticədə diş itkilərinə səbəb olur.",
      smokingOralCancer: "Siqaret və tütünsüz siqaretin kimyəvi maddələri ağız toxumalarını zədələyir və ağız xərçənginə səbəb olur. Bu xəstəliyin ən tipik yerləri dilin tərəfləri və alt səthi, ağızın alt hissəsi, dodaqların və yanaqların tərəfləridir (ağız lezyonlarına baxın).",
      earlyDetection: "Ağız xərçənginin erkən aşkar edilməsi sağ qalma nisbətlərini xeyli artırır, eyni zamanda diş əti xəstəliyinin erkən aşkar edilməsi diş itkilərini önləyə bilər. Bu, müntəzəm müayinələrin bu dağıdıcı xəstəliklərin diaqnozu və müalicəsində vacib bir vasitə olduğunu vurğulayır."
    },
    en: {
      tobacco: "Tobacco",
      tobaccoDescription: "Most of us are aware of the connection between heart and lung diseases and tobacco products such as cigarettes, cigars, pipes, and smokeless tobacco. Lesser known are the adverse effects of these products on oral health.",
      smokingAndDentalHealth: "Smoking and Dental Health",
      smokingDescription: "Among some of the associated problems with smoking are bad breath, stained teeth and tongue, and diminished taste sensation. More serious problems include gum disease and oral cancer.",
      smokingGumDisease: "Smoking is a significant factor in the development of gum disease. Smokers are more susceptible to tartar (hard deposit) build-up on the teeth. This predisposes the gum tissue to infection and the formation of pockets around the teeth. Bacteria residing in these pockets destroy the tissue and bone resulting in gum recession, tooth exposure and infection, and ultimately tooth loss.",
      smokingOralCancer: "Chemicals in cigarettes and smokeless tobacco damage the oral tissue resulting in oral cancer. The most typical locations of this disease include the sides and under-surface of the tongue, floor of the mouth, and sides of the lips and cheeks (see oral lesions).",
      earlyDetection: "Early detection of oral cancer vastly improves survival rates while early detection of gum disease can prevent tooth loss. This emphasizes the importance of regular examination as an important tool in the diagnosis and treatment of these devastating diseases."
    },
    ru: {
      tobacco: "Табак",
      tobaccoDescription: "Большинство из нас осведомлены о связи между заболеваниями сердца и легких и табачными изделиями, такими как сигареты, сигары, трубки и бездымный табак. Меньше известно о вредных последствиях этих продуктов для здоровья полости рта.",
      smokingAndDentalHealth: "Курение и здоровье полости рта",
      smokingDescription: "Среди проблем, связанных с курением, такие как неприятный запах изо рта, пятна на зубах и языке, и уменьшение вкусовых ощущений. Более серьезные проблемы включают заболевания десен и рак полости рта.",
      smokingGumDisease: "Курение является значительным фактором в развитии заболеваний десен. Курильщики более подвержены накоплению зубного камня (твердого отложения) на зубах. Это предрасполагает десневую ткань к инфекциям и образованию карманов вокруг зубов. Бактерии, обитающие в этих карманах, разрушают ткани и кости, что приводит к рецессии десен, оголению зубов и инфекции, а в конечном итоге и к потере зубов.",
      smokingOralCancer: "Химические вещества в сигаретах и бездымном табаке повреждают ткань полости рта, что приводит к раку полости рта. Наиболее типичные места для этого заболевания включают боковые поверхности и нижнюю часть языка, дно рта, а также стороны губ и щек (см. оральные поражения).",
      earlyDetection: "Раннее выявление рака полости рта значительно улучшает выживаемость, в то время как раннее выявление заболеваний десен может предотвратить потерю зубов. Это подчеркивает важность регулярных осмотров как важного инструмента для диагностики и лечения этих разрушительных заболеваний."
    }
  };

  return (
    <Container fluid className="py-5">
      <Row className="justify-content-center align-items-center text-center" style={{ backgroundColor: '#3c1a6f', color: '#fff' }}>
        <Col md={6}>
          <h1 className="display-4">{translations[lang].tobacco}</h1>
          <p style={{ fontSize: "20px" }}>{translations[lang].tobaccoDescription}</p>
        </Col>
        <Col md={4}>
          <Card className="border-0">
            <Card.Img
              src="/images/smoking.webp"
              alt="smoking"
              className="rounded"
            />
          </Card>
        </Col>
      </Row>

      <Row className="py-5 mx-5" style={{backgroundColor:`${darkMode ? "#121212" : ""}`}}>
        <h1 style={{ fontWeight: "600", fontSize: "30px" }}>{translations[lang].smokingAndDentalHealth}</h1><br /><br />
        <p style={{ color: "#6F3D85", fontSize: "20px", fontWeight: "600" }}>
          {translations[lang].smokingDescription}
        </p>
        <br />
        <br />
        <p>{translations[lang].smokingGumDisease}</p>
        <br />
        <p>{translations[lang].smokingOralCancer}</p>
        <br />
        <p>{translations[lang].earlyDetection}</p>
        <br />
      </Row>
    </Container>
  );
}

export default Tobacco;
