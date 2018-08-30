class Credits extends Phaser.Scene{
    constructor(){
        super({key : "Credits"});
    }

    preload(){
        this.load.image('bgCredits', 'assets/descomposicion/Creditos/Creditosbase.jpg');
        this.load.image('backCredits', 'assets/descomposicion/botones/botonback.png');
    }

    create(){
        this.bgCredits = this.add.image(0, 0, 'bgCredits').setOrigin(0, 0);
        this.backCredits = this.add.sprite(85, 80, 'backCredits').setInteractive();

        this.backCredits.on('pointerdown', (e) => {
          this.scene.start('Settings');
        }, this);
    }
}
