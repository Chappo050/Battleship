export class Player {
  constructor(isPlayer, canShoot) {
    this.isPlayer = isPlayer;
    this.canShoot = canShoot;
  }

  shootPointAI(oppenentBoard, playerTwo) {
    if (this.canShoot && !this.isPlayer) {
      //shoot Pos is set to the chosen point.
      while (true) {
        //If its an AI it goes into the loop of choosing a random number.
        //gets to point and combine them together for a single point.
        const pointX = this.getRandomPoint(1, 9).toString();
        const pointY = this.getRandomPoint(1, 9).toString();
        let pointXY = pointX + pointY;
        //checks for conflics (already shot places).
        if (
          oppenentBoard.hitPositions.includes(pointXY) ||
          oppenentBoard.missedPositions.includes(pointXY)
        ) {
          console.log("retrying");
        } else {
          this.canShoot = false;
          playerTwo.canShoot = true;
          console.log("AI Shoots " + pointXY);
          return pointXY;
        }
      }
    } else {
      console.error("AI tried to shoot while it couldnts");
      return "Fail";
    }
  }

  shootPointPlayer(oppenentBoard, point, playerTwo) {
    if (this.canShoot && this.isPlayer) {
      //set any single digit values to "0x"
      if (point.length == 1) {
        point = '0' + point;
      } else if (point.length == 0) {
        alert('Please enter a position to shoot!');
        return false;
      }
      //shoot Pos is set to the chosen point.
      while (true) {
        //checks for conflics (already shot places).
        if (
          oppenentBoard.hitPositions.includes(point) ||
          oppenentBoard.missedPositions.includes(point)
        ) {
          console.log("Can not shoot there, please choose another spot");
          return false;
          //return 'Fail'; for test
        } else {
          this.canShoot = false;
          playerTwo.canShoot = true;
          console.log("Can shoot there " + point);
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
