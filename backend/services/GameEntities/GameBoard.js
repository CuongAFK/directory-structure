class GameBoard {
  constructor(size) {
    this.size = size;
    this.board = Array(size).fill(null).map(() => Array(size).fill(null));
  }

  placeUnit(x, y, unit) {
    this.board[x][y] = unit;
  }
}

module.exports = GameBoard;
