import React from "react";
import { AnimatePresence } from "framer-motion";
import { Switch } from "react-router-dom";

const AnimatedRoutes = (props) => {
  const { location } = useLocation;
  return (
    <AnimatePresence exitBeforeEnter={true} initial={false}>
      <Switch location={props.location} key={props.location.pathname}>
        {props.children}
      </Switch>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
