import React from "react";
import "./styles/SectionA4.css";

const CardGrid = (props) => {
  return (
    <div>
      <img src={props.img} className="img-fluid" alt="null" />
      <h3 className="text-capitalize font-r my-3"> {props.title}</h3>
      <p className="text-col1  text-left">
        Cur domus ortum? Ferox, camerarius aususs rare talem de primus, placidus
        torquis.
      </p>
    </div>
  );
};

export default CardGrid;
