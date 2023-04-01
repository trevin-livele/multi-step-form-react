import React from 'react';
import './StepFourInfo.css';

const StepFourInfo = () => {

    return (

        <div class="right-content">
            <h1 class="p-info">Finishing up</h1>
            <h2 class="p-desc">Double-check everything looks OK before confirming</h2>

            <div class="addOn-1">
                <div class="addOn">
                    <h3>Arcade
                        <br/>
                        <a href="./step3.html">Change</a>
                    </h3>
                    <span>+$1/mo</span>
                </div>

                <hr/>
               <div class="service">
                <h3>Online Service</h3>
                <span>+$1/mo</span>
               </div>
               <div class="service">
                <h3>Larger Storage</h3>
                <span>+$1/mo</span>
               </div>
            </div>

        </div>
  );

};

export default StepFourInfo;
