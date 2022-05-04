import React from "react";
import { Button } from "../../components/Button";

function Hero() {
  return (
    <>
      <div id="#home" className="container hero__container">
        <div className="hero__headshot">
          <img src="assets/me.JPG" alt="Zach Long's headshot" />
        </div>
        <h5>Oh hey it's</h5>
        <h1>Zach Long</h1>
        <div className="hero__cta">
          <Button buttonStyle="btn-primary" to="">
            Download CV
          </Button>
          <Button buttonStyle="btn-outline" to="#contact">
            Let's Talk
          </Button>
        </div>
      </div>
    </>
  );
}

export default Hero;
