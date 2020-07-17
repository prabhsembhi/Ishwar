import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";

//icons
import { FaPhone, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">
      <Container fluid="true">
        <Row>
          <Col>
            <h2>Get In Touch</h2>
            <p>
              <FaPhone className="contact_Icons" />
              <a className="contact_links" href="tel:+919815902613">
                +91 98159 02613
              </a>
            </p>
            <p>
              <FaEnvelope className="contact_Icons" />
              <a className="contact_links" href="mailto:gogi.ishwar@yahoo.com">
                gogi.ishwar@yahoo.com
              </a>
            </p>
            <p>
              <FaMapMarkedAlt className="contact_Icons" />
              <a
                className="contact_links"
                target="_blank"
                href="https://goo.gl/maps/3M5k6jvMU9LT7RRr6"
              >
                Ishwar Mechanical Works, Ishwar Chowk, Akalsar Road, Moga,
                Punjabi (142001)
              </a>
            </p>
          </Col>
          <Col>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3426.441436820184!2d75.17833421546386!3d30.818294688554303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a08f4f6bff1df%3A0xce01887ff4a83315!2sIshwar%20Mechanical%20Works!5e0!3m2!1sen!2sca!4v1594589747843!5m2!1sen!2sca"
              width="300"
              height="250"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </Col>
        </Row>
      </Container>

      <hr />
    </section>
  );
}

export default Contact;
