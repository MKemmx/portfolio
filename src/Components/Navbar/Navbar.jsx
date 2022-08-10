import React, { useState } from "react";
import "./NavbarCSS.css";

// Framer motion utils and Framer motion
import { motion } from "framer-motion";
import { iconVariants, menuVariants, linkVariants } from "../../utils/Variants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="header">
        <div className="title">
          <h1>
            <a href="#home">M</a>
          </h1>
        </div>

        <div>
          <motion.svg
            className="menu-btn"
            variants={iconVariants}
            animate={isOpen ? "opened" : "closed"}
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.2 }}
            width="27"
            height="27"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
              fill="#fff"
            />
          </motion.svg>
        </div>
      </div>
      <motion.div
        className="nav"
        initial={false}
        variants={menuVariants}
        animate={isOpen ? "opened" : "closed"}
      >
        <motion.line
          onClick={closeMenu}
          className="link"
          variants={linkVariants}
        >
          <a href="#home"> home </a>
        </motion.line>
        <motion.li onClick={closeMenu} className="link" variants={linkVariants}>
          <a href="#about"> about </a>
        </motion.li>
        <motion.li onClick={closeMenu} className="link" variants={linkVariants}>
          <a href="#skills"> skills </a>
        </motion.li>
        <motion.li onClick={closeMenu} className="link" variants={linkVariants}>
          <a href="#projects"> projects </a>
        </motion.li>
        <motion.li onClick={closeMenu} className="link" variants={linkVariants}>
          <a href="#contact"> contact </a>
        </motion.li>
      </motion.div>
    </>
  );
};

export default Navbar;
