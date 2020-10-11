import React from "react";
import { BrowserRouter as Router, Route, Switch,  Redirect, } from "react-router-dom";
import Layout from "./layout/DefaultLayout";
import ScrollToTop from "./components/Shared/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import SignUp from "./pages/SignUp";
import Pages from "./pages/Pages";
import OurTeam from "./pages/OurTeam";

function route() {
  return (
    <Router>
       <ScrollToTop />
      <Layout>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/about" exact render={() => <About />} />
          <Route path="/service" exact render={() => <Service />} />
          <Route path="/contact" exact render={() => <Contact />} />
          <Route path="/login" exact render={() => <Login />} />
          <Route path="/signup" exact render={() => <SignUp />} />
          <Route path="/pages" exact render={() => <Pages />} />
          <Route path="/our-team" exact render={() => <OurTeam />} />
          <Route to="/404" render={() => <PageNotFound />} />
          <Redirect to="/404" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default route;
