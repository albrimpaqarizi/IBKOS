import React, { Suspense } from "react";
import "./App.css";
import Route from "./route.js";
// import { I18nextProvider } from "react-i18next";
// import "./i18n";

function App() {
  return (
    <Suspense fallback="loading">
      {/* <I18nextProvider i18n={i18n}> */}
      <Route />
      {/* </I18nextProvider> */}
    </Suspense>
  );
}

export default App;
