import React, { Component } from 'react';
import { Route ,Switch} from "react-router-dom";
import './App.css';
import Login from './Login/Login';
import Home from './Home/Home';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    );
  }
}

export default App;
