import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, changeButtonTitle, addItemToArray, step2Calories, removeItemFromArray, step2RemoveCalories } from '../../actions/index';

import Step2Input from './Step2-input';
import Step2OptionButtons from './Step2-option-buttons';
import Step2Results from './Step2-results';
import Step2OptionButtonResults from './Step2-option-buttons-results';

class Step2 extends Component {

  render() {
    return <div>
      <section className="step2">
        <h4>Step 2</h4>
          <Step2Input
            getItems={this.props.getItems}
          />
          <Step2OptionButtons
            changeButtonTitle={this.props.changeButtonTitle}
          />
          <div className="step2__results">
          <Step2Results
            title={this.props.optionButtonResultsTitle}
            list={this.props.list}
            addItemToArray={this.props.addItemToArray}
            step2Calories={this.props.step2Calories}
          />
          <Step2OptionButtonResults
            title={this.props.optionButtonResultsTitle}
            optionButtonResultsArray={this.props.optionButtonResultsArray}
            removeItemFromArray={this.props.removeItemFromArray}
            step2RemoveCalories={this.props.step2RemoveCalories}
          />
          </div>
      </section>
    </div>
  }
}

const mapStateToProps=(state) => {
    return {
      list: state.list,
      optionButtonResultsTitle: state.optionButtonResultsTitle,
      optionButtonResultsArray: state.optionButtonResultsArray,
    };
};

export default connect(mapStateToProps, {getItems, changeButtonTitle, addItemToArray, step2Calories, removeItemFromArray, step2RemoveCalories}) (Step2);
