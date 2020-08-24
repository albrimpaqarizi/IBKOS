import React, { useState, Fragment } from "react";
import Toolbar from "./Toolbar";
import { Drawer } from "@material-ui/core";
import Nav from "./NavigationItems/NavigationItems";
import "./Toolbar.css";

const Header = () => {
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);

  return (
    <Fragment>
      <Toolbar drawerToggle={toggleTrueFalse} />
      <Drawer open={isToggled} onClose={toggleTrueFalse}>
        <div className="list">
          <Nav drawerToggle={toggleTrueFalse} />
        </div>
      </Drawer>
    </Fragment>
  );
};

export default Header;
