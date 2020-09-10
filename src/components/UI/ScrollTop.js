import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Zoom, Fab } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
  fab: {
    backgroundColor: "#259bf9",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#2698fbda",
      color: "#fff",
    },
    "&:focus": {
      outline: "none !important",
    },
  },
}));

const ScrollTop = (props) => {
  const { window } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: false,
    threshold: 200,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        <Fab
          className={classes.fab}
          size="large"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  );
};

export default ScrollTop;
