import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";

import { buildLevel, levels } from "./levels.js";
import { pause, menu, gameOver } from "./screen.js";

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3,
  NEWLEVEL: 4
}

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gamestate = GAMESTATE.MENU;
    this.ball = new Ball(this);
    this.paddle = new Paddle(this);
    this.gameBObjects = [];
    this.bricks = [];
    this.currentLevel = 0;
    this.levels = levels;
    new InputHandler(this.paddle, this, GAMESTATE);
    this.resetLives();
  }

  start() {
    if (this.gamestate !== GAMESTATE.MENU && this.gamestate !== GAMESTATE.GAMEOVER && this.gamestate !== GAMESTATE.NEWLEVEL) return;
    this.bricks = buildLevel(this, this.levels[this.currentLevel]);
    this.gameBObjects = [this.ball, this.paddle];
    this.ball.reset();
    this.paddle.reset();
    this.gamestate = GAMESTATE.RUNNING;
  }


  update(deltaTime) {
    if (this.lives === 0) {
      this.gamestate = GAMESTATE.GAMEOVER;
      this.resetLives();
    }
    if (
      this.gamestate === GAMESTATE.PAUSED ||
      this.gamestate === GAMESTATE.MENU ||
      this.gamestate === GAMESTATE.GAMEOVER
      ) return;
    [...this.gameBObjects, ...this.bricks].forEach((object) => object.update(deltaTime));
    if (this.bricks.length === 0) {
      this.currentLevel++;
      this.gamestate = GAMESTATE.NEWLEVEL;
      this.start();
    }

    this.bricks = this.bricks.filter((brick => !brick.markedForDeletion))
  }

  draw(ctx) {
    [...this.gameBObjects, ...this.bricks].forEach((object) => object.draw(ctx));

    if (this.gamestate == GAMESTATE.PAUSED) {
      pause(ctx, this);
    } else if (this.gamestate == GAMESTATE.MENU) {
      menu(ctx, this);
    } else if (this.gamestate == GAMESTATE.GAMEOVER) {
      gameOver(ctx, this);
    }
  }

  togglePause() {
    if (this.gamestate == GAMESTATE.PAUSED) {
      this.gamestate = GAMESTATE.RUNNING;
    } else {
      this.gamestate = GAMESTATE.PAUSED;
    }
  }

  resetLives() {
    this.lives = 3;
  }
}