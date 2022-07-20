

class Player {
    constructor(isPlayer, canShoot) {
        this.isPlayer = isPlayer;
        this.canShoot = canShoot;
    }

    shoot() {
        this.canShoot = false;
    }

    AIChoosePoint() {
        if (this.canShoot) {
            //gets to point and combine them together for a single point
            const pointX = this.getRandomPoint(0, 9);
            const pointY = this.getRandomPoint(0, 9);
    
            const pointXY = pointX.toString() + pointY.toString();
            this.shoot();
            return pointXY
        } else{
            console.error("Not your turn to shoot");
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


/*

let attackPoint = 0;
while (true) {
  const point = Number(player.AIShoot());

  if (board.shipPositions.includes(point) && board.missedPositions(point)) {
      continue;
  } else {
      board.receiveAttack(point);
      attackPoint = point;
      break;
}
}
*/

module.exports = Player;