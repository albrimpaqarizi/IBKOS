import React from "react";
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import { useTranslation } from "react-i18next";
import ServicesDropdown from "../../../UI/Popper/Services/Services";

function NavigationItems(props) {
  const { t } = useTranslation();

  return (
    <div className="NavigationItems">
      <ul>
      <ServicesDropdown />
        {t("mainMenu").map(({ link, name }, index) => (
          <NavigationItem
            link={`/${link}`}
            key={index}
          >
            {name}
          </NavigationItem>
        ))}
      </ul>
    </div>
  );
}

export default NavigationItems;
