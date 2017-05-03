import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App'
import Home from './components/Home'
import Step1 from './components/Step1';
import Step2 from './components/Step2';
// import Page1User from './components/Page1-user';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));


// const step1props = () => {
//   return (
//     <Step1/>
//   );
// }

ReactDOM.render(
  <Provider store={store}>
    <App>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/step1" component={Step1} />
          <Route path="/step2" component={Step2} />
        </Switch>
      </Router>
    </App>
  </Provider>,
  document.getElementById('root')
);
