import React from "react";
import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import "./styles/SectionA6.css";

const useStyles = makeStyles({
  dot: {
    backgroundColor: "#2699fb",
    padding: "6px",
    borderWidth: "4px",
    borderColor: "#e8f7fd",
    margin: "0",
  },
  item: {
    "&.MuiTimelineItem-missingOppositeContent": {
      "&:before": {
        flex: 0,
      },
    },
  },
  sep: {
    width: "1px",
    backgroundColor: "rgb(112 112 112 / 11%)",
  },
  divider: {
    width: "90%",
    backgroundColor: "rgb(112 112 112 / 11%)",
    margin: "30px 0",
  },
  content: {
    paddingBottom: "0",
  },
});

const TimelineHistory = (props) => {
  const classes = useStyles();
  return (
    <TimelineItem className={classes.item}>
      <TimelineSeparator>
        <TimelineDot className={classes.dot} />
        <TimelineConnector className={classes.sep} />
      </TimelineSeparator>
      <TimelineContent className={classes.content}>
        <h3 className="font-r ">
          <span className="text-col3">{props.age} </span>
          {props.title}
        </h3>
        <p className="text-col1 timeline-p my-3">
          Cur domus ortum? Ferox, camerarius aususs rare talem de primus,
          placidus torquis.
        </p>
        <Divider className={classes.divider} />
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineHistory;
