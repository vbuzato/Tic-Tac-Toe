import React from 'react';

class Board extends React.Component {
  render() {
    const { board, play, resetGame } = this.props;
    return (
      <div className="board">
        {board.map((_, index,) => {
          let option, choice, choose = '';
          if (board[index] !== 'E') {
            choice = board[index];
            option = 'inactive';
            choose = () => {console.log('not allowed')};
          } else {
            choose = (e, index) => play(e, index);
          }
          return (
            <div onClick={(e) => choose(e, index)} key={`${index}`}  id={`${index}`} className={`box pos${index} ${option}`}>
              <span className="bt-choice">{choice}</span>
            </div>
          )}
        )}
        <button onClick={resetGame}>Reset game</button>
      </div>
    );
  }
}

export default Board;