import React, { useState } from "react";
import "./StepTwoInfo.css";

const Plan = () => {
  const [activeCard, setActiveCard] = useState(false);
  const plans = [
    { name: "Arcade", plan: "$9/mo" },
    { name: "Advanced", plan: "Pro" },
    { name: "Monthly", plan: "yearly" },
  ];

  const selectPlan = (index) => {
    sessionStorage.setItem("plans", JSON.stringify(plans[index]));
  };
  return (
    <div class="right-content">
    <h1 class="p-info">Select your plan</h1>
    <h2 class="p-desc">You have the option of monthly or yearly billing</h2>


    <div class="card-container">
  <div class="card-plan">
  <img src="" alt="arcade"/>
    Arcade
  <br/>$9/mo
  </div>
  <div class="card-plan">
  <img src="" alt="arcade"/>
    Advanced
  <br/>$12/mo
  </div>
  <div class="card-plan">
  <img src="" alt="arcade"/>
    Pro
  <br/>$15/mo
  </div>
</div>

    </div>
  );
};

export default Plan;





// <div>
// <div className="right-content-plans">
//   <h1 className="p-info">Select Your Plan</h1>

//   <h2 className="p-desc">
//     You have an option of monthly or yearly billing.
//   </h2>

//   <div className="container plans-listing">
//     {plans.map((plan, index) => {
//       return (
//         // <div className="plans">
//         <div
//           className="plans-card"
//           onClick={() => {
//             selectPlan(index);
//           }}
//           key={index}
//         >
//           <span className="arcade">{plan.name}</span>
//           <span className="arc-desc">{plan.plan}</span>
//         </div>
//         // </div>
//       );
//     })}
//   </div>
// </div>