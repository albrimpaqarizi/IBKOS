import React from "react";
import { Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import { listProfile } from "./mapData";

const SectionH6 = () => {
  return (
    <div className="background-4 fullBackground">
      <div className="container py-4">
        <div className=" home-center ">
          <Link to="/service" className="btn-a btn-a2 btn-bg3 my-2">
            Meet Our Team
          </Link>
          <h1 className="my-1">Our Professional Team</h1>
        </div>
        <div className="d-flex justify-content-center flex-wrap flex-row ">
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
        </div>
      </div>
    </div>
  );
};

export default SectionH6;
