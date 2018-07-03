import React, { Component } from 'react';
class Message extends Component {

  render() {
    return (
      <li>
      	{this.props.val}
     </li>
    );
  }
}
export default Message;