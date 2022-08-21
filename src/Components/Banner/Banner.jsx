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
              fill="#140941"
              d="M56.8,-62.8C72.8,-54.3,84.3,-35.6,85,-17.1C85.7,1.3,75.6,19.5,63.9,34.3C52.3,49.1,39.2,60.4,23.3,67.9C7.3,75.4,-11.4,79.1,-30.1,75.5C-48.9,71.9,-67.6,60.8,-73.5,45.1C-79.4,29.4,-72.5,8.9,-67,-10C-61.6,-28.9,-57.5,-46.3,-46.5,-55.7C-35.6,-65.1,-17.8,-66.5,1.3,-68.1C20.4,-69.6,40.9,-71.3,56.8,-62.8Z"
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
