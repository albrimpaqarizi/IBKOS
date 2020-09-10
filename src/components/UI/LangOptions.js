import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import ReactFlagsSelect from "react-flags-select";
import "react-flags-select/css/react-flags-select.css";

const LangOptions = () => {
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng"));
  const { i18n } = useTranslation();

  const handleChange = (countryCode) => {
    setLang(countryCode);
    i18n.changeLanguage(countryCode);
  };

  return (
    <ReactFlagsSelect
      defaultCountry={lang.toLocaleUpperCase()}
      countries={["AL", "DE", "GB"]}
      onSelect={handleChange}
    />
  );
};

export default LangOptions;
