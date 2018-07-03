import React, { Component } from 'react';
import Message from './Message';
class ShoutBox extends Component {

  render() {
  	let messages = this.props.gameHistory.map(project => {
  		return (<Message val={project} />
  			)
  	});

    return (
		<div className="shoutBox">
			<div className="message-list">
				{messages}
			</div>
			<div className="message-text-box">
			<form >
				<input type="text"/>

				<input type="submit" value="Send!"/>
			</form>
			</div>

		</div>
    );
  }
}
export default ShoutBox;