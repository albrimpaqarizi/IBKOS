import React from "react";
import ContactForm from "./ContactForm";
import Office from "./Office";
import "./styles/SectionC2.css";
import { Box, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  hr: {
    margin: "1rem",
  },
});

const SectionC2 = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="box">
            <h1 className="text-capitalize font-r">{t("ourOffice.title")} </h1>
            <p className="text-col1">{t("ourOffice.desc")}</p>
          </div>
          <Office
            name={t("office1.name")}
            linkMap="https://goo.gl/maps/FdytC973wz4VVqzU8"
            linkName={t("office1.link")}
          />
          <Divider className={classes.hr} />
          <Office
            name={t("office2.name")}
            linkMap="https://goo.gl/maps/g8vfmVjYzb1CHipb9"
            linkName={t("office2.link")}
          />
        </div>
        <div className="col-md-6">
          <Box paddingY={2} margin={3}>
            <h4 className="text-col3 text-uppercase font-r">
              {t("contactHelp.title")}
            </h4>
            <p className="text-col1 ">{t("contactHelp.desc")} </p>
          </Box>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default SectionC2;
