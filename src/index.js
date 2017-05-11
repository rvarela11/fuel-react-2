import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import App from './components/App'
import Home from './components/Home'
import Step1 from './components/Step1';
import Step2 from './components/step2/Step2';
import Step3 from './components/Step3';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/step1" component={Step1} />
          <Route path="/step2" component={Step2} />
          <Route path="/step3" component={Step3} />
        </Switch>
      </Router>
  </Provider>,
  document.getElementById('root')
);
