import React from "react";
import "./main.css";
import SectionOne from "../components/Contact/SectionOne";
import SectionTwo from "../components/Contact/SectionTwo";

const Contact = () => {
  return (
    <div className="contact">
      <div className="fullHeader contact-section">
        <SectionOne />
      </div>
      <SectionTwo />
    </div>
  );
};

export default Contact;
