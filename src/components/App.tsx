import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// Should use BrowserRouter, but HashRouter needed for GitHub Pages

import "./App.scss";

import Menu from "./Menu/Menu";

import AboutMe from "./Pages/AboutMe/AboutMe";
import ContactMe from "./Pages/ContactMe/ContactMe";
import Home from "./Pages/Home/Home";
import MyWork from "./Pages/MyWork/MyWork";

class App extends Component {
  public render() {
    return (
      <Router basename="/">
        <div className="App">
          <header>
            <Menu />
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={AboutMe} />
              <Route path="/contact" component={ContactMe} />
              <Route path="/work" component={MyWork} />
            </Switch>
          </main>
          <footer>
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
