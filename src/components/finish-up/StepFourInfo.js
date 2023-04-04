import React from "react";
import { useNavigate } from "react-router-dom";
import "./StepFourInfo.css";

const FinishUp = () => {
  const navigate = useNavigate();
  const personalInfo = JSON.parse(sessionStorage.getItem("personlInfor"));
  const plans = JSON.parse(sessionStorage.getItem("plans"));
  const addons = JSON.parse(sessionStorage.getItem("addons"));
  let data = {
    personalInfo: { ...personalInfo },
    plans: { ...plans },
    addons: { ...addons },
  };
  const sendDataToFirebase = async () => {
    const response = await fetch(
      "https://formstep-f8b04-default-rtdb.firebaseio.com/posts.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response) {
      navigate("/thank-you");
    }
  };
  return (
    <div class="right-content">
      <h1 class="p-info">Finishing up</h1>
      <h2 class="p-desc">Double-check everything looks OK before confirming</h2>

      <div class="addOn-1">
        <div class="addOn">
          <h3>
            Arcade
            <br />
            <a href="./step3.html">Change</a>
          </h3>
          <span>+$1/mo</span>
        </div>

        <hr />
        <div class="service">
          <h3>Online Service</h3>
          <span>+$1/mo</span>
        </div>
        <div class="service">
          <h3>Larger Storage</h3>
          <span>+$1/mo</span>
        </div>
      </div>
      <div className="next-btn">
          <button onClick={sendDataToFirebase}>Next Step</button>
      </div>
    </div>
  );
};

export default FinishUp;
