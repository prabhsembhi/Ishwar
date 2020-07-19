import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";

import Product1 from "../Images/product1.jpg";

function Products() {
  return (
    <section id="products">
      <Container fluid="true">
        <Row>
          <h2 className="product_Heading">Our Products</h2>
        </Row>
        <Row>
          <Col xs={12} md={true}>
            <Image className="img2" src={Product1} />
          </Col>
          <Col xs={12} md={true}>
            <Image className="img2" src={Product1} />
          </Col>
          <Col xs={12} md={true}>
            <Image className="img2" src={Product1} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Products;
