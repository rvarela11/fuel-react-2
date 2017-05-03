import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from './Counter';

class App extends Component {

  render() {
    return <div>
      <Counter goal={this.props.goal} daily={this.props.daily}/>
      {this.props.children}
    </div>
  }
}

const mapStateToProps=(state) => {
    return {
      goal: state.goalData,
      daily: state.dailyData
    };
};

export default connect(mapStateToProps, null) (App);
