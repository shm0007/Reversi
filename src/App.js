import React, { Component } from 'react';
//import logo from './logo.svg';

import './App.css';
import Square from  './Components/Square.js';
import Board from  './Components/Board.js';
import Game from  './Components/Game.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Reversi</h1>
        </header>
        <Game />
      </div>
    );
  }
}






export default App;