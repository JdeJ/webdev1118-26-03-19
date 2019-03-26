import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        About
        {this.props.match.params.username}
      </div>
    );
  }
}

export default About;