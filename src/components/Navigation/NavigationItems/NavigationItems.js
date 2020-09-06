import React from "react";
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import LoginNav from "./LoginNav/LoginNav";
import { useTranslation } from "react-i18next";

function NavigationItems(props) {
  const { t } = useTranslation();

  return (
    <div className="NavigationItems">
      <ul>
        {t("mainMenu", { returnObjects: true }).map(({ link, name }, index) => (
          <NavigationItem
            clicked={props.drawerToggle}
            link={`/${link}`}
            key={index}
          >
            {name}
          </NavigationItem>
        ))}

        {/* <NavigationItem clicked={props.drawerToggle} link="/about">
          About Us
        </NavigationItem>
        <NavigationItem clicked={props.drawerToggle} link="/403">
          Our Team
        </NavigationItem>
        <NavigationItem clicked={props.drawerToggle} link="/service">
          Service
        </NavigationItem>
        <NavigationItem clicked={props.drawerToggle} link="/404">
          Pages
        </NavigationItem>
        <NavigationItem clicked={props.drawerToggle} link="/contact">
          Contact Us
        </NavigationItem> */}
      </ul>
      <LoginNav />
    </div>
  );
}

export default NavigationItems;
