import React from "react";
import "./ContactCSS.css";

// React Icons
import {
  AiOutlineMail,
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillFileWord,
} from "react-icons/ai";

// Open new tab utility
import { openInNewTab } from "../../utils/OpenTab";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-container">
        <div className="box1">
          <p className="contact-title">CONTACT</p>
          <div className="contact-details">
            <AiOutlineMail className="contact-icon" size={24} />
            <p> kimasdilla@gmail.com </p>
          </div>
        </div>

        <div className="box1">
          <div className="contact-title">SOCIAL MEDIA</div>
          <div className="social-media-links">
            <div
              onClick={() => {
                openInNewTab(
                  "https://www.facebook.com/profile.php?id=100070714667661"
                );
              }}
              className="contact-details"
            >
              <AiFillFacebook className="contact-icon" size={24} />
              <div className="socialm-name">
                <p> Facebook </p>
              </div>
            </div>
            <div
              onClick={() => {
                openInNewTab("https://github.com/MKemmx");
              }}
              className="contact-details"
            >
              <AiFillGithub className="contact-icon" size={24} />
              <div className="socialm-name">
                <p> Github </p>
              </div>
            </div>

            <div
              onClick={() => {
                openInNewTab("https://www.linkedin.com/in/mkemmx/");
              }}
              className="contact-details"
            >
              <AiFillLinkedin className="contact-icon" size={24} />
              <div className="socialm-name">
                <p> Linkedin </p>
              </div>
            </div>
          </div>
        </div>

        <div className="box1">
          <p className="contact-title">Others</p>
          <div
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1p3g_Tmm3UsLfIHtNecwsotugl8aTYhLj/view",
                "_blank"
              );
            }}
            className="contact-details"
          >
            <AiFillFileWord className="contact-icon" size={24} />
            <p> Resume </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
