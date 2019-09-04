import React, { Component } from "react";
import ReactGA from "react-ga";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// Should use BrowserRouter, but HashRouter needed for GitHub Pages

import "./scss/App.scss";

import Menu from "./components/Menu/Menu";

import AboutMe from "./pages/AboutMe/AboutMe";
import ContactMe from "./pages/ContactMe/ContactMe";
import Home from "./pages/Home/Home";
import MyWork from "./pages/MyWork/MyWork";
import Tech from "./pages/Tech/Tech";

import license from "./images/license.svg";

ReactGA.initialize("UA-136945448-1");

class App extends Component {
  public componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  public render() {
    return (
      <Router basename="/">
        <div className="App">
          <header className="App__header">
            <Menu />
          </header>
          <main className="App__main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={AboutMe} />
              <Route exact path="/skills" component={Tech} />
              <Route path="/contact" component={ContactMe} />
              <Route path="/work" component={MyWork} />
            </Switch>
          </main>
          <footer className="App__footer">
            <p className="App__licenseText">
              <small>Licensed under CC BY 4.0</small>
            </p>

            <a
              href="http://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="license noopener noreferrer"
              className="App__license"
            >
              <img alt="Creative Commons License" src={license} />
            </a>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
