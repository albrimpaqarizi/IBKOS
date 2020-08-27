import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    "&.MuiAvatar-root": {
      display: "inline-flex",
    },
  },
}));

const ImageAvatars = (props) => {
  const classes = useStyles();

  return (
    <li className="my-3 py-2 d-flex align-items-center">
      <Avatar alt="Remy Sharp" src={props.avatar} className={classes.avatar} />
      <p className="text-white ml-2 text-left mb-0 w-75 dt d-inline-block">
        {props.desc}
      </p>
    </li>
  );
};

export default ImageAvatars;
