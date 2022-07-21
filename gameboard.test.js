import { Gameboard } from "./gameboard.js";

function makeEmptyBoard() {
  return new Gameboard([], [], [], [], []);
}

test("Can place a ship on the board", () => {
  board = makeEmptyBoard();
  board.place(["00", "01", "02"]);
  expect(board.getPlacedShips()).toEqual(["00", "01", "02"]);
});

test("Can place multiple ships on the board", () => {
  board = makeEmptyBoard();
  board.place(["00", "01", "02"]);
  board.place(["10", "11", "12"]);
  board.place(["20"]);
  expect(board.getPlacedShips()).toEqual([
    "00",
    "01",
    "02",
    "10",
    "11",
    "12",
    "20",
  ]);
});

test("Can hit a placed ship", () => {
  board = makeEmptyBoard();
  board.place(["00"]);
  board.receiveAttack("00");
  expect(board.getHitPositions()).toEqual(["00"]);
});

test("Can miss a placed ship", () => {
  board = makeEmptyBoard();
  board.shipPositions = ["00"];
  board.receiveAttack("01");
  expect(board.getMissedPositions()).toEqual(["01"]);
});

test("Can detect multiple hits", () => {
  board = makeEmptyBoard();
  board.shipPositions = ["00", "01", "02", "10", "11", "12", "20"];

  board.receiveAttack("00");
  board.receiveAttack("01");
  board.receiveAttack("02");
  board.receiveAttack("10");
  board.receiveAttack("11");
  board.receiveAttack("12");
  board.receiveAttack("20");
  expect(board.getHitPositions()).toEqual([
    "00",
    "01",
    "02",
    "10",
    "11",
    "12",
    "20",
  ]);
});

test("Can report if all ships have been sunk", () => {
  board = makeEmptyBoard();
  board.shipPositions = ["00", "01", "02", "10", "11", "12", "20"];

  board.receiveAttack("00");
  board.receiveAttack("01");
  board.receiveAttack("02");
  board.receiveAttack("10");
  board.receiveAttack("11");
  board.receiveAttack("12");
  board.receiveAttack("20");

  expect(board.getAllSunk()).toEqual(true);
});
