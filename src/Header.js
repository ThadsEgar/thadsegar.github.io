import React from 'react';
import ReactDOM from 'react-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import './Header.css';

class MyHeader extends React.Component {
  render() {
    return (
      <div>
        <Header transparent className="Header">
          <Navigation className="NavNames">
            <a>Home</a>
            <a>About</a>
            <a href="https://www.linkedin.com/in/thads-michael-egar/">LinkedIn</a>
            <a href="https://github.com/ThadsMichaelEgar">GitHub</a>
            <a>Projects</a>
          </Navigation>
        </Header>
      </div>
    );
  }
}

export default MyHeader;
