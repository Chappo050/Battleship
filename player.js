class Player {
  constructor(isPlayer, canShoot) {
    this.isPlayer = isPlayer;
    this.canShoot = canShoot;
  }

  shootPointAI(oppenentBoard) {
    if (this.canShoot && !this.isPlayer) {
      //shoot Pos is set to the chosen point.
      while (true) {
        //If its an AI it goes into the loop of choosing a random number.
        //gets to point and combine them together for a single point.
        const pointX = this.getRandomPoint(0, 9).toString();
        const pointY = this.getRandomPoint(0, 9).toString();
        let pointXY = pointX + pointY;
        //checks for conflics (already shot places).
        if (
          oppenentBoard.hitPositions.includes(pointXY) ||
          oppenentBoard.missedPositions.includes(pointXY)
        ) {
            console.log('retrying');
          continue;
        } else {
          this.canShoot = false;
          return pointXY;
        }
      }
    } else {
      return "Fail";
    }
  }

  shootPointPlayer(oppenentBoard, point, playerTwo) {
    if (this.canShoot && this.isPlayer) {
      //shoot Pos is set to the chosen point.
      while (true) {
        //checks for conflics (already shot places).
        if (
          oppenentBoard.hitPositions.includes(point) ||
          oppenentBoard.missedPositions.includes(point)
        ) {
          return "Fail";
        } else {
          this.canShoot = false;
          playerTwo.canShoot = true;
          return point;
        }
      }
    } else {
      console.error("Player tried to shoot while it wasnt its turn!");
    }
  }

  getCanShoot() {
    return this.canShoot;
  }

  setCanShoot() {
    this.canShoot = true;
  }

  getRandomPoint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}

module.exports = Player;
