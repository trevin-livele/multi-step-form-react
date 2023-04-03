import React, { useState } from "react";
import "./StepThreeInfo.css";

const PickAddons = () => {
  const [addonData, setAddonData] = useState({});
  const [onlineServiceAddonStatus, setOnlineServiceAddonStatus] =
    useState(false);
  const [largerStorageAddonStatus, setLargerStorageAddonStatus] =
    useState(false);
  const [customAddonStatus, setCustomAddonStatus] = useState(false);

  const addOnlineService = (event) => {
    const value = event.target.checked;
    setOnlineServiceAddonStatus(value);
  };

  const addCustomAddon = (event) => {
    const value = event.target.checked;
    setCustomAddonStatus(value);
  };
  const addLargerStorageAddon = (event) => {
    const value = event.target.checked;
    setLargerStorageAddonStatus(value);
  };
  const proceed = () => {
    if (onlineServiceAddonStatus) {
      setAddonData({
        ...addonData,
        multiplayer: "$1mo",
      });
    }
    if (largerStorageAddonStatus) {
      setAddonData({
        ...addonData,
        cloud: "$2mo",
      });
    }
    if (customAddonStatus) {
      setAddonData({
        ...addonData,
        custome: "$2mo",
      });
    }

    console.log(addonData);
  };
  return (
    <div class="right-content">
      <h1 class="p-info">Pick add-ons</h1>
      <h2 class="p-desc">Add-ons help enhance your gaming expirience.</h2>
      <div class="addOn-three">
        <input
          type="checkbox"
          checked={onlineServiceAddonStatus}
          id="myCheckbox"
          name="myCheckbox"
          onChange={addOnlineService}
        />

        <h3>
          Online Service
          <br /> Access to multiplayer games
        </h3>

        <span>+$1/mo</span>
      </div>
      <div class="addOn-three">
        <input
          type="checkbox"
          checked={largerStorageAddonStatus}
          id="myCheckbox"
          name="myCheckbox"
          onChange={addLargerStorageAddon}
        />

        <h3>
          Online Service
          <br /> Access to multiplayer games
        </h3>

        <span>+$1/mo</span>
      </div>{" "}
      <div class="addOn-three">
        <input
          type="checkbox"
          checked={customAddonStatus}
          id="myCheckbox"
          name="myCheckbox"
          onChange={addCustomAddon}
        />

        <h3>
          Online Service
          <br /> Access to multiplayer games
        </h3>

        <span>+$1/mo</span>
      </div>
      <button onClick={proceed}>Next</button>
    </div>
  );
};

export default PickAddons;
