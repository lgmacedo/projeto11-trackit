import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import ResetStyle from "./style/ResetStyle";
import GlobalStyle from "./style/GlobalStyle";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
