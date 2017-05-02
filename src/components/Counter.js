import React from 'react';

const Counter = ({goal, daily}) => (
  <header>
    <h1>FUEL</h1>
    <div className="calories">
      <div>
        <h4>Goal</h4>
        <h4><strong><span id="totalCaloriesDisplayGoal">{goal}</span></strong></h4>
      </div>
      <div>
        <h4>Daily</h4>
        <h4><strong><span id="totalCaloriesDisplayDaily">{daily}</span></strong></h4>
      </div>
    </div>
  </header>
);

export default Counter;
