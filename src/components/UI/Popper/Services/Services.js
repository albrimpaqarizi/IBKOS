import React from "react";
import PopperBox from "../PopperBox";
import PopperItem from "../PopperItem";
import { useTranslation } from "react-i18next";
import "./Services.css";
import "../index.css";
import { paramCase } from "change-case";

const Services = (props) => {
  const { t } = useTranslation();

  return (
    <PopperBox
      name={t("servicesPopper.name")}
      width="650px"
    >
      <div className="services_popper_container">
        <ul className="services_popper_list">
          {t("servicesPopper.servicesMenu").map((item, index) => (
            <PopperItem
              key={index}
              link={paramCase(item.link)}
              name={item.name}
              icon={`services_popper_icon${index+1}`}
              text={item.text}
            />
          ))}
        </ul>
      </div>
    </PopperBox>
  );
};

export default Services;
