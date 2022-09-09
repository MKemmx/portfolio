import React from "react";
import "./ProjectCSS.css";

// React Icons
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

// Open Tab Utility
import { openInNewTab } from "../../utils/OpenTab";

// Project Images
import Starbucks from "../../ProjectImages/starbucks.png";
import RPS from "../../ProjectImages/rps.png";
import Eccomerce from "../../ProjectImages/eccomerce-react.png";
import Spes from "../../ProjectImages/spes-system.png";
import Gym from "../../ProjectImages/reservation-system.png";

const Project = () => {
  const projects = [
    {
      title: "Tanauan Civic Center Reservation System",
      subTitle: "Reservation System for our municipal town gym.",
      tools: ["HTML", "CSS", "React JS", "Express", "Mongo DB", "Tailwind CSS"],
      image: Gym,
      githubLink: "",
      pageLink: "",
    },
    {
      title: "SPES Online Monitoring System",
      subTitle: "SPES online job hiring and applying system.",
      tools: ["HTML", "CSS", "React JS", "Express", "Mongo DB", "Tailwind CSS"],
      image: Spes,
      githubLink: "",
      pageLink: "https://spes-tolosa-system.vercel.app/",
    },
    {
      title: "Tech Eccomerce",
      subTitle: "Eccomerce app integration with fakestoreapi data.",
      tools: ["HTML", "CSS", "React JS"],
      image: Eccomerce,
      githubLink: "https://github.com/MKemmx/eccomerce-front-end",
      pageLink: "https://eccomerce-front-end-reactjs.vercel.app/",
    },
    // {
    //   title: "Starbucks Clone",
    //   subTitle: "Starbucks landing page clone.",
    //   tools: ["HTML", "CSS", "JavaScript"],
    //   image: Starbucks,
    //   githubLink:
    //     "https://github.com/MKemmx/starbucks-clone/tree/main/starbucks_clone",
    //   pageLink: "",
    // },
    {
      title: "Rock Paper Scissors Lizard Spock",
      subTitle: "Front-end mentor challenge.",
      tools: ["HTML", "CSS", "React JS"],
      image: RPS,
      githubLink: "https://github.com/MKemmx/rock-paper-scissors-lizard-spock",
      pageLink: "https://rock-paper-scissors-lizard-spock-hazel.vercel.app/",
    },
  ];

  return (
    <div id="projects" className="project">
      <div className="project-title">
        <h1> My Projects </h1>
      </div>
      <div className="project-container">
        {projects.map((project) => (
          <div
            key={project.title}
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="1500"
            className="project-card"
          >
            <img
              className="project-image"
              src={project.image}
              alt="starbucks-clone"
            />
            <div className="project-text">
              <h2> {project.title} </h2>
              <p> {project.subTitle} </p>
            </div>
            <div className="project-tags">
              {project.tools.map((tool, index) => (
                <button key={index} className="tag-btn">
                  {tool}
                </button>
              ))}
            </div>
            <div className="project-link">
              <AiFillGithub
                onClick={() => {
                  project.githubLink === ""
                    ? null
                    : openInNewTab(`${project.githubLink}`);
                }}
                color="#fff"
                className="github"
                size={30}
              />
              <AiOutlineLink
                onClick={() => {
                  project.pageLink === ""
                    ? null
                    : openInNewTab(`${project.pageLink}`);
                }}
                color="#fff"
                className="github"
                size={30}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
