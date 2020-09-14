import React from "react";
import "./main.css";
import SignUpFooter from "../components/Shared/SignUpFooter/SignUpFooter";

const PageNotFound = () => {
  return (
    <div>
      <div className="fullBackground page-bg ">
        <div className="nF-page container">
          <h1 className="text-center mb-0">Page Not Found 404</h1>
        </div>
      </div>
      <SignUpFooter />
    </div>
  );
};

export default PageNotFound;
