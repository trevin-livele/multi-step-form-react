import React, { useState } from "react";

import "./StepOneInfo.css";

const PersonalInfo = () => {
  const [personalInfo, setPersonalInfor] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [nameIsValid, setNameIsValid] = useState(true);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setPersonalInfor((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (personalInfo.name) {
      setNameIsValid(true);
    }
  };

  const proceed = () => {
    if (!personalInfo.name) {
      setNameIsValid(false);
    }
    sessionStorage.setItem("personlInfor", JSON.stringify(personalInfo));
  };
  return (
    <div>
      <div className="right-content">
        <h1 className="p-info font-face-regular">Personal Info</h1>

        <h2 className="p-desc font-face-regular">
          please provide your name, email address and phone number.
        </h2>

        <label className="labeled-name font-face-regular">Name</label>
        <input
          className="input-box"
          type="text"
          id="name"
          name="name"
          value={personalInfo.name}
          onChange={handleInputChange}
        />
        {!nameIsValid && <small>Please add name</small>}
        <label className="labeled font-face-regular">Email Address</label>
        <input
          className="input-box"
          type="email"
          id="email"
          name="email"
          value={personalInfo.email}
          onChange={handleInputChange}
        />
        <label className="labeled font-face-regular">Phone Number</label>
        <input
          className="input-box"
          type="number"
          id="phoneNumber"
          name="phoneNumber"
          value={personalInfo.phoneNumber}
          onChange={handleInputChange}
        />
      </div>

      <div className="next-btn">
        <button>
          <button onClick={proceed}>Next Step</button>
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
