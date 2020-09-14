import React from "react";
import "./main.css";
import Countdown from "react-countdown-now";

const ComingSoon = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>You are good to go!</span>;
    } else {
      return (
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
          <h3 className="m-4">
            Days
            <br />
            <span> {days} </span>
          </h3>
          <h3 className="m-4">
            Hours
            <br />
            <span> {hours} </span>
          </h3>
          <h3 className="m-4">
            Minutes
            <br />
            <span> {minutes} </span>
          </h3>
          <h3 className="m-4">
            Seconds
            <br />
            <span> {seconds} </span>
          </h3>
        </div>
      );
    }
  };

  return (
    <div className="fullBackground comson">
      <div className=" container">
        <div className="text-center mb-0">
          <h1>
            Our website is under construction.We`ll be here soon with our new
            awesome site{" "}
          </h1>
          <Countdown date={Date.now() + 200000000} renderer={renderer} />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
