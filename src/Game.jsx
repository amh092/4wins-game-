import React, { useState } from 'react';
import Board from './Board';
import { checkForWinner } from './utils.js';
import styles from './Game.module.css';

function Game() {
  const [board, setBoard] = useState(Array(42).fill(0));
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(null);
  const [droppingPiece, setDroppingPiece] = useState(false);

  function handleClick(index) {
    const newBoard = [...board];
    let nextPlayer = player;
  
    // Find the lowest empty cell in the column
    for (let i = 35 + (index % 7); i >= index; i -= 7) {
        if (winner || droppingPiece) {
            return;
          }
      if (board[i] === 0) {
        newBoard[i] = player;
        break;
      }
      if (i === index) return; // column is full, do nothing
    }
    setDroppingPiece(true); // set droppingPiece state to true
    // Check for a winner
    const winningPlayer = checkForWinner(newBoard);
    if (winningPlayer) {
      setWinner(winningPlayer);
      return;
    }
  
    // Switch to the next player
    nextPlayer = player === 1 ? 2 : 1;
    setBoard(newBoard);
    setPlayer(nextPlayer);

    
  }
   setTimeout(() => {
    
    setDroppingPiece(false); // set droppingPiece state back to false
  }, 500); // 500ms delay




  return (
    <div className={styles.game}>
    <h1>Connect Four</h1>
    <Board board={board} columns={7} rows={6} onClick={handleClick} />
    <p>Player {player}'s turn</p>
    {winner && (
      <div className={styles.overlay}>
        <p>Player {winner} wins!</p>
        <button onClick={() => { setBoard(Array(42).fill(0)); setPlayer(1); setWinner(null); }}>Restart</button>
      </div>
    )}
  </div>

  );
}

export default Game;
