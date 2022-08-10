import React from "react";
import "./BannerCSS.css";

// React TypeWritter Effect
import Typewriter from "typewriter-effect";

// Banner Image
import BannerSVG from "../../svg/programming.svg";

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
          <img src={BannerSVG} alt="banner-svg" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
