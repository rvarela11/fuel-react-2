import React, { Component } from 'react';

class Step2Results extends Component {

  renderResultList = () => {

    // Function will parse through the data recieved and create an object. This will make it easier to calculate the total calories

    const listData = this.props.list;
    const itemsArray = listData.map(item => item.fields.item_name.split(" - ")[0]);
    const caloriesArray = listData.map(item => item.fields.nf_calories);
    const results = {};

    itemsArray.forEach((item,index) => {
      if(results.hasOwnProperty(item)){
        results[item].calories.push(caloriesArray[index]);
      } else {
        results[item] = {};
        results[item].calories = [];
        results[item].calories.push(caloriesArray[index]);
    }
  });

  const resultsNames = Object.keys(results);
  const foodItems = resultsNames.map((foodName, index) => {
    return {name: foodName, calories: results[foodName].calories[0]}
  })

    return <div>
      <div className="list-results">
        <ul>
          {foodItems.map((item, index) => {
            const displayInfo = `${item.name} = ${item.calories}`;
            return (
                <li key={index} onClick={this.handleCheckboxChange.bind(this,item)}>
                  {displayInfo}
                </li>
            )
          })}
        </ul>
      </div>
    </div>
  }

  handleCheckboxChange = (item) => {
    this.props.addItemToArray(item);
    this.props.step2Calories(Math.round(item.calories))
  }

  render() {
    return <div className="step2__results-box">
      <h5>Results</h5>
      {this.renderResultList()}
    </div>
  }
}



export default Step2Results
