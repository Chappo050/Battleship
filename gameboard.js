
export class Gameboard {
    constructor(shootPos, hitPositions, missedPositions, shipPositions) {
        this.shootPos = shootPos;
        this.hitPositions  = hitPositions;
        this.missedPositions = missedPositions;
        this.shipPositions = shipPositions;
    }

  

    place (position) {
        position.forEach(element => {
            this.shipPositions.push(element);
        });

    }

    receiveAttack(position)  {
            if (this.shipPositions.includes(position)) {
                console.log("Ship hit!");
                this.hitPositions.push(position);
            } else {
                console.log("Ship missed!");
                this.missedPositions.push(position);
            };
      }


  getRandomPoints(ship) {
    while (true) {
        
  
    const min = 1;
    const max = 9;

    const startPosX = Math.floor(Math.random() * (max - min + 1)) + min;
    const startPosY = Math.floor(Math.random() * (max - min + 1)) + min;

    const shipLocArr = [startPosX.toString() + startPosY.toString()];

    //get random directon, 0 = horizontal, 1 = vertical
    const direction = Math.floor(Math.random() * (1 - 0 + 1)) + 0;

    //do horizontal
    if (direction == 0) {
      let nextLoc;
      let changeDirCount = 1;
    //add a position for each lengh of the ship
      for (let i = 1; i < ship.length; i++) {
        nextLoc = startPosX + i;
        if (nextLoc > 9) { //wraps over
          nextLoc = startPosX - changeDirCount;
          changeDirCount += 1;
          shipLocArr.push(nextLoc.toString() + startPosY.toString());
        } else if (nextLoc < 1) { //wraps back
          nextLoc = startPosX + changeDirCount;
          changeDirCount += 1;
          shipLocArr.push(nextLoc.toString() + startPosY.toString());
        } else { //no wrapping needed
          shipLocArr.push(nextLoc.toString() + startPosY.toString());
        }
      }
    } else if (direction == 1) {
      let nextLoc;
      let changeDirCount = 1;

      for (let i = 1; i < ship.length; i++) {
        nextLoc = startPosY + i;
        if (nextLoc > 9) {
          nextLoc = startPosY - changeDirCount;
          changeDirCount += 1;
          shipLocArr.push(startPosX.toString() + nextLoc.toString());
        } else if (nextLoc < 1) {
          nextLoc = startPosY + changeDirCount;
          changeDirCount += 1;
          shipLocArr.push(startPosX.toString() + nextLoc.toString());
        } else {
          shipLocArr.push(startPosX.toString() + nextLoc.toString());
        }
      }
    }

    //check points for overlapping points
    shipLocArr.forEach(element => {
        if (this.shipPositions.includes(element)) {
            console.log('OVERLAP FOUND!');
            shipLocArr.push("fail"); //check in gameloop
        }
    });
    return shipLocArr
}

  }
    
    getPlacedShips() {
        return this.shipPositions;
    }

    getHitPositions() {
        return this.hitPositions;
    }

    getMissedPositions() {
        return this.missedPositions;
    }

    getAllSunk() {
        const a = this.hitPositions.sort();
        const b = this.shipPositions.sort();
        
        if ( a.length === b.length) {
            return true;
        } else {
            return false;
        }
    }
}