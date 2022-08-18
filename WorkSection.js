import React from "react";
import "./Work.css";
import arvr from "./images/ARVR.png";
import cardetaction from "./images/CarDetaction.png";
import chart from "./images/Chart.png";
function WorkSection() {
  return (
    <>
      <div className="Work-card-container">
        <div className="right-bubble"></div>
        <div className="left-bubble"></div>
        <h1 className="title">Some of my biggest projects</h1>
        <div className="work-cardbox">
          <div className="work-card right-card">
            <img src={arvr} />
            <p>
              Procedures for use with Microsoft's HoloLenS AR glasses For use in
              Intel's clean room to prefom a high quality activities
            </p>
            <button className="right-card-button">Read More</button>
          </div>
          <div className="work-card mid-card">
            <img src={cardetaction} />
            <p>
              A system similar to Mobileye for the back of the vehicle that
              knows how to detect with OpenVino <br />
              (First place Intel's competition)
            </p>
            <button className="mid-card-button">Read More</button>
          </div>
          <div className="work-card left-card">
            <img src={chart} />
            <p>
              System in C# + .NET environments that knows how to receive data
              files from machines in the Intel clean room and provide a detailed
              graph to the technicians
            </p>
            <button className="left-card-button">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkSection;
