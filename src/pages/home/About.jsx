import React from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";

function About() {
  return (
    <>
      <div id="about" className="section"></div>
      <div className="section__header">
        <h5>Get to Know</h5>
        <h2>About Me</h2>
        <Button buttonStyle="btn-outline" to="#contact">
          Let's Talk
        </Button>
      </div>
      <div className="container about__container">
        <div className="about__cards">
          <Card className="about__card">
            <i class="fa-solid fa-handshake-simple"></i>
            <h5>Internships</h5>
            <small>5+ software and research internships</small>
          </Card>
          <Card className="about__card">
            <i class="fa-solid fa-graduation-cap"></i>
            <h5>Education</h5>
            <small>
              B.S. from Virginia Tech in Computer Science & Mathematics
            </small>
          </Card>
          <Card className="about__card">
            <i class="fa-solid fa-gamepad"></i>
            <h5>Game Design</h5>
            <small>4+ years of game making experience</small>
          </Card>
        </div>
        <div className="about__blurb">
          <p>
            Hello, hello! My name is Zach Long. I graduated Summa Cum Laude from
            Virginia Tech having studied computer science and mathematics. I
            have worked a wide range of software and research internships
            starting humbly with testing and moving my way through “the stack”.
            I participated in a number of bioinformatic and biostatistic
            research projects as a programmer, including a project that took me
            to Saudi Arabia.
          </p>
          <p>
            I have a passion for game design and game programming. At VT I lead
            meetings on game theory and game programming to peers and
            participated in 8 VT game jams we hosted.
          </p>
          <p>
            I am currently living in Hawaii taking some time to develop personal
            projects, like this website. I have also been enjoying reading a
            number of sci-fi books, surfing, hiking, gardening with my grandma,
            and working part-time at a wilderness therapy program for
            adolescents and young adults.
          </p>
          <p>
            I am hoping to start my own company soon and whether I move into
            industry or go back to school, you better bet I am going to be
            bringing a diverse and valuable set of skills.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
