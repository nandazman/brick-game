import Brick from './brick.js';

export function buildLevel(game, level) {
  let bricks = [];
  level.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if (brick) {
        let width =  game.gameWidth / 10
        let height = 24;
        let position = {
          x: width * brickIndex,
          y: 75 + 24 * rowIndex
        }
        bricks.push(new Brick(game, position, width, height));
      }
    })
  })
  return bricks;
}

export const levels = [
  [
    // [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
    // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
  ],
  [
    [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 1, 0, 0, 1, 1]
  ]
];