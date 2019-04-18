import React from "react";
import ReactDOM from "react-dom";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import "./Header.css";

class MyHeader extends React.Component {
  render() {
    return (
      <div>
        <Header transparent className="Header">
          <Navigation className="NavNames">
            <a href="#center">Home</a>
            <a href="#about">About</a>
            <a>Projects</a>
            <a href="https://www.linkedin.com/in/thads-michael-egar/">
              LinkedIn
            </a>
            <a href="https://github.com/ThadsMichaelEgar">GitHub</a>
            <a>Resume</a>
          </Navigation>
        </Header>
      </div>
    );
  }
}

export default MyHeader;
