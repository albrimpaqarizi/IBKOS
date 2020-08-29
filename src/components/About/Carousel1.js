import React from "react";
import Slider from "react-slick";
import ProfileCard from "../UI/ProfileCard/ProfileCard";
import { listProfile } from "../mapData";
import "./styles/Carousel1.css";

const Carousel1 = () => {
  const settings = {
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 4000,
    // cssEase: "linear",

    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //       infinite: true,
      //     },
      //   },
    ],
  };

  return (
    <div className=" container-carousel">
      <Slider {...settings}>
        {listProfile.map((item, index) => {
          return (
            <ProfileCard
              key={index}
              icon={item.icon}
              profileName={item.profileName}
              jobTitle={item.jobTitle}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel1;
