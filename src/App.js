import React, { Component } from 'react';
import Header from './components/Header';
import Roster from './components/Roster';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path='/' component={Home}/>
          <Route path='/roster' component={Roster}/>
        </div>
      </Router>
    );
  }
}

export default App;
