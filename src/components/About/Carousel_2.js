import React, { Component } from "react";
import ProfileCard from "../UI/ProfileCard/ProfileCard_2";
import AliceCarousel from "react-alice-carousel";
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import "./styles/Carousel_2.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { IconButton } from "@material-ui/core";
import { listProfile } from "../Shared/mapData";

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

const styles = () => ({
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
      outline: "none",
    },
    [theme.breakpoints.down("sm")]: {
      boxShadow: "none",
    },
  },
  btn1: {
    transform: "rotate(180deg)",
  },
});

class Carousel2 extends Component {
  state = {
    listItems: this.list(),
    responsive: {
      1024: {
        dotsDisabled: false,
      },
    },
  };

  list() {
    const list = listProfile.map((item, index) => {
      return (
        <ProfileCard
          key={index}
          icon={item.icon}
          profileName={item.profileName}
          jobTitle={item.jobTitle}
        />
      );
    });
    return list;
  }

  // list() {
  //   const list = this.state.t("ourTeam").map((item, index) => {
  //     return (
  //       <ProfileCard
  //         key={index}
  //         icon={profileCardImg[index]}
  //         profileName={item.profileName}
  //         jobTitle={item.jobTitle}
  //       />
  //     );
  //   });
  //   return list;
  // }

  render() {
    const { classes } = this.props;

    return (
      <div className="carusel-container">
        <IconButton
          className={classes.btn}
          onClick={() => this.Carousel.slidePrev()}
        >
          <ArrowForwardIosIcon className={classes.btn1} />
        </IconButton>
        <div className="carusel2">
          <AliceCarousel
            duration={700}
            controlsStrategy="responsive"
            touchTrackingEnabled={true}
            responsive={this.state.responsive}
            dotsDisabled={true}
            mouseTrackingEnabled={true}
            buttonsDisabled={true}
            items={this.state.listItems}
            ref={(el) => (this.Carousel = el)}
          >
            {listProfile.map((item, index) => {
              return (
                <ProfileCard
                  key={index}
                  icon={item.icon}
                  profileName={item.profileName}
                  jobTitle={item.jobTitle}
                  paper={classes.paper}
                />
              );
            })}
          </AliceCarousel>
        </div>
        <IconButton
          className={classes.btn}
          onClick={() => this.Carousel.slideNext()}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    );
  }
}

export default withStyles(styles)(Carousel2);
