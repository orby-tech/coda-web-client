import React from "react";
import { TargetEnum } from "../models";
import telegramIcon from "./../../../icons/telegram.png";
import emailIcon from "./../../../icons/email.png";
import "./target-info.css";

interface Props {
  target: TargetEnum;
}

const TargetInfo = (props: Props) => {
  if (props.target === TargetEnum.telegram) {
    return (
      <div className="target-block">
        <img
          src={telegramIcon}
          className="telegram-taget-icon"
          alt="telegram-taget-icon"
        ></img>
        telegram
      </div>
    );
  } else if (props.target === TargetEnum.email) {
    return (
      <div className="target-block">
        <img
          src={emailIcon}
          className="email-taget-icon"
          alt="email-taget-icon"
        ></img>
        email
      </div>
    );
  }
  return <></>;
};

export default TargetInfo;
