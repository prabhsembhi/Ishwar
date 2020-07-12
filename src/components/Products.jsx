import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";

import Product1 from "../Images/product1.jpg";

function Products() {
  return (
    <section id="products">
      <Container fluid="true">
        <Row>
          <h4 className="product_Heading">Our Products</h4>
        </Row>
        <Row>
          <Col>
            <Image className="img2" src={Product1} />
          </Col>
          <Col>
            <Image className="img2" src={Product1} />
          </Col>
          <Col>
            <Image className="img2" src={Product1} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Products;
