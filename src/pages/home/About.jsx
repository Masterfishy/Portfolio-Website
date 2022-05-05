import React, { useEffect, useState } from "react";
import "./About.css";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";

function About() {
  const [button, setButton] = useState(false);

  const showButton = () => {
    if (window.innerWidth <= 1024) {
      setButton(true);
    } else {
      setButton(false);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
  }, []);

  return (
    <>
      <div id="about" className="container about__container">
        <div className="section__header">
          <h5>Get to Know</h5>
          <h2>About Me</h2>
          {!button && (
            <Button buttonStyle="btn-primary" to="#contact">
              Let's Talk
            </Button>
          )}
        </div>
        <div className="about__body">
          <div className="about__cards">
            <Card className="about__card">
              <i className="fa-solid fa-handshake-simple about__icon" />
              <h5>Internships</h5>
              <small>5+ internships</small>
            </Card>
            <Card className="about__card">
              <i className="fa-solid fa-graduation-cap about__icon" />
              <h5>Education</h5>
              <small>B.S. in computer science</small>
            </Card>
            <Card className="about__card">
              <i className="fa-solid fa-gamepad about__icon" />
              <h5>Game Design</h5>
              <small>4+ years making games</small>
            </Card>
          </div>
          <div className="about__blurb">
            <p>
              Hello, hello! My name is Zach Long.
              <strong> I graduated Summa Cum Laude </strong>
              from Virginia Tech having studied
              <strong> computer science and mathematics</strong>.
            </p>
            <p>
              I worked a wide range of
              <strong> software and research internships</strong>; starting
              humbly with testing and moving my way through “the stack”. I
              participated in a number of bioinformatic and biostatistic
              research projects as a programmer, including a project that took
              me to Saudi Arabia.
            </p>
            <p>
              I have a passion for
              <strong> game design</strong>. At VT, I lead a game design club
              through weekly meetings on game theory and game programming.
              During the 4 years as a member and leader of the club, I
              participated in 8, club hosted game jams.
            </p>
            <p>
              I am currently living in Hawaii taking some time to
              <strong> develop personal projects</strong>, like this website,
              and
              <strong> start a small company</strong>. I have also been enjoying
              reading a number of sci-fi books, surfing, hiking, gardening with
              my grandma, and working part-time at a wilderness therapy program
              for adolescents and young adults.
            </p>
            <p>
              After Hawaii, whether I move into industry or go back to school, I
              know that I will bring a
              <strong> diverse and valuable set of skills</strong> to my next
              adventure.
            </p>
          </div>
          {button && (
            <Button buttonStyle="btn-primary" to="#contact">
              Let's Talk
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default About;
