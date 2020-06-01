import Game from "./game.js";
import Canvas from "./canvas.js";

let cvs = document.getElementById('gameScreen');
let ctx = cvs.getContext('2d');

function init() {
  const GAME_WIDTH = window.innerWidth;
  const GAME_HEIGHT = window.innerHeight > 700 ? 700 : window.innerHeight;
  
  let canvas = new Canvas(cvs, GAME_WIDTH, GAME_HEIGHT);
  canvas.resize();
  let game = new Game(GAME_WIDTH, GAME_HEIGHT);

  function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
  
    // clear every frame
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
    game.update(deltaTime);
    game.draw(ctx);

    // when next frame is ready call this gameLoop again and pass the timestamp
    requestAnimationFrame(gameLoop);
  }
  // gameLoop();
  requestAnimationFrame(gameLoop);
}

window.onresize = init;
init();


let lastTime = 0;
