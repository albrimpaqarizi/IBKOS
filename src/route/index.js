import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import SignUp from "../pages/SignUp";
import Pages from "../pages/Pages";
import OurTeam from "../pages/OurTeam";
import Layout from "../layout/DefaultLayout";
import AnimatedRoutes from "./AnimatedRoutes";
import RouteTransition from "./RouteTransition";

const routeWrapper = (props) => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default routeWrapper;
