import React from "react";
import "./styles/index.css";
import Form from "./Form";
import Avatar from "./ImageAvatars";
import avatar1 from "../../assets/images/login/Group200.jpg";
import avatar2 from "../../assets/images/login/Group201.jpg";
import avatar3 from "../../assets/images/login/Group203.jpg";
import avatar4 from "../../assets/images/login/Group204.jpg";

const LoginForm = () => {
  return (
    <div className=" login fullBackground">
      <div className="container main-top login-page">
        <div className="row">
          <div className="col-12 col-lg-6 py-5 container-form">
            <Form />
          </div>
          <div className="col-12 col-lg-6 p-3 pt-5">
            <h1 className="text-white font-r px-3">
              Did You Know? <br /> <span>With IBKOS you can ...</span>
            </h1>
            <ul className="list-unstyled pl-0 my-3 px-3">
              <Avatar
                avatar={avatar1}
                desc="Access to your files and gets your benifites"
              />
              <Avatar
                avatar={avatar2}
                desc="Unlimited solutions for your business"
              />
              <Avatar
                avatar={avatar3}
                desc="Get online consulting with our consultant"
              />
              <Avatar
                avatar={avatar4}
                desc="We support your business with facts based on the marketing resarch"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
