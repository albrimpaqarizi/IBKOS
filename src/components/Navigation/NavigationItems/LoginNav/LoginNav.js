import React from "react";
import { NavLink } from "react-router-dom";
import "./LoginNav.css";

const LoginNav = (props) => {
  return (
    <ul className="nav-login">
      <li className="NavigationItem login-btn">
        <NavLink
          exact
          to="/login"
          activeClassName="active"
          onClick={props.drawerToggle}
        >
          Log in
        </NavLink>
      </li>
      <li className="NavigationItem signup">
        <NavLink
          exact
          to="/signup"
          activeClassName="active"
          onClick={props.drawerToggle}
        >
          sign up
        </NavLink>
      </li>
    </ul>
  );
};

export default LoginNav;
