import React from "react";
import { Card } from "../../components/Card";
import "./Skills.css";
import rawData from "../../data/skills.json";

const data = JSON.parse(JSON.stringify(rawData));

function Skills() {
  return (
    <>
      <div id="skills" className="container skills__container">
        <div className="section__header">
          <h2>My Skills</h2>
        </div>
        <div className="skills__body">
          <div className="skills__cards">
            <Card className="skills__card">
              <h3>Languages</h3>
              <div className="skills__details">
                {data["languages"].map(({ name, rating }, id) => {
                  return (
                    <div className="skill" key={`lang${id}`}>
                      <h4>{name}</h4>
                    </div>
                  );
                })}
              </div>
            </Card>
            <Card className="skills__card">
              <h3>Technologies</h3>
              <div className="skills__details">
                {data["tech"].map(({ name, rating }, id) => {
                  return (
                    <div className="skill" key={`tech${id}`}>
                      <h4>{name}</h4>
                    </div>
                  );
                })}
              </div>
            </Card>
            <Card className="skills__card">
              <h3>Industry Skills</h3>
              <div className="skills__details">
                {data["soft"].map(({ name, rating }, id) => {
                  return (
                    <div className="skill" key={`soft${id}`}>
                      <h4>{name}</h4>
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
