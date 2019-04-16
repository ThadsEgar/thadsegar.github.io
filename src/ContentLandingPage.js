import React, { Component } from 'react';
import './ContentLandingPage.css';
class ContentLandingPage extends Component{
  render(){
    return(
      <div className="content">
        <div className="center">
          <h1 className="top">
            My goal is to observe and learn from those who are wiser than me in order to mold my own character.
          </h1>
          <h1 className="welcome">
            Welcome to my website.
          </h1>
        </div>
        <div className="AboutDiv">
          <h1 className="About">
            ABOUT
          </h1>
          <p>
            My name is Thads Egar. I am a Junior level student at the University of Texas at Dallas currently pursuing my Bachelors Degree in Computer Science.
          </p>
        </div>
        <div className="AboutDiv">
          <h1 className="About">
            Projects
          </h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div className="AboutDiv">
          <h1 className="About">
            ABOUT
          </h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
    );
  }
}

export default ContentLandingPage;
