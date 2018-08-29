class Maze1 extends Phaser.Scene{
    constructor(){
        super({key: "Maze1"});
    }
    preload(){
        this.load.image('maze', 'assets/Laberinto01.jpg');
        this.load.image('back', 'assets/botonback.png');
        this.load.image('coins', 'assets/cash.png');
        this.load.image('settings', 'assets/botonSetting.png');
    }

    create(){
        this.maze = this.add.image(306, 396, 'maze');
        this.back = this.add.sprite(182, 113, 'back').setInteractive();
        this.cash = this.add.image(310, 346, 'coins');
        this.setting = this.add.sprite(466, 113, 'settings').setInteractive();
        this.setting.on('pointerdown', (event) =>{
            this.scene.start("Settings");
        });
        this.back.on('pointerdown', function(event){
            this.scene.start("Menu");
        },this);

    }
}