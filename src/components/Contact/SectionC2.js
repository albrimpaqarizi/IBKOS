import React from "react";
import ContactForm from "./ContactForm";
import Office from "./Office";
import "./SectionC2.css";
import { Box, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  hr: {
    margin: "1rem",
  },
});

const SectionC2 = () => {
  const classes = useStyles();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="box">
            <h1 className="text-capitalize font-r">our office</h1>
            <p className="text-col1">
              If you are living Prishtina or Gjilan, <br /> come visit IBKOS in
              our comfortable office.
            </p>
          </div>
          <Office
            name="office 1"
            linkMap="https://goo.gl/maps/FdytC973wz4VVqzU8"
            linkName="Str. Fehmi Agani, Nr.15, Dragodan 10000 Prishtinë, Kosovë"
          />
          <Divider className={classes.hr} />
          <Office
            name="office 2"
            linkMap="https://goo.gl/maps/g8vfmVjYzb1CHipb9"
            linkName="Str. Medllin Ollbrajt, Nr.20 ,Kodra e Trimave 10000 Gjilan, Kosovë"
          />
        </div>
        <div className="col-md-6">
          <Box paddingY={2} margin={3}>
            <h4 className="text-col3 text-uppercase font-r">
              IF YOU NEED AN ASSITANCE
            </h4>
            <p className="text-col1 ">
              in doing business feel free to send us a short message. We try to
              respond within two working days
            </p>
          </Box>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default SectionC2;
