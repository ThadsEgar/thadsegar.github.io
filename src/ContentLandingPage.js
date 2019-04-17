import React, { Component } from 'react';
import './ContentLandingPage.css';
class ContentLandingPage extends Component{
  render(){
    return(
      <div className="content">
        <div className="center">
          <h1 className="top">
             Aspiring Full-Stack Software Engineer
          </h1>
          <hr className="line"/>
          <h1 className="welcome">
            Thads Egar
          </h1>
        </div>

        <div className="Sections">
        <div className="DivWhite">
          <h1 className="About">
            ABOUT
          </h1>
          <hr className="line"/>
          <p>
            ||This website is currently under construction||* <br/>My name is Thads Michael Egar. <br/> I am a Junior level student at the University of Texas at Dallas pursuing my Bachelors Degree in Computer Science.
            My main programming language is Java but I am trying to learn more technologies in order to complement my current skill-set.
            I am interested in Machine Learning and Cloud Services.
            My other interests include hiking, drawing, listening to podcasts, and learning about the natural universe.
          </p>
        </div>
        <div className="DivGrey">
          <h1 className="Skills">
            SKILLS
          </h1>
          <hr className="line"/>
          <p>
            Below is a brief summary of my skills. If you wish to see more, please feel free to look at my resume up top.
            <br/>
            Programming Languages: C++, C, Java, JavaScript, CSS, HTML
            <br/>
            Technologies: Git/GitHub, react.js, node.js
            <br/>
            Operating Systems: Windows, Linux/Unix, macOS, Android
          </p>
        </div>
        <div className="DivWhite">
          <h1 className="Projects">
              PROJECTS
          </h1>
          <hr className="line"/>
          <p>
            COMING SOON
          </p>
        </div>
        <div className="DivGrey">
          <h1 className="Projects">
              EXPERIENCE
          </h1>
          <hr className="line"/>
          <p>
            COMING SOON
          </p>
        </div>
        </div>

      </div>
    );
  }
}

export default ContentLandingPage;
