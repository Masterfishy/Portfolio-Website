import React from "react";
import "./Footer.css";
import { SiHandshake } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <a href="#home" className="footer__logo">
          Zach Long
        </a>
        <ul className="permalinks">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experiences">Experiences</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="footer__socials">
          <a
            href="https://github.com/Masterfishy"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="footer__icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/zachlong-42/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="footer__icon" />
          </a>
          <a
            href="https://app.joinhandshake.com/stu/users/10966478"
            target="_blank"
            rel="noreferrer"
          >
            <SiHandshake className="footer__icon" />
          </a>
        </div>
        <div className="footer__copyright">
          <small>Made with React by Zach.</small>
        </div>
      </footer>
    </>
  );
}

export default Footer;
