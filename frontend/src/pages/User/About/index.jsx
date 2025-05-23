import React, { useContext } from 'react';
import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import { LanguageContext } from '../../../context/LanguageContext';
import "./About.css";

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
    const { lang, darkMode } = useContext(LanguageContext);

    return (
        <div className={`aboutt ${darkMode ? "dark-mode" : ""}`}>
            <motion.div
                className={`about-section ${darkMode ? "dark-mode" : ""}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Container >
                    <Helmet>
                        <title>About</title>
                    </Helmet>
                    <Row className="justify-content-center align-items-center">
                        <Col lg={10}>
                            <Card className="shadow-lg rounded border-0 about-card">
                                <Row className="g-0 align-items-center">
                                    <Col md={6} className="d-none d-md-block">
                                        <Image
                                            src="https://royalimplant.com/blogs/wp-content/uploads/2022/06/doctor-and-dentist-thumbs-up-510x340.jpg"
                                            fluid className="rounded-start w-100 h-100 object-fit-cover"
                                        />
                                    </Col>
                                    <Col md={6} className="p-4 text-center">
                                        <h1 className="fw-bold about-title">{about[lang].title}</h1>
                                        <p className="about-description">{about[lang].description}</p>
                                        <Link to={"/dental-care"}>
                                            <Button
                                                variant={darkMode ? "outline-light" : "primary"}
                                                className="mt-3 px-4 py-2 fw-bold shadow-sm"
                                            >
                                                {lang === 'az' ? 'Daha çox öyrən' : lang === 'en' ? 'Learn More' : 'Узнать больше'}
                                            </Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </motion.div>
        </div>
    );
};

export default About;
