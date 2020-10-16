import React from "react";

const MarketCard = (props) => {
  return (
    <div className="row my-5 mx-0 ">
      <div className="col-12 col-lg-6 about-consult py-2">
        <div className={`${props.img} img_css img_market `}></div>
      </div>
      <div className="col-12 col-lg-6 pr-4">
        <div className="d-flex justify-content-start align-items-baseline flex-row">
          <div className="iconCards">
            <div className={`img_css iconCard ${props.iconCard}`} />
          </div>
          <h2 className="font-r mb-3 font-500 ">
            {props.title} <br />
            <span className="border-span"></span>
          </h2>
        </div>

        <p className="text-col1 marketService_desc"> {props.desc} </p>
        <ul className="p-0 list-unstyled my-4  font-s-medium ">
          {props.list.map((item, index) => (
            <li key={index} className="market_li text-col1">
              <span></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MarketCard;
