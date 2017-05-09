import React, { Component } from 'react';

class Step2OptionButtonResults extends Component {
  render() {
    console.log(this.props.optionButtonResultsArray);
    const title = this.props.title;
    const optionsArray = this.props.optionButtonResultsArray[title];

    return <div className="step2__results-box">
      <h5>{title}</h5>
      <div className="list-results">
        <ul>
          {optionsArray.map((item, index) => {
            return (
                // <li key={index} onClick={()=> this.handleCheckboxChangeUndo(index)}>
                //   {item.name} = {item.calories}
                // </li>
                <li key={index}>
                  {item}
                </li>
            )
          })}
        </ul>
      </div>
    </div>
  }
}



export default Step2OptionButtonResults
