import React from 'react';
import Board from './components/Board';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      board: ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E' ],
      playerTurn: 0,
    }
  }
  render() {
    const { board } = this.state;
    return (
      <div className="App">
        <Board board={board} />
      </div>
    );
  }
}

export default App;
