import React from "react";
import "./AboutCSS.css";

// Framer Motion
import { motion } from "framer-motion";
// About Banner Image
import AboutBanner from "../../svg/aboutme.svg";

const About = () => {
  return (
    <>
      <div id="about" className="about">
        <div className="about-container">
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="1500"
            className="about-left"
          >
            <h2>About Me</h2>
            <p>
              I'm a web developer with a focus on the MERN stack, but still
              exploring other technologies and frameworks that catch my
              interest! if you're looking for a developer to add to your team,
              I'd love to hear from you!
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="resume-btn"
            >
              Download CV
            </motion.button>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="1500"
            className="about-right"
          >
            <img src={AboutBanner} alt="right-banner" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
