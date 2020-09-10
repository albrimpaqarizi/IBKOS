import React from "react";
import { Paper } from "@material-ui/core";
import InputContact from "../UI/Input/InputContact";
import PersonIcon from "@material-ui/icons/Person";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import TextArea from "../UI/Input/TextArea";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 992,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles({
  form: {
    padding: "2rem",
    margin: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    form: {
      padding: "1rem",
      margin: "0.5rem",
    },
  },
});

const ContactForm = () => {
  const classes = useStyles();

  const inputName = {
    type: "text",
    id: "name-surname",
    placeholder: "Enter your name and surname",
  };

  const inputEmail = {
    type: "email",
    id: "email-address",
    placeholder: "Enter your email address ",
  };
  return (
    <Paper className={classes.form} elevation={3}>
      <h4 className="text-center form-cart text-col3"> Send as a message</h4>
      <form className="d-flex  justify-content-center flex-column px-1">
        <InputContact
          id="name-surname"
          icon={<PersonIcon />}
          input={inputName}
          label="Name and surname"
          labelWidth={150}
        />

        <InputContact
          id="email-address"
          icon={<MailOutlineIcon />}
          input={inputEmail}
          label="Email address"
          labelWidth={110}
        />
        <TextArea />
        <button type="submit" className="btn-submit btn">
          send
        </button>
      </form>
    </Paper>
  );
};

export default ContactForm;
