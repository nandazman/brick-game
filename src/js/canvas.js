export default class Canvas {

  constructor(canvas, gameWidth, gameHeight) {
    this.canvas = canvas;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  update(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  resize() {
    this.canvas.width = this.gameWidth;
    this.canvas.height = this.gameHeight;
  }
}