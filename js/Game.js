var config = {
    type: Phaser.AUTO,
    width: 414,
    height: 736,
    scene : [ Menu, Maze1, Settings, Instructions, Credits]
};

var game = new Phaser.Game(config);
game.physics.startSystem(Phaser.Physics.ARCADE);
