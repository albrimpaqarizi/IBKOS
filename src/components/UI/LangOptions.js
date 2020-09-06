import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { FormControl, NativeSelect } from "@material-ui/core";
import GTranslateIcon from "@material-ui/icons/GTranslate";
const useStyles = makeStyles({
  form: {
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-betwen",
    flexFlow: "row",
  },
  select: {
    "&:before": {
      // borderColor: "#fff",
      content: "none",
    },
    "&:after": {
      // borderColor: "#fff",
      content: "none",
    },
  },
  icon: {
    margin: "5px 10px 5px",
  },
});
const LangOptions = () => {
  const [lang, setLang] = useState("en");
  const classes = useStyles();
  const { i18n } = useTranslation();

  const handleChange = (event) => {
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <FormControl className={classes.form}>
      <GTranslateIcon className={classes.icon} />
      <NativeSelect
        className={classes.select}
        inputProps={{
          id: "lang",
        }}
        value={lang}
        onChange={handleChange}
      >
        <option value="sq"> Albanian</option>
        <option value="en">English</option>
        <option value="de">German</option>
      </NativeSelect>
    </FormControl>
  );
};

export default LangOptions;
