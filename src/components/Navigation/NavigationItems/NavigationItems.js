import React from "react";
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import LoginNav from "./LoginNav/LoginNav";

function NavigationItems(props) {
  return (
    <div className="NavigationItems">
      <ul>
        <NavigationItem clicked={props.drawerToggle} link="/">
          Home
        </NavigationItem>
        <NavigationItem clicked={props.drawerToggle} link="/about">
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
        </NavigationItem>
      </ul>
      <LoginNav />
    </div>
  );
}

export default NavigationItems;
