const game = {
  tile: {
    w: 20,
    h: 10,
    s: 64
  },
  fr: 30,
  mv: 2,
}
const util = new Utility();
const object = new GameObject();
const player = new Player();
function preload() {
  setPanel();
  object.setup();
  player.setup();
}
function setup() {
  frameRate(game.fr);
  const {w, h, s} = game.tile;
  const cnv = createCanvas(w * s, h * s);
  cnv.class('mx-auto')
}

function draw() {
  background(220);
  object.renderBg(game);
  player.render(game);
  player.move(game);
}

function setPanel() {
  let gameWidth = 1280;
  let margin = windowWidth < 720 ? 0.05 : 0.10;
  if (windowWidth < gameWidth + gameWidth *margin) {
    gameWidth = windowWidth - windowWidth * margin;
  }
  game.ts = gameWidth / game.tw;
}

function windowResized() {
  setPanel();
  const {w, h, s} = game.tile;
  resizeCanvas(w * s, h * s);
}

function keyReleased() {
  player.stand();
}