export default class InputHandler {

  constructor(paddle, game, state) {
    document.addEventListener('keydown', (event) => {
      switch(event.keyCode) {
        case 37:
        case 65:
          paddle.moveLeft();
          break;
        case 39:
        case 68:
          paddle.moveRight();
          break;
      }
    })

    document.addEventListener('keyup', (event) => {
      switch(event.keyCode) {
        case 37:
        case 65:
          if (paddle.speed < 0) paddle.stop();
          break;
        case 39:
        case 68:
          if (paddle.speed > 0) paddle.stop();
          break;
        case 27:
          game.togglePause();
          break;
        case 32:
          game.start();
          break;
      }
    })

    document.addEventListener('mousedown', (event) => {
      const halfScreen = window.innerWidth / 2;
      if (game.gamestate === state.MENU || game.gamestate === state.GAMEOVER) {
        game.start();
        return;
      }

      if (game.gamestate === state.RUNNING) {
        if (event.x < halfScreen) paddle.moveLeft();
        if (event.x > halfScreen) paddle.moveRight();
      }
    })

    document.addEventListener('mouseup', (event) => {
      if (game.gamestate === state.RUNNING) {
        if (paddle.speed < 0) paddle.stop();
        if (paddle.speed > 0) paddle.stop();
      }
    })
  }
}