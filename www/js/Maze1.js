class Maze1 extends Phaser.Scene{

    constructor(){
        super({key: "Maze1"});

    }
    preload(){
        this.load.image('maze', 'img/descomposicion/laberinto01/Laberinto01.jpg');
        this.load.image('coin', 'img/descomposicion/laberinto01/coinTest.png');
        this.load.image('back', 'img/descomposicion/botones/botonback.png');
        this.load.image('character', 'img/character.png');
        this.load.image('settings', 'img/descomposicion/botones/botonosetting.png');
        //this.load.image('maze2', 'img/descomposicion/laberinto01/laberinto.png');
        this.load.image('nut', 'img/descomposicion/laberinto01/nuez.png');
        this.load.image('poison', 'img/descomposicion/laberinto01/flor.png');
        this.load.audio('coinAudio', ['img/music/coin.wav'])
        this.load.image('bloque', 'img/descomposicion/partes/03.png')
        this.load.image('bloqueLargo', 'img/descomposicion/partes/07.png');
        this.load.image('linea', 'img/descomposicion/partes/13.png')
        this.load.image('linea2', 'img/descomposicion/partes/15.png')
        this.load.image('linea3', 'img/descomposicion/partes/08.png')
        this.load.image('lineaVertical', 'img/descomposicion/partes/23.png')
        this.load.image('lineaVertical2', 'img/descomposicion/partes/24.png')
        this.load.image('bloqueCentral', 'img/descomposicion/partes/02.png');
        this.load.image('btnArriba', 'img/descomposicion/botones/arriba.png')
        this.load.image('btnAbajo', 'img/descomposicion/botones/abajo.png')
        this.load.image('btnDerecha', 'img/descomposicion/botones/derecho.png')
        this.load.image('btnIzquierda', 'img/descomposicion/botones/izquierdo.png')
        this.load.image('MarcoHorizontal', 'img/descomposicion/partes/barraHorizontal.png')
        this.load.image('MarcoHorizontal2', 'img/descomposicion/partes/barraHorizontal1.png')
        this.load.image('MarcoVertical', 'img/descomposicion/partes/barraVertical.png')
        this.load.image('MarcoVertical2', 'img/descomposicion/partes/barraVertical1.png')
        this.load.image('MarcoVertical3', 'img/descomposicion/partes/barraVertical2.png')

    }

    create(){
        this.maze = this.add.image(0, 0, 'maze').setOrigin(0, 0);
        this.maze.setDisplaySize(360, 640);
        //this.maze2 = this.physics.add.staticImage(208, 375, 'maze2');
        //this.maze2.setScale(1.03, 1.03);
        //this.maze2.setCollideWorldBounds(true);
        this.bloque = this.physics.add.staticImage(88, 227, 'bloque')
        this.bloque2 = this.physics.add.staticImage(289, 227, 'bloque')
        this.bloqueLargo = this.physics.add.staticImage(143, 227, 'bloqueLargo')
        this.bloqueLargo2 = this.physics.add.staticImage(233, 227, 'bloqueLargo')
        this.linea = this.physics.add.staticImage(89, 256, 'linea');
        this.linea2 = this.physics.add.staticImage(288, 256, 'linea');
        this.lineaVertical = this.physics.add.staticImage(187, 217, 'lineaVertical');
        this.lineaVertical2 = this.physics.add.staticImage(128, 348, 'lineaVertical2');
        this.lineaVertical3 = this.physics.add.staticImage(248, 348, 'lineaVertical2');
        this.linea3 = this.physics.add.staticImage(143, 388, 'linea2');
        this.linea4 = this.physics.add.staticImage(233, 388, 'linea2');
        this.linea5 = this.physics.add.staticImage(65, 413, 'linea3');
        this.linea6 = this.physics.add.staticImage(309, 413, 'linea3');
        this.bloqueCentral = this.physics.add.staticImage(187, 323, 'bloqueCentral');
        //T's
        this.t11 = this.physics.add.staticImage(175, 256, 'linea2');
        this.t12 = this.physics.add.staticImage(202, 256, 'linea2');
        this.t13 = this.physics.add.staticImage(188, 270, 'lineaVertical2');

        this.t21 = this.physics.add.staticImage(175, 362, 'linea2');
        this.t22 = this.physics.add.staticImage(202, 362, 'linea2');
        this.t23 = this.physics.add.staticImage(188, 375, 'lineaVertical2');

        this.t31 = this.physics.add.staticImage(173, 414, 'linea2');
        this.t32 = this.physics.add.staticImage(202, 414, 'linea2');
        this.t33 = this.physics.add.staticImage(188, 428, 'lineaVertical2');

        this.t41 = this.physics.add.staticImage(87, 388, 'linea');
        this.t42 = this.physics.add.staticImage(98, 402, 'lineaVertical2');

        this.t51 = this.physics.add.staticImage(287, 389, 'linea');
        this.t52 = this.physics.add.staticImage(275, 402, 'lineaVertical2');

        //T's volteadas
        this.tv11 = this.physics.add.staticImage(128, 271, 'lineaVertical2');
        this.tv12 = this.physics.add.staticImage(128, 296, 'lineaVertical2');
        this.tv13 = this.physics.add.staticImage(142, 282, 'linea');

        this.tv21 = this.physics.add.staticImage(247, 271, 'lineaVertical2');
        this.tv22 = this.physics.add.staticImage(247, 296, 'lineaVertical2');
        this.tv23 = this.physics.add.staticImage(235, 282, 'linea');

        this.tv31 = this.physics.add.staticImage(127, 427, 'lineaVertical2');
        this.tv32 = this.physics.add.staticImage(89, 440, 'linea');
        this.tv33 = this.physics.add.staticImage(106, 440, 'linea');
        this.tv34 = this.physics.add.staticImage(143, 441, 'linea2');

        this.tv312 = this.physics.add.staticImage(248, 427, 'lineaVertical2');
        this.tv322 = this.physics.add.staticImage(288, 440, 'linea');
        this.tv332 = this.physics.add.staticImage(266, 440, 'linea');
        this.tv342 = this.physics.add.staticImage(234, 441, 'linea2');

        //Marco
        this.marcoHorizontal = this.physics.add.staticImage(188, 463, 'MarcoHorizontal');
        this.marcoHorizontal2 = this.physics.add.staticImage(188, 199, 'MarcoHorizontal');
        this.marcoHorizontal3 = this.physics.add.staticImage(299, 279, 'MarcoHorizontal2');
        this.marcoHorizontal4 = this.physics.add.staticImage(299, 311, 'MarcoHorizontal2');
        this.marcoHorizontal5 = this.physics.add.staticImage(299, 333, 'MarcoHorizontal2');
        this.marcoHorizontal6 = this.physics.add.staticImage(299, 364, 'MarcoHorizontal2');
        this.marcoHorizontal7 = this.physics.add.staticImage(76, 279, 'MarcoHorizontal2');
        this.marcoHorizontal8 = this.physics.add.staticImage(76, 311, 'MarcoHorizontal2');
        this.marcoHorizontal9 = this.physics.add.staticImage(76, 333, 'MarcoHorizontal2');
        this.marcoHorizontal10 = this.physics.add.staticImage(76, 364, 'MarcoHorizontal2');

        this.marcoVertical = this.physics.add.staticImage(324, 239, 'MarcoVertical');
        this.marcoVertical1 = this.physics.add.staticImage(273, 295, 'MarcoVertical2');
        this.marcoVertical2 = this.physics.add.staticImage(273, 349, 'MarcoVertical2');
        this.marcoVertical3 = this.physics.add.staticImage(324, 414, 'MarcoVertical3');
        this.marcoVertical4 = this.physics.add.staticImage(52, 239, 'MarcoVertical');
        this.marcoVertical5 = this.physics.add.staticImage(102, 295, 'MarcoVertical2');
        this.marcoVertical6 = this.physics.add.staticImage(102, 349, 'MarcoVertical2');
        this.marcoVertical7 = this.physics.add.staticImage(52, 414, 'MarcoVertical3');

        this.arrMap = [this.bloque, this.bloque2, this.bloqueLargo, this.bloqueLargo2, this.linea, this.linea2, this.linea3, this.linea4,
            this.linea5, this.linea6, this.lineaVertical, this.lineaVertical3, this.lineaVertical2, this.t11, this.t12, this.t13, this.t21,
            this.t22, this.t23, this.t31, this.t32, this.t33, this.t41, this.t42, this.t51, this.t52, this.tv11, this.tv12, this.tv13, this.tv21, this.tv22, this.tv23,
            this.tv31, this.tv32, this.tv33, this.tv34, this.tv312, this.tv322, this.tv332, this.tv342, this.bloqueCentral, this.marcoHorizontal, this.marcoHorizontal2,
            this.marcoHorizontal3, this.marcoHorizontal4, this.marcoHorizontal5, this.marcoHorizontal6, this.marcoHorizontal7, this.marcoHorizontal8, this.marcoHorizontal9,
            this.marcoHorizontal10, this.marcoVertical, this.marcoVertical1, this.marcoVertical2, this.marcoVertical3, this.marcoVertical4, this.marcoVertical5, this.marcoVertical6, this.marcoVertical7];


        this.btnArriba = this.add.sprite(190, 490, 'btnArriba').setInteractive();
        this.btnAbajo = this.add.sprite(186, 572, 'btnAbajo').setInteractive();
        this.btnDerecha = this.add.sprite(228, 533, 'btnDerecha').setInteractive();
        this.btnIzquierda = this.add.sprite(145, 533, 'btnIzquierda').setInteractive();
        this.back = this.add.sprite(60, 68, 'back').setInteractive();
        this.character = this.physics.add.sprite(63 ,215, 'character');
        this.soundFX = this.sound.add('coinAudio');
        this.character.setScale(0.02, 0.02);
        this.character.body.setVelocity(1, 2).setBounce(0, 0).setCollideWorldBounds(true);
        this.physics.add.collider(this.character, this.esquina);
        //this.physics.add.collider(this.character,this.maze2);
        this.physics.add.collider(this.character, this.bloqueLargo);
        this.cointTxt = this.add.text(202, 138, '0',{fontSize: '24px', fill: '#FFF'});
        this.scoreCoin = 0;
        this.nutTxt = this.add.text(100, 138, '0',{fontSize: '24px', fill: '#FFF'});
        this.scoreNut = 0;
        this.scoreGral = this.add.text(8, 0, 'Score: 0', {fontSize: '20px', fill: '#FFF'});
        this.score = 0;
        this.poisonTxt = this.add.text(287, 138, '0', {fontSize: '24px', fill: '#FFF'});
        this.scorePoison = 0;

        //Grupos

        this.coins = this.physics.add.group({
            key: 'coin',
            repeat: '5',
            setXY: {x: 113, y: 230, stepY: 40}
        });
        this.coins2 = this.physics.add.group({
            key: 'coin',
            repeat: '5',
            setXY: {x: 264, y: 230, stepY: 40}
        });
        this.nuts = this.physics.add.group({
            key: 'nut',
            repeat: '2',
            setXY: {x: 80  , y: 209, stepX:100}
        });
        this.nuts2 = this.physics.add.group({
            key: 'nut',
            repeat: '2',
            setXY: {x: 105, y: 453, stepX: 100}
        });
        this.poison = this.physics.add.group({
            key: 'poison',
            repeat: '2',
            setXY: {x: 105, y: 244, stepX:90}
        });
        this.poison2 = this.physics.add.group({
          key: 'poison',
          repeat: '1',
          setXY: {x:95, y: 375, stepX: 150}
        });

        this.poison3 = this.physics.add.group({
          key: 'poison',
          repeat: '1',
          setXY: {x:113, y: 375, stepX: 148}
        });

        this.coins.children.iterate((child) => {
            child.setScale(0.5, 0.5);
            child.setCollideWorldBounds(true);

        });
        this.coins2.children.iterate((child) => {
            child.setScale(0.5, 0.5);
            child.setCollideWorldBounds(true);

        });

        this.nuts.children.iterate((child) =>{
            child.setCollideWorldBounds(true);
            child.setScale(0.18, 0.18);
        });
        this.nuts2.children.iterate((child) => {
            child.setScale(0.18, 0.18);
            child.setCollideWorldBounds(true);

        });
        this.poison.children.iterate((child) =>{
            child.setCollideWorldBounds(true);
            child.setScale(0.18, 0.18);
            child.setVelocity(300, 0).setBounce(1, 0);
        });
        this.poison2.children.iterate((child) =>{
            child.setCollideWorldBounds(true);
            child.setScale(0.18, 0.18);
            child.setVelocity(300, 0).setBounce(1, 0);
        });
        this.poison3.children.iterate((child) =>{
            child.setCollideWorldBounds(true);
            child.setScale(0.14, 0.14);
            child.setVelocity(0, 100).setBounce(0, 1);
        });

        this.physics.add.overlap(this.character, this.coins, (character, coin) =>{
            coin.disableBody(true, true);
            this.scoreCoin ++;
            this.score++;
            this.cointTxt.setText(''+this.scoreCoin);
            this.scoreGral.setText('Score: '+ this.score);
            this.soundFX.play();
        }, null, this);
        this.physics.add.overlap(this.character, this.coins2, (character, coin) =>{
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
        this.physics.add.overlap(this.character, this.nuts2, (character, nut) =>{
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

        this.physics.add.overlap(this.character, this.poison2, (character, poison) =>{
            poison.disableBody(true, true);
            this.scorePoison ++;
            this.poisonTxt.setText(''+this.scorePoison);
            this.score-=3;
            this.scoreGral.setText('Score: '+ this.score);

        }, null, this);

        this.physics.add.overlap(this.character, this.poison3, (character, poison) =>{
            poison.disableBody(true, true);
            this.scorePoison ++;
            this.poisonTxt.setText(''+this.scorePoison);
            this.score-=3;
            this.scoreGral.setText('Score: '+ this.score);

        }, null, this);

        this.setting = this.add.sprite(305, 70, 'settings').setInteractive();
        this.setting.on('pointerdown', (event) =>{
            this.scene.start("Settings");
        });
        this.back.on('pointerdown', function(event){
            this.scene.start("Menu");
        },this);


        this.cursors = this.input.keyboard.createCursorKeys();


        for (let i = 0; i < this.arrMap.length; i++) {

            this.physics.add.collider(this.character, this.arrMap[i]);
            this.physics.add.collider(this.poison, this.arrMap[i]);
            this.physics.add.collider(this.poison2, this.arrMap[i]);
            this.physics.add.collider(this.poison3, this.arrMap[i]);

            //this.physics.add.collider(this.poison2, this.arrMap[i]);
            //this.arrMap[i].setScale(1.2, 1.2 );

        }




    }

    update(delta){

        this.character.setVelocity(0);

        this.btnArriba.on('pointerdown', (e) => {
            this.character.setGravityY(-7000);
            this.character.setGravityX(0);
        },this);
        this.btnAbajo.on('pointerdown', (e) => {
            this.character.setGravityY(7000);
            this.character.setGravityX(0);


        },this);
        this.btnDerecha.on('pointerdown', (e) => {
            this.character.setGravityX(7000);
            this.character.setGravityY(0);
        },this);
        this.btnIzquierda.on('pointerdown', (e) => {
            this.character.setGravityX(-7000);
            this.character.setGravityY(0);

        },this);

        if(this.cursors.left.isDown){
           this.character.setVelocityX(-200);
           this.character.setGravity(0);
        }
        else if(this.cursors.right.isDown){
           this.character.setVelocityX(200);
           this.character.setGravity(0);

        }

        if(this.cursors.up.isDown){
           this.character.setVelocityY(-200);
           this.character.setGravity(0);

        }
        else if(this.cursors.down.isDown){
           this.character.setVelocityY(200);
           this.character.setGravity(0);

        }


        if(this.score < 0){
            this.scene.start("Maze1");
        }
        if(this.score == 15){
            this.score = 0;
            this.add.text(165, 368, 'Ganaste',{fontSize: '32px', fill: '#FFF'});

        }
    }

}
