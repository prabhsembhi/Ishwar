import React from "react";
import { Image, Container, Row, Col, Button } from "react-bootstrap";

import Asset1 from "../Images/Asset1.png";
import Inderjit2 from "../Images/Asset 8.png";
import jagjit2 from "../Images/Asset 7.png";

//icons
import { FaPhone, FaEnvelope } from "react-icons/fa";

function Footer() {
  var date = new Date();
  var year = date.getFullYear;
  return (
    <section id="footer">
      <Container fluid="true">
        <Row>
          <Col className="footer_col" md={true} lg={5}>
            <Image className="footer_image" src={jagjit2} />
            <div className="img_description">
              <h4>Our Founder</h4>
              <p>
                Late Sardar Jagjit Singh Ji <br /> (Giani Ji)
              </p>
            </div>
          </Col>
          <Col className="footer_col" md={true} lg={4}>
            <Image className="footer_image" src={Inderjit2} />
            <div className="img_description">
              <h4>Our CEO</h4>
              <p>Sardar Inderjit Singh Sembhi</p>
            </div>
          </Col>
          <Col md={true} lg={3} className="footer_contacts footer_col">
            <p>
              <FaPhone className="footer_Icons" />
              <a className="footer_links" href="tel:+919815902613">
                +91 98159 02613
              </a>
            </p>
            <p>
              <FaEnvelope className="footer_Icons" />
              <a className="footer_links" href="mailto:gogi_ishwar@yahoo.com">
                gogi_ishwar@yahoo.com
              </a>
            </p>
            <Button
              href="https://goo.gl/maps/3M5k6jvMU9LT7RRr6"
              variant="outline-dark"
              target="_blank"
            >
              Locate us on Maps
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="last_row ">
              Copyright &copy; {new Date().getFullYear()}{" "}
            </p>
            <p className="last_row">Sitemap</p>
          </Col>
          <Col>
            <p className="last_row developer">
              Made by <a href="http://www.prabhsembhi.com/">Prabh Sembhi</a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;
