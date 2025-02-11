import React, { useContext } from 'react';
import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LanguageContext } from '../../../context/LanguageContext';
import { Link } from 'react-router';

const about = {
    az: {
        title: 'Haqqımızda',
        description: 'Bizim klinika, hər bir xəstənin ağız və diş sağlamlığına xüsusi diqqət yetirərək, ən müasir texnologiyalarla təchiz olunmuşdur. Sizi qarşılayan peşəkar diş həkimləri komandamız, təbəssümünüzü daha gözəl və sağlam etmək üçün buradadır.',
        learnMoreLink: '/haqqimizda'
    },
    en: {
        title: 'About Us',
        description: 'Our clinic is equipped with the latest technology, dedicated to providing every patient with personalized care for oral and dental health. Our team of professional dentists is here to make your smile more beautiful and healthy.',
        learnMoreLink: '/about-us'
    },
    ru: {
        title: 'О нас',
        description: 'Наша клиника оснащена передовыми технологиями и вниманием к здоровью полости рта и зубов каждого пациента. Наша команда профессиональных стоматологов здесь, чтобы сделать вашу улыбку более красивой и здоровой.',
        learnMoreLink: '/o-nas'
    }
};

const About = () => {
    const { lang } = useContext(LanguageContext);

    return (
        <motion.div
            className="py-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Container>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Card className="shadow-lg rounded">
                            <Row noGutters>
                                <Col md={6}>
                                    <Image src="https://royalimplant.com/blogs/wp-content/uploads/2022/06/doctor-and-dentist-thumbs-up-510x340.jpg" fluid className="rounded-start" />
                                </Col>
                                <Col md={6}>
                                    <Card.Body className="text-center p-4">
                                        <h1 className="display-4 mb-3">{about[lang].title}</h1>
                                        <p className="lead">{about[lang].description}</p>
                                        <Link to={"/dental-care"}>
                                            <Button href={about[lang].learnMoreLink} variant="primary" className="mt-3">
                                                {lang === 'az' ? 'Daha çox öyrən' : lang === 'en' ? 'Learn More' : 'Узнать больше'}
                                            </Button>
                                        </Link>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
};

export default About;
