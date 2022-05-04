import React from "react";
import "./Hero.css";
import { Button } from "../../components/Button";
import { DownloadButton } from "../../components/DownloadButton";

function Hero() {
  return (
    <>
      <div id="home" className="container hero__container">
        <div className="hero__headshot">
          <img src="assets/me.JPG" alt="Zach Long's headshot" />
        </div>
        <div className="hero__body">
          <h5>Oh hey it's</h5>
          <h1>Zach Long</h1>
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
