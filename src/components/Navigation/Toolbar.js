import React from "react";
import { AppBar, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Toolbar.css";
import NavigationItems from "./NavigationItems/NavigationItems";
import Logo from "../UI/Logo/Logo";
import DrawerToggle from "./DrawerToggle/DrawerToggle";

const useStyles = makeStyles({
  appBar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    paddingTop: "20px",
  },
  fullList: {
    width: "auto",
  },
  box: {
    boxShadow: "none !important",
    backgroundColor: "transparent",
    position: "absolute",
  },
});

function Toolbar(props) {
  const classes = useStyles();
  return (
    <AppBar color="inherit" className={classes.box}>
      <Container maxWidth="lg" className={classes.appBar}>
        <Logo />
        <div className="DesktopOnly">
          <NavigationItems />
        </div>
        <div className="DrawerToggle">
          <DrawerToggle clicked={props.drawerToggle} />
        </div>
      </Container>
    </AppBar>
  );
}

export default Toolbar;
