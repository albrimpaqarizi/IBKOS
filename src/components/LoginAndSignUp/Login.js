import React from "react";
import "./styles/index.css";
import Form from "./LoginForm";
import Avatar from "./ImageAvatars";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();

  return (
    <div className=" login fullBackground">
      <div className="container main-top login-page">
        <div className="row">
          <div className="col-12 col-lg-6 py-5 container-form">
            <Form />
          </div>
          <div className="col-12 col-lg-6 p-3 pt-5">
            <h1 className="text-white font-r px-3">
              {t("loginAndSignUp.title")[0]} <br />
              <span> {t("loginAndSignUp.title")[1]}</span>
            </h1>
            <ul className="list-unstyled pl-0 my-3 px-3">
              {t("loginAndSignUp.list").map((item, index) => (
                <Avatar
                  key={index}
                  avatar={`img_avatar${index + 1}`}
                  desc={item}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
