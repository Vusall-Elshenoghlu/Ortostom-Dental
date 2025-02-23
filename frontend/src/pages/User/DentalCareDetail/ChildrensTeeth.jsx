import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LanguageContext } from '../../../context/LanguageContext';

function ChildrensTeeth() {
  const { lang, } = useContext(LanguageContext);
  const translations = {
    az: {
      header:"Uşaqların Dişləri",
      head2:"Süd dişləri uzun müddətdir ki, sadəcə daha daimi dişlərin müvəqqəti bir xəbərçisi kimi qəbul edilir.",
      title: "Süd dişləri önəmlidir",
      par1:"Uşaq dişlərinin düzgün qayğısına onlara ağızda çıxmağa başladığı andan etibarən başlanmalıdır. İlk olaraq, dişləri 'parlatmaq' üçün nəmlənmiş üz örtüyü istifadə edilməli, lakin daha çox diş çıxmağa başladıqca, uşağın diş fırçası ən azı gündə iki dəfə yumşaq şəkildə istifadə olunmalıdır. Düzgün dozada verilən florid, diş minəsini daha güclü edir. Bir çox icmalarda sudan florid əlavə olunsa da, bu həmçinin hər peşəkar təmizləmədən sonra dişlərə tətbiq olunur.",
      subtitle: "Ön dişlər 6 yaşında dəyişir. Ancaq arxa süd dişləri 10-13 yaşa qədər dəyişmir.",
      description: "Süd dişləri çeynəmə, daimi dişlər üçün yer saxlama və çənənin normal inkişafına kömək edir.",
      thumbSucking: "Barmaq əmmə",
      thumb:"Bu vərdiş adətən 4 yaşa qədər yoxa çıxır. Bu vərdişin davam etməsi dişlərə və ətrafdakı sümüklərə zərərli təsir göstərə bilər. Üst dişlər irəli, alt dişlər isə geri itələnir, nəticədə üst və alt dişlər arasında boşluq yaranır ki, bu da çeynəmə, udma və danışıqda çətinliklərə səbəb olur. Barmaq sormanın qarşısını almaq üçün uşağın ağzına ağız içi cihaz yerləşdirilə bilər. Bu cihaz vərdişi bir neçə gün ərzində aradan qaldıra bilər.",
      nursingBottleCavities: "Süd şüşəsi kariyesi",
      nursing:"Bu ciddi bir kariyes formasıdır və çoxlu əzab verə bilər. Dişlərin yuxu zamanı uzun müddət süd, süni qida və ya şirəyə məruz qalması nəticəsində yaranır. Bunu asanlıqla qarşısını almaq olar, sadəcə gecə yatmazdan əvvəl körpəyə ilıq su dolu şüşə vermək kifayətdir.",
      eruptionOfTeeth: "Dişlərin çıxması",
      erup:"Bu, çox ağrılı bir vəziyyət ola bilər. Ağrını aptekdən əldə edilə bilən ağrıkəsici damcılarla azaltmaq olar. İçərisində dondurula bilən maye olan diş qaşıyıcıları çox faydalıdır.",
      dentalEmergencies: "Diş təcili yardımı",
      dental:"Uşağı daha da qorxutmamaq üçün sakit olun. Zədənin dərəcəsini qiymətləndirin:",
      dental1:" Diş ağrısı. Ərazini təmizləyin və diş ipi ilə təmizləyin, ağrıkəsicilər tətbiq edin və diş həkimi ilə əlaqə saxlayın.",
      dental2:" Şişlik. Soyuq kompres tətbiq edin.",
      dental3:" Kəsiklər və qaralmalar. Qanaxmanı dayandırmaq üçün güclü təzyiq tətbiq edin.",
      dental4:" Diş düşüb. Dişi süd içində saxlayın və dərhal ən yaxın diş həkiminə (ideal olaraq 30 dəqiqə içində) gedin.",
      grinding: "Diş qıcama (Bruksizm)",
      grind:" Yuxuda çiş etmə və barmaq sorma kimi, bir nəzəriyyə psixoloji bir komponenti əhatə edir. Əgər diş sıxma çoxdursa, gecə qoruyucu dişlik taxıla bilər.",
      orthodontics: "Ortodontiya",
      orto:"Bəzi diş sıxışmalarını həyatda çox erkən mərhələdə aşkar etmək mümkündür və bu mərhələdə başlanan müalicə, bəzi hallarda gələcəkdə baha başa gələn ortodontik müalicə ehtiyacını azalda və ya qarşısını ala bilər."
    },
    en: {
      header:"Children’s Teeth",
      head2:"Primary teeth have long been regarded as just a temporary precursor to the more permanent teeth.",
      title: "Primary teeth are important",
      subtitle: "The front teeth are replaced by the age of 6 years. However, the primary posterior teeth are not replaced by their counterparts until age 10 to 13 years.",
      par1:"Proper care of baby teeth should begin as soon as they start to appear in the mouth. At first, a moist face cloth should be used to “polish” the teeth, but as more teeth erupt, a child’s toothbrush should be used gently at least twice a day. Fluoride administered in the correct dosage makes enamel stronger. Although many communities have fluoride added to the water, it is also applied to teeth after every professional cleaning.",
      description: "Primary teeth are important for chewing, maintaining space for permanent teeth, and aiding jaw development.",
      thumbSucking: "Thumb sucking",
      thumb:"This habit usually disappears by the age of 4 years. The persistence of this habit can have a detrimental effect on the teeth and the surrounding bone. Upper teeth are pushed out, lower teeth pushed in, resulting in a gap between upper and lower teeth causing difficulty in chewing, swallowing, and speech. An oral appliance can be placed in the child’s mouth to prevent thumb sucking. This device can break the habit in a few days.",
      nursingBottleCavities: "Nursing bottle cavities",
      nursing:"This is a serious form of decay, which can cause a lot of suffering. It is caused by prolonged exposure of the teeth during sleep to milk, formula or juice. This can easily be avoided by providing the baby with a bottle or warm water at bedtime.",
      eruptionOfTeeth: "Eruption of teeth",
      erup:"Can be a very painful condition. The pain can be alleviated by the use of over counter analgesic drops. Teething rings containing a liquid that can be frozen are very helpful.",
      dentalEmergencies: "Dental emergencies",
      dental:"Stay calm in order not to frighten the child any further. Assess the extent of the injury:",
      dental1:" Toothache. Clean and floss the area, administer painkillers and phone the dental office.",
      dental2:" Swelling. Apply cold compresses.",
      dental3:" Cuts and bruises. Apply firm pressure to stop bleeding.",
      dental4:" Tooth knocked out. Save tooth in milk and go immediately to closest dentist (ideally within 30 minutes).",
      grinding: "Grinding (Bruxism)",
      grind:"As in bed-wetting, and thumb sucking, one theory involves a psychological component. If the grinding is excessive a night guard may be fitted.",
      orthodontics: "Orthodontics",
      orto:" Some malocclusions can be detected very early in life and treatment initiated at this stage can reduce and in some instances prevent the need for expensive future orthodontic treatment.",
    },
    ru: {
      header:"Детские зубы",
      head2:"Молочные зубы долгое время считались лишь временным предшественником более постоянных зубов.",
      title: "Молочные зубы важны",
      subtitle: "Передние зубы меняются в 6 лет, но задние молочные зубы сохраняются до 10-13 лет.",
      part1:"Правильный уход за молочными зубами должен начинаться, как только они начинают появляться в рту. Сначала следует использовать влажную салфетку для 'полировки' зубов, но с появлением большего числа зубов следует аккуратно использовать детскую зубную щетку хотя бы дважды в день. Фтор в правильной дозировке делает эмаль более прочной. Хотя во многих общинах фтор добавляется в воду, его также наносят на зубы после каждой профессиональной чистки.",
      description: "Молочные зубы важны для жевания, сохранения места для постоянных зубов и нормального развития челюсти.",
      thumbSucking: "Сосание пальца",
      thumb:"Эта привычка обычно исчезает к 4 годам. Сохранение этой привычки может оказывать вредное влияние на зубы и окружающую кость. Верхние зубы выдвигаются вперёд, нижние вдавливаются назад, что приводит к образованию зазора между верхними и нижними зубами, вызывая трудности при жевании, глотании и речи. В полость рта ребёнка может быть установлено специальное устройство, чтобы предотвратить сосание пальца. Это устройство может устранить привычку за несколько дней.",
      nursingBottleCavities: "Кариес от бутылочки",
      nursing:"Это серьёзная форма кариеса, которая может причинять много страданий. Она возникает из-за длительного воздействия на зубы во время сна молока, смеси или сока. Этого легко можно избежать, давая ребёнку бутылочку с тёплой водой перед сном.",
      eruptionOfTeeth: "Прорезывание зубов",
      erup:"Это может быть очень болезненным состоянием. Боль можно облегчить с помощью продающихся без рецепта обезболивающих капель. Прорезыватели с жидкостью, которую можно замораживать, очень полезны.",
      dentalEmergencies: "Стоматологическая неотложная помощь",
      dental:"Оставайтесь спокойными, чтобы не напугать ребёнка. Оцените степень повреждения:",
      dental1:" Зубная боль. Почистите и пропустите нитку через область, примите обезболивающие и позвоните в стоматологический кабинет.",
      dental2:" Отёк. Приложите холодные компрессы.",
      dental3:" Порезы и синяки. Наложите сильное давление, чтобы остановить кровотечение.",
      dental4:" Выпавший зуб. Сохраните зуб в молоке и немедленно отправляйтесь к ближайшему стоматологу (желательно в течение 30 минут).",
      grinding: "Скрежетание зубами (Бруксизм)",
      grind:"Как и при ночном недержании мочи и сосании пальца, одна из теорий включает психологический компонент. Если скрежет зубами чрезмерен, может быть установлен ночной защитник.",
      orthodontics: "Ортодонтия",
      orto:" Некоторые неправильные прикусы могут быть выявлены на ранней стадии жизни, и лечение, начатое на этом этапе, может уменьшить, а в некоторых случаях и предотвратить необходимость в дорогом ортодонтическом лечении в будущем.",
    }


  }
  return (
    <Container fluid className="py-5" >
      <Row className="justify-content-center align-items-center text-center" style={{ backgroundColor: '#3c1a6f', color: '#fff' }}>
        <Col md={6}>
          <h1 className="display-4">{translations[lang].header}</h1>
          <p style={{fontSize:"20px"}}>{translations[lang].head2}</p>
        </Col>
        <Col md={4}>
          <Card className="border-0">
            <Card.Img
              src="/images/childrenTeeth.webp"
              alt="Child teeth"
              className="rounded"
            />
          </Card>
        </Col>
      </Row>

      <Row className="py-5 bg-light text-dark mx-5">
        <h1 style={{ fontWeight: "600", fontSize: "25px" }}>{translations[lang].title}</h1>
        <p style={{ color: "#6F3D85", fontSize: "20px", fontWeight: "600" }}>
          {translations[lang].subtitle}
        </p>
        <br />
        <p style={{fontSize:"19px"}}>{translations[lang].description}</p>
        <br />
        <p style={{fontSize:"19px"}}>{translations[lang].par1}</p>
        
        <br />

        <ul style={{ listStyleType: "none" }}>
          <li style={{fontSize:"18px"}}>&#x25B6; <b>{translations[lang].thumbSucking}</b> - {translations[lang].thumb}</li> <br />
          <li style={{fontSize:"18px"}}>&#x25B6; <b>{translations[lang].nursingBottleCavities}</b> - {translations[lang].nursing}</li><br />
          <li>&#x25B6; <b>{translations[lang].eruptionOfTeeth}</b> - {translations[lang].erup}</li><br />
          <li>&#x25B6; <b>{translations[lang].dentalEmergencies}</b> - {translations[lang].dental}</li>
          
            <div style={{marginLeft:"20px"}}>
            1.{translations[lang].dental1}
            <br />
            2.{translations[lang].dental2}
            <br />
            3.{translations[lang].dental3}
            <br />
            4.{translations[lang].dental4}
            </div> <br />
          <li>&#x25B6; <b>{translations[lang].grinding}</b> - {translations[lang].grind}</li> <br />
          <li>&#x25B6; <b>{translations[lang].orthodontics}</b> - {translations[lang].orto}</li>
        </ul>
      </Row>
    </Container>
  );
}

export default ChildrensTeeth;
