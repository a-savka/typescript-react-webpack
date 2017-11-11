import * as React from "react";
import * as ReactDOM from "react-dom";
import Hello from "./components/Hello";

require('./style/app.scss');

ReactDOM.render(
  <Hello name="Santa" />,
  document.getElementById("root")
)
