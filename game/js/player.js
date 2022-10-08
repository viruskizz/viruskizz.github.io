class Player {
  position = {
    x: 0,
    y: 0
  };
  act = 'STAND';
  face = 'DOWN';
  imgSrc = {
    standDown: './assets/images/players/cele_stand_down.png',
    standUp: './assets/images/players/cele_stand_up.png',
    standLeft: './assets/images/players/cele_stand_left.png',
    standRight: './assets/images/players/cele_stand_right.png',
    walkDown1: './assets/images/players/cele_walk_down_1.png',
    walkDown2: './assets/images/players/cele_walk_down_2.png',
    walkUp1: './assets/images/players/cele_walk_up_1.png',
    walkUp2: './assets/images/players/cele_walk_up_2.png',
    walkLeft1: './assets/images/players/cele_walk_left_1.png',
    walkLeft2: './assets/images/players/cele_walk_left_2.png',
    walkRight1: './assets/images/players/cele_walk_right_1.png',
    walkRight2: './assets/images/players/cele_walk_right_2.png',
  };
  img = {}

  setup() {
    Object.keys(this.imgSrc).forEach(key => {
      this.img[key] = loadImage(this.imgSrc[key]);
    });
  }

  move(game) {
    const util = new Utility();
    let nx = this.position.x;
    let ny = this.position.y;
    if (util.isHoldKeyRight(key)) {
      player.face = 'RIGHT';
      player.act = 'WALK';
      nx += game.mv;
    } else if (util.isHoldKeyLeft(key)) {
      player.face = 'LEFT';
      player.act = 'WALK';
      nx -= game.mv;
    } else if (util.isHoldKeyUp(key)) {
      player.face = 'UP';
      player.act = 'WALK';
      ny -= game.mv;
    } else if (util.isHoldKeyDown(key)) {
      player.face = 'DOWN';
      player.act = 'WALK';
      ny += game.mv;
    }
    if (nx > 0 && nx < width - game.tile.s) {
      this.position.x = nx;
    }
    if (ny > 0 && ny < height - game.tile.s) {
      this.position.y = ny;
    }
  }

  stand() {
    if (!keyIsPressed) {
      this.act = 'STAND';
    }
  }

  render(game) {
    const {s} = game.tile;
    const {mv} = game;
    const {img, position, face, act} = this;
    // const isAnimateX = position.x % (s / mv) < s / (game.mv * 2);
    // const isAnimateY = position.y % (s / mv) < s / (game.mv * 2);
    const isAnimateX = (new Utility()).isHalfTile(game, position.x);
    const isAnimateY = (new Utility()).isHalfTile(game, position.y);
    if (act === 'STAND' && face === 'DOWN')
      image(img.standDown, position.x, position.y, s, s);
    else if (act === 'STAND' && face === 'UP')
      image(img.standUp, position.x, position.y, s, s);
    else if (act === 'STAND' && face === 'LEFT')
      image(img.standLeft, position.x, position.y, s, s);
    else if (act === 'STAND' && face === 'RIGHT')
      image(img.standRight, position.x, position.y, s, s);
    else if (act === 'WALK' && face === 'DOWN' && isAnimateY)
      image(img.walkDown1, position.x, position.y, s, s);
    else if (act === 'WALK' && face === 'DOWN')
      image(img.walkDown2, position.x, position.y, s, s);
    else if (act === 'WALK' && face === 'UP' && isAnimateY)
      image(img.walkUp1, position.x, position.y, s, s);
    else if (act === 'WALK' && face === 'UP')
      image(img.walkUp2, position.x, position.y, s, s);
    else if (act === 'WALK' && face === 'LEFT' && isAnimateX)
      image(img.walkLeft1, position.x, position.y, s, s);
    else if (act === 'WALK' && face === 'LEFT')
      image(img.walkLeft2, position.x, position.y, s, s);
    else if (act === 'WALK' && face === 'RIGHT' && isAnimateX)
      image(img.walkRight1, position.x, position.y, s, s);
    else if (act === 'WALK' && face === 'RIGHT')
      image(img.walkRight2, position.x, position.y, s, s);
    else
      image(img.standDown, position.x, position.y, s, s);
  }
}
