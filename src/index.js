import React from "react";
// import { transitions, positions, Provider as AlertProvider } from "react-alert";
import ReactDOM from "react-dom";
// import { registerLocale, setDefaultLocale } from "react-datepicker";
// import es from "date-fns/locale/es";

//import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/main.scss";

import App from "./App";

 const container = document.getElementById("app");

// const alertDefaultOptions = {
//     position: positions.TOP_CENTER,
//     type: "info",
//     timeout: 4000,
//     offset: "10px",
//     transition: transitions.SCALE,
// };

ReactDOM.render(
    // <AlertProvider template={Alert} {...alertDefaultOptions}>
        <App />,
    // </AlertProvider>,
    container
);
