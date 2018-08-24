class Maze1 extends Phaser.Scene{
    constructor(){
        super({key: "Maze1"});
    }
    preload(){
        this.load.image('maze', 'assets/Laberinto01.jpg');
        this.load.image('back', 'assets/botonback.png');
        this.load.image('coins', 'assets/cash.png')
    }

    create(){
        this.maze = this.add.image(306, 396, 'maze');
        this.back = this.add.image(182, 115, 'back');
        this.cash = this.add.image(310, 346, 'coins');
        this.back.setInteractive();
        this.back.on('pointerdown', function(){
            this.scene.start("Menu");
        },this);

    }
}