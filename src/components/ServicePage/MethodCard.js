import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ReadMore from "../UI/Button/ReadMore";

const MethodCard = (props) => {
  return (
    <div className="my-4">
      <div>
        <Avatar
          src={props.img}
          className={props.avatar}
          alt="Quantitative methods"
        />
      </div>
      <h3 className="font-r text-col3">{props.title} </h3>
      <p className="text-col1 my-3">{props.desc} </p>
      <ReadMore
        link="sectionS5"
        offset={-90}
        classProps="btn-bg1 font-s-small mt-md-4 mt-3"
      />
    </div>
  );
};

export default MethodCard;
