import React from "react";
import "./styles/index.css";
import "./styles/SectionA6.css";
import { Link } from "react-router-dom";
import TimelineHistory from "./TimelineHistory";
import Timeline from "@material-ui/lab/Timeline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiTimeline: {
      root: {
        paddingBottom: 0,
        marginBottom: 0,
        "& > :last-child": {
          "& hr": {
            display: "none",
          },
          "& p": {
            marginBottom: "40px !important",
          },
        },
      },
    },
  },
});

const SectionA6 = () => {
  return (
    <div className="sectionA6 ">
      <div className="container ">
        <div className="row">
          <div className="col-12 col-lg-6 our-history">
            <button className="btn-a btn-a2 btn-bg3 ">our history</button>
            <h3 className="font-r ">How we achived Recognition</h3>
            <p className="text-col1 ">
              Cur domus ortum? Ferox, camerarius aususs rare talem de primus,
              placidus torquis.
            </p>
            <Link to="/#" className="btn-a btn-a1 btn-bg1 ">
              read more
            </Link>
          </div>
          <div className="col-12 col-lg-6">
            <MuiThemeProvider theme={theme}>
              <Timeline>
                <TimelineHistory age="1999" title="Our Start" />
                <TimelineHistory age="2010" title="Hiring Marketing Experts" />
                <TimelineHistory
                  age="2019"
                  title="Better Solutions for Clients"
                />
              </Timeline>
            </MuiThemeProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionA6;
