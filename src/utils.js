function checkForWinner(board) {
    // Check for horizontal wins
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 4; col++) {
        const index = row * 7 + col;
        if (
          board[index] !== 0 &&
          board[index] === board[index + 1] &&
          board[index] === board[index + 2] &&
          board[index] === board[index + 3]
        ) {
          return board[index];
        }
      }
    }
  
    // Check for vertical wins
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 7; col++) {
        const index = row * 7 + col;
        if (
          board[index] !== 0 &&
          board[index] === board[index + 7] &&
          board[index] === board[index + 14] &&
          board[index] === board[index + 21]
        ) {
          return board[index];
        }
      }
    }
  
    // Check for diagonal wins (left to right)
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 4; col++) {
        const index = row * 7 + col;
        if (
          board[index] !== 0 &&
          board[index] === board[index + 8] &&
          board[index] === board[index + 16] &&
          board[index] === board[index + 24]
        ) {
          return board[index];
        }
      }
    }
  
    // Check for diagonal wins (right to left)
    for (let row = 0; row < 3; row++) {
      for (let col = 3; col < 7; col++) {
        const index = row * 7 + col;
        if (
          board[index] !== 0 &&
          board[index] === board[index + 6] &&
          board[index] === board[index + 12] &&
          board[index] === board[index + 18]
        ) {
          return board[index];
        }
      }
    }
  
    // No winner yet
    return 0;
  }
  
  export { checkForWinner };
  