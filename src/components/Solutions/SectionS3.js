import React from "react";
import "./styles/index.css";
import "./styles/SectionS3.css";
import MediaCard from "./MediaCard";
import { focusCardImg } from "../Shared/mapData";
import { useTranslation } from "react-i18next";
import OurButton from "../UI/Button/OurButton";

const SectionS3 = () => {
  const { t } = useTranslation();

  return (
    <div className="sectionS3 fullBackground">
      <div className="container ">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <OurButton
            btn="focusBtn"
            classProps="text-capitalize px-4 py-2 font-s-small"
          />
          <h1 className="font-r text-capitalize my-3 text-center text-white">
            {t("ourFocus")}
          </h1>
          <div className="d-flex media-card">
            {t("ourFocusList").map((item, index) => (
              <MediaCard
                key={index}
                img={focusCardImg[index]}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionS3;
