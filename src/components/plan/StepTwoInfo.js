import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StepTwoInfo.css";

const Plan = () => {
  const navigate = useNavigate();
  const plans = [
    { name: "Arcade", plan: "$9/mo" },
    { name: "Advanced", plan: "$12/mo" },
    { name: "Pro", plan: " $15/mo" },
  ];

  const selectPlan = (index) => {
    navigate("/pick-addons");
    sessionStorage.setItem("plans", JSON.stringify(plans[index]));
  };

  return (
    <div class="right-content">
      <h1 class="p-info">Select your plan</h1>
      <h2 class="p-desc">You have the option of monthly or yearly billing</h2>

      <div class="card-container">
        {plans?.map((item, index) => {
          return (
            <div
              class="card-plan"
              key={index}
              onClick={() => selectPlan(index)}
            >
              <img src="" alt="arcade" />
              {item.name}
              <br />
              {item.plan}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plan;
