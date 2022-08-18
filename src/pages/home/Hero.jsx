import React, { useState, useEffect } from "react";
import "./Hero.css";
import { Button } from "../../components/Button";
import { DownloadButton } from "../../components/DownloadButton";

function Hero() {
  const [isMobile, setMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 1024) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <>
      <div id="home" className="container hero__container">
        <div className="hero__body">
          {!isMobile && (
            <svg viewBox="0 0 125 40">
              <text fill="#fff" x="0" y="10" fontSize={7}>
                Oh hey it's
              </text>
              <text fill="#ffffff" x="0" y="30" letterSpacing={5}>
                Zach Long
              </text>
            </svg>
          )}
          {isMobile && (
            <svg viewBox="0 0 125 110">
              <text fill="#fff" x="0" y="10" fontSize={7}>
                Oh hey it's
              </text>
              <text fill="#ffffff" x="0" y="50" letterSpacing={5} fontSize={45}>
                Zach
              </text>
              <text fill="#ffffff" x="0" y="90" letterSpacing={5} fontSize={45}>
                Long
              </text>
            </svg>
          )}
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
