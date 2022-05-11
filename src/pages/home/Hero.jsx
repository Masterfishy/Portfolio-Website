import React from "react";
import "./Hero.css";
import { Button } from "../../components/Button";
import { DownloadButton } from "../../components/DownloadButton";

function Hero() {
  return (
    <>
      <div id="home" className="container hero__container">
        <div className="hero__body">
          <svg viewBox="0 0 125 40">
            <text fill="#fff" x="0" y="10" fontSize={7}>
              Oh hey it's
            </text>
            <text
              fill="#ffffff"
              x="0"
              y="30"
              // fontWeight={500}
              letterSpacing={5}
            >
              Zach Long
            </text>
          </svg>
          <div className="hero__cta">
            <DownloadButton buttonStyle="btn-primary" to="assets/resume.pdf">
              Download CV
            </DownloadButton>
            <Button buttonStyle="btn-outline" to="#contact">
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
