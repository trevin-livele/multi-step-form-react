import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StepThreeInfo.css";

const PickAddons = () => {
  const navigate = useNavigate();
  const addons = [
    { name: "multiplayer", value: "$1mo" },
    { name: "cloud", value: "$2mo" },
    { name: "custome", value: "$2mo" },
  ];

  const proceed = () => {
    navigate("/finish-up");
    sessionStorage.setItem("addons", JSON.stringify(checkedItems));
  };
  const [checkedItems, setCheckedItems] = useState({});
  const handleChange = (event, planName, planValue) => {
    setCheckedItems({
      ...checkedItems,
      selected: event.target.checked,
      [planName]: planValue,
    });
  };
  return (
    <div class="right-content">
      <h1 class="p-info">Pick add-ons</h1>
      <h2 class="p-desc">Add-ons help enhance your gaming expirience.</h2>
      {addons.map((item, index) => {
        return (
          <div class="addOn-three" key={index}>
            <input
              type="checkbox"
              checked={checkedItems[item]}
              id="myCheckbox"
              name="myCheckbox"
              onChange={() => handleChange(event, item.name, item.value)}
            />

            <h3>
              Online Service
              <br /> Access to multiplayer games
            </h3>

            <span>+$1/mo</span>
          </div>
        );
      })}
      <div className="next-btn">
          <button onClick={proceed}>Next Step</button>
      </div>
    </div>
  );
};

export default PickAddons;
