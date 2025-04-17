import React, { useContext } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { LanguageContext } from '../../../context/LanguageContext';

function GumDisease() {
    const { lang,darkMode } = useContext(LanguageContext);

    const translations = {
        az: {
            gumDiseaseTitle: "Diş Əti Xəstəliyi",
            gumDiseaseDescription: "Diş əti xəstəliyi yalnız ağız sağlamlığına zərər vermir, həm də tədqiqatçılar bunu müxtəlif sistem xəstəlikləri ilə əlaqələndiriblər, o cümlədən ürək xəstəliyi, insult və hamiləlik problemləri.",
            preventableDiseaseTitle: "Asanlıqla qarşısı alına bilən xəstəlik",
            gumDiseaseStats: "Periodontal xəstəlik, Şimali Amerikanın böyüklər əhalisinin 70%-dən çoxunu təsir edir. Bu xəstəliyin başlanğıcında diş ətləri həssaslaşır və yüngül qanama meydana gəlir.",
            gumDiseaseImpact: "Diş əti xəstəliyi yalnız ağız sağlamlığına zərər vermir, həm də tədqiqatçılar bunu müxtəlif sistem xəstəlikləri ilə əlaqələndiriblər, o cümlədən ürək xəstəliyi, insult və hamiləlik problemləri.",
            commonForms: "Ən yaygın periodontal xəstəlik formaları bunlardır:",
            gingivitisTitle: "Qingivit",
            gingivitisDescription: "Bu başlanğıc mərhələdir, burada diş ətləri həssasdır və asanlıqla qanamağa başlayır. Düzgün evdə və peşəkar qayğı ilə asanlıqla nəzarət edilə bilər.",
            periodontitisTitle: "Periodontit",
            periodontitisDescription: "Diş ətləri dişlərdən ayrılaraq 'cib' yaradır. Bu 'cibləri' təmizləmək çox çətindir, çünki onlar diş əti səviyyəsindən aşağıdır və bakterial zəhərlər dişi dəstəkləyən sümük və əlaqələndirici toxumaları dağıtmağa başlayır.",
            gumDiseaseCauses: "Periodontal xəstəliyin əsas səbəbi düzgün olmayan ağız gigiyenası nəticəsində plazma əmələ gəlməsidir (diş fırçalama və ip istifadə etmə), amma aşağıdakı amillər də xəstəliyə töhfə verə bilər:",
            smoking: "Siqaret çəkmə",
            poorNutrition: "Zəif qidalanma",
            stress: "Stres",
            hormonalChanges: "Yeniyetməlik və hamiləlik dövründə hormonal dəyişikliklər",
            medicationSideEffects: "Dərmanların diş ətinə təsir edən yan təsirləri",
            diabetes: "Diabet",
            genetics: "Genetik",
            earlySymptoms: "Təəssüf ki, periodontal xəstəliyin başlanğıc mərhələsində çox az simptom mövcuddur və diş həkimi və ya gigiyenist adətən bu vəziyyəti diş həkimi ofisində diaqnoz edir.",
            treatmentOptions: "Müalicə cərrahiyyə xarici və cərrahiyyə üsulundan ibarət ola bilər. Əgər cibələr diş alətləri ilə təmizlənə bilirsə, dərin çöküntülər kök səthlərindən təmizlənir.",
            tissueGraft: "Ciddi diş əti geriləmələri halında toxuma köçürməsi tövsiyə oluna bilər."
        },
        en: {
            gumDiseaseTitle: "Gum Disease",
            gumDiseaseDescription: "Gum disease not only harms your oral health, but researchers have linked it to several systemic diseases, including heart disease, stroke, and pregnancy complications.",
            preventableDiseaseTitle: "Easily Preventable Disease",
            gumDiseaseStats: "Periodontal disease affects more than 70% of adults in North America. In the early stages of this disease, the gums become sensitive and may bleed slightly.",
            gumDiseaseImpact: "Gum disease harms more than just your oral health. Researchers have linked it to several systemic diseases, including heart disease, stroke, and pregnancy complications.",
            commonForms: "The most common forms of periodontal disease are:",
            gingivitisTitle: "Gingivitis",
            gingivitisDescription: "This is the early stage, where the gums become sensitive and bleed easily. It can be controlled with proper home care and professional treatment.",
            periodontitisTitle: "Periodontitis",
            periodontitisDescription: "The gums begin to separate from the teeth, creating 'pockets.' These 'pockets' are difficult to clean, as they are below the gum line, and bacterial toxins begin to break down the bone and supporting tissue.",
            gumDiseaseCauses: "The main cause of periodontal disease is the buildup of plaque caused by improper oral hygiene (not brushing and flossing), but the following factors can also contribute to the disease:",
            smoking: "Smoking",
            poorNutrition: "Poor nutrition",
            stress: "Stress",
            hormonalChanges: "Hormonal changes during puberty and pregnancy",
            medicationSideEffects: "Side effects of certain medications affecting the gums",
            diabetes: "Diabetes",
            genetics: "Genetics",
            earlySymptoms: "Unfortunately, in the early stages of periodontal disease, symptoms are minimal, and your dentist or hygienist will typically diagnose this condition in their office.",
            treatmentOptions: "Treatment can involve both non-surgical and surgical methods. If pockets can be cleaned with dental tools, deep scaling may be done to remove bacteria from the root surface.",
            tissueGraft: "In cases of severe gum recession, tissue grafting may be recommended."
        },
        ru: {
            gumDiseaseTitle: "Заболевание десен",
            gumDiseaseDescription: "Заболевание десен не только вредит вашему оральному здоровью, но и связано с несколькими системными заболеваниями, включая заболевания сердца, инсульт и осложнения при беременности.",
            preventableDiseaseTitle: "Легко предотвращаемое заболевание",
            gumDiseaseStats: "Периодонтальное заболевание затрагивает более 70% взрослого населения Северной Америки. На ранних стадиях этого заболевания десны становятся чувствительными и могут немного кровоточить.",
            gumDiseaseImpact: "Заболевание десен вредит не только вашему оральному здоровью, но также связано с несколькими системными заболеваниями, включая заболевания сердца, инсульт и осложнения при беременности.",
            commonForms: "Наиболее распространенные формы периодонтальных заболеваний:",
            gingivitisTitle: "Гингивит",
            gingivitisDescription: "Это ранняя стадия, когда десны становятся чувствительными и начинают легко кровоточить. Это можно контролировать с помощью правильного ухода за полостью рта и профессионального лечения.",
            periodontitisTitle: "Периодонтит",
            periodontitisDescription: "Десны начинают отдаляться от зубов, создавая «карманы». Эти «карманы» трудно очищать, так как они находятся ниже уровня десен, и бактериальные токсины начинают разрушать кости и поддерживающие ткани.",
            gumDiseaseCauses: "Основной причиной заболевания десен является образование налета, вызванного неправильной гигиеной полости рта (недостаточное очищение зубов и использование зубной нити), но следующие факторы также могут способствовать заболеванию:",
            smoking: "Курение",
            poorNutrition: "Плохое питание",
            stress: "Стресс",
            hormonalChanges: "Гормональные изменения в подростковом возрасте и беременности",
            medicationSideEffects: "Побочные эффекты некоторых лекарств, влияющих на десны",
            diabetes: "Диабет",
            genetics: "Генетика",
            earlySymptoms: "К сожалению, на ранних стадиях заболевания десен симптомы минимальны, и обычно ваш стоматолог или гигиенист диагностирует это состояние на приеме.",
            treatmentOptions: "Лечение может включать как нехирургические, так и хирургические методы. Если карманы можно очистить с помощью стоматологических инструментов, может быть выполнено глубокое очищение для удаления бактерий с поверхности корня.",
            tissueGraft: "В случаях серьезного сокращения десен может быть рекомендована пересадка ткани."
        }
    };


    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '20px',
    };

    const instructionCardStyle = {
        width: '45%',
        padding: '20px',
        backgroundColor: `${darkMode ? "#121212" : "#f9f9f9"}`,
        borderRadius: '10px',
        boxShadow: `${darkMode ? "0 4px 8px rgba(167, 162, 162, 0.1)" : "0 4px 8px rgba(0, 0, 0, 0.1)"}`,
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
    };

    return (
        <Container fluid className="py-5" >
            <Row className="justify-content-center align-items-center text-center" style={{ backgroundColor: '#3c1a6f', color: '#fff' }}>
                <Col md={6}>
                    <h1 className="display-4">{translations[lang].gumDiseaseTitle}</h1>
                    <p>{translations[lang].gumDiseaseDescription}</p>
                </Col>
                <Col md={4}>
                    <Card className="border-0">
                        <Card.Img
                            src="/images/gumDisease.webp"
                            alt="Gum"
                            className="rounded"
                        />
                    </Card>
                </Col>
            </Row>

            <Row className="py-5 mx-5" style={{backgroundColor:`${darkMode ? "#121212" : ""}`}}>
                <h1 style={{ fontWeight: "600", fontSize: "50px" }}>{translations[lang].preventableDiseaseTitle}</h1>
                <p style={{ color: "#6F3D85", fontSize: "23px", fontWeight: "600" }}>
                    {translations[lang].gumDiseaseStats}
                </p>
                <br />
                <p style={{ color: "#54595F", fontSize: "20px" }}>{translations[lang].gumDiseaseImpact}</p>
                <br />
                <p style={{ color: "#54595F", fontSize: "20px" }}>{translations[lang].commonForms}</p>
                <div style={containerStyle}>
                    <div style={instructionCardStyle}>
                        <h3>{translations[lang].gingivitisTitle}</h3>
                        <p>{translations[lang].gingivitisDescription}</p>
                    </div>
                    <div style={instructionCardStyle}>
                        <h3>{translations[lang].periodontitisTitle}</h3>
                        <p>{translations[lang].periodontitisDescription}</p>
                    </div>
                </div>
                <p>{translations[lang].gumDiseaseCauses}</p>
                <ul style={{ listStyleType: "none" }}>
                    <li>&#x25B6; {translations[lang].smoking}</li> <br />
                    <li>&#x25B6; {translations[lang].poorNutrition}</li><br />
                    <li>&#x25B6; {translations[lang].stress}</li><br />
                    <li>&#x25B6; {translations[lang].hormonalChanges}</li><br />
                    <li>&#x25B6; {translations[lang].medicationSideEffects}</li> <br />
                    <li>&#x25B6; {translations[lang].diabetes}</li><br />
                    <li>&#x25B6; {translations[lang].genetics}</li><br />
                </ul>
                <p>{translations[lang].earlySymptoms}</p><br />
                <p>{translations[lang].treatmentOptions}</p><br />
                <p>{translations[lang].tissueGraft}</p>
            </Row>
        </Container>
    );
}

export default GumDisease;
