import React from "react";
import "./SectionTwo.css";
import {
  Grid,
  Box,
  Container,
  Divider,
  Paper,
  TextField,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  icons: {
    color: "#259BF9",
  },
  main: {
    padding: "3% 0%",
  },
  form: {
    padding: "2rem",
    margin: "2rem",
  },
  input: {
    margin: "5px 0px",
  },
  hr: {
    margin: "1rem",
  },
});

const SectionTwo = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.main}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <div className="box">
            <h1 className="t1 font">our office</h1>
            <p className="p1 font">
              If you are living nerbay, come visit IBKOS in our comfortable
              office.
            </p>
          </div>

          <div className="box">
            <h3 className="office-name font">office 1</h3>
            <ul className="list-group list-contact font">
              <li className="list-group-item ">
                <LocationOnIcon className={classes.icons} />{" "}
                <span>9863 - 9867 Mill Road, Cambridge, MG09 99HT</span>
              </li>
              <li className="list-group-item">
                <SmartphoneIcon className={classes.icons} />{" "}
                <span>+1 800 603 6035</span>
              </li>
              <li className="list-group-item">
                <MailIcon className={classes.icons} />
                <span>mail@ibkos.com</span>
              </li>
            </ul>
          </div>
          <Divider className={classes.hr} />
          <div className="box">
            <h3 className="office-name font">office 2</h3>
            <ul className="list-group list-contact font">
              <li className="list-group-item ">
                <LocationOnIcon className={classes.icons} />{" "}
                <span>9863 - 9867 Mill Road, Cambridge, MG09 99HT</span>
              </li>
              <li className="list-group-item">
                <SmartphoneIcon className={classes.icons} />{" "}
                <span>+1 800 603 6035</span>
              </li>
              <li className="list-group-item">
                <MailIcon className={classes.icons} />
                <span>mail@ibkos.com</span>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box paddingY={2} margin={3}>
            <h1 className="t2 font">IF YOU NEED AN ASSITANCE</h1>
            <p className="p2 font">
              in doing business feel free to send us a short message. We try to
              respond within two working days
            </p>
          </Box>
          <Paper className={classes.form} elevation={3}>
            <h3 className="text-center font form-name"> Send as a message</h3>
            <Box
              paddingX={1}
              display="flex"
              justifyContent="center"
              flexDirection="column"
            >
              <TextField id="name" label="Name" className={classes.input} />
              <TextField
                id="email-address"
                label="Email address"
                className={classes.input}
              />
              <TextField
                id="comments"
                label="Tell us about it"
                className={classes.input}
              />
              <button type="submit" className="btn submit">
                send
              </button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionTwo;
