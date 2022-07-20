const Player = require("./player");
const Gameboard = require("./gameboard");

function emptyPlayer(isPlayer, canShoot) {
  const player = new Player(isPlayer, canShoot);
  return player;
}

function makeEmptyBoard() {
  return new Gameboard([], [], [], [], []);
}

test("Player shots toggle off", () => {
  const player = emptyPlayer(true, true);
  player.shoot();
  expect(player.getCanShoot()).toEqual(false);
});

test("Player shots toggle on", () => {
  const player = emptyPlayer(true, false);
  player.setCanShoot();
  expect(player.getCanShoot()).toEqual(true);
});

test("AI chooses a point to shoot (not checking yet)", () => {
  const player = emptyPlayer(false, true);
  const point = Number(player.AIChoosePoint());
  const maxPoint = 99;
  expect(point < maxPoint).toEqual(true);
});

