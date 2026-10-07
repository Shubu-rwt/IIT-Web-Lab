
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

const deploymentBase = "/~bmz228461";

const pathname = window.location.pathname;

const isDeploymentPath =
  pathname === deploymentBase ||
  pathname.startsWith(`${deploymentBase}/`);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter
      basename={isDeploymentPath ? deploymentBase : ""}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);