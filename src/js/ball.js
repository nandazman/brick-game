import { detectCollision, detectCollisionLeftSidePaddle } from "./collisionDetection.js"

export default class Ball {

  constructor(game) {
  
    this.image = document.getElementById('ball');

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game;

    this.reset();
    this.size = 16;

  }

  reset() {
    this.position = { x: 100, y: 200 }
    this.speed = { x: 5, y: 5 }
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)
  }

  update() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // wall on left or right
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    // wall on top
    if (this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    // wall on bottom
    if (this.position.y + this.size > this.gameHeight) {
      this.game.lives--;
      this.reset();
    }

    if (detectCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;	
      if (detectCollisionLeftSidePaddle(this, this.game.paddle)) {
        this.speed.x = -this.speed.x;
      }
    }

  }
}