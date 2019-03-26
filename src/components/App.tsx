import React, { Component } from "react";
import ReactGA from "react-ga";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// Should use BrowserRouter, but HashRouter needed for GitHub Pages

import "./App.scss";

import Menu from "./Menu/Menu";

import AboutMe from "./Pages/AboutMe/AboutMe";
import ContactMe from "./Pages/ContactMe/ContactMe";
import Home from "./Pages/Home/Home";
import MyWork from "./Pages/MyWork/MyWork";
import Tech from "./Pages/Tech/Tech";

import license from "../images/license.svg";

ReactGA.initialize("UA-136945448-1");

class App extends Component {
  public componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

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
              <Route exact path="/skills" component={Tech} />
              <Route path="/contact" component={ContactMe} />
              <Route path="/work" component={MyWork} />
            </Switch>
          </main>
          <footer>
            <small>Licensed under CC BY 4.0</small>
            <a
              rel="license"
              href="http://creativecommons.org/licenses/by/4.0/"
              target="_blank"
            >
              <img
                alt="Creative Commons License"
                style={{
                  borderWidth: "0",
                  display: "block",
                  margin: "10px",
                  width: "75%"
                }}
                src={license}
              />
            </a>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
