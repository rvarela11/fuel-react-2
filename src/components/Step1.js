import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { step1Calories } from '../actions/index';

class Step1 extends Component {

  static contextTypes = {
      router: PropTypes.object
  };

  state = {
    fields: {}
  }

  handleSubmit = (e) => {

    // Function will calculate the goal calories and dispatch the information to the store and later send it to the Counter component

    e.preventDefault();
    let goalCalories = 0;
    const fields = this.state.fields;

    if (fields.gender === "male") {
      const maleInput = 66 + (6.23 * fields.weight) + (12.7 * fields.height) - (6.8 * fields.age);
      goalCalories = Math.round(Number(maleInput * fields.active));
    } else {
      const femaleInput = 655 + (4.35 * fields.weight) + (4.7 * fields.height) - (4.7 * fields.age);
      goalCalories = Math.round(Number(femaleInput * fields.active));
    }
    this.props.step1Calories(goalCalories);
    this.context.router.history.push('/step2');
  }

  handleChange = (e) => {

    // Function will create the fields object (state) that will be used in the handleSubmit function

    const value = e.target.value;
    const name = e.target.name;
    const fields = this.state.fields;
    fields[name] = value;
    this.setState({fields})
  }

  render() {
    return <div>
      <section className="step1">
        <h4>Step 1</h4>
          <form onSubmit={this.handleSubmit}>
            {/* Gender * */}
            <h5>Gender</h5>
            <div>
              <input id="male" type="radio" name="gender" value="male" onChange={this.handleChange} required/>
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input id="female" type="radio" name="gender" value="female" onChange={this.handleChange} required/>
              <label htmlFor="female">Female</label>
            </div>
            {/* Weight/Height/Age */}
            <h5>Info</h5>
            <div>
              <input type="number" name="weight" placeholder="Weight (lbs)" onChange={this.handleChange}/>
            </div>
            <div>
              <input type="number" name="height" placeholder="Height (inches)" onChange={this.handleChange}/>
            </div>
            <div>
              <input type="number" name="age" placeholder="Age" onChange={this.handleChange}/>
            </div>
            {/* Active */}
            <h5>Active</h5>
            <input id="sedentary" type="radio" name="active" value="1.2" onChange={this.handleChange} required/>
            <label htmlFor="sedentary" className="fontSizeBox"><span>Sedentary:</span> Little or no exercise</label><p/>
            <input id="lightly" type="radio" name="active" value="1.375" onChange={this.handleChange} required/>
            <label htmlFor="lightly" className="fontSizeBox"> <span>Lightly Active:</span> Light exercise (1-3 days/week)</label><p/>
            <input id="moderately" type="radio" name="active" value="1.55" onChange={this.handleChange} required/>
            <label htmlFor="moderately" className="fontSizeBox"> <span>Moderately Active:</span> Moderate exercise (3-5 days/week)</label><p/>
            <input id="very" type="radio" name="active" value="1.7" onChange={this.handleChange} required/>
            <label htmlFor="very" className="fontSizeBox"> <span>Very Active:</span> Hard exercise (6-7 days/week)</label><p/>
            <input id="extremely" type="radio" name="active" value="1.9" onChange={this.handleChange} required/>
            <label htmlFor="extremely" className="fontSizeBox"> <span>Extremely Active:</span> Hard daily exercise and/or a physical job</label>
            {/* Goal */}
            <h5>Goal</h5>
            <input id="lose" type="radio" name="goal" value="lose" onChange={this.handleChange} required/>
            <label htmlFor="lose" >Lose</label><p/>
            <input id="maintain" type="radio" name="goal" value="maintain" onChange={this.handleChange} required/>
            <label htmlFor="maintain" >Maintain</label><p/>
            <input id="gain" type="radio" name="goal" value="gain" onChange={this.handleChange} required/>
            <label htmlFor="gain">Gain</label><p/>
            <div>
              <button className="waves-effect waves-light btn">Submit</button>
            </div>
          </form>
      </section>
    </div>
  }
}

export default connect(null, {step1Calories}) (Step1);
