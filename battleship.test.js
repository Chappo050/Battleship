const Battleship = require('./battleship');
//Ships for testing

const threeLongShip = new Battleship(3, [], false);
const oneLongShip = new Battleship(1, [], false);


test("test to see if ship gets hit once", () => {
    oneLongShip.hitArray = [];
    oneLongShip.hit('00');
    expect(oneLongShip.getHits().sort()).toEqual(['00']);
})

test("test to see if ship gets hit multiple times", () => {
    threeLongShip.hitArray = ['00', '01'];
    threeLongShip.hit('02');
    expect(threeLongShip.getHits().sort()).toEqual(['00', '01', '02']);
})

test("A 1 long ship has been sunk", () => {
    oneLongShip.hitArray = ['00'];
    expect(oneLongShip.isSunk()).toBe(true)
})

test("A 3 long ship has been sunk", () => {
    threeLongShip.hitArray = ['00', '01', '02'];
    expect(threeLongShip.isSunk()).toBe(true)
})

