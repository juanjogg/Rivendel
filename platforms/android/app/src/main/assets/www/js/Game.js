window.onload = function(){
    onDeviceReady();
}
var config = {
    type: Phaser.AUTO,
    width: 360,
    height: 640,
    //width: 414,
    //height: 736,

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
//config.setDisplaySize(300, 600);

//}

//game.physics.startSystem(Phaser.Physics.ARCADE);
