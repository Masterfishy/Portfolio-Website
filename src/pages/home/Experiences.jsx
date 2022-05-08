import React from "react";
import "./Experiences.css";
import rawData from "../../data/experiences.json";

const data = JSON.parse(JSON.stringify(rawData));

function Experiences() {
  return (
    <>
      <div id="experiences" className="container experiences__container">
        <div className="section__header">
          <h5>Check Out</h5>
          <h2>My Experiences</h2>
        </div>
        <div className="experiences__body">
          <div className="experiences__cards">
            {data["experiences"].map(({ name, years, role, loc, link }, id) => {
              return (
                <div className="experiences__card" key={id}>
                  <div className="experiences__card-header">
                    <h3>{name}</h3>
                    <small>{years}</small>
                  </div>
                  <div className="experiences__card-body">
                    <h4>{role}</h4>
                    <div className="experiences__card-details">
                      <div className="experiences__card-detail">
                        <i className="fa-solid fa-location-dot experiences__card-icon" />
                        {loc}
                      </div>
                      <div className="experiences__card-detail">
                        <a href={link} target="_blank" rel="noreferrer">
                          <i className="fa-solid fa-link experiences__card-icon" />
                          Website
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Experiences;
