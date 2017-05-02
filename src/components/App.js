import React, { Component } from 'react';
import { connect } from 'react-redux';

import Counter from './Counter';
import Home from './Home';

class App extends Component {

  render() {

    return <div>
      <Counter goal={this.props.goal} daily={this.props.daily}/>
      <Home />
    </div>
  }
}

const mapDispatchToProps=(dispatch) => {
    return {
    };
};

const mapStateToProps=(state) => {
    return {
      goal: state.goalData,
      daily: state.dailyData
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
