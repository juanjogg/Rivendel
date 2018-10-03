window.onload = function(){
    onDeviceReady();
}
var config = {
    type: Phaser.AUTO,
    width: 414,
    height: 736,
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true
        }
    },
    scene : [ Menu, Maze1, Settings, Instructions, Credits],

};
//onDeviceReady(){
    var game = new Phaser.Game(config);
//}

//game.physics.startSystem(Phaser.Physics.ARCADE);
