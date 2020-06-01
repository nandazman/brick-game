const FONT = "30px Arial";
const ALIGN = "center";
const FILL_TEXT_COLOR = "white";

export function pause(ctx, game) {
  ctx.rect(0, 0, game.gameWidth, game.gameHeight);
  ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  ctx.fill();

  ctx.font = FONT;
  ctx.fillStyle = FILL_TEXT_COLOR;
  ctx.textAlign = ALIGN;
  ctx.fillText("Paused", game.gameWidth / 2, game.gameHeight / 2);
}

export function menu(ctx, game) {
  ctx.rect(0, 0, game.gameWidth, game.gameHeight);
  ctx.fillStyle = "rgba(0, 0, 0, 1)";
  ctx.fill();

  ctx.font = FONT;
  ctx.fillStyle = FILL_TEXT_COLOR;
  ctx.textAlign = ALIGN;
  ctx.fillText("Press SPACEBAR To Start", game.gameWidth / 2, game.gameHeight / 2);
}

export function gameOver(ctx, game) {
  ctx.rect(0, 0, game.gameWidth, game.gameHeight);
  ctx.fillStyle = "rgba(0, 0, 0, 1)";
  ctx.fill();

  ctx.font = FONT;
  ctx.fillStyle = FILL_TEXT_COLOR;
  ctx.textAlign = ALIGN;
  ctx.fillText("GAME OVER", game.gameWidth / 2, game.gameHeight / 2);
  ctx.fillText("Press SPACEBAR To Restart", game.gameWidth / 2, game.gameHeight / 2 + 50);
}
