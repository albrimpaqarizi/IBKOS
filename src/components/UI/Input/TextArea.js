import React from "react";
import { InputLabel, FormControl, OutlinedInput } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  input: {
    margin: "10px 0px",
  },
  icon: {
    marginRight: "13px",
  },
  inputOutline: {
    "&:focus, &.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#555555",
    },
  },
  inputLabel: {
    "&.MuiFormLabel-root.Mui-focused": {
      color: "#555555",
    },
  },
});

const TextArea = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <FormControl variant="outlined" className={classes.input}>
      <InputLabel htmlFor="comments" className={classes.inputLabel}>
        {t("contactForm.comment.commentLabel")}
      </InputLabel>

      <OutlinedInput
        className={classes.inputOutline}
        id="comments"
        multiline
        rows={2}
        labelWidth={130}
        placeholder={t("contactForm.comment.commentPlaceholder")}
      />
    </FormControl>
  );
};

export default TextArea;
