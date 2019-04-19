import React, { Component } from "react";
import "./ContentLandingPage.css";

//Component
import ComponentSquareContainer from "./ComponentSquareContainer.js";

class ContentLandingPage extends Component {
  render() {
    return (
      <div className="content">
        <div className="center" id="center">
          <h1 className="top">Aspiring Software Engineer</h1>
          <hr className="line" />
          <h1 className="welcome">Thads Egar</h1>
        </div>

        <div className="Sections">
          <div className="DivWhite">
            <h1 className="About" id="about">
              ABOUT
            </h1>
            <hr className="line" />
            <div className="bold">
              <p>
                My name is Thads Michael Egar. <br /> I am a Junior level
                student at the University of Texas at Dallas pursuing my
                Bachelors Degree in Computer Science. My main programming
                language is Java but I am trying to learn more technologies in
                order to complement my current skill-set. I am interested in
                Machine Learning and Cloud Services. My other interests include
                hiking, drawing, listening to podcasts, and learning about the
                natural universe.
              </p>
            </div>
          </div>
          <div className="DivGrey">
            <h1 className="Skills">SKILLS</h1>
            <hr className="line" />
            <div className="bold">
              <p>
                Programming Languages: C++, C, Java, JavaScript, CSS, HTML
                <br />
                Technologies: Git/GitHub, react.js, node.js
                <br />
                Operating Systems: Windows, Linux/Unix, macOS, Android
                <br />
                Disciplines: Agile Development, Object Oriented Programming
              </p>
            </div>
          </div>
          <div className="DivWhite">
            <h1 className="Projects">PROJECTS</h1>
            <hr className="line" />
            <p>COMING SOON</p>
          </div>
          <div className="DivGrey">
            <h1 className="Experience">EXPERIENCE</h1>
            <hr className="line" />
            <div className="ExperienceRow">
              <div className="Work">
                <div className="HA">
                  <a href="https://www.homeaway.com/">HomeAway</a>
                </div>
                <p classname="WorkPositionName">
                  Software Engineer Intern | June 2019 - August 2019
                </p>
                <p1 classname="WorkDescription">
                  To be filled out during the duration of internship.
                </p1>
              </div>
            </div>
            <hr className="line2" />
            <div className="ExperienceRow">
              <div className="Work">
                <div className="LU">
                  <a href="https://www.luminant.com/">Luminant</a>
                </div>
                <div className="WorkInfo">
                  <p classname="WorkPositionName">
                    Advanced Monitoring and Diagnostics Engineer Intern | May
                    2018 - August 2018
                  </p>
                </div>
                <p1 classname="WorkDescription">
                  Created power plant Graphical User Interfaces under the
                  supervision of a Principal Generation Specialist. Used
                  historic power plant data in order to train predictive models
                  that allowed the user to detect unusual deviations in
                  temperature, vibrations, and other sensor values. Collaborated
                  with 30 Interns along with 7 Engineers in order to encompass
                  entire fleet of powerplants under the company's juristiction.
                  The project was sent to and used by Power Opimization Center
                  in order to prevent potentially catastrophic powerplant
                  failures.
                </p1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentLandingPage;
