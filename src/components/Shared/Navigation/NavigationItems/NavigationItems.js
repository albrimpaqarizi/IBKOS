import React from "react";
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import { useTranslation } from "react-i18next";

function NavigationItems(props) {
  const { t } = useTranslation();

  return (
    <div className="NavigationItems">
      <ul>
        {t("mainMenu").map(({ link, name }, index) => (
          <NavigationItem
            clicked={props.drawerToggle}
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
