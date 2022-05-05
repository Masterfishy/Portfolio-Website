import React from "react";
import { Card } from "../../components/Card";
import "./Skills.css";

const languages = [
  {
    name: "Python",
    rating: 5,
  },
  {
    name: "Golang",
    rating: 3,
  },
  {
    name: "C",
    rating: 4,
  },
  {
    name: "R",
    rating: 5,
  },
  {
    name: "C#",
    rating: 3,
  },
  {
    name: "Bash/Shell",
    rating: 4,
  },
  {
    name: "Java",
    rating: 4,
  },
  {
    name: "JavaScript",
    rating: 5,
  },
  {
    name: "HTML",
    rating: 3,
  },
  {
    name: "CSS",
    rating: 3,
  },
  {
    name: "SQLite",
    rating: 3,
  },
  {
    name: "Postgres",
    rating: 3,
  },
];

const tech = [
  {
    name: "React.js",
    rating: 3,
  },
  {
    name: "Vue.js",
    rating: 3,
  },
  {
    name: "Unity",
    rating: 5,
  },
  {
    name: "Tensorflow",
    rating: 3,
  },
  {
    name: "Selenium",
    rating: 4,
  },
  {
    name: "Cucumber",
    rating: 4,
  },
  {
    name: "Flask",
    rating: 3,
  },
  {
    name: "Pygame",
    rating: 4,
  },
  {
    name: "Git",
    rating: 5,
  },
  {
    name: "Figma",
    rating: 4,
  },
];

const soft = [
  {
    name: "Agile",
    rating: 4,
  },
  {
    name: "Scrum",
    rating: 4,
  },
  {
    name: "Microsoft Office",
    rating: 5,
  },
  {
    name: "Windows 10",
    rating: 5,
  },
  {
    name: "Linux/Unix",
    rating: 4,
  },
  {
    name: "MacOS",
    rating: 5,
  },
];

function Skills() {
  return (
    <>
      <div className="container skills__container">
        <div className="section__header">
          <h5>Take a Look at</h5>
          <h2>My Skills</h2>
        </div>
        <div className="skills__body">
          <div className="skills__cards">
            <Card className="skills__card">
              <h3>Languages</h3>
              <div className="skills__details">
                {languages.map(({ name, rating }, id) => {
                  return (
                    <div className="skill" key={id}>
                      <i className="fa-solid fa-badge-check skill-patch" />
                      <h4>{name}</h4>
                      {[...Array(rating)].map((index) => (
                        <i
                          key={index}
                          className="fa-solid fa-star skill-star-fill"
                        />
                      ))}
                      {[...Array(5 - rating)].map((index) => (
                        <i
                          key={index}
                          className="fa-regular fa-star skill-star-outline"
                        />
                      ))}
                    </div>
                  );
                })}
              </div>
            </Card>
            <Card className="skills__card">
              <h3>Technologies</h3>
              <div className="skills__details">
                {tech.map(({ name, rating }, id) => {
                  return (
                    <div className="skill" key={id}>
                      <i className="fa-solid fa-badge-check skill-patch" />
                      <h4>{name}</h4>
                      {[...Array(rating)].map((index) => (
                        <i
                          key={index}
                          className="fa-solid fa-star skill-star-fill"
                        />
                      ))}
                      {[...Array(5 - rating)].map((index) => (
                        <i
                          key={index}
                          className="fa-regular fa-star skill-star-outline"
                        />
                      ))}
                    </div>
                  );
                })}
              </div>
            </Card>
            <Card className="skills__card">
              <h3>Soft Skills</h3>
              <div className="skills__details">
                {soft.map(({ name, rating }, id) => {
                  return (
                    <div className="skill" key={id}>
                      <i className="fa-solid fa-badge-check skill-patch" />
                      <h4>{name}</h4>
                      {[...Array(rating)].map((index) => (
                        <i
                          key={index}
                          className="fa-solid fa-star skill-star-fill"
                        />
                      ))}
                      {[...Array(5 - rating)].map((index) => (
                        <i
                          key={index}
                          className="fa-regular fa-star skill-star-outline"
                        />
                      ))}
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
