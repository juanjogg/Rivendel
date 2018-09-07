class Maze1 extends Phaser.Scene{

    constructor(){
        super({key: "Maze1"});

    }
    preload(){
        this.load.image('maze', 'assets/descomposicion/laberinto01/base.jpg');
        this.load.image('coin', 'assets/descomposicion/laberinto01/coinTest.png');
        this.load.image('back', 'assets/descomposicion/botones/botonback.png');
        this.load.image('character', 'assets/character.png');
        this.load.image('settings', 'assets/descomposicion/botones/botonosetting.png');
        //this.load.image('maze2', 'assets/descomposicion/laberinto01/laberinto.png');
        this.load.image('nut', 'assets/descomposicion/laberinto01/nuez.png');
        this.load.image('poison', 'assets/descomposicion/laberinto01/flor.png');
        this.load.audio('coinAudio', ['assets/music/coin.wav'])
        this.load.image('bloque', 'assets/descomposicion/partes/03.png')
        this.load.image('bloqueLargo', 'assets/descomposicion/partes/07.png');
        this.load.image('linea', 'assets/descomposicion/partes/13.png')
        this.load.image('linea2', 'assets/descomposicion/partes/15.png')
        this.load.image('linea3', 'assets/descomposicion/partes/08.png')        
        this.load.image('lineaVertical', 'assets/descomposicion/partes/23.png')
        this.load.image('lineaVertical2', 'assets/descomposicion/partes/24.png')
        this.load.image('MarcoHorizontal', 'assets/descomposicion/partes/barraHorizontal.png')
        this.load.image('MarcoHorizontal2', 'assets/descomposicion/partes/barraHorizontal1.png')
        this.load.image('MarcoVertical', 'assets/descomposicion/partes/barraVertical.png')
        this.load.image('MarcoVertical2', 'assets/descomposicion/partes/barraVertical1.png')
        this.load.image('MarcoVertical3', 'assets/descomposicion/partes/barraVertical2.png')

    }

    create(){
        this.maze = this.add.image(0, 0, 'maze').setOrigin(0, 0);
        //this.maze2 = this.physics.add.staticImage(208, 375, 'maze2');
        //this.maze2.setScale(1.03, 1.03);
        //this.maze2.setCollideWorldBounds(true);
        this.bloque = this.physics.add.staticImage(113, 272, 'bloque')
        this.bloque2 = this.physics.add.staticImage(314, 272, 'bloque')
        this.bloqueLargo = this.physics.add.staticImage(168, 272, 'bloqueLargo')
        this.bloqueLargo2 = this.physics.add.staticImage(258, 272, 'bloqueLargo')       
        this.linea = this.physics.add.staticImage(114, 301, 'linea');
        this.linea2 = this.physics.add.staticImage(313, 301, 'linea');
        this.lineaVertical = this.physics.add.staticImage(212, 262, 'lineaVertical');
        this.lineaVertical2 = this.physics.add.staticImage(153, 393, 'lineaVertical2');
        this.lineaVertical3 = this.physics.add.staticImage(273, 393, 'lineaVertical2');
        this.linea3 = this.physics.add.staticImage(168, 433, 'linea2');
        this.linea4 = this.physics.add.staticImage(258, 433, 'linea2');
        this.linea5 = this.physics.add.staticImage(90, 458, 'linea3');
        this.linea6 = this.physics.add.staticImage(334, 458, 'linea3');

        //T's
        this.t11 = this.physics.add.staticImage(200, 301, 'linea2');
        this.t12 = this.physics.add.staticImage(227, 301, 'linea2');
        this.t13 = this.physics.add.staticImage(213, 315, 'lineaVertical2');

        this.t21 = this.physics.add.staticImage(200, 407, 'linea2');
        this.t22 = this.physics.add.staticImage(227, 407, 'linea2');
        this.t23 = this.physics.add.staticImage(213, 420, 'lineaVertical2');

        this.t31 = this.physics.add.staticImage(198, 459, 'linea2');
        this.t32 = this.physics.add.staticImage(227, 459, 'linea2');
        this.t33 = this.physics.add.staticImage(213, 473, 'lineaVertical2');

        this.t41 = this.physics.add.staticImage(112, 433, 'linea');        
        this.t42 = this.physics.add.staticImage(123, 447, 'lineaVertical2');

        this.t51 = this.physics.add.staticImage(312, 434, 'linea');
        this.t52 = this.physics.add.staticImage(300, 447, 'lineaVertical2');

        //T's volteadas
        this.tv11 = this.physics.add.staticImage(153, 316, 'lineaVertical2');
        this.tv12 = this.physics.add.staticImage(153, 341, 'lineaVertical2');
        this.tv13 = this.physics.add.staticImage(167, 327, 'linea');

        this.tv21 = this.physics.add.staticImage(272, 316, 'lineaVertical2');
        this.tv22 = this.physics.add.staticImage(272, 341, 'lineaVertical2');
        this.tv23 = this.physics.add.staticImage(260, 327, 'linea');

        this.tv31 = this.physics.add.staticImage(152, 472, 'lineaVertical2');
        this.tv32 = this.physics.add.staticImage(114, 485, 'linea');
        this.tv33 = this.physics.add.staticImage(131, 485, 'linea');
        this.tv34 = this.physics.add.staticImage(168, 486, 'linea2');

        this.tv312 = this.physics.add.staticImage(273, 472, 'lineaVertical2');
        this.tv322 = this.physics.add.staticImage(313, 485, 'linea');
        this.tv332 = this.physics.add.staticImage(291, 485, 'linea');
        this.tv342 = this.physics.add.staticImage(259, 486, 'linea2');

        //Marco
        this.marcoHorizontal = this.physics.add.staticImage(213, 508, 'MarcoHorizontal');
        this.marcoHorizontal2 = this.physics.add.staticImage(213, 244, 'MarcoHorizontal');
        this.marcoHorizontal3 = this.physics.add.staticImage(324, 324, 'MarcoHorizontal2');
        this.marcoHorizontal4 = this.physics.add.staticImage(324, 356, 'MarcoHorizontal2');
        this.marcoHorizontal5 = this.physics.add.staticImage(324, 378, 'MarcoHorizontal2');
        this.marcoHorizontal6 = this.physics.add.staticImage(324, 409, 'MarcoHorizontal2');
        this.marcoHorizontal7 = this.physics.add.staticImage(101, 324, 'MarcoHorizontal2');
        this.marcoHorizontal8 = this.physics.add.staticImage(101, 356, 'MarcoHorizontal2');
        this.marcoHorizontal9 = this.physics.add.staticImage(101, 378, 'MarcoHorizontal2');
        this.marcoHorizontal10 = this.physics.add.staticImage(101, 409, 'MarcoHorizontal2');

        this.marcoVertical = this.physics.add.staticImage(349, 284, 'MarcoVertical');
        this.marcoVertical1 = this.physics.add.staticImage(298, 340, 'MarcoVertical2');
        this.marcoVertical2 = this.physics.add.staticImage(298, 394, 'MarcoVertical2');
        this.marcoVertical3 = this.physics.add.staticImage(349, 459, 'MarcoVertical3');
        this.marcoVertical4 = this.physics.add.staticImage(77, 284, 'MarcoVertical');
        this.marcoVertical5 = this.physics.add.staticImage(127, 340, 'MarcoVertical2');
        this.marcoVertical6 = this.physics.add.staticImage(127, 394, 'MarcoVertical2');
        this.marcoVertical7 = this.physics.add.staticImage(77, 459, 'MarcoVertical3');

        this.arrMap = [this.bloque, this.bloque2, this.bloqueLargo, this.bloqueLargo2, this.linea, this.linea2, this.linea3, this.linea4,
            this.linea5, this.linea6, this.lineaVertical, this.lineaVertical3, this.lineaVertical2, this.t11, this.t12, this.t13, this.t21,
            this.t22, this.t23, this.t31, this.t32, this.t33, this.t41, this.t42, this.t51, this.t52, this.tv11, this.tv12, this.tv13, this.tv21, this.tv22, this.tv23,
            this.tv31, this.tv32, this.tv33, this.tv34, this.tv312, this.tv322, this.tv332, this.tv342];

     

        this.back = this.add.sprite(70, 80, 'back').setInteractive();
        this.character = this.physics.add.sprite(400 ,100, 'character');
        this.soundFX = this.sound.add('coinAudio');
        this.character.setScale(0.02, 0.02);
        this.character.body.setVelocity(1, 2).setBounce(0, 0).setCollideWorldBounds(true);
        this.physics.add.collider(this.character, this.esquina);
        //this.physics.add.collider(this.character,this.maze2);
        this.physics.add.collider(this.character, this.bloqueLargo);
        this.cointTxt = this.add.text(234, 160, '0',{fontSize: '24px', fill: '#FFF'});
        this.scoreCoin = 0;
        this.nutTxt = this.add.text(120, 160, '0',{fontSize: '24px', fill: '#FFF'});
        this.scoreNut = 0;
        this.scoreGral = this.add.text(8, 0, 'Score: 0', {fontSize: '20px', fill: '#FFF'}); 
        this.score = 0;
        this.poisonTxt = this.add.text(330, 160, '0', {fontSize: '24px', fill: '#FFF'});
        this.scorePoison = 0;
        this.coins = this.physics.add.group({
            key: 'coin',
            repeat: '5',
            setXY: {x: 75, y: 150, stepX:40}
        });
        this.nuts = this.physics.add.group({
            key: 'nut',
            repeat: '2',
            setXY: {x: 75, y: 160, stepX:40}
        });
        this.poison = this.physics.add.group({
            key: 'poison',
            repeat: '5',
            setXY: {x: 75, y: 170, stepX:40}
        });

        this.coins.children.iterate((child) => {
            child.setScale(0.8, 0.8);
            child.setCollideWorldBounds(true);
            
        });

        this.nuts.children.iterate((child) =>{
            child.setCollideWorldBounds(true);
            child.setScale(0.2, 0.2);
        });
        this.poison.children.iterate((child) =>{
            child.setCollideWorldBounds(true);
            child.setScale(0.2, 0.2);
        });

        this.physics.add.overlap(this.character, this.coins, (character, coin) =>{
            coin.disableBody(true, true);
            this.scoreCoin ++;
            this.score++;
            this.cointTxt.setText(''+this.scoreCoin);
            this.scoreGral.setText('Score: '+ this.score);
            this.soundFX.play();
        }, null, this);

        this.physics.add.overlap(this.character, this.nuts, (character, nut) =>{
            nut.disableBody(true, true);
            this.scoreNut ++;
            this.nutTxt.setText(''+this.scoreNut);
            this.score+=3;
            this.scoreGral.setText('Score: '+ this.score);

        }, null, this);

        this.physics.add.overlap(this.character, this.poison, (character, poison) =>{
            poison.disableBody(true, true);
            this.scorePoison ++;
            this.poisonTxt.setText(''+this.scorePoison);
            this.score-=3;
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
       
        for (let i = 0; i < this.arrMap.length; i++) {
            this.physics.add.collider(this.character, this.arrMap[i]);
            
        }


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
        //this.physics.world.collide(this.character, this.maze2);

        if(this.score < 0){
            this.scene.start("Maze1");
        }
        if(this.score == 15){
            this.score = 0;
            this.add.text(165, 368, 'Ganaste',{fontSize: '32px', fill: '#FFF'});
          
        }
    }
   
}
