import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";

import "./styles.css";
import { CounterApp } from "./CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <App />
      {/* <FirstApp title="Soy un prop" x={3} /> */}
      <CounterApp value={10} />
    </>
  </React.StrictMode>
);
