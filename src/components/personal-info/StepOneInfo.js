import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./StepOneInfo.css";

const PersonalInfo = () => {
  const navigate = useNavigate();

  const [personalInfo, setPersonalInfor] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [nameIsValid, setNameIsValid] = useState(true);
  const [emailIsValid, setIsEmailValid] = useState(true);
  const [phoneNumberIsValid, setPhoneNumberValid] = useState(true);

  const onValidatePhoneNumber = (phoneNumber) => {
    const regex = /^(\+254|0)[1-9]\d{8}$/;
    return regex.test(phoneNumber);
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if (name === "email") {
      if (!validateEmail(value)) {
        setIsEmailValid(false);
      } else {
        setIsEmailValid(true);
      }
    }

    if (name === "phoneNumber") {
      if (onValidatePhoneNumber(value)) {
        setPhoneNumberValid(false);
      } else {
        setPhoneNumberValid(true);
      }
    }
    setPersonalInfor((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (!personalInfo.name) {
      setNameIsValid(false);
    } else {
      setNameIsValid(true);
    }
  };

  const proceed = () => {
    if (!personalInfo.name) {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);

    if (!validateEmail(personalInfo.email)) {
      setIsEmailValid(false);
      return;
    }
    if (!onValidatePhoneNumber(personalInfo.phoneNumber)) {
      setPhoneNumberValid(false);
      return;
    }
    navigate("/select-plan");
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
          type="text"
          id="email"
          name="email"
          value={personalInfo.email}
          onChange={handleInputChange}
        />
        {!emailIsValid && <small>Please add a valid email</small>}
        <label className="labeled font-face-regular">Phone Number</label>
        <input
          className="input-box"
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={personalInfo.phoneNumber}
          onChange={handleInputChange}
        />
        {!phoneNumberIsValid && <small>Please add a valid phone number</small>}
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
