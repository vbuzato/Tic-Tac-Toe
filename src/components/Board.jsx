import React from 'react';

class Board extends React.Component {
  render() {
    const { board } = this.props;
    return (
      <div className="board">
        {board.map((_, index,) => {
          const choice = (board[index] === 'E') ? '' : board[index];
          return (
            <div id={`${index}`} className={`box pos${index}`}>
              {choice}
            </div>
          )}
        )}
      </div>
    );
  }
}

export default Board;