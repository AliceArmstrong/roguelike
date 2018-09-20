// Font size for ascii
const font = 32;

// Map dimensions
const rows = 10;
const cols = 15;
const map = [];
const asciiDisplay = [];

// Actors per level, including player
const actors = 10;

const initKeyboard = () => {
    game.input.keyboard.addCallbacks(null, null, onKeyUp); // eslint-disable-line
};

const initMap = () => {
    for (let y = 0; y < rows; y += 1) {
        const newRow = [];
        for (let x = 0; x < cols; x += 1) {
            if (Math.random() > 0.8) {
                newRow.push('#');
            } else {
                newRow.push('.');
            }
            map.push(newRow);
        }
    }
    // console.log('map', map);
};

const initCell = (chr, x, y) => {
    const style = { font: `${font}px monospace`, fill: '#fff' };
    return game.add.text(font * 0.6 * x, font * y, chr, style); // eslint-disable-line
};

const initScreen = () => {
    for (let y = 0; y < rows; y += 1) {
        const newRow = [];
        console.log('initScreen', newRow); // undefined
        asciiDisplay.push(newRow);
        // console.log('asciiDisplay', asciiDisplay);
        for (let x = 0; x < cols; x += 1) {
            newRow.push(initCell('', x, y)); // eslint-disable-line
        }
        // console.log('newRow', newRow);
    }
};

const drawMap = () => {
    for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) {
            // console.log('drawMap map', map[0][0]);
            asciiDisplay[y][x].content = map[y][x];
        }
    }
};

const create = () => {
    initKeyboard();
    initMap();
    initScreen();
    drawMap();
};

// Initialise phaser
const game = new Phaser.Game(cols * font * 0.6, rows * font, Phaser.AUTO, null, { // eslint-disable-line
    create,
});

const onKeyUp = (event) => {
    switch (event.keyCode) {
    case Keyboard.LEFT: // eslint-disable-line
    case Keyboard.RIGHT: // eslint-disable-line
    case Keyboard.UP: // eslint-disable-line
    case Keyboard.DOWN: // eslint-disable-line
    default:
        console.log('Error');
    }
};
