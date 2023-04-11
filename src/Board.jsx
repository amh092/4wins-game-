import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import styles from './Board.module.css';

function Board(props) {
  const { board, columns, rows, onClick } = props;

  // Convert 1D board array into 2D board array
  const boardRows = board.reduce((acc, val, index) => {
    const row = Math.floor(index / columns);
    const col = index % columns;
    acc[row][col] = val;
    return acc;
  }, Array(rows).fill().map(() => Array(columns).fill(0)));

  return (
    <div className={styles.board}>
      {boardRows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((value, colIndex) => (
            <Cell key={colIndex} value={value} onClick={() => onClick(colIndex)} />
          ))}
        </div>
      ))}
    </div>
  );
}

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.number).isRequired,
  columns: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;
