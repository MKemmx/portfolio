import React from "react";
import "./BannerCSS.css";

// React TypeWritter Effect
import Typewriter from "typewriter-effect";

// Banner Image
import BannerSVG from "../../svg/coding.svg";

const Banner = () => {
  return (
    <div id="home" className="banner">
      <div className="banner-container">
        <div
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="2000"
          className="banner-left"
        >
          <p className="hi"> Hi! </p>
          <p className="name">I'm Mark Kemm </p>
          <Typewriter
            options={{
              autoStart: false,
              loop: true,
              delay: 100,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `<span style="font-size: 24px;">Web Developer</span>`
                )
                .pauseFor(2000)
                .deleteChars(13)
                .typeString(
                  `<span style="font-size: 24px;">Front-end Developer</span>`
                )
                .pauseFor(2000)
                .deleteChars(20)
                .typeString(
                  `<span style="font-size: 24px;">Junior Developer</span>`
                )
                .pauseFor(2000)
                .start();
            }}
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="1000"
          data-aos-duration="1500"
          className="banner-right"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#43597d"
              d="M51.8,-70.6C64.5,-62.1,70.5,-43.4,76.2,-25C81.9,-6.5,87.4,11.8,84.2,29.1C80.9,46.3,69,62.4,53.5,73.7C38.1,84.9,19,91.2,2,88.4C-15.1,85.7,-30.1,73.9,-45.6,62.7C-61.1,51.5,-77,40.8,-83.5,25.9C-89.9,11,-86.9,-8.1,-79.2,-23.8C-71.4,-39.5,-58.9,-51.7,-44.9,-59.8C-30.9,-68,-15.5,-72.1,2,-74.9C19.5,-77.7,39.1,-79.2,51.8,-70.6Z"
              transform="translate(100 100)"
            />
          </svg>

          <img src={BannerSVG} alt="banner-svg" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
