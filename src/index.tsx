// import React from "react";
import ReactDOM from "react-dom";
import "@shopify/polaris/dist/styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";

ReactDOM.render(
  <AppProvider i18n={enTranslations}>
    <App />
  </AppProvider>,
  document.getElementById("root")
);

reportWebVitals();
