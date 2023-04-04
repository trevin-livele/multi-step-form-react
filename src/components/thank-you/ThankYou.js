import React from "react";
import "../plan/StepTwoInfo.js";

const thankYouIcon = require("../../assets/images/icon-pro.svg");

const ThankYou = () => {
  return (
    <div className="th-items">
      <div className="element">
        <img
          src={thankYouIcon}
          alt="this is a thank you image "
          height={"100"}
        />

        <h1>Thank You</h1>

        <h3>
          Thanks for confirming your subscription!We hope you have
          <br />
          fun using our platform,if you need support feel
          <br />
          free to email us at support@loremprogramming.com.
        </h3>
      </div>
    </div>
  );
};

export default ThankYou;
