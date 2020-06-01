export function detectCollision(ball, gameObject) {
    let bottomOfBall = ball.position.y + ball.size;
    let topOfBall = ball.position.y;
    let topOfObject = gameObject.position.y;
    let leftSideOfObject = gameObject.position.x;
    let rightSideOfObject = gameObject.position.x + gameObject.width;
    let bottomOfObject = gameObject.position.y + gameObject.height;

    if (bottomOfBall >= topOfObject && 
      ball.position.x >= leftSideOfObject && 
      ball.position.x <= rightSideOfObject &&
      topOfBall <= bottomOfObject) {
      return true;
    }
    return false;
}

export function detectCollisionLeftSidePaddle(ball, gameObject) {
  let middleOfObject = gameObject.width / 2;
  let leftSideOfObject = gameObject.position.x;
  if (ball.position.x < leftSideOfObject + middleOfObject && ball.speed.x > 0) {
      return true;
    } 
  if (ball.position.x > leftSideOfObject + middleOfObject && ball.speed.x < 0) {
    return true;
  }
  return false;
}