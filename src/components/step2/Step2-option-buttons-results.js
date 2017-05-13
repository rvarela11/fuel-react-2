import React, { Component } from 'react';

class Step2OptionButtonResults extends Component {

handleCheckboxChangeUndo = (item,index) => {
  this.props.removeItemFromArray(index);
  this.props.step2RemoveCalories(Math.round(item.calories))
}

  render() {
    const title = this.props.title;
    const optionsArray = this.props.optionButtonResultsArray[title];

    return <div className="step2__results-box">
      <h5>{title}</h5>
      <div className="list-results">
        <ul>
          {optionsArray.map((item, index) => {
            const displayInfo = `${item.name} = ${item.calories}`;
            return (
                <li key={index} onClick={this.handleCheckboxChangeUndo.bind(this,item, index)}>
                  {displayInfo}
                </li>
            )
          })}
        </ul>
      </div>
    </div>
  }
}

export default Step2OptionButtonResults
