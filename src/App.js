import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './pages/quote';
import Header from './components/Header';
import Home from './pages/home';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header className="header" />
        <Switch>
          <Route exact path="/calculator">
            <div className="calculator-page">
              <h2>Let&lsquo;s do some Math</h2>
              <Calculator />
            </div>
          </Route>
          <Route path="/quotes">
            <Quote />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <h3>No match for this page</h3>
          </Route>
        </Switch>
      </div>
    );
  }
}
