const Battleship = require('./battleship');

class Gameboard {
    constructor(shootPos, hitPositions, missedPositions, shipPositions) {
        this.shootPos = shootPos;
        this.hitPositions  = hitPositions;
        this.missedPositions = missedPositions;
        this.shipPositions = shipPositions
    }

  

    place (position) {
        position.forEach(element => {
            this.shipPositions.push(element);
        });

    }

    receiveAttack(position)  {
        position.forEach(element => {
            if (this.shipPositions.includes(element)) {
                this.hitPositions.push(element);
            } else {
                this.missedPositions.push(element);
            }
        });
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

module.exports = Gameboard;