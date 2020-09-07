import React, { Suspense } from "react";
import "./App.css";
import Route from "./route.js";
// import { I18nextProvider } from "react-i18next";
// import "./i18n";
import Spinner from "./components/UI/Spinner/Spinner";

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      {/* <I18nextProvider i18n={i18n}> */}
      <Route />
      {/* </I18nextProvider> */}
    </Suspense>
  );
}

export default App;
