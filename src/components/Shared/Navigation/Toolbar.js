import React from "react";
import { AppBar, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavigationItems from "./NavigationItems/NavigationItems";
import Logo from "../../UI/Logo/Logo";
import DrawerToggle from "../DrawerToggle";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import "./Toolbar.css";
import LogNav from "./LoginNav/LoginNav";

const useStyles = makeStyles({
  appBar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px",
    alignItems: "center",
  },
  fullList: {
    width: "auto",
  },
  box1: {
    boxShadow: "none ",
    backgroundColor: "transparent ",
    transition: "all 0.7s ease-out",
    zIndex: "1",
    padding: "15px 3px",
  },
  box2: {
    boxShadow:
      "0px 3px 5px -1px #00000033, 0px 6px 10px 0px #00000024, 0px 1px 18px 0px #0000001f ",
    backgroundColor: "#1c1e20 !important ",
    transition: "all 0.7s ease-in",
    padding: "9px 3px",
  },
});

const Toolbar = (props) => {
  const classes = useStyles();
  const { window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window ? window() : undefined,
  });

  return (
    <AppBar color="inherit" className={trigger ? classes.box2 : classes.box1}>
      <Container maxWidth="lg" className={classes.appBar}>
        <Logo />
        <div className="DesktopOnly">
          <NavigationItems />
        </div>
        <div className="DesktopOnly">
          <LogNav />
        </div>
        <div className="DrawerToggle">
          <DrawerToggle clicked={props.drawerToggle} />
        </div>
      </Container>
    </AppBar>
  );
};

export default Toolbar;
