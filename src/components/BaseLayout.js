import React from 'react';

import './BaseLayout.css';
import StepOneInfo from './StepOneInfo';
import StepTwoInfo from './StepTwoInfo';
import StepThreeInfo from './StepThreeInfo';
import StepFourInfo from './StepFourInfo';

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
                                <span className="step-text font-face-regular">Step 1</span>
                                <br />
                                YOUR INFO
                            </div>
                        </div>


                        <div className="st">
                            <div className="circle-unclicked">
                                <span>2</span>
                            </div>
                            <div className="step font-face-regular">Step 2
                                <br />
                                SELECT PLAN
                            </div>
                        </div>



                        <div className="st">
                            <div className="circle-unclicked">
                                <span>3</span>
                            </div>
                            <div className="step font-face-regular">Step 3
                                <br />
                                ADD-ONS
                            </div>

                        </div>


                        <div className="st">
                            <div className="circle-unclicked">
                                <span>4</span>
                            </div>
                            <div className="step font-face-regular">Step 4
                                <br />
                                SUMMARY
                            </div>
                        </div>
                    </div>

                </div>

            <StepOneInfo/>
            {/* <StepTwoInfo/> */}
            {/* <StepThreeInfo/> */}
            {/* <StepFourInfo/> */}

                <div className="next-btn">
                    <button>
                        <a href="./step2.html">Next Step</a></button>

                </div>
            </div>













        </div>

    );

};

export default BaseLayout;
