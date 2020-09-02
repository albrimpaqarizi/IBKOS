import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

const MethodCard = (props) => {
  return (
    <div className="my-3">
      <div>
        <Avatar src={props.img} className={props.avatar} alt="a" />
      </div>
      <h3 className="font-r text-col3">Quantitative methods</h3>
      <p className="text-col1 my-3">
        With over 1,000,000 online interviews a year, IBKOS is one of the
        largest market research providers. We are your experts for online
        surveys of any kind. We prepare ready-to-use results
      </p>
      <Link to="/#" className="btn-a btn-a1 btn-bg1 my-3">
        read more
      </Link>
    </div>
  );
};

export default MethodCard;
