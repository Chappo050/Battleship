class Battleship {
    constructor(length, hitArray, sunk) {
        this.length = length;
        this.hitArray = hitArray;
        this.sunk = sunk;
    }

    hit(hitPos) {
        this.hitArray.push(hitPos);
    }

    isSunk() {
        if (this.hitArray.length == this.length) {
            this.isSunk = true;
            return this.isSunk;
        }
    }

    getHits() {
        return this.hitArray;
    }
}


module.exports = Battleship;


