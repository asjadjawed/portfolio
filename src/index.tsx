import React from "react";
import ReactDOM from "react-dom";

import "normalize.css";

import Particles from "react-particles-js";
import particlesConfig from "./config/particlesJSConfig";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Disable right-click on website
document.oncontextmenu = e => e.preventDefault();

const particlesStyle = {
  position: "fixed",
  height: "100vh",
  width: "100vh",
  left: "0",
  top: "0",
  zIndex: "-1000"
};

ReactDOM.render(
  <div>
    <Particles params={particlesConfig} style={particlesStyle} />
    <App />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
