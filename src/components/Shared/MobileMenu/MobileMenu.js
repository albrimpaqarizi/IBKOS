import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, List, Divider, IconButton } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useTranslation } from "react-i18next";
import "./MobileMenu.css";
import MobileMenuItem from "./MobileMenuItem";

const useStyles = makeStyles((theme) => ({
  drawer: {
    "& > .MuiDrawer-paper": {
      width: "170px !important",
    },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
}));

const MobileMenu = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Drawer
      open={props.isToggled}
      onClose={props.drawerToggle}
      anchor="right"
      className={classes.drawer}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={props.drawerToggle}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {t("mainMenu").map(({ link, name }, index) => (
          <MobileMenuItem
            key={index}
            link={link}
            name={name}
            drawerToggle={props.drawerToggle}
          />
        ))}
      </List>
      <Divider />
      <List>
        <MobileMenuItem
          link="login"
          name={t("logInBtn")}
          drawerToggle={props.drawerToggle}
        />
        <MobileMenuItem
          link="signup"
          name={t("signUpBtn")}
          drawerToggle={props.drawerToggle}
        />
      </List>
    </Drawer>
  );
};

export default MobileMenu;
