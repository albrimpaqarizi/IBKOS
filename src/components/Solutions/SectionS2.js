import React from "react";
import MarketCard from "./MarketCard";
import MediaCard from "./MediaCard";
import "./styles/SectionS2.css";
import { useTranslation } from "react-i18next";

const persons = ["Arturo Meier", "Anida Santos"];

const SectionS2 = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="sectionS2">
        {t("mediaCards").map((item, index) => {
          return (
            <MediaCard
              key={index}
              person={persons[index]}
              profileImg={`profile_member${index + 1}`}
              consultImg={`media_consult${index + 1}`}
              title={item.title}
              offsetBtn={-170}
              linkBtn="sectionS5"
              order={t("orderBtn.name")}
              desc={item.desc}
              teamMember={item.teamMember}
              iconCard={`iconCard_media_${index + 1}`}
            />
          );
        })}
        {t("marketService").map((item, index) => {
          return (
            <MarketCard
              key={index}
              img={`img_market${index + 1}`}
              title={item.title}
              desc={item.desc}
              list={item.list}
              iconCard={`iconCard_market_${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SectionS2;
