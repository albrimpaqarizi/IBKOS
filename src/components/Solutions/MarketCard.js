import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MarketCard = (props) => {
  const { t } = useTranslation();
  return (
    <div className="row my-5 mx-0"  >
      <div className="col-12 col-lg-6 about-consult py-2">
      <div className={`${props.img} img_css img_market `}></div>
      </div>
      <div className="col-12 col-lg-6 pr-4">
        <h2 className="font-r mb-3 font-500 ">
          {props.title} <br />
          <span className="border-span" ></span>
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
      
    </div>
  );
};

export default MarketCard;
