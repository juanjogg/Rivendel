class Settings extends Phaser.Scene{
    constructor(){
        super({key: "Settings"});
    }

    preload(){
        this.load.image('screenSettings', 'assets/pantalla-ajustes-.jpg');
        this.load.image('instructions', 'assets/ajustes-instrucciones.png');
        this.load.image('credits', 'assets/ajustes-creditos.png');
        this.load.image('setBack', 'assets/ajustes-atras.png');
    }

    create(){
        this.settings = this.add.sprite(306, 396, 'screenSettings');
        this.instructions = this.add.sprite(313, 355, 'instructions').setInteractive();
        this.credits = this.add.sprite(313, 439 , 'credits').setInteractive();
        this.setBack = this.add.sprite(166, 108, 'setBack').setInteractive();
        this.credits.on('pointerdown', function(event){
            this.scene.start("Credits");
        }, this);

        this.instructions.on('pointerdown', function(event){
            this.scene.start("Instructions");

        },this);
        this.setBack.on('pointerdown', function(event){
            this.scene.start("Maze1");
        },this);
        
    }

}