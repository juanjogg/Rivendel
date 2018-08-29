class Menu extends Phaser.Scene{
    constructor(){
        super({key : "Menu"});
    }

    preload(){
        
        this.load.image('menu', 'assets/inicio.jpg');
        this.load.image('btnInicio', 'assets/boton-start.png');
        this.load.image('btnLevel', 'assets/boton-level-.png');
    }
    create(){
        this.image = this.add.image(0, 0, 'menu').setOrigin(0, 0);

        this.inicio = this.add.sprite(430, 500, 'btnInicio').setInteractive();
        
        this.level = this.add.image(430, 600, 'btnLevel');
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        
        this.inicio.on('pointerdown', function(){
            console.log("Inciando la partida");
            this.scene.start("Maze1");
        }, this);
    }

    update(delta){
        if(this.key_A.isDown){
            this.inicio.x--;
        }
    }
}