import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const MenuList = (props) => {
  return (
    <div className="col-sm-6 col-md-3">
      <h2 className="font-r text-white">{props.title} </h2>
      <ul className="footer-list">
        {props.items.map((item, index) => {
          return (
            <li key={index}>
              <Link to="/#">{item}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuList;
