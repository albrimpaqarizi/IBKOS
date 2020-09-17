import React from "react";
import {
  InputLabel,
  FormControl,
  OutlinedInput,
  FormGroup,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  input: {
    margin: "0px 0px 12px 0px",
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
    margin: "5px 0",
  },
});

const TextArea = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <FormGroup>
      <InputLabel htmlFor="comments" className={classes.inputLabel}>
        {t("contactForm.comment.commentLabel")}
      </InputLabel>
      <FormControl variant="outlined" className={classes.input}>
        <OutlinedInput
          className={classes.inputOutline}
          id="comments"
          multiline
          rows={3}
          placeholder={t("contactForm.comment.commentPlaceholder")}
        />
      </FormControl>
    </FormGroup>
  );
};

export default TextArea;
