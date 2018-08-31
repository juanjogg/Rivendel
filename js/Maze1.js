class Maze1 extends Phaser.Scene{

    constructor(){
        super({key: "Maze1"});

    }
    preload(){
        this.load.image('maze', 'assets/descomposicion/laberinto01/Laberinto01.jpg');
        this.load.image('coin', 'assets/descomposicion/laberinto01/coinTest.png');
        this.load.image('back', 'assets/descomposicion/botones/botonback.png');
        this.load.image('character', 'assets/descomposicion/laberinto01/coinTest.png');
        this.load.image('settings', 'assets/descomposicion/botones/botonosetting.png');
        this.load.image('maze2', 'assets/descomposicion/laberinto01/laberinto.png');
        this.load.image('nut', 'assets/descomposicion/laberinto01/nuez.png');
        this.load.image('poison', 'assets/descomposicion/laberinto01/flor.png');
    }

    create(){
        
        this.maze = this.add.image(0, 0, 'maze').setOrigin(0, 0);
        this.back = this.add.sprite(70, 80, 'back').setInteractive();
        this.character = this.physics.add.sprite(250 ,400, 'character');
        this.maze2 = this.physics.add.staticImage(208, 375, 'maze2');
        this.maze2.setScale(1.03, 1.03);
        this.maze2.setCollideWorldBounds(true);
        this.character.setScale(0.8, 0.8);
        this.character.body.setVelocity(1, 2).setBounce(0, 0).setCollideWorldBounds(true);
        this.physics.add.collider(this.character,this.maze2);
        this.cointTxt = this.add.text(234, 160, '0',{fontSize: '24px', fill: '#FFF'});
        this.scoreCoin = 0;
        this.nutTxt = this.add.text(120, 160, '0',{fontSize: '24px', fill: '#FFF'});
        this.scoreNut = 0;
        this.scoreGral = this.add.text(8, 0, 'Score: 0', {fontSize: '20px', fill: '#FFF'}); 
        this.score = 0;
        this.coins = this.physics.add.group({
            key: 'coin',
            repeat: '5',
            setXY: {x: 12, y: 50, stepX:40}
        });
        this.nuts = this.physics.add.group({
            key: 'nut',
            repeat: '2',
            setXY: {x: 12, y: 80, stepX:40}
        });

        this.coins.children.iterate((child) => {
            child.setScale(0.8, 0.8);
            child.setCollideWorldBounds(true);
            
        });

        this.nuts.children.iterate((child) =>{
            child.setCollideWorldBounds(true);
            child.setScale(0.2, 0.2);
        });

        this.physics.add.overlap(this.character, this.coins, (character, coin) =>{
            coin.disableBody(true, true);
            this.scoreCoin ++;
            this.score++;
            this.cointTxt.setText(''+this.scoreCoin);
            this.scoreGral.setText('Score: '+ this.score);
        }, null, this);

        this.physics.add.overlap(this.character, this.nuts, (character, nut) =>{
            nut.disableBody(true, true);
            this.scoreNut ++;
            this.nutTxt.setText(''+this.scoreNut);
            this.score+=3;
            this.scoreGral.setText('Score: '+ this.score);

        }, null, this);        

        this.setting = this.add.sprite(350, 82, 'settings').setInteractive();
        this.setting.on('pointerdown', (event) =>{
            this.scene.start("Settings");
        });
        this.back.on('pointerdown', function(event){
            this.scene.start("Menu");
        },this);
        this.cursors = this.input.keyboard.createCursorKeys();
        
        


    }

    update(delta){
 
        this.character.setVelocity(0);
        if(this.cursors.left.isDown){
           this.character.setVelocityX(-300);
        }
        else if(this.cursors.right.isDown){
           this.character.setVelocityX(300);
        }

        if(this.cursors.up.isDown){
           this.character.setVelocityY(-300);
        }
        else if(this.cursors.down.isDown){
           this.character.setVelocityY(300);
        }
        this.physics.world.collide(this.character, this.maze2);
    }
   
}
