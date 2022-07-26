import { Game } from "./gameloop.js";
import { Player } from "./player.js";
import { clickableGrid } from "./DOMsetup.js";

const game = new Game();
game.newGameRandom();

const shootBtn = document.getElementById('shootBtn');
const textBox = document.getElementById('posText');


//make anything out of range invalid
let prevVal = "";
textBox.addEventListener("input", function(e){
    if(this.checkValidity()){
      prevVal = this.value;
    } else {
      this.value = prevVal;
    }
  })

//Enter co-ord and shoot events
shootBtn.addEventListener("click", () => {game.startGameLoop()});

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter"){
    game.startGameLoop();
  } 
})
let grid = clickableGrid(10,10,function(i){
    console.log("You clicked on item #:",i);
});

document.body.appendChild(grid);



