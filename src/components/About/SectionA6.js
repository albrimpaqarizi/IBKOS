import React from "react";
import "./styles/index.css";
import "./styles/SectionA6.css";
import TimelineHistory from "./TimelineHistory";
import Timeline from "@material-ui/lab/Timeline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import OurButton from "../UI/Button/OurButton";
import ReadMore from "../UI/Button/ReadMore";

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
  const { t } = useTranslation();

  return (
    <div className="sectionA6 ">
      <div className="container ">
        <div className="row">
          <div className="col-12 col-lg-6 our-history">
            <OurButton
              btn="ourHistoryBtn"
              classProps="text-capitalize px-4 py-2 font-s-small"
            />
            <h3 className="font-r ">{t("historyContent.title")} </h3>
            <p className="text-col1 ">{t("historyContent.desc")}</p>
            <ReadMore
              classProps="btn-bg1 font-s-small "
              link="sectionA7"
              offset={-90}
            />
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
