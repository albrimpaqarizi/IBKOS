import React, { useState, Fragment } from "react";
import Toolbar from "./Navigation/Toolbar";
import "./Navigation/Toolbar.css";
import MobileMenu from "./MobileMenu/MobileMenu";

const Header = () => {
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);

  return (
    <Fragment>
      <Toolbar drawerToggle={toggleTrueFalse} />
      <MobileMenu drawerToggle={toggleTrueFalse} isToggled={isToggled} />
    </Fragment>
  );
};

export default Header;
