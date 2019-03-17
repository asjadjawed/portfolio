import React, { Component } from "react";
import MenuButton from "./components/MenuButton/MenuButton";
import "./App.scss";

import AboutMe from "./components/AboutMe/AboutMe";
import Menu from "./components/Menu/Menu";

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header>
          <Menu />
        </header>
        <main>
          <AboutMe />
        </main>
      </div>
    );
  }
}

export default App;
