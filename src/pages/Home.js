import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

class Home extends Component {
  

  render() {
    const { match } = this.props;
    return (
      <div>
        Home
        <Route path={`${match.path}/about`} component={About}/>
        <NotFound />
      </div>
    );
  }
}

export default Home;