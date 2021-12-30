import React from "react";
import ReactDOM from "react-dom";
import { VertRadialSider } from "./VertRadialSider";
import { GlobalStyle } from "./styles/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <VertRadialSider />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
