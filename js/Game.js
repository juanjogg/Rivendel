var config = {
    type: Phaser.AUTO,
    width: 612,
    height: 792,
    scene : [ Menu, Maze1, Settings, Instructions, Credits ]
};

var game = new Phaser.Game(config);

