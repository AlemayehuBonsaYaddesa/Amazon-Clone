import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./Components/DataProvider/DataProvider";
import { initialState, reducer } from "./Utility/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataProvider reducer={reducer} initialState={initialState}>
    <App />
  </DataProvider>
);
