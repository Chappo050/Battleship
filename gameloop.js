import { Player } from "./player.js";
import { Gameboard } from "./gameboard.js";
import { Battleship } from "./battleship.js";
import { updateCell, gameOverScreen} from "./DOMsetup.js";

export class Game {
  constructor(playerOneBoard, playerTwoBoard, playerOne, playerTwo) {
    this.playerOneBoard = playerOneBoard;
    this.playerTwoBoard = playerTwoBoard;
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
  }

  newGameRandom() {
    this.playerOne = new Player(true, true);
    this.playerTwo = new Player(false, false);

    const carrierOne = new Battleship(5);
    const battleshipOne = new Battleship(4);
    const cruiserOne = new Battleship(3);
    const submarineOne = new Battleship(3);
    const destroyerOne = new Battleship(2);

    const playerOneShips = [
      carrierOne,
      battleshipOne,
      cruiserOne,
      submarineOne,
      destroyerOne,
    ];

    const carrierTwo = new Battleship(5);
    const battleshipTwo = new Battleship(4);
    const cruiserTwo = new Battleship(3);
    const submarineTwo = new Battleship(3);
    const destroyerTwo = new Battleship(2);

    const playerTwoShips = [
      carrierTwo,
      battleshipTwo,
      cruiserTwo,
      submarineTwo,
      destroyerTwo,
    ];

    this.playerOneBoard = new Gameboard([], [], [], []);

    //add ship locations for all ships
    playerOneShips.forEach((element) => {
      let locArray;
      while (true) {
        locArray = this.playerOneBoard.getRandomPoints(element);
        if (locArray.includes("fail")) {
          continue;
        }
        break;
      }

      locArray.forEach((element) => {
        this.playerOneBoard.shipPositions.push(element);
      });
    });

    this.playerTwoBoard = new Gameboard([], [], [], []);

    //add ship locations for all ships, retires if overlap is found.
    playerTwoShips.forEach((element) => {
      let locArray;
      while (true) {
        locArray = this.playerTwoBoard.getRandomPoints(element);
        if (locArray.includes("fail")) {
          continue;
        }
        break;
      }

      locArray.forEach((element) => {
        this.playerTwoBoard.shipPositions.push(element);
      });
    });
    this.playerOneBoard.shipPositions.sort();
    this.playerTwoBoard.shipPositions.sort();
    console.log(this.playerOneBoard.shipPositions);
    console.log(this.playerTwoBoard.shipPositions);
  }
  startGameLoop() {
    //Start new game
    //get values

    const inputText = document.getElementById("posText");
    const playerShot = inputText.value.toString();

    inputText.value = "";

    //player one shoots
    const shot = this.playerOne.shootPointPlayer(
      this.playerTwoBoard,
      playerShot,
      this.playerTwo
    );

    if (shot === false) {
      alert("You have already shot there! Please choose another location!");
      return;
    }
    const hitMiss = this.playerTwoBoard.receiveAttack(shot);
    updateCell(shot, hitMiss);



    //check to see if player 1 won
    if (this.playerTwoBoard.getAllSunk() === true) {
      gameOverScreen(true);
      console.log("Game over. Player 1 wins!");
      return;
    }

    //player two shoots (AI)
    const shotTwo = this.playerTwo.shootPointAI(
      this.playerOneBoard,
      this.playerOne
    );

    this.playerOneBoard.receiveAttack(shotTwo);
    //check to see if player 2 won
    if (this.playerOneBoard.getAllSunk() === true) {
      gameOverScreen(false);
      console.log("Game over. Player 2 wins!");
      return;
    }
    console.log(this.playerTwoBoard.hitPositions);
  }
}
