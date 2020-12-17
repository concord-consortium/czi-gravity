import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/app";
import Shutterbug from "shutterbug";

import "./index.scss";

// Support Shutterbug snapshots.
Shutterbug.enable();

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
