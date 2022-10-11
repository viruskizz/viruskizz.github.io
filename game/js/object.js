class GameObject {
  imgSrc = {
    bg: './assets/images/objects/grass.png',
    item: './assets/images/objects/elixir_small.png'
  };
  img = {}

  setup() {
    Object.keys(this.imgSrc).forEach(key => {
      this.img[key] = loadImage(this.imgSrc[key]);
    });
  }

  renderBg(game) {
    const {w, h, s} = game.tile;
    for(let x = 0; x < w; x++) {
      for(let y = 0; y < h; y++) {
        image(this.img.bg, x * s, y * s, s, s);
      }
    }
  }
}