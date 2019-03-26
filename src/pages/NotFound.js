import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class NotFound extends Component {
  handleClick = () => {
    this.props.history.push('/about')
  }

  render() {
    console.log(this.props);
    return (
      <div>
        NotFound
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

export default withRouter(NotFound);