import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    
    <Container className="my-5">
      <Row className="mb-4">
        <Col xs={12} md={6}>
          <h1 className="text-center fw-bolder text-black">Contact Us</h1>
          <p>
            We'd love to hear from you! Whether you have a question about our
            services, need a design consultation, or just want to say hello,
            feel free to get in touch.
          </p>
        </Col>
        <Col xs={12} md={6}>
          <h5 className="fw-bolder">Style-Biyts</h5>
          <p>Kakkanad Opposite To FineMart</p>
          <p>Email: stylebiytes03@gmail.com</p>
          <p>Phone: +91 9846959461 </p>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6} className="mb-4">
          <h4>Send Us a Message</h4>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your message..." />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>

        <Col xs={12} md={6}>
          <h4>Find Us Here</h4>
          <div style={{ height: "300px", width: "100%", overflow: "hidden" }}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509045!2d144.95565171532215!3d-37.8172099797519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5771e3ef7c768c8!2s123%20Design%20Street%2C%20Interior%20City!5e0!3m2!1sen!2sin!4v1697980242583!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}allowFullScreen=""loading="lazy"referrerPolicy="no-referrer-when-downgrade">
              </iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
