import React from "react";

const FaqProgressBar = (props) => {
  return (
    <li className="my-3">
      <p className="light-bg m-1   dt d-inline-block">{props.name}</p>
      <div className="progress h-1px">
        <div className="progress-bar "></div>
      </div>
    </li>
  );
};

export default FaqProgressBar;
