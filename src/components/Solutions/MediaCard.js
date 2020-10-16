import React from "react";
import { Divider } from "@material-ui/core";
import ReadMore from "../UI/Button/ReadMore";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { ImQuotesLeft } from "react-icons/im";

const useStyles = makeStyles({
  divider: {
    width: "80%",
    margin: "1.5rem auto",
    height: "2px",
  },
});

const MediaCard = (props) => {
  const classes = useStyles();
  const {
    title,
    desc,
    teamMember,
    profileImg,
    consultImg,
    person,
    order,
    linkBtn,
    offsetBtn,
    iconCard,
  } = props;
  return (
    <div className="row my-5 mx-0  ">
      <div className="col-12 col-lg-6 pr-4">
        <div className="d-flex justify-content-start align-items-baseline flex-row">
          <div className="iconCards">
            <div className={`img_css iconCard ${iconCard}`} />
          </div>
          <h2 className="font-r mb-3 font-500 font-s-xlarge ">
            {title}
            <br /> <span className="border-span"></span>{" "}
          </h2>
        </div>
        <p className="text-left font-r text-col1 my-3 py-3">{desc}</p>
        <Link to="/?" className="btn-a btn-a1 btn-bg1 font-s-small">
          {order}
        </Link>
        <ReadMore
          classProps="btn-bg5 font-s-small "
          link={linkBtn}
          offset={offsetBtn}
        />
        <Divider className={classes.divider} />
        <div className="d-flex justify-content-start align-items-center">
          <i className="quote-col">
            <ImQuotesLeft />
          </i>
          <p className="font-r text-col2 text-left m-0 teamMember">
            {teamMember}
          </p>
        </div>
        <Divider className={classes.divider} />
        <div className="d-flex justify-content-start align-items-center profile-text">
          <span className="font-r text-col2 text-left mr-2  ">"{person}"</span>
          <div className={`img_css profile_member ${profileImg}`} />
        </div>
      </div>
      <div className="col-12 col-lg-6 about-consult py-5">
        <div className={`img_css media_consult ${consultImg}`}></div>
      </div>
    </div>
  );
};
export default MediaCard;
