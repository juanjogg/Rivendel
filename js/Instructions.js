class Instructions extends Phaser.Scene{
    constructor(){
        super({key : "Instructions"});
    }

    preload(){
        this.load.image('instruction', 'assets/descomposicion/Instrucciones/instruccionesbase.jpg');
        this.load.image('insBack', 'assets/descomposicion/Instrucciones/instruccionesboton.png');
    }

    create(){
        this.instruction = this.add.image(0, 0, 'instruction').setOrigin(0, 0);
        this.insBack = this.add.sprite(166, 113, 'insBack').setInteractive();
        this.insBack.on('pointerdown', function(event){
            this.scene.start("Settings");
        },this);
    }


}
