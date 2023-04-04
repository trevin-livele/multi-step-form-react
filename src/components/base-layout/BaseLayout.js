import React from "react";
import "./BaseLayout.css";
import { Outlet, NavLink } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div>
      <div className="card">
        <div className="left-content">
          <div className="container">
            <NavLink to={"/"}>
              <div className="st">
                <div className="circle">
                  <span>1</span>
                </div>
                <div className="step">
                  <span className="step-text font-face-regular">Step 1</span>
                  <br />
                  YOUR INFO
                </div>
              </div>
            </NavLink>
            <NavLink to={"/select-plan"}>
              <div className="st">
                <div className="circle-unclicked">
                  <span>2</span>
                </div>
                <div className="step font-face-regular">
                  Step 2
                  <br />
                  SELECT PLAN
                </div>
              </div>
            </NavLink>
            <NavLink to={"/pick-addons"}>
              <div className="st">
                <div className="circle-unclicked">
                  <span>3</span>
                </div>
                <div className="step font-face-regular">
                  Step 3
                  <br />
                  ADD-ONS
                </div>
              </div>
            </NavLink>
            <NavLink to={"/finish-up"}>
              <div className="st">
                <div className="circle-unclicked">
                  <span>4</span>
                </div>
                <div className="step font-face-regular">
                  Step 4
                  <br />
                  SUMMARY
                </div>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="router-content">
          <Outlet />
        </div>
        <div className="next-btn">
          <button>
            <a>Next Step</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
