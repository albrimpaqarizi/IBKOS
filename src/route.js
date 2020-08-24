import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

function route() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/about" exact render={() => <About />} />
          <Route path="/service" exact render={() => <Service />} />
          <Route path="/contact" exact render={() => <Contact />} />
          <Route path="/login" exact render={() => <Login />} />
          <Route to="/404" render={() => <PageNotFound />} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default route;
