import React, { useContext } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { LanguageContext } from '../../../context/LanguageContext';

function Brushing() {
    const { lang,darkMode } = useContext(LanguageContext);

    const translationss = {
        en: {
            title: "Brushing Advice",
            intro: "Brushing with a fluoridated toothpaste is the best way to care for your teeth and gums.",
            manualElectricTitle: "Manual and Electric Toothbrushing",
            manualElectricDesc: "The mechanical action of brushing removes soft bacterial plaque from your teeth while fluoride helps to strengthen the outer layer of enamel against bacteria that causes cavities.",
            replaceBrush: "It is recommended to use a soft bristled toothbrush with gentle pressure and brushes should be replaced about every 3 months or when you notice the bristles are splayed.",
            effectiveness: "Both manual and electric toothbrushes are effective at cleaning your teeth; however, studies have shown electric toothbrushing to be more efficient. Each requires specific techniques in order to be effective. Both require a pea-sized amount of toothpaste, and it’s important to brush each tooth on both the tongue and the cheek sides. Use a system to ensure that each tooth is brushed; ideally, start at the very back and work your way along the arch before switching to the other side. Once finished with both sides of that arch, switch to the other arch.",
            manual: "Manual Toothbrushing:",
            manualStep1: "Point the bristles at a 45° angle towards the gums.",
            manualStep2: "Gently agitate the bristles to remove plaque.",
            manualStep3: "Sweep the bristles toward the chewing surface.",
            manualStep4: "Move the toothbrush to the next tooth and repeat the sequence.",
            manualStep5: "Once all the sides of the teeth are brushed, don’t forget to brush the chewing surfaces.",
            electric: "Electric Toothbrushing:",
            electricStep1: "Place the toothbrush so bristles engage the back side of the tooth.",
            electricStep2: "Move the angle to allow engagement of the flat side.",
            electricStep3: "Ensure the front-facing side is brushed.",
            electricStep4: "Adjust the angle again to ensure the front-facing side of the tooth is brushed.",
            electricStep5: "Move to the next tooth.",
            electricStep6: "Once all the sides of the teeth are brushed, don’t forget to brush the chewing surfaces.",
            electricStep7: "It’s especially important to use gentle pressure to avoid damage to the gums, but the bristles should still be positioned to sweep along the gumline."
        },
        az: {
            title: "Diş Fırçalama Məsləhətləri",
            intro: "Flüorlu diş pastası ilə fırçalamaq dişlərinizə və diş ətlərinizə qulluq etməyin ən yaxşı yoludur.",
            manualElectricTitle: "Əl və Elektrik Diş Fırçalama",
            manualElectricDesc: "Fırçalama zamanı yaranan mexaniki təsir dişlərinizdəki yumşaq bakterial ərpi təmizləyir, flüorid isə emal qatını çürüməyə səbəb olan bakteriyalara qarşı möhkəmləndirir.",
            replaceBrush: "Yumşaq tüklü diş fırçasından istifadə və fırçaya yumşaq təzyiq tətbiq etmək tövsiyə olunur. Fırçalar təxminən hər 3 aydan bir və ya tüklərin yayılmağa başladığını gördükdə dəyişdirilməlidir.",
            effectiveness: "Həm əl, həm də elektrik diş fırçaları dişlərinizi təmizləmək üçün təsirlidir; lakin araşdırmalar elektrik diş fırçalarının daha səmərəli olduğunu göstərmişdir. Hər biri effektiv olmaq üçün xüsusi texnikalar tələb edir. Hər ikisi üçün noxud ölçüsündə diş pastası istifadə edilməlidir və hər bir dişin həm dil, həm də yanaq tərəfindən fırçalanması vacibdir. Hər dişin fırçalandığından əmin olmaq üçün bir sistemdən istifadə edin; ideal olaraq ən arxadakı dişdən başlayın və tağın boyunca irəliləyin, sonra digər tərəfə keçin. Həmin tağın hər iki tərəfini bitirdikdən sonra digər tağa keçin.",
            manual: "Əl ilə Diş Fırçalama:",
            manualStep1: "Fırçanın tüklərini diş ətinə 45° bucaq altında yönəldin.",
            manualStep2: "Ərpi təmizləmək üçün tükləri yumşaq şəkildə hərəkət etdirin.",
            manualStep3: "Tükləri çeynəmə səthinə doğru süpürün.",
            manualStep4: "Fırçanı növbəti dişə keçirin və prosesi təkrarlayın.",
            manualStep5: "Bütün dişlərin səthləri fırçalandıqdan sonra çeynəmə səthlərini unutmayın.",
            electric: "Elektrik Diş Fırçalama:",
            electricStep1: "fırçanı elə yerləşdirin ki, tüklər dişin arxa tərəfinə toxunsun.",
            electricStep2: "Bucağı dəyişdirərək düz tərəfə toxunmasını təmin edin.",
            electricStep3: "Ön tərəfin də fırçalandığından əmin olun.",
            electricStep4: "Bucağı yenidən düzəldin ki, ön tərəf də tam fırçalansın.",
            electricStep5: "Növbəti dişə keçin.",
            electricStep6: "Bütün diş səthləri fırçalandıqdan sonra çeynəmə səthlərini unutmayın.",
            electricStep7: "Diş ətlərinə zərər verməmək üçün yumşaq təzyiqdən istifadə etmək xüsusilə vacibdir, lakin tüklər hələ də diş əti xətti boyunca süpürmə mövqeyində olmalıdır."
        },
        ru: {
            title: "Рекомендации по чистке зубов",
            intro: "Чистка зубов с использованием фторированной зубной пасты — это лучший способ ухода за зубами и деснами.",
            manualElectricTitle: "Чистка зубов вручную и электрической щеткой",
            manualElectricDesc: "Механическое воздействие при чистке удаляет мягкий бактериальный налет с зубов, в то время как фтор укрепляет внешний слой эмали, защищая его от бактерий, вызывающих кариес.",
            replaceBrush: "Рекомендуется использовать щетку с мягкой щетиной и наносить легкое давление. Щетки следует менять примерно каждые 3 месяца или, если заметите, что щетинки распушились.",
            effectiveness: "И ручная, и электрическая зубные щетки эффективны для чистки зубов. Однако исследования показали, что электрическая чистка более эффективна. Каждая из них требует определенных техник для достижения максимального результата. Для обеих нужно использовать количество зубной пасты размером с горошину. Важно чистить каждую сторону зуба — как языковую, так и щечную. Используйте методичную систему, чтобы убедиться, что каждый зуб был почищен. Идеально начинать с самого заднего зуба и двигаться вдоль дуги, прежде чем перейти на другую сторону. Закончив одну дугу, переходите к следующей.",
            manual: "Чистка вручную:",
            manualStep1: "Расположите щетинки под углом 45° к деснам.",
            manualStep2: "Осторожно встряхивайте щетку для удаления налета.",
            manualStep3: "Ведите щетинки в направлении к жевательной поверхности.",
            manualStep4: "Перейдите к следующему зубу и повторите последовательность.",
            manualStep5: "После того как все стороны зубов будут почищены, не забудьте почистить жевательные поверхности.",
            electric: "Чистка электрической зубной щеткой:",
            electricStep1: "Расположите щетку так, чтобы щетинки захватывали заднюю сторону зуба.",
            electricStep2: "Измените угол, чтобы обеспечить чистку плоской стороны.",
            electricStep3: "Убедитесь, что передняя сторона зуба также почищена.",
            electricStep4: "Снова измените угол, чтобы чистить переднюю сторону зуба.",
            electricStep5: "Перейдите к следующему зубу.",
            electricStep6: "После того как все стороны зубов будут почищены, не забудьте о жевательных поверхностях.",
            electricStep7: "Особенно важно использовать легкое давление, чтобы не повредить десны, но щетинки должны быть направлены вдоль линии десен."
        }
        
    }
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
                    <h1 className="display-4">{translationss[lang].title}</h1>
                    <p>{translationss[lang].intro}</p>

                </Col>
                <Col md={4}>
                    <Card className="border-0">
                        <Card.Img
                            src="/images/brushing.webp"
                            alt="Person brushing teeth"
                            className="rounded"
                        />
                    </Card>
                </Col>
            </Row>

            <Row className="py-5 mx-5" style={{backgroundColor:`${darkMode ? "#121212" : "white"}`}}>

                <h1 style={{ fontWeight: "600", fontSize: "50px" }}>{translationss[lang].manualElectricTitle}</h1>
                <p style={{ color: "#6F3D85", fontSize: "23px", fontWeight: "600" }}>
                {translationss[lang].manualElectricDesc}
                </p>
                <br />
                <p style={{ color: `${darkMode ? "white" : "#54595F"}`, fontSize: "20px" }}>{translationss[lang].replaceBrush}</p>
                <br />
                <p style={{ color: `${darkMode ? "white" : "#54595F"}`, fontSize: "20px" }}>{translationss[lang].effectiveness}</p>
                <div style={containerStyle}>
                    <div style={instructionCardStyle}>
                        <h3>{translationss[lang].manual}</h3>
                        <ul>
                            <li>{translationss[lang].manualStep1}</li>
                            <li>{translationss[lang].manualStep2}</li>
                            <li>{translationss[lang].manualStep3}</li>
                            <li>{translationss[lang].manualStep4}</li>
                            <li>{translationss[lang].manualStep5}</li>
                            
                        </ul>
                    </div>
                    <div style={instructionCardStyle}>
                        <h3>{translationss[lang].electric}</h3>
                        <ul>
                            <li>{translationss[lang].electricStep1}</li>
                            <li>{translationss[lang].electricStep2}</li>
                            <li>{translationss[lang].electricStep3}</li>
                            <li>{translationss[lang].electricStep4}</li>
                            <li>{translationss[lang].electricStep5}</li>
                            <li>{translationss[lang].electricStep6}</li>
                            <li>{translationss[lang].electricStep7}</li>
                            
                        </ul>
                    </div>
                </div>
            </Row>
        </Container>
    );
}

export default Brushing;
