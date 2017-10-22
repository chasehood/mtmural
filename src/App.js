import React, { Component } from 'react';
import topo from './topograph-cutout.png';
import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="appHeader">
          <a href="#">&nbsp;&nbsp;Home&nbsp;&nbsp;</a>
          <a href="#">&nbsp;&nbsp;About&nbsp;&nbsp;</a>
          <a href="#">&nbsp;&nbsp;Media&nbsp;&nbsp;</a>
          <a href="https://mt-mural.bandcamp.com/album/topograph-ep">&nbsp;&nbsp;Music&nbsp;&nbsp;</a>
        </div>
        <img className="topo" src={topo} width={"50%"} alt="none"/>
      </div>
    );
  }
}

export default App;
