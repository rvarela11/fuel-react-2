import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Step2Input extends Component {

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
    return <div>
        <form  className="step2__form-search" onSubmit={this.onFormSubmit}>
          <input onChange={this.onInputChange} type="text" name="search" placeholder="Search"/>
          <div className="step2__form-search-buttons">
            <button className="btn waves-effect waves-light" type="submit">Submit</button>
            <Link to="/step3" className="btn waves-effect waves-light finishButton">
                Finish
            </Link>
          </div>
        </form>
      </div>
  }
}

export default Step2Input
