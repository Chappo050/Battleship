const Player = require("./player");
const Gameboard = require("./gameboard");
const Battleship = require("./battleship");

class Game {
  constructor(playerOneBoard, playerTwoBoard, playerOne, playerTwo) {
    this.playerOneBoard = playerOneBoard;
    this.playerTwoBoard = playerTwoBoard;
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
  }

  newGame() {
    this.playerOne = new Player(true, true);
    this.playerTwo = new Player(false, false);
    this.playerOneBoard = new Gameboard(
      [],
      [],
      [],
      ["01", "02", "03", "04", "05", "06", "07", "08", "09"]
    );
    this.playerTwoBoard = new Gameboard(
      [],
      [],
      [],
      ["11", "12", "13", "14", "15", "16", "17", "18", "19"]
    );
  }

  startGameLoop() {
    //Start new game
    while (true) {
      const playerShot = window.prompt('Type an "XY" position to shoot:');
      //player one shoots
      this.playerOne.shootPointPlayer(
        this.playerTwoBoard,
        playerShot,
        this.playerTwo
      );

      //check to see if player 1 won
      if (this.playerTwoBoard.getAllSunk() === true) {
        console.log("Game over. Player 1 wins!");
        break;
      }

      //player two shoots (AI)
      this.playerShot.shootPointAI(this.playerOneBoard, playerOne);

      //check to see if player 2 won
      if (this.playerOneBoard.getAllSunk() === true) {
        console.log("Game over. Player 2 wins!");
        break;
      }
    }
  }
}

module.exports = Game;