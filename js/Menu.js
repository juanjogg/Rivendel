class Menu extends Phaser.Scene{
    constructor(){
        super({key : "Menu"});
    }

    preload(){
        
        this.load.image('menu', 'assets/descomposicion/pantalla inicio/414X736sin.png');
        this.load.image('btnInicio', 'assets/descomposicion/botones/boton-start.png');
        this.load.image('btnLevel', 'assets/descomposicion/botones/boton-level-.png');
    }
    create(){
        this.image = this.add.image(0, 0, 'menu').setOrigin(0, 0);

        this.inicio = this.add.sprite(275, 550, 'btnInicio').setInteractive();
        //this.inicio.scale.setTo(1, 1);
        this.level = this.add.image(275, 600, 'btnLevel');
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