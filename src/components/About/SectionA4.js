import React from "react";
import CardGrid from "./CardGrid";
import { Link } from "react-router-dom";
import "./styles/SectionA4.css";
import img1 from "../../assets/images/about/innovation.jpg";
import img2 from "../../assets/images/about/cookie.jpg";
import img3 from "../../assets/images/about/goal.jpg";
import img4 from "../../assets/images/about/benefit.jpg";
import img5 from "../../assets/images/about/sport-team.jpg";
import { useTranslation } from "react-i18next";

export const images = [img1, img2, img3, img4, img5];

const SectionA4 = () => {
  const { t } = useTranslation();

  return (
    <div className="container sectionA4" id="sectionA4">
      <div className="grid-container grid-container--fill">
        <div className="grid-box">
          <h3 className="text-capitalize font-r my-3 ">Join Our Team</h3>
          <Link
            to={`/${t("contactBtn.link")}`}
            className="btn-a btn-a1 ml-sm-4 btn-bg1 font-s-small "
          >
            {t("contactBtn.name")}
          </Link>
        </div>
        {t("ourSpaces").map((item, index) => (
          <CardGrid
            key={index}
            img={images[index]}
            title={item.title}
            desc={item.desc}
          />
        ))}
        ;
      </div>
    </div>
  );
};

export default SectionA4;
