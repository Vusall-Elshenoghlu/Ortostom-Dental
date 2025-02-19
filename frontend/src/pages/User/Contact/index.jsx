import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './Contact.css'; // Burada xüsusi CSS faylı əlavə edirik

function Contact() {
  const [state, handleSubmit] = useForm("xovjylba");
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');

  if (state.succeeded) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
        <div className="text-center">
          <p className="text-success">Thanks for your message! We will get back to you soon.</p>
          <Button variant="primary" onClick={() => navigate("/")} className="mt-3 back-btn">
            Back Home
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Row className="justify-content-center">
        <Col lg={6} md={8} sm={12}>
          <Form onSubmit={handleSubmit} className="shadow p-4 rounded contact-form">
            {/* Name Input */}
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" name="name" required className="custom-input" />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </Form.Group>

            {/* Phone Number Input */}
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <PhoneInput
                international
                defaultCountry="US"
                value={phone}
                onChange={setPhone}
                className="form-control custom-input"
                required
              />
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />
              <small className="text-muted">Example: +1234567890</small>
            </Form.Group>

            {/* Email Input */}
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" name="email" required className="custom-input" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </Form.Group>

            {/* Message Input */}
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" name="message" rows={4} required className="custom-input" />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={state.submitting} className="w-100 custom-btn">
              {state.submitting ? "Sending..." : "Send Message"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
