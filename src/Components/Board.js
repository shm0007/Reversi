import React, { Component } from 'react';
import Square from  './Square.js';
class Board extends React.Component {

  renderSquare(i,j) {
    return <Square 
    value={this.props.squares[i][j]}
      onClick={() => this.props.onClick(i,j)}
    />;
  }

  render() {

    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0,0)}
          {this.renderSquare(0,1)}
          {this.renderSquare(0,2)}
          {this.renderSquare(0,3)}    
          {this.renderSquare(0,4)}
          {this.renderSquare(0,5)}
          

        </div>
        <div className="board-row">
          {this.renderSquare(1,0)}
          {this.renderSquare(1,1)}
          {this.renderSquare(1,2)}
          {this.renderSquare(1,3)}
          {this.renderSquare(1,4)}
          {this.renderSquare(1,5)}
          
        </div>
       <div className="board-row">
          {this.renderSquare(2,0)}
          {this.renderSquare(2,1)}
          {this.renderSquare(2,2)}
          {this.renderSquare(2,3)}
          {this.renderSquare(2,4)}
          {this.renderSquare(2,5)}          
      </div>
       <div className="board-row">
          {this.renderSquare(3,0)}
          {this.renderSquare(3,1)}
          {this.renderSquare(3,2)}
          {this.renderSquare(3,3)}
          {this.renderSquare(3,4)}
          {this.renderSquare(3,5)}
        </div>
        <div className="board-row">
          {this.renderSquare(4,0)}
          {this.renderSquare(4,1)}
          {this.renderSquare(4,2)}
          {this.renderSquare(4,3)}
          {this.renderSquare(4,4)}
          {this.renderSquare(4,5)}
        </div>
        <div className="board-row">
          {this.renderSquare(5,0)}
          {this.renderSquare(5,1)}
          {this.renderSquare(5,2)}
          {this.renderSquare(5,3)}
          {this.renderSquare(5,4)}
          {this.renderSquare(5,5)}
        </div>
      </div>
    );
  }
}
export default Board;