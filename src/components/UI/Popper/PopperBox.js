import React, { useRef, useState, useEffect } from "react";
import "./index.css";
import { ClickAwayListener, Popper, Zoom, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    maxWidth: "50%",
    width: props.width,
    marginLeft: "-50px",
  }),
  paper: {
    borderRadius: "20px",
    padding: "1rem",
  },
}));

const PopperBox = (props) => {
  const classes = useStyles(props);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [arrowRef, setarrowRef] = useState(null);

  const handleArrowRef = (node) => {
    setarrowRef(node);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <li className="navigation_link " onMouseLeave={handleClose}>
        <button
          ref={anchorRef}
          aria-haspopup="true"
          onClick={handleToggle}
          className="button a_white"
          onMouseOver={handleToggle}
        >
          {props.name}
        </button>
      </li>

      <Popper
        placement="bottom-start"
        className={classes.root}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        onMouseLeave={handleClose}
        disablePortal
        modifiers={{
          flip: {
            enabled: true,
          },
          arrow: {
            enabled: true,
            element: arrowRef,
          },
          preventOverflow: {
            enabled: "true",
            boundariesElement: "scrollParent",
          },
        }}
      >
        <Zoom in={open}>
          <div>
            {open && (
              <span className="arrow arrow_white" ref={handleArrowRef} />
            )}
            <Paper
              className={classes.paper}
              elevation={2}
              onMouseLeave={handleClose}
            >
              <ClickAwayListener onClickAway={handleClose}>
                {props.children}
              </ClickAwayListener>
            </Paper>
          </div>
        </Zoom>
      </Popper>
    </div>
  );
};

export default PopperBox;
