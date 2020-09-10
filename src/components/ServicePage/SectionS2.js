import React from "react";
import MarketCard from "./MarketCard";
import { marketList } from "../Shared/mapData";
import "./styles/SectionS2.css";

const SectionS2 = () => {
  return (
    <div className="container sectionS2">
      {marketList.map((item, index) => {
        return (
          <MarketCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            btn={item.btn}
          />
        );
      })}
    </div>
  );
};

export default SectionS2;
