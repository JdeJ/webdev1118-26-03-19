import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <ul>
              <li><Link to="/home">home</Link></li>
              <li><Link to="/about">about</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route exact path="/about/:username" component={About}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
