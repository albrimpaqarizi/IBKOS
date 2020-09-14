import React, { useState, useEffect, useCallback } from "react";
import { useEmblaCarousel } from "embla-carousel/react";
import ProfileCard from "../UI/ProfileCard/ProfileCard_2";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import "./styles/Carousel_2.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { IconButton } from "@material-ui/core";
import { profileCardImg } from "../Shared/mapData";
import { useTranslation } from "react-i18next";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles({
  paper: {
    margin: "1% 4%",
    padding: "2%",
    display: "flex",
    justifyContent: "center",
    flexFlow: "column",
    alignItems: "center",
    borderRadius: "none",
    backgroundColor: "#fff",
    width: "auto",
    boxShadow: "none",
    height: "auto",
  },
  btn: {
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
    "&:focus": {
      outline: "none !important",
    },
    [theme.breakpoints.down("sm")]: {
      boxShadow: "none",
    },
    margin: "2%",
  },
  btn1: {
    transform: "rotate(180deg)",
  },
});

const Carousel2 = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [viewportRef, embla] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="carusel-container">
      <IconButton className={classes.btn} onClick={scrollPrev}>
        <ArrowForwardIosIcon className={classes.btn1} />
      </IconButton>
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container carusel2">
          {t("ourTeam").map((item, index) => {
            return (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                  <ProfileCard
                    icon={profileCardImg[index]}
                    profileName={item.profileName}
                    jobTitle={item.jobTitle}
                    desc={t("usersThink")}
                    paper={classes.paper}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <IconButton className={classes.btn} onClick={scrollNext}>
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
};

export default Carousel2;
