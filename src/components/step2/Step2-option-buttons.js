import React, { Component } from 'react';

class Step2OptionButtons extends Component {

  handleClickButton = (e) => {
    this.props.changeButtonTitle(e.target.name);
  }

  render() {
    return <div className="row">
        <div className="col l3 row__options-buttons">
          <button name="Breakfast" onClick={this.handleClickButton} className="btn-flat">Breakfast</button>
        </div>
        <div className="col l3 row__options-buttons">
          <button name="Lunch" onClick={this.handleClickButton} className="btn-flat">Lunch</button>
        </div>
        <div className="col l3 row__options-buttons">
          <button name="Dinner" onClick={this.handleClickButton} className="btn-flat">Dinner</button>
        </div>
        <div className="col l3 row__options-buttons">
          <button name="Snack" onClick={this.handleClickButton} className="btn-flat">Snack</button>
        </div>
      </div>
  }
}



export default Step2OptionButtons
