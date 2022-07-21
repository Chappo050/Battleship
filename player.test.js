const Player = require("./player");
const Gameboard = require("./gameboard");

function emptyPlayer(isPlayer, canShoot) {
  const player = new Player(isPlayer, canShoot);
  return player;
}

function makeEmptyBoard() {
  return new Gameboard([], [], [], [], []);
}

test("player can shoot empty space", () => {
  const player = emptyPlayer(true, true);
  const point = '11'
  const mockBoard = makeEmptyBoard();
  mockBoard.hitPositions = [
    '00',  '01',  '02',  '03',  '04',  '05',  '06',  '07',  '08',  '09',
     '10',
   '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23',
   '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35',
   '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47',
   '48', '49', '50'
  ]
  mockBoard.missedPositions = ['51', '52', '53', '54', '55', '56', '57', '58',
   '59',
    '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71',
    '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83',
    '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95',
    '96', '97', '98', '99'
  ];
  expect(player.shootPointPlayer(mockBoard, point)).toEqual('11');
});

test("player cant shoot already shot space", () => {
  const player = emptyPlayer(true, true);
  const point = '23'
  const mockBoard = makeEmptyBoard();
  mockBoard.hitPositions = ['01', '02', '23', '04'];
  mockBoard.missedPositions = ['11', '12', '13', '14'];
  expect(player.shootPointPlayer(mockBoard, point)).toEqual("Fail")
});

test("AI can shoot empty space (should be 11)", () => {
  const player = emptyPlayer(false, true);
  const mockBoard = makeEmptyBoard();
  mockBoard.hitPositions = [
    '00',  '01',  '02',  '03',  '04',  '05',  '06',  '07',  '08',  '09',
     '10',
   '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23',
   '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35',
   '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47',
   '48', '49', '50'
  ]
  mockBoard.missedPositions = ['51', '52', '53', '54', '55', '56', '57', '58',
   '59',
    '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71',
    '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83',
    '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95',
    '96', '97', '98', '99'
  ];
  const point = player.shootPointAI(mockBoard);
  expect(point).toEqual('11');
});


test("AI cant shoot when not its turn", () => {
  const player = emptyPlayer(false, false);
  const mockBoard = makeEmptyBoard();
  expect(player.shootPointAI(mockBoard)).toEqual("Fail")
});

/* full array
[
  00,  01,  02,  03,  04,  05,  06,  07,  08,  09, 10, 11,
 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
 96, 97, 98, 99,
]
*/