class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
  }

  /**
   * Returns a 2D Array
   */

  makeBoard() {
    // TODO: Create and return an 2D Array 
    // with `this.heigh` as rows and `this.width` as cols.
    // For example, given a height of 4 and a width of 3, it will generate:
    // [
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    // ]
    let newBoard = [];
    for (let i = 0; i < this.height; i++){
      let row = []
      for (let j = 0; j < this.width; j++){
        row.push(0)
      }
      newBoard.push(row)
    }
    return newBoard;
  }

  getCell(row, col) {
    if (row < 0 || col < 0) {
      return false
    }
    if (row >= this.height || col >= this.width){
      return false
    }
    return this.board[row][col]
  }

  setCell(value, row, col){
    if (this.getCell(row, col) >= 0){
      this.board[row][col] = value
    }
  }

  toggleCell(row, col){
    if (this.getCell(row, col) === 0){
      this.setCell(1, row, col)
    } else if (this.getCell(row, col) === 1){
      this.setCell(0, row, col)
    }
  }

  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  livingNeighbors(row, col) {
    // TODO: Return the count of living neighbors.
    let total = 0;
    for (let i = row - 1; i <= row + 1; i++){
      for (let j = col - 1; j <= col + 1; j++){
        if (this.getCell(i, j)){
          total += this.getCell(i, j)
        }
      }
    }
    total -= this.getCell(row, col);
    return total;
  }


  /**
   * Given the present board, apply the rules to generate a new board
   */
  
  tick() {
    const newBoard = this.makeBoard();
    for (let i = 0; i < this.height; i++){
      for (let j = 0; j < this.width; j++){
        let curr = this.board[i][j];
        if (curr === 0 && this.livingNeighbors(i, j) === 3){
          newBoard[i][j] = 1
        } else if (curr === 1 && (this.livingNeighbors(i, j) === 2 || this.livingNeighbors(i, j) === 3)){
          newBoard[i][j] = 1
        } else {
          newBoard[i][j] = 0
        }
      }
    }

    // TODO: Here is where you want to loop through all the cells
    // on the existing board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the new board 
    // (the next iteration of the game) 
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells in newBoard,
    // based on their current alive neighbors
    this.board = newBoard;
  }
}
