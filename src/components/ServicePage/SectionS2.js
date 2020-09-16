import React from "react";
import MarketCard from "./MarketCard";
import "./styles/SectionS2.css";
import { useTranslation } from "react-i18next";

const marketImages = ["img_market1", "img_market2", "img_market3"];

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
