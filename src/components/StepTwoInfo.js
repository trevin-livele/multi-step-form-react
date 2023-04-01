import React from 'react';
import './StepTwoInfo.css';

const StepTwoInfo = () => {

    return (
        <div>
            <div className="right-content">
                <h1 className="p-info">Select Your Plan</h1>

                <h2 className="p-desc">You have an option of monthly or yearly billing.</h2>

                <div className="container">
                    <div className="step"><span className="arcade">Arcade</span>
                        <span className="arc-desc">$9/mo</span>
                    </div>
                    <div className="step"><span className="arcade">Advanced</span></div>
                    <div className="step"><span className="arcade">Pro</span></div>
                </div>

            </div>






            <div className="confirm">
                <div className="monthly">
                    Monthly
                </div>

                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                </label>

                <div className="yearly">
                    yearly
                </div>
            </div>


            <div className="go-back">
                <a href="./index.html">Go back</a>
            </div>


            <div className="next-btn">
                <button>Next Step</button>

            </div>
        </div>
    );

};

export default StepTwoInfo;
