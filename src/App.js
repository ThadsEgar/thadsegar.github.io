import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import Header from './Header';
import Footer from './Footer';
import Youtube from './Youtube';

//other
import YouTube from 'react-youtube';
import {Layout, Navigation, Drawer, Content} from 'react-mdl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Content">
          <Header />
          <Youtube />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
