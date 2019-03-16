import React, { Component } from "react";
import MenuButton from "./components/MenuButton/MenuButton";
import "./App.scss";

class App extends Component {
  public render() {
    return (
      <div className="App">
        <MenuButton />
      </div>
    );
  }
}

export default App;
