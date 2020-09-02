import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard_1";
import { listProfile } from "../../mapData";
import AliceCarousel from "react-alice-carousel";
import { makeStyles } from "@material-ui/core/styles";
import "./Carousel_1.css";

const useStyles = makeStyles({
  paper: {
    margin: "4%",
    padding: "0.5%",
    display: "flex",
    justifyContent: "center",
    flexFlow: "column",
    alignItems: "center",
    borderRadius: "15px",
    width: "auto",
    boxShadow: "none",
    height: "270px",
  },
});

const Carousel1 = () => {
  const classes = useStyles();

  const list = listProfile.map((item, index) => {
    return (
      <ProfileCard
        key={index}
        icon={item.icon}
        profileName={item.profileName}
        jobTitle={item.jobTitle}
        paper={classes.paper}
      />
    );
  });
  const settings = {
    items: list,
    preventEventOnTouchMove: true,
    duration: 1000,
    autoPlay: true,
    autoPlayInterval: 2000,
    touchTrackingEnabled: true,
    buttonsDisabled: true,
    mouseTrackingEnabled: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 },
    },
  };

  return <AliceCarousel {...settings} />;
};

export default Carousel1;
