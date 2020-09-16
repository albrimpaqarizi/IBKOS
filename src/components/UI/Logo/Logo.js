import React from "react";
import logo from "../../../assets/images/logo.svg";
import "./Logo.css";
import { Link } from "react-router-dom";

const Logo = (props) => (
  <React.Fragment>
    <Link to="/" className="logo pl-2">
      <img src={logo} className="img" alt="IBKOS" />
      <span className="logo-name">ibkos</span>
    </Link>
  </React.Fragment>
);

export default Logo;
