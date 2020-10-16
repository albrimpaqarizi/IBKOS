import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import "./MobileMenu.css";
import { ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles({
  litsItem: {
    padding: "5px 10px",
  },
  listText: {
    backgroundColor: "#f5f5f5a6 !important",
  },
});

const MobileMenuItem = (props) => {
  const classes = useStyles();

  return (
    <ListItem button className={classes.litsItem}>
      <ListItemText className={classes.listText}>
        <NavLink
          exact
          to={`/${props.link}`}
          className="link"
          activeClassName="activeMobile"
          onClick={props.drawerToggle}
        >
          {props.name}
        </NavLink>
      </ListItemText>
    </ListItem>
  );
};

export default MobileMenuItem;
