import React, { Component } from 'react';
import Square from  './Square.js';
import Board from  './Board.js';
import ShoutBox from  './ShoutBox.js';


class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(8),
      xIsNext: true,
      gameHistory: Array(1).fill("Game Started!")
    }
    this.state.squares[0] = Array(8).fill('E');
    this.state.squares[1] = Array(8).fill('E');
    this.state.squares[2] = Array(8).fill('E');
    this.state.squares[3] = Array(8).fill('E');
    this.state.squares[4] = Array(8).fill('E');    
    this.state.squares[5] = Array(8).fill('E');
    this.state.squares[6] = Array(8).fill('E');    
    this.state.squares[7] = Array(8).fill('E');

    this.state.squares[3][3]= 'X';
    this.state.squares[4][4]= 'X';
    this.state.squares[3][4]= 'O';
    this.state.squares[4][3]= 'O'    
    
  }
  handleClick(i,j) {
    var XX = this.state.xIsNext;
    if(!isValid(this.state.squares,XX,i,j)   ) return;
    if (calculateWinner(this.state.squares) || this.state.squares[i][j]!='E' ) {
      return;
    }
    console.log("X INS : " + XX);
    fillBoard(this.state.squares,i,j,this.state.xIsNext);
    this.state.squares[i][j] = this.state.xIsNext? 'X' : 'O';
    this.state.gameHistory.push(getHistoryString(this.state.squares));
    this.setState({
      squares: this.state.squares,
      xIsNext: !this.state.xIsNext,
      gameHistory: this.state.gameHistory
    });
    console.log("GMAEMHISTORY" );
    console.log(this.state.gameHistory);
  }

  render() {
    /*
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    */
    return (
      <div className="game">

        <div className="game-board">
          <div className="game-info">
            <ol>Next Player  {this.state.xIsNext? ": White" : ": Black"}</ol>
            <ol>Player White Point { calculatePoint(this.state.squares,'X') }</ol>
            <ol>Player Black Point  { calculatePoint(this.state.squares, 'O') }</ol>
          </div>
          <Board
            gameHistory={this.state.gameHistory}
            squares={this.state.squares}
            onClick={(i,j) => this.handleClick(i,j)}
          />

        </div>
        <div>
          <ShoutBox gameHistory={this.state.gameHistory}/>
        </div>
      </div>
    );
  }
}
function getHistoryString(board){
    return "White " + calculatePoint(board,'X') + " Black " + calculatePoint(board,'O'); 
}
function calculatePoint(board,player){
  var counter = 0;
  for(var i=0;i<board.length;i++)
    for(var j =0;j<board.length; j++){
        if(board[i][j]==player)
          counter++;
    }
      console.log("POINT: ",counter);
    return counter;
}

function calculateWinner(squares) {
  
  return null;
}
function isValid(board, nxt,x,y){
  console.log("Next is : " + nxt);
  var flag=0;
  var ch = nxt ? 'X': 'O';
  var notCh = nxt? 'O': 'X';
  for(var i = x-1; i>=0 ; i--){
    if(board[i][y]==ch){
      if(flag==1){
          console.log("00");
          return true;
      }

      else break;
    }
    else if(board[i][y]==notCh)
      flag=1;
  }
  flag =0;
  for(var i = x+1; i< board.length; i++){
    if(board[i][y]==ch){
       if(flag==1){
          console.log("1");
          return true;
      }
         else break;
    }
    else if(board[i][y]==notCh)
      flag=1;
  }
  flag =0;
  for(var i = y+1; i< board.length; i++){
      if(board[x][i]==ch){
         if(flag==1){
          console.log("2");
          return true;
      }
        else break;
      }
    else if(board[x][i]==notCh)
        flag=1;
  }
  flag = 0;
  for(var i = y-1; i >= 0 ; i--){
      if(board[x][i]==ch){
         if(flag==1){
          console.log("3");
          return true;
      }
        else break;
      }
    else if(board[x][i]==notCh)
        flag=1;
    else break;
  }
  flag=0;
  for(var i = x+1,j = y+1; i<board.length && j<board.length; i++,j++){
    if(board[i][j]==ch){
      if(flag==1){
        console.log("4");
        return true;
      }
      else 
        break;
    }
    else if (board[i][j]== notCh)
      flag=1;
    else break;
  }
  flag=0;
  for(var i = x-1,j = y-1; i >= 0 && j>=0 ; i--,j--){
    if(board[i][j]==ch){
      if(flag==1){
        console.log("4");
        return true;
      }
      else 
        break;
    }
    else if (board[i][j]== notCh)
      flag=1;
    else break;
  }
  flag =0;
  for(var i = x+1,j = y-1; i<board.length && j>=0; i++,j--){
    if(board[i][j]==ch){
      if(flag==1){
        console.log("4");
        return true;
      }
      else 
        break;
    }
    else if (board[i][j]== notCh)
      flag=1;
    else break;
  }
  flag  = 0;
  for(var i = x-1,j = y+1; i>=0 && j<board.length; i--,j++){
    if(board[i][j]==ch){
      if(flag==1){
        console.log("4");
        return true;
      }
      else 
        break;
    }
    else if (board[i][j]== notCh)
      flag=1;
    else break;
  }
  return  false;
}
function  fillBoard(board, x,y,nxt){
  console.log("Filling Board!");
  
  var flag=0,fillGrid=0;
  
  var ch = nxt ? 'X': 'O';
  var notCh = nxt? 'O': 'X';
  
  for(var i = x-1; i>=0 ; i--){
    if(board[i][y]==ch){
      if(flag==1){
          fillGrid = 1;
          break;
      }
      else
         break;
    }
    else if(board[i][y]==notCh)
      flag=1;
  }
  if(fillGrid){
      for(var i = x-1; i>=0 ; i--){
        if(board[i][y]==notCh)
          board[i][y]= ch;
        else
        break;
      }
  }
  flag=0, fillGrid = 0;
  for(var i = x+1; i< board.length; i++){
    if(board[i][y]==ch){
       if(flag==1){
         fillGrid = 1;
         break;
      }
         else break;
    }
    else if(board[i][y]==notCh)
      flag=1;
  }
  if(fillGrid){
    for(var i = x+1; i< board.length; i++){
      if(board[i][y]==notCh)
          board[i][y]= ch;
        else
        break;
    }
  }
  
  flag=0, fillGrid = 0;
  for(var i = y+1; i< board.length; i++){
      if(board[x][i]==ch){
       if(flag==1){
         fillGrid = 1;
         break;
      }
        else break;
      }
    else if(board[x][i]==notCh)
        flag=1;
  }
  if(fillGrid==1){
     for(var i = y+1; i< board.length; i++){
       if(board[x][i]==notCh)
        board[x][i] = ch;
       else
        break;
     }
  }
  flag,fillGrid = 0;
  for(var i = y-1; i >= 0 ; i--){
      if(board[x][i]==ch){
         if(flag==1){
          fillGrid=1;
          break;
      }
        else break;
      }
    else if(board[x][i]==notCh)
        flag=1;
  }
  if(fillGrid){
    for(var i = y-1; i >= 0; i--){
      if(board[x][i]==notCh)
        board[x][i]=ch;
      else break;
    }
  }
  flag=0, fillGrid = 0;
    for(var i = x+1,j = y+1; i<board.length && j<board.length; i++,j++){
    if(board[i][j]==ch){
      if(flag==1){
        fillGrid=1;
        break;
      }
      else 
        break;
    }
    else if (board[i][j]== notCh)
      flag=1;
    else break;
  }
  if(fillGrid ==1 ){
    for(var i = x+1,j = y+1; i<board.length && j<board.length; i++,j++){
      if(board[i][j]==notCh)
        board[i][j]=ch;
      else break;
    }
  }
  flag=0, fillGrid = 0;
  for(var i = x-1,j = y-1; i >= 0 && j>=0 ; i--,j--){
    if(board[i][j]==ch){
      if(flag==1){
        fillGrid = 1;
        break;
      }
      else 
        break;
    }
    else if (board[i][j]== notCh)
      flag=1;
    else break;
  }
  if(fillGrid==1){
     for(var i = x-1,j = y-1; i >= 0 && j>=0 ; i--,j--){
       if(board[i][j]==notCh)
          board[i][j]=ch;
       else
        break;
     }
  }
  flag=0, fillGrid = 0;
  for(var i = x+1,j = y-1; i<board.length && j>=0; i++,j--){
    if(board[i][j]==ch){
      if(flag==1){
        fillGrid=1;
        break;
      }
      else 
        break;
    }
    else if (board[i][j]== notCh)
      flag=1;
    else break;
  }
  if(fillGrid){
      for(var i = x+1,j = y-1; i<board.length && j>=0; i++,j--){
        if(board[i][j]==notCh){
          board[i][j]=ch;
      
        }
        else
          break;
      }
  }
  flag=0, fillGrid = 0;
  for(var i = x-1,j = y+1; i>=0 && j<board.length; i--,j++){
    if(board[i][j]==ch){
      if(flag==1){
        fillGrid = 1;
        break;
      }
      else 
        break;
    }
    else if (board[i][j]== notCh)
      flag=1;
    else break;
  }
  if(fillGrid){
      for(var i = x-1,j = y+1; i>=0 && j<board.length; i--,j++){
        if(board[i][j]==notCh)
          board[i][j]=ch;
        else
          break;
      }
  }
  return;
}

export default Game;