import React from "react";
import ReactDOM from "react-dom";

import Particles from "react-particles-js";
import particlesConfig from "./particlesjs-config";

import "normalize.css";

import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

// Disable right-click on website
document.oncontextmenu = e => e.preventDefault();

ReactDOM.render(
  <div>
    <Particles
      params={particlesConfig}
      style={{
        height: "90vh",
        left: "0",
        position: "fixed",
        top: "0",
        width: "100vh",
        zIndex: "-1000"
      }}
    />
    <App />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
