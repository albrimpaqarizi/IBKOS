import React from "react";
import "./styles/SectionS4.css";
import MethodCard from "./MethodCard";
import { useTranslation } from "react-i18next";

const imgMethods = ["img_method1", "img_method2"];

const SectionS3 = () => {
  const { t } = useTranslation();

  return (
    <div className="sectionS4 py-5">
      <div className="container ">
        <h1 className="font-r text-capitalize text-center mb-3">
          {t("ourMethodsText")}{" "}
        </h1>
        <div className="sectionS4-cards">
          {t("ourMethods").map((item, index) => (
            <MethodCard
              key={index}
              img={imgMethods[index]}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionS3;
