import React from "react";
import "./Footer.css";
import Logo from "../../UI/Logo/Logo";
import { Link } from "react-router-dom";
import { Container, Divider, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SocialMedia from "../../../components/UI/SocialMedia/SocialMedia";
import Signup from "./Signup";

const useStyles = makeStyles({
  main: {
    padding: "4% 0%",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <Signup />

      <div className="footer">
        <Container maxWidth="md" className={classes.main}>
          <div className="footer-logo">
            <Logo />
            <p>Since 1999, we have been helping American business thrive</p>
          </div>
          <Divider />

          <Grid container>
            <Grid item xs={12} sm={6} md={3}>
              <h2>Who We Are</h2>
              <ul className="footer-list">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/#">Careers</Link>
                </li>

                <li>
                  <Link to="/#">Our Team</Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <h2>Quick Links</h2>
              <ul className="footer-list">
                <li>
                  <Link to="/#">sign up</Link>
                </li>
                <li>
                  <Link to="/#">new</Link>
                </li>
                <li>
                  <Link to="/#">privacy policy</Link>
                </li>
              </ul>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <h2>Quick Links</h2>
              <ul className="footer-list">
                <li>
                  <Link to="/#">fateaures</Link>
                </li>
                <li>
                  <Link to="/#">FAQ</Link>
                </li>
                <li>
                  <Link to="/#">contacts</Link>
                </li>
              </ul>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <h2>Get in Touch</h2>
              <ul className="footer-list">
                <li>
                  <Link to="/#">info@ibkos.com</Link>
                </li>
                <li>
                  <Link to="/#">+1-852-234-56</Link>
                </li>
              </ul>
            </Grid>
          </Grid>
          <div className="footer-bottom">
            <Typography variant="subtitle2" gutterBottom>
              © 2020 ImageSpread Group Inc. All Rights Reserved
            </Typography>
            <div>
              <h5>Follow us</h5>
              <SocialMedia />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
