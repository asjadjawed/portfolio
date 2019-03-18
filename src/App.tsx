import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";

import Menu from "./components/Menu/Menu";

import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Home from "./components/Home/Home";
import MyWork from "./components/MyWork/MyWork";

import Card from "./components/Card/Card";

class App extends Component {
  public render() {
    // return (
    //   <Card cardID="1" heading="heading" subheading="subheading">
    //     <ul>
    //       <li>Lorem, ipsum dolor.</li>
    //       <li>Vitae, expedita eos.</li>
    //       <li>Facilis, debitis temporibus.</li>
    //     </ul>
    //   </Card>
    // );

    return (
      <Router>
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
          <footer>Copyright &copy; {new Date().getFullYear()}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
