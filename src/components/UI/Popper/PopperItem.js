import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import "./Services/Services.css";
const PopperItem = (props) => {
  return (
    <li>
        <div className="popper_item_icon" >
        <div className={props.icon}/>
        </div>
        <div className="d-flex flex-column justify-content-start align-items-start" >
      <Link to={`/${props.link}`}>
        {props.name}
      </Link>
      <p className="col_light mb-0 small" >{props.text} </p>
        </div>
    </li>
  );
};

export default PopperItem;
