// Font size for ascii
const font = 32;

// Map dimensions
const rows = 10;
const cols = 15;

// Actors per level, including player
const actors = 10;

// Initialise phaser
let game = new Phaser.Game(cols * font * 0.6, rows * font, Phaser.AUTO, null, {
  create: create
});

const create = () => {
  // Initialise keyboard commands
  game.input.keyboard.addCallbacks(null, null, onKeyUp);
}

const onKeyUp = (event) => {
  switch (event.keyCode) {
      case Keyboard.LEFT:
      case Keyboard.RIGHT:
      case Keyboard.UP:
      case Keyboard.DOWN:
    }
}
