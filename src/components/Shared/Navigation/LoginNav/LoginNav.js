import React from "react";
import { NavLink } from "react-router-dom";
import "./LoginNav.css";
import { useTranslation } from "react-i18next";

const LoginNav = (props) => {
  const { t } = useTranslation();
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
          {t("logInBtn")}
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
          {t("signUpBtn")}
        </NavLink>
      </li>
    </ul>
  );
};

export default LoginNav;
