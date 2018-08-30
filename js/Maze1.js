class Maze1 extends Phaser.Scene{

    constructor(){
        super({key: "Maze1"});

    }
    preload(){
        this.load.image('maze', 'assets/descomposicion/laberinto01/Laberinto01.jpg');
        this.load.image('maze2', 'assets/descomposicion/laberinto01/laberinto.png')
        this.load.image('back', 'assets/descomposicion/botones/botonback.png');
        this.load.image('character', 'assets/descomposicion/laberinto01/coinTest.png');
        this.load.image('settings', 'assets/descomposicion/botones/botonosetting.png');

    }

    create(){

        this.maze = this.add.image(0, 0, 'maze').setOrigin(0, 0);
        this.maze2 = this.add.sprite(208, 375, 'maze2')
        this.back = this.add.sprite(70, 80, 'back').setInteractive();
        this.character = this.add.sprite(80 ,475, 'character').setInteractive();

        this.setting = this.add.sprite(350, 82, 'settings').setInteractive();
        this.setting.on('pointerdown', (event) =>{
            this.scene.start("Settings");
        });
        this.back.on('pointerdown', function(event){
            this.scene.start("Menu");
        },this);

        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);



    }

    update(delta){
        if(this.key_A.isDown){
            this.character.x = this.character.x - 1;
        }
        if(this.key_W.isDown){
            this.character.y--;

        }
        if(this.key_S.isDown){
            this.character.y++;
        }
        if(this.key_D.isDown){
            this.character.x++;
        }
    }
}
