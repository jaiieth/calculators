import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import App from "./App2";
import AppToDoList from "./AppToDoList";
import AppLocalStorage from "./AppLocalStorage";
import AppChart from "./AppChart";
import AppDashBoard from "./AppDashBoard";
import reportWebVitals from "./reportWebVitals";
import AppAccordian from "./AppAccordian";
import AppTrivia from "./AppTrivia";
import Map from "./Dashboard/Map";
import * as serviceWorker from './serviceWorker';
import AppCalculator from "./AppCalculator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <AppLocalStorage /> */}
    {/* <AppToDoList /> */}
    {/* <AppChart /> */}
    {/* <Map /> */}
    {/* <AppDashBoard /> */}
    {/* <AppAccordian /> */}
    {/* <AppTrivia /> */}
    <AppCalculator />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();