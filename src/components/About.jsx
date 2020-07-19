import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";

import Asset1 from "../Images/Asset1.png";

//icons
import { FaThumbsUp, FaCheck, FaUsers } from "react-icons/fa";

function About() {
  return (
    <section id="about">
      <Container fluid="true">
        <Row>
          <Col lg={true} className="about_Description">
            <h2>We Provide Quality for EVERYONE</h2>
            <p>
              Ishwar mechanical works have been a promising choice for many
              industries, seeking a quality product on time. We believe in
              creating a trustworthy relationship with our clients. We are a
              leading manufacturer of Wheat Thresher Nab, Combine Nab, Brush,
              Head Gear & P.T.O Shafts, and also provide services in all types
              of Job Works. Since 1960, Ishwar Industries have significantly
              grown in the market with an image of Trust and Respect. Our
              Founder Late Mr. Jagjit Singh Sembhi (Known as Giani Ji) has
              guided not only many entrepreneurs but also his workers by helping
              them to establish their industries, which are on a very high scale
              as if today.
            </p>
          </Col>
          <Col lg={true}>
            <Image className="img" src={Asset1} />
          </Col>
        </Row>
        <Row className="strengths">
          <Col md={true} className="strength_Boxes box1">
            <FaThumbsUp className="strengths_Icons" />
            <div className="strength_Names">
              <h4>Experience</h4>
              <p>60 years of Activiity</p>
            </div>
          </Col>
          <Col md={true} className="strength_Boxes box2">
            <FaUsers className="strengths_Icons" />
            <div className="strength_Names">
              <h4>Team</h4>
              <p>Industry Professionals</p>
            </div>
          </Col>
          <Col md={true} className="strength_Boxes box3">
            <FaCheck className="strengths_Icons" />

            <div className="strength_Names">
              <h4>Quality</h4>
              <p>100% satisfaction</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
