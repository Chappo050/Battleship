
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