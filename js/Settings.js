class Settings extends Phaser.Scene{
    constructor(){
        super({key: "Settings"});
    }

    preload(){
        this.load.image('screenSettings', 'img/descomposicion/Ajustes/ajustesbase.jpg');
        this.load.image('instructions', 'img/descomposicion/Ajustes/instrucciones.png');
        this.load.image('credits', 'img/descomposicion/Ajustes/creditos.png');
        this.load.image('setBack', 'img/descomposicion/Ajustes/instruccionesVolver.png');
        this.load.image('settingsMenu', 'img/descomposicion/Ajustes/menu.png')
    }

    create(){
        this.settings = this.add.image(0, 0, 'screenSettings').setOrigin(0, 0);
        this.settingsMenu = this.add.sprite(204, 182, 'settingsMenu').setInteractive();
        this.instructions = this.add.sprite(200, 270, 'instructions').setInteractive();
        this.credits = this.add.sprite(200, 360 , 'credits').setInteractive();
        this.setBack = this.add.sprite(85, 80, 'setBack').setInteractive();
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
