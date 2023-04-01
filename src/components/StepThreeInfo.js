import React from 'react';
import './StepThreeInfo.css';

const StepThreeInfo = () => {

    return (
        <div class="right-content">
            <h1 class="p-info">Pick add-ons</h1>

            <h2 class="p-desc">Add-ons help enhance your gaming expirience.</h2>

           <div class="addOn-three">
            <input type="checkbox" id="myCheckbox" name="myCheckbox"/>

            <h3>Online Service
            <br/> Access to multiplayer games</h3>

            <span>+$1/mo</span>
           </div>

           <div class="addOn-three">
            <input type="checkbox" id="myCheckbox" name="myCheckbox"/>

            <h3>Online Service
            <br/> Access to multiplayer games</h3>

            <span>+$1/mo</span>
           </div>  <div class="addOn-three">
            <input type="checkbox" id="myCheckbox" name="myCheckbox"/>

            <h3>Online Service
            <br/> Access to multiplayer games</h3>

            <span>+$1/mo</span>
           </div>




        </div>  );

};

export default StepThreeInfo;
