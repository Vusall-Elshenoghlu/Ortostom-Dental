import React, { useState, useContext } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { LanguageContext } from '../../../context/LanguageContext';

function Mapp() {
  const { lang } = useContext(LanguageContext);
  const [state, handleSubmit] = useForm("xovjylba");
  const [phone, setPhone] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    if (state.succeeded) {
      setFormData({ name: '', email: '', message: '' });
      setPhone('');
    }
  };
  const translations = {
    az: {
      contact: "Əlaqə",
      name: "Ad",
      phone: "Telefon",
      email: "E-mail",
      message: "Mesaj",
      sendMessage: "Göndər",
      sending: "Göndərilir...",
      successMessage: "Mesajınız uğurla göndərildi!"
    },
    en: {
      contact: "Contact",
      name: "Name",
      phone: "Phone",
      email: "Email",
      message: "Message",
      sendMessage: "Send",
      sending: "Sending...",
      successMessage: "Your message has been sent successfully!"
    },
    ru: {
      contact: "Контакты",
      name: "Имя",
      phone: "Телефон",
      email: "Эл. почта",
      message: "Сообщение",
      sendMessage: "Отправить",
      sending: "Отправка...",
      successMessage: "Ваше сообщение успешно отправлено!"
    }
  };
  

  return (
    <Container className="py-5">
      <Row className="justify-content-center align-items-center">
        <Col lg={8} md={12} className="mb-4 mb-lg-0">
          <div className="shadow rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d654.7397022565145!2d49.944740917721106!3d40.366746294072016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307b55251b510b%3A0x4f0c0117705c57af!2sGadir%20Mammadov%2C%20Bak%C4%B1!5e1!3m2!1saz!2saz!4v1740122753791!5m2!1saz!2saz"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>

        <Col lg={4} md={12}>
          <h2 className="text-center mb-3">{translations[lang].contact}</h2>
          {state.succeeded && (
            <Alert variant="success" className="text-center">
              {translations[lang].successMessage}
            </Alert>
          )}
          <Form onSubmit={handleFormSubmit} className="shadow p-3 rounded contact-form" style={{height:"450px", marginBottom:"50px"}}>
            <Form.Group className="mb-2">
              <Form.Label>{translations[lang].name}</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>{translations[lang].phone}</Form.Label>
              <PhoneInput
                international
                defaultCountry="US"
                value={phone}
                onChange={setPhone}
                className="form-control"
                required
              />
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>{translations[lang].email}</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>{translations[lang].message}</Form.Label>
              <Form.Control 
                as="textarea" 
                name="message" 
                rows={2} 
                value={formData.message} 
                onChange={handleChange} 
                required 
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={state.submitting} className="w-100">
              {state.submitting ? translations[lang].sending : translations[lang].sendMessage}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Mapp;
