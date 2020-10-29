import Brick from './brick.js';

export function buildLevel(game, level) {
  const bricks = [];
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

export function generateRandomObstacles(rows) {
  if (rows === 1) {
    return [[1,1,1,1,1,1,1,1,1,1]];
  }
  if (rows > 10) rows = 10;
  const COLUMN_PER_ROW = 10;
  const obstacles = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    let emptyObstacle = 0;
    for (let j = 0; j < COLUMN_PER_ROW; j++) {
      const obstacle = randomObstacle(emptyObstacle);
      if (!obstacle) emptyObstacle++;
      row.push(obstacle);
    }
    emptyObstacle = 0;
    obstacles.push(row);
  }
  console.log({obstacles})
  return obstacles;
}

function randomObstacle(emptyObstacle) {
  if (emptyObstacle === 3) return 1;
  return Math.round(Math.random())
}