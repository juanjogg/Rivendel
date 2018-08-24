class Settings extends Phaser.Scene{
    constructor(){
        super({key: "Settings"});
    }

    preload(){
        this.load.image('ajustes', 'assets/pantalla-ajuastes-.jpg');
    }

    create(){
        this.settings = this.add.sprite(306, 396, 'ajustes');
    }
}