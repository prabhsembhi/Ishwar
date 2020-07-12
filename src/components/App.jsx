import React from "react";
import Navigation from "./Navigation";
import HomePage from "./HomePage";
import About from "./About";
import Products from "./Products";

import { Container, Row, Col } from "react-bootstrap";
//bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navigation />
      <HomePage />
      <About />
      <Products />
    </div>
  );
}

export default App;
