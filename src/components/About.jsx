import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";

import Asset1 from "../Images/Asset1.png";

function About() {
  return (
    <section id="about">
      <Container fluid="true">
        <Row>
          <Col md={8} className="about_Description">
            <h3>We Provide Quality for EVERYONE</h3>
            <p>
              Ishwar mechanical works have been a promising choise for many
              indistries, seeking a quality product in a timely manner. We
              believe in creating trustworthy relation with our clients. We are
              a leading manufacturer of Wheat Thresher Nab, Combine Nab, Brush,
              Head Gear & P.T.O Shafts and also provide services in all types of
              Job Works. Since 1987, Ishwar Mechanical works have significantly
              grown in the market with an image of Trust and Respect. Our
              Founder Late Mr. Jagjit Singh Sembhi (Known as Giani Ji) have
              guided many enterprenaurs and have helped them in growth of
            </p>
          </Col>
          <Col>
            <Image className="img" src={Asset1} />
          </Col>
        </Row>
        <Row className="strengths">
          <Col className="strength_Boxes">
            <p>Experience</p>
          </Col>
          <Col className="strength_Boxes">
            <p>Team</p>
          </Col>
          <Col className="strength_Boxes">
            <p>Quality</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
