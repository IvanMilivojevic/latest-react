import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import "./index.css";
import App from "./Containers/App";
import * as serviceWorker from "./serviceWorker";

Axios.defaults.headers.common["Authorization"] = "DEFAULT TOKEN";
Axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

// Axios.interceptors.request.use(
//   (config) => {
//     console.log(config);

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
