export default class Life {

  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.life = game.lives;
    
  }

  draw(ctx) {
    ctx.fillStyle = "#000";
    ctx.fillText("Remaining Life: " + this.life, 125, 50);
  }

  update(game) {
    this.life = game.lives;
  }
}