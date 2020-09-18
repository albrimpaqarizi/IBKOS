import React, { Suspense } from "react";
import "./App.css";
import Route from "./route";
import "animate.css/animate.min.css";
import Spinner from "./components/UI/Spinner/Spinner";

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Route />
    </Suspense>
  );
}

export default App;
