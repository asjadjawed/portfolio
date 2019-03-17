import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";

import Menu from "./components/Menu/Menu";

import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import MySkills from "./components/MySkills/MySkills";
import MyWork from "./components/MyWork/MyWork";

class App extends Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <header>
            <Menu />
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={AboutMe} />
              <Route path="/contact" component={ContactMe} />
              <Route path="/skills" component={MySkills} />
              <Route path="/work" component={MyWork} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
