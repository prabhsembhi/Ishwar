import React from "react";
import Navigation from "./Navigation";
import HomePage from "./HomePage";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Footer from "./Footer";

//bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navigation />
      <HomePage />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
