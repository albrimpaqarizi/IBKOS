import React from "react";
import MarketCard from "./MarketCard";
import { marketImages } from "../Shared/mapData";
import "./styles/SectionS2.css";
import { useTranslation } from "react-i18next";

const SectionS2 = () => {
  const { t } = useTranslation();

  return (
    <div className="container sectionS2">
      {t("marketService").map((item, index) => {
        return (
          <MarketCard
            key={index}
            img={marketImages[index]}
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
