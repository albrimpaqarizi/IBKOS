import React from "react";
import { NavLink } from "react-router-dom";
import "./LoginNav.css";

const LoginNav = (props) => {
  return (
    <ul className="nav-login p-0 my-auto">
      <li className=" mr-2">
        <NavLink
          exact
          to="/login"
          className=" "
          activeClassName="active"
          onClick={props.drawerToggle}
        >
          Log in
        </NavLink>
      </li>
      <li className="">
        <NavLink
          exact
          to="/signup"
          className=""
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
