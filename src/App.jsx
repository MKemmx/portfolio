import React, { useEffect } from "react";
import "./App.css";

// Animate On Scroll
import AOS from "aos";

// Components
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import About from "./Components/About/About";
import Divider from "./Components/Divider/Divider";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Divider />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
