import React from "react";
import "./styles/SectionA4.css";

const CardGrid = (props) => {
  return (
    <div>
      <div className={`${props.img} img_css img_grid`}></div>
      <h3 className="text-capitalize font-r my-3"> {props.title}</h3>
      <p className="text-col1  text-left">{props.desc}</p>
    </div>
  );
};

export default CardGrid;
