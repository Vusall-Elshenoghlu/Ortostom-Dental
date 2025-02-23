import React, { useContext, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './Contact.css'; // Burada xüsusi CSS faylı əlavə edirik
import { LanguageContext } from '../../../context/LanguageContext';

function Contact() {
  const [state, handleSubmit] = useForm("xovjylba");
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const {lang} = useContext(LanguageContext)
  const translations = {
    az: {
      fullName: "Ad Soyad",
      phoneNumber: "Telefon Nömrəsi",
      emailAddress: "E-poçt Ünvanı",
      message: "Mesaj",
      sendMessage: "Mesaj Göndər",
      sending: "Göndərilir...",
      thankYou: "Mesajınız üçün təşəkkür edirik! Yaxın zamanlarda sizinlə əlaqə saxlayacağıq.",
      backHome: "Ana səhifəyə qayıt",
      contactUs: "Bizimlə Əlaqə",
      example: "Məsələn: +1234567890",
    },
    en: {
      fullName: "Full Name",
      phoneNumber: "Phone Number",
      emailAddress: "Email Address",
      message: "Message",
      sendMessage: "Send Message",
      sending: "Sending...",
      thankYou: "Thanks for your message! We will get back to you soon.",
      backHome: "Back Home",
      contactUs: "Contact Us",
      example: "Example: +1234567890",
    },
    ru: {
      fullName: "ФИО",
      phoneNumber: "Номер телефона",
      emailAddress: "Электронная почта",
      message: "Сообщение",
      sendMessage: "Отправить сообщение",
      sending: "Отправляется...",
      thankYou: "Спасибо за ваше сообщение! Мы свяжемся с вами скоро.",
      backHome: "Вернуться на главную",
      contactUs: "Связаться с нами",
      example: "Пример: +1234567890",
    },
  };
  

  if (state.succeeded) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
        <div className="text-center">
          <p className="text-success">{translations[lang].thankYou}</p>
          <Button variant="primary" onClick={() => navigate("/")} className="mt-3 back-btn">
          {translations[lang].backHome}
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">{translations[lang].contactUs}</h2>
      <Row className="justify-content-center">
        <Col lg={6} md={8} sm={12}>
          <Form onSubmit={handleSubmit} className="shadow p-4 rounded contact-form">
            <Form.Group className="mb-3">
              <Form.Label>{translations[lang].fullName}</Form.Label>
              <Form.Control type="text" name="name" required className="custom-input" />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>{translations[lang].phoneNumber}</Form.Label>
              <PhoneInput
                international
                defaultCountry="US"
                value={phone}
                onChange={setPhone}
                className="form-control custom-input"
                required
              />
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />
              <small className="text-muted">{translations[lang].example}</small>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>{translations[lang].emailAddress}</Form.Label>
              <Form.Control type="email" name="email" required className="custom-input" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>{translations[lang].message}</Form.Label>
              <Form.Control as="textarea" name="message" rows={4} required className="custom-input" />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={state.submitting} className="w-100 custom-btn">
              {state.submitting ? translations[lang].sending : translations[lang].sendMessage}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
