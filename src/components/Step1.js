import React, { Component } from 'react';
//import { step1Calories } from '../actions/index';
// import { Link } from 'react-router';

class Step1 extends Component {


  onSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit");
  }

  render() {

    return <div>
      <section className="step1">
        <h4>Step 1</h4>
          <form onSubmit={this.onSubmit}>
            {/* Gender * */}
            <h5>Gender</h5>
            <div>
              <input id="male" type="radio" name="gender" value="male" required/>
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input id="female" type="radio" name="gender" value="female" required/>
              <label htmlFor="female">Female</label>
            </div>
            {/* Weight/Height/Age */}
            <h5>Info</h5>
            <div>
              <input type="number" name="weight" placeholder="Weight (lbs)"/>
            </div>
            <div>
              <input type="number" name="height" placeholder="Height (inches)"/>
            </div>
            <div>
              <input type="number" name="age" placeholder="Age"/>
            </div>
            {/* Active */}
            <h5>Active</h5>
            <input id="sedentary" type="radio" name="active" value="1.2" required/>
            <label htmlFor="sedentary" className="fontSizeBox"><span>Sedentary:</span> Little or no exercise</label><p/>
            <input id="lightly" type="radio" name="active" value="1.375" required/>
            <label htmlFor="lightly" className="fontSizeBox"> <span>Lightly Active:</span> Light exercise (1-3 days/week)</label><p/>
            <input id="moderately" type="radio" name="active" value="1.55" required/>
            <label htmlFor="moderately" className="fontSizeBox"> <span>Moderately Active:</span> Moderate exercise (3-5 days/week)</label><p/>
            <input id="very" type="radio" name="active" value="1.7" required/>
            <label htmlFor="very" className="fontSizeBox"> <span>Very Active:</span> Hard exercise (6-7 days/week)</label><p/>
            <input id="extremely" type="radio" name="active" value="1.9" required/>
            <label htmlFor="extremely" className="fontSizeBox"> <span>Extremely Active:</span> Hard daily exercise and/or a physical job</label>
            {/* Goal */}
            <h5>Goal</h5>
            <input id="lose" type="radio" name="goal" value="lose" required/>
            <label htmlFor="lose" >Lose</label><p/>
            <input id="maintain" type="radio" name="goal" value="maintain" required/>
            <label htmlFor="maintain" >Maintain</label><p/>
            <input id="gain" type="radio" name="goal" value="gain" required/>
            <label htmlFor="gain">Gain</label><p/>
            <div>
              <button className="waves-effect waves-light btn" type="submit">Submit</button>
            </div>
          </form>
      </section>
    </div>
  }
}

export default Step1;
