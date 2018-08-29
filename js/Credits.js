class Credits extends Phaser.Scene{
    constructor(){
        super({key : "Credits"});
    }

    preload(){
        this.load.image('bgCredits', 'assets/Creditos.jpg');
    }

    create(){
        this.bgCredits = this.add.sprite(306, 396, 'bgCredits');
        
    }
}