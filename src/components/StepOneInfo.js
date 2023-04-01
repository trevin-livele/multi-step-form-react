import React from 'react';

import './StepOneInfo.css';

const StepOneInfo = () => {

    return (
        <div>

                <div className="right-content">
                    <h1 className="p-info font-face-regular">Personal Info</h1>

                    <h2 className="p-desc font-face-regular">please provide your name, email address and phone number.</h2>

                    <label className="labeled-name font-face-regular">Name</label>
                    <input className='input-box' type="text" />
                    <label className="labeled font-face-regular">Email Address</label>
                    <input className='input-box' type="email" />
                    <label className="labeled font-face-regular">Phone Number</label>
                    <input className='input-box' type="number" />
                </div>

                <div className="next-btn">
                    <button>
                        <a href="./step2.html">Next Step</a></button>

                </div>
            </div>
    );

};

export default StepOneInfo;
