import React, { Component } from 'react';
import topo from './topograph-cutout.png';
import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="appHeader">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Media</a>
          <a href="#">Bandcamp</a>
        </div>
        <img className="topo" src={topo} width={"50%"} alt="none"/>
      </div>
    );
  }
}

export default App;
