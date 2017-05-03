import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getItems } from '../actions/index';

class Step2 extends Component {

  state = {
    term: '',
  }

  onInputChange = (e) => {
    this.setState({ term: e.target.value});
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.getItems(this.state.term);
    this.setState({term: ''});
  }

  render() {
    console.log(this.props.list);
    return <div>
      <section className="step2">
        <h4>Step 2</h4>
          <form  className="step2__form-search" onSubmit={this.onFormSubmit}>
            <input onChange={this.onInputChange} type="text" name="search" placeholder="Search"/>
            <div className="step2__form-search-buttons">
              <button className="btn waves-effect waves-light" type="submit">Submit</button>
              <Link to="/step3" className="btn waves-effect waves-light finishButton">
                  Finish
              </Link>
            </div>
          </form>
          <div className="row">
            <div className="col l3 row__options-buttons">
              <button className="btn-flat">Breakfast</button>
            </div>
            <div className="col l3 row__options-buttons">
              <button className="btn-flat">Lunch</button>
            </div>
            <div className="col l3 row__options-buttons">
              <button className="btn-flat">Dinner</button>
            </div>
            <div className="col l3 row__options-buttons">
              <button className="btn-flat">Snack</button>
            </div>
          </div>
            <div className="step2__results">
              <div className="step2__results-box">
                <h5>Results</h5>
                {/* {this.props.list.map(this.renderResultList,this)} */}
              </div>
              {/* <div className="step2__results-box">
                {this.renderClickedItemDiv()}
              </div> */}
            </div>
      </section>
    </div>
  }
}

const mapDispatchToProps=(dispatch) => {
    return {
      getItems: (item) => dispatch(getItems(item))
    };
};

const mapStateToProps=(state) => {
    return {
      list: state.list
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Step2);
