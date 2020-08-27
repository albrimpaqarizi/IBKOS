import React from "react";
import { Link } from "react-router-dom";
import { Divider, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import profile from "../../assets/images/about/MaskGroup11.jpg";
import consult from "../../assets/images/about/christina-wocintechchat-com-PviMD8jDeYE-unsplash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "./styles/index.css";
import "./styles/SectionA2.css";

const useStyles = makeStyles({
  divider: {
    width: "80%",
    margin: "2rem auto",
    height: "2px",
  },
  avatar: {
    display: "inline-flex",
  },
  quote: {},
});

const SectionH2 = () => {
  const classes = useStyles();
  return (
    <div className="sectionA2 container my-5">
      <div className="row">
        <div className="col-12 col-lg-6 pr-4">
          <h2 className="font-r py-2">
            We're a Passionate Team of Business Consultants
          </h2>
          <p className="text-left font-r text-col1 my-3 py-3">
            Cur domus ortum? Ferox, camerarius aususs rare talem de primus,
            placidus torquis. A falsis, brodium varius ventus. Historia de
            salvus hydra, imperium luba! Cur visus tolerare? Menss cantare! Est
            nobilis mens, cesaris. Castors mori, tanquam noster ionicis
          </p>
          <Link to="/#" className="btn-a btn-a1 btn-bg1 my-2">
            read more
          </Link>
          <Divider className={classes.divider} />
          <div className="d-flex justify-content-start align-items-center">
            <i className="quote-col">
              <FontAwesomeIcon icon={faQuoteLeft} />
            </i>

            <p className="font-r text-col2 text-left m-0">
              Fidelis, brevis elevatuss grauiter acquirere de camerarius, castus
              brodium. Cum advena nocere, omnes demissioes vitare mirabilis
            </p>
          </div>
          <Divider className={classes.divider} />
          <div className="d-flex justify-content-start align-items-center profile-text">
            <span className="font-r text-col2 text-left mr-2">
              "Arturo Meier"
            </span>{" "}
            <Avatar
              className={classes.avatar}
              src={profile}
              alt="Profile img"
            />
          </div>
        </div>
        <div className="col-12 col-lg-6 about-consult">
          <img className="img-thumbnail " src={consult} alt="null" />
        </div>
      </div>
    </div>
  );
};

export default SectionH2;
