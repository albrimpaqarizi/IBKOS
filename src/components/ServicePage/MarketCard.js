import React from "react";
import { Link } from "react-router-dom";

const MarketCard = (props) => {
  return (
    <div>
      <div>
        <h2 className="font-r mb-3">
          {props.title} <br />
          <span></span>
        </h2>
        <p className="text-col1"> {props.desc} </p>
        {props.btn.map((item, index) => {
          return (
            <Link to={item.to} key={index} className="btn-a btn-a1 btn-bg1 ">
              {item.name}
            </Link>
          );
        })}
      </div>
      <img src={props.img} className="" alt="market" />
    </div>
  );
};

export default MarketCard;
