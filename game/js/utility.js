class Utility {
  isKeyUp(key) {
    return (key === 'ArrowUp' || key === 'w')
  }
  isKeyDown(key) {
    return (key === 'ArrowDown' || key === 's')
  }
  isKeyLeft(key) {
    return (key === 'ArrowDLeft' || key === 'a')
  }
  isKeyRight(key) {
    return (key === 'ArrowRight' || key === 'd')
  }
  isHoldKeyUp(key) {
    return keyIsPressed && this.isKeyUp(key);
  }
  isHoldKeyDown(key) {
    return keyIsPressed && this.isKeyDown(key);
  }
  isHoldKeyLeft(key) {
    return keyIsPressed && this.isKeyLeft(key);
  }
  isHoldKeyRight(key) {
    return keyIsPressed && this.isKeyRight(key);
  }
  isHalfTile(game, pos) {
    const {s} = game.tile;
    const inPos = pos % s;
    return inPos < (s / 2);
  }
}