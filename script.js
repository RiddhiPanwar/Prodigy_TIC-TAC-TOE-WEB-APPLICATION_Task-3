let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
const winConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]             // diagonals
];

function makeMove(index) {
  if (!board[index]) {
    board[index] = currentPlayer;
    renderBoard();
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function renderBoard() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, index) => {
    cell.textContent = board[index];
  });
}

function checkWinner() {
  for (let condition of winConditions) {
    const [a, b, c] = condition;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      document.getElementById('status').textContent = `${board[a]} wins!`;
      disableBoard();
      return;
    }
  }
  if (board.every(cell => cell)) {
    document.getElementById('status').textContent = "It's a draw!";
  }
}

function disableBoard() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.onclick = null;
  });
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  renderBoard();
  document.getElementById('status').textContent = '';
}
