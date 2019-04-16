import React, { Component } from 'react';
import './ContentLandingPage.css';
import Youtube from './Youtube';

class ContentLandingPage extends Component{
  render(){
    return(
      <div className="content">
      <Youtube />
      <div className="center">
        <h1 className="top">
            My goal is to observe and learn from those who are wiser, and have more experience than me, in order to improve my own character.
        </h1>
        <h1 className="welcome">
          Welcome to my website!
        </h1>
        </div>
      </div>
    );
  }
}

export default ContentLandingPage;
