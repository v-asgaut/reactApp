import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <a class="navbar-brand" ><img src={logo} className="App-logo" alt="logo" /></a>

  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" >Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" >Build</a>
    </li>
  </ul>
</nav>
</div>
    );
  }
}

export default App;
