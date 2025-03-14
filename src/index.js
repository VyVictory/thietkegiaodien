import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router/AppRouter"; // Import file module router
import reportWebVitals from "./reportWebVitals";
import AppProvider from "./context/AppProvider";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <AppRouter />
  </AppProvider>
);

reportWebVitals();
