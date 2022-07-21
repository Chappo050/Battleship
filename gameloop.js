import { Player } from "./player.js";
import { Gameboard } from "./gameboard.js";
import { Battleship } from "./battleship.js";

export class Game {
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
      const playerShot = window.prompt('Type an "XY" position to shoot:');
      //player one shoots
      const shot = this.playerOne.shootPointPlayer(
        this.playerTwoBoard,
        playerShot,
        this.playerTwo
      );
      this.playerTwoBoard.receiveAttack(shot);
      //check to see if player 1 won
      if (this.playerTwoBoard.getAllSunk() === true) {
        console.log("Game over. Player 1 wins!");
      }
      this.playerOne.canShoot = true;
      //player two shoots (AI)
      const shotTwo = this.playerTwo.shootPointAI(
        this.playerOneBoard,
        this.playerOne
      );


      this.playerTwoBoard.receiveAttack(shotTwo);
      //check to see if player 2 won
      if (this.playerOneBoard.getAllSunk() === true) {
        console.log("Game over. Player 2 wins!");
      }
    }
  }
    