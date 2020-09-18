import React from "react";
import { Route } from "react-router-dom";
import MountTransition from "./MountTransition";
const RouteTransition = (props) => {
  return (
    <Route exact path={props.path} {...props.rest}>
      <MountTransition slide={0} slideUp={90}>
        {props.children}
      </MountTransition>
    </Route>
  );
};

export default RouteTransition;
