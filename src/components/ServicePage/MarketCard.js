import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MarketCard = (props) => {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <h2 className="font-r mb-3 font-500 ">
          {props.title} <br />
          <span></span>
        </h2>
        <p className="text-col1"> {props.desc} </p>
        {props.btn.map((item, index) => {
          return (
            <Link
              to={`/${t(`${item}.link`)}`}
              key={index}
              className="btn-a btn-a1 btn-bg1 "
            >
              {t(`${item}.name`)}
            </Link>
          );
        })}
      </div>
      <img src={props.img} className="" alt="Market images" />
    </div>
  );
};

export default MarketCard;
