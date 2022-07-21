import { Game } from "./gameloop.js";

const game = new Game();
game.newGame();
for (let turns = 0; turns < 50; turns++) {
    game.startGameLoop();
}


