class Instructions extends Phaser.Scene{
    constructor(){
        super({key : "Instructions"});
    }

    preload(){
        this.load.image('instruction', 'assets/instrucciones-.jpg');
        this.load.image('insBack', 'assets/ajustes-atras.png');
    }

    create(){
        this.instruction = this.add.sprite(306, 396, 'instruction');
        this.insBack = this.add.sprite(166, 113, 'insBack').setInteractive();
        this.insBack.on('pointerdown', function(event){
            this.scene.start("Settings");
        },this);
    }

    
}