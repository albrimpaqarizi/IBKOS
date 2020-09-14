import React from "react";
import "./styles/index.css";
import Form from "./Form";
import Avatar from "./ImageAvatars";
import avatar1 from "../../assets/images/login/Group200.jpg";
import avatar2 from "../../assets/images/login/Group201.jpg";
import avatar3 from "../../assets/images/login/Group203.jpg";
import avatar4 from "../../assets/images/login/Group204.jpg";
import { useTranslation } from "react-i18next";

export const avatarImg = [avatar1, avatar2, avatar3, avatar4];

const LoginForm = () => {
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
              {t("login.title")[0]} <br /> <span> {t("login.title")[1]}</span>
            </h1>
            <ul className="list-unstyled pl-0 my-3 px-3">
              {t("login.list").map((item, index) => (
                <Avatar key={index} avatar={avatarImg[index]} desc={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
