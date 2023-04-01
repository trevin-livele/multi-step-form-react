import React from 'react';

import './BaseLayout.css';

const BaseLayout = () => {

    return (
        <div>






            <div className="card">
                <div className="left-content">






                    <div className="container">
                        <div className="st">
                            <div className="circle">
                                <span>1</span>
                            </div>
                            <div className="step">
                                <span className="step-text">Step 1</span>
                                <br />
                                YOUR INFO
                            </div>
                        </div>


                        <div className="st">
                            <div className="circle-unclicked">
                                <span>2</span>
                            </div>
                            <div className="step">Step 2
                                <br />
                                SELECT PLAN
                            </div>
                        </div>



                        <div className="st">
                            <div className="circle-unclicked">
                                <span>3</span>
                            </div>
                            <div className="step">Step 3
                                <br />
                                ADD-ONS
                            </div>

                        </div>


                        <div className="st">
                            <div className="circle-unclicked">
                                <span>4</span>
                            </div>
                            <div className="step">Step 4
                                <br />
                                SUMMARY
                            </div>
                        </div>
                    </div>

                </div>

                <div className="right-content">
                    <h1 className="p-info">Personal Info</h1>

                    <h2 className="p-desc">please provide your name, email address and phone number.</h2>

                    <label className="labeled-name">Name</label>
                    <input type="text" />
                    <label className="labeled">Email Address</label>
                    <input type="email" />
                    <label className="labeled">Phone Number</label>
                    <input type="number" />
                </div>

                <div className="next-btn">
                    <button>
                        <a href="./step2.html">Next Step</a></button>

                </div>
            </div>













        </div>

    );

};

export default BaseLayout;
