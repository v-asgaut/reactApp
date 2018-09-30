import React, { Component } from 'react';
import Header from "./header/header.component";
import Footer from "./footer/footer.component";
import Home from "./home/home.component";
import Login from "./login/login.component";
import Register from "./register/register.component";
import {HashRouter as Router, Switch, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
      <Header></Header>
      <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      </Switch>
      </Router>
      <Footer></Footer>
      </div>
    );
  }
}

export default App;
