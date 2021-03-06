import React, { Component } from "react";
import logo from '../logo.svg';
import '../App.css';

class Header extends Component {
    render() {
      return (
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <a class="navbar-brand" ><img src={logo} className="App-logo" alt="logo" /></a>
  
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#/" >Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/login">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/register">Register</a>
      </li>
    </ul>
  </nav>
      );
    }
  }
  
  export default Header;
  