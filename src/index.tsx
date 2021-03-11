import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "react app", // app name registered
    entry: "//localhost:20000",
    container: "#reactApp",
    activeRule: "/reactApp",
  },
  {
    name: "vue app", // app name registered
    entry: "//localhost:10000",
    container: "#vueApp",
    activeRule: "/vueApp",
  },
]);

start();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
