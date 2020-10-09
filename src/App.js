import React from 'react';
import Board from './components/Board';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.play = this.play.bind(this);
    this.verifyBoard = this.verifyBoard.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.endGame = this.endGame.bind(this);

    this.state = {
      board: ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      player: 'X',
    }
  }

  endGame() {
    const { player } = this.state;
    alert(`Player: ${player} wins`)
    this.resetGame();
  }
  
  verifyBoard() {
    const { board } = this.state;
    for (let i = 0; i < 9; i += 3) {
      if (board[i] !== 'E' && board[i] === board[i + 1] && board[i] === board[i + 2]) this.endGame();
    }
    for (let i = 0; i < 9; i += 1) {
      if (board[i] !== 'E' && board[i] === board[i + 3] && board[i] === board[i + 6]) this.endGame();
    }
    if (board[0] !== 'E' && board[0] === board[4] && board[0] === board[8]) this.endGame();
    if (board[2] !== 'E' && board[2] === board[4] && board[2] === board[6]) this.endGame();
  }

  resetGame() {
    this.setState({
      board: ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      player: 'X'
    });
  }

  play(e, index) {
    const { board, player } = this.state;
    board[index] = player;
    const nextPlayer = (player === 'X') ? 'O' : 'X';
    this.setState({ board: board, player: nextPlayer });
    this.verifyBoard();
  }

  render() {
    const { board } = this.state;
    return (
      <div className="App">
        <Board
          board={board}
          play={this.play}
          resetGame={this.resetGame}
        />
      </div>
    );
  }
}

export default App;
