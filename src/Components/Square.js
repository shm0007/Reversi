import React, { Component } from 'react';
class Square extends Component {
  render() {
    return (
      <button className={this.props.value} 
        onClick={this.props.onClick}>
      </button>
    );
  }
}
export default Square;