import React from "react";

const FaqProgressBar = (props) => {
  return (
    <li className="my-3">
      <p className="d-inline-block my-2 font-600 text-col1 font-s-medium ">
        {props.name}
      </p>
      <div className="progress">
        <div className="progress-bar "></div>
      </div>
    </li>
  );
};

export default FaqProgressBar;
