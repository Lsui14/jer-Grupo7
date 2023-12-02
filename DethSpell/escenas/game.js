var player1;
var player2;
var platform;
var derecha = true;
var derecha2 = false;
var countBolas = false;
var numBolas = 0;
var countBolasMorada = false;
var numBolasMorada = 0;
var bola;
var bolas;



var Game = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function Game() {
            Phaser.Scene.call(this, { key: 'Game' });
        },


    preload ()
    {
    
    this.load.image('escenario', 'assets/escenario.jpg');
    this.load.image('suelo', 'assets/platform.png');
    this.load.image('plataformaGrande', 'assets/plataforma1.png');
    this.load.image('plataformaPequena', 'assets/plataforma_p.png');
    this.load.image('bola', 'assets/bola.png');
    this.load.image('bola_I', 'assets/bola_l.png');
    this.load.image('bola2', 'assets/bola2.png');
    this.load.image('bola2_I', 'assets/bola2_l.png');
    this.load.image('corazon_rojo', 'assets/corazon1.png');
    this.load.image('corazon_morado', 'assets/corazon2.png');
    this.load.spritesheet('magorojo', 'assets/mago1.png', { frameWidth: 98, frameHeight: 94 });
    this.load.spritesheet('magomorado', 'assets/mago2.png', { frameWidth: 98, frameHeight: 94 });

    this.load.spritesheet('Rajustes', 'interfaces/ajustes.png', { frameWidth: 92, frameHeight: 89 });

    },

    create ()
    {
    this.add.image(450, 253, 'escenario');
    platform = this.physics.add.staticGroup();

    platform.create(450, 480, 'suelo');
    platform.create(450,350,'plataformaPequena');
    platform.create(225,190,'plataformaGrande');
    platform.create(675,190,'plataformaGrande');
    

    player1 = this.physics.add.sprite(200,350, 'magorojo');
    player2 = this.physics.add.sprite(700,350, 'magomorado');
    

    player1.setBounce(0.1);
    player1.setCollideWorldBounds(true);
    player1.body.setGravityY(300);
    player1.vida = 3;

    player2.setBounce(0.1);
    player2.setCollideWorldBounds(true);
    player2.body.setGravityY(300);
    player2.vida = 3;

    Corazon_Rojo = this.physics.add.staticGroup({
        key: 'corazon_rojo',
        repeat: player1.vida - 1,
        setXY: { x: 160, y: 50, stepX:70}
    })

    Corazon_Morado = this.physics.add.staticGroup({
        key: 'corazon_morado',
        repeat: player2.vida - 1,
        setXY: { x: config.width - 160, y: 50, stepX:-70}
    })

    //Corazon_Morado.setScale(2).refreshBody();

    

    this.physics.add.collider(player1, platform);
    this.physics.add.collider(player2, platform);
    this.physics.add.collider(player2, player1);


    bola = this.physics.add.group();
    this.physics.add.collider(player2, bola, hitbola, null, this);
    this.physics.add.collider(platform, bola, Desaparecer, null, this);

    bolaMorada = this.physics.add.group();
    this.physics.add.collider(player1, bolaMorada, hitbolaMorada, null, this);
    this.physics.add.collider(platform, bolaMorada, DesaparecerMorada, null, this);

    function Desaparecer(platform, bola){
        bola.disableBody(true,true);
        countBolas = false;
        numBolas--;
    }
    

    function hitbola (player2, bola)
    {
        var i = 0;
        Corazon_Morado.children.iterate(function(child){
        if(i == player2.vida -1){
            child.setTint('#FDFEFE');
            
        }
        i++;

    })
        if(player2.vida == 1){
            player2.setTint(0xff0000);
            player2.vida--;
            this.scene.start('Victoria1');          
        }
        
        else{
            player2.vida--;
        }
        
         player2.anims.play('morado hit left');
         bola.disableBody(true,true);
         countBolas = false;
         numBolas--;

         //vidas = Corazon_Morado.countActive(true);

         //Corazon_Morado.disableBody(true,true);

     
    }

    function DesaparecerMorada(platform, bolaMorada){
        bolaMorada.disableBody(true,true);
        countBolasMorada = false;
        numBolasMorada--;
    }
    

    function hitbolaMorada (player1, bolaMorada)
    {
        
        var i = 0;
        Corazon_Rojo.children.iterate(function(child){
        if(i == player1.vida -1){
            child.setTint('#FDFEFE');
            
        }
        i++;

    })
        if(player1.vida == 1){
            player1.setTint(0xff0000);
            player1.vida--;
            this.scene.start('Victoria2');   
        }
        
        else{
            player1.vida--;
        }
         
         player1.anims.play('rojo hit right');
         bolaMorada.disableBody(true,true);
         countBolasMorada = false;
         numBolasMorada--;

     
    }

    this.anims.create({
        key: 'rojo atack left',
        frames: [{ key: 'magorojo', frame: 13}],
        frameRate: 4,
        
    });

    this.anims.create({
        key: 'rojo atack right',
        frames: [{ key: 'magorojo', frame: 12}],
        frameRate: 4,
        
    });

    

    this.anims.create({
        key: 'rojo left',
        frames: this.anims.generateFrameNumbers('magorojo', { start: 6, end: 9}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'rojo turn left',
        frames: [{ key: 'magorojo', frame: 5}],
        frameRate: 20
    });

    this.anims.create({
        key: 'rojo turn right',
        frames: [{ key: 'magorojo', frame: 4}],
        frameRate: 20
    });

    this.anims.create({
        key: 'rojo right',
        frames: this.anims.generateFrameNumbers('magorojo', { start: 0, end: 3}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'rojo jump right',
        frames: [{key: 'magorojo', frame: 10}],
        framRate: 20,
        repeat: -1

    })

    this.anims.create({
        key: 'rojo jump left',
        frames: [{key: 'magorojo', frame: 11}],
        framRate: 20,
        repeat: -1

    })

    this.anims.create({
        key: 'rojo hit right',
        frames: this.anims.generateFrameNumbers('magorojo', { start: 14, end: 16}),
        framRate: 20,
        repeat: -1
    })

    this.anims.create({
        key: 'rojo hit left',
        frames: this.anims.generateFrameNumbers('magorojo', { start: 17, end: 19}),
        framRate: 20,
        repeat: -1
    })
    
    this.anims.create({
        key: 'morado atack left',
        frames: [{key: 'magomorado', frame: 13}],
        frameRate: 4,
        
    });

    this.anims.create({
        key: 'morado atack right',
        frames: [{key: 'magomorado', frame: 12}],
        frameRate: 4,
        
    });


    this.anims.create({
        key: 'morado left',
        frames: this.anims.generateFrameNumbers('magomorado', { start: 6, end: 9}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'morado turn left',
        frames: [{ key: 'magomorado', frame: 5}],
        frameRate: 20
    });

    this.anims.create({
        key: 'morado turn right',
        frames: [{ key: 'magomorado', frame: 4}],
        frameRate: 20
    });

    this.anims.create({
        key: 'morado right',
        frames: this.anims.generateFrameNumbers('magomorado', { start: 0, end: 3}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'morado jump right',
        frames: [{ key: 'magomorado', frame: 10}],
        framRate: 20,
        repeat: -1

    })

    this.anims.create({
        key: 'morado jump left',
        frames: [{ key: 'magomorado', frame: 11}],
        framRate: 20,
        repeat: -1
        

    })

    this.anims.create({
        key: 'morado hit right',
        frames: this.anims.generateFrameNumbers('magomorado', { start: 14, end: 16}),
        framRate: 5,
    })

    this.anims.create({
        key: 'morado hit left',
        frames: this.anims.generateFrameNumbers('magomorado', { start: 17, end: 19}),
        framRate: 5,
    })

    //cursors = this.input.keyboard.createCursorKeys();
    const keyCodes= Phaser.Input.Keyboard.KeyCodes;
    this.teclaA= this.input.keyboard.addKey(keyCodes.A);
    this.teclaD= this.input.keyboard.addKey(keyCodes.D);
    this.teclaW= this.input.keyboard.addKey(keyCodes.W);
    this.teclaJ= this.input.keyboard.addKey(keyCodes.J);
    this.teclaL= this.input.keyboard.addKey(keyCodes.L);
    this.teclaI= this.input.keyboard.addKey(keyCodes.I);
    this.spacebar= this.input.keyboard.addKey(keyCodes.E);
    this.teclaO = this.input.keyboard.addKey(keyCodes.O);
    this.teclaU = this.input.keyboard.addKey(keyCodes.U);





},

 update ()
{

    
    
     if (this.spacebar.isDown && derecha){
        player1.anims.play('rojo atack right', true);

        if(countBolas == false && numBolas < 2){
            bolas = bola.create (player1.x + 40, player1.y - 30, 'bola');
            bolas.setGravityY(200);
            bolas.setVelocity(400, -200);
            countBolas = true;
            numBolas++;
        }

        
    }

    

    else if (this.spacebar.isDown && !derecha){
        player1.anims.play('rojo atack left', true);

        if(countBolas == false && numBolas < 2){
            var bolas = bola.create (player1.x - 40, player1.y - 30, 'bola_I');
            bolas.setGravityY(200);
            bolas.setVelocity(-400, -200);
            countBolas = true;
            numBolas++;
        }
        
    }

    else if(this.teclaW.isDown && player1.body.touching.down && derecha){
        player1.setVelocityY(-500);
        player1.anims.play('rojo jump right', true);
    }

    else if(this.teclaW.isDown && player1.body.touching.down && !derecha){
        player1.setVelocityY(-500);
        player1.anims.play('rojo jump left', true);
    }
    else if(this.teclaA.isDown){
        player1.setVelocityX(-260);

        if(player1.body.touching.down){
        player1.anims.play('rojo left', true);
        }
        else{
            player1.anims.play('rojo jump left', true);
        }
        derecha = false;
    }

    else if(this.teclaD.isDown){
        player1.setVelocityX(260);

        if(player1.body.touching.down){
        player1.anims.play('rojo right', true);
        }
        else{
            player1.anims.play('rojo jump right', true);
        }
        derecha = true;
    }

    else if(derecha == true){
        player1.setVelocityX(0);

        if(player1.body.touching.down){
        player1.anims.play('rojo turn right');
        }
        countBolas = false;
    }
    

    else{
        player1.setVelocityX(0);

        if(player1.body.touching.down){
        player1.anims.play('rojo turn left');
        }
        countBolas = false;
    }


    if (this.teclaO.isDown && derecha2){
        player2.anims.play('morado atack right', true);
        if(countBolasMorada == false && numBolasMorada < 2){
            var bolas = bolaMorada.create (player2.x + 40, player2.y - 30, 'bola2');
            bolas.setGravityY(200);
            bolas.setVelocity(400, -200);
            countBolasMorada = true;
            numBolasMorada++;
        }
        
    }
    else if (this.teclaO.isDown && !derecha2){
        player2.anims.play('morado atack left', true);
        if(countBolasMorada == false && numBolasMorada < 2){
            var bolas = bolaMorada.create (player2.x - 40, player2.y - 30, 'bola2_I');
            bolas.setGravityY(200);
            bolas.setVelocity(-400, -200);
            countBolasMorada = true;
            numBolasMorada++;
        }
        
    }
    else if(this.teclaI.isDown && player2.body.touching.down && derecha2){
        player2.setVelocityY(-500);
        player2.anims.play('morado jump right', true);
    }

    else if(this.teclaI.isDown && player2.body.touching.down && !derecha2){
        player2.setVelocityY(-500);
        player2.anims.play('morado jump left', true);
    }

    else if(this.teclaJ.isDown){
        player2.setVelocityX(-260);

        if(player2.body.touching.down){
        player2.anims.play('morado left', true);
        }
        else{
            player2.anims.play('morado jump left', true);
        }
        derecha2 = false;
    }

    else if(this.teclaL.isDown){
        player2.setVelocityX(260);

        if(player2.body.touching.down){
        player2.anims.play('morado right', true);
        
        }
        else{
            player2.anims.play('morado jump right', true);
        }
        derecha2 = true;

        
    }

    else if(derecha2 == true){
        player2.setVelocityX(0);

        if(player2.body.touching.down){
        player2.anims.play('morado turn right');
        }

        countBolasMorada = false;
    }

    else{
        player2.setVelocityX(0);

        if(player2.body.touching.down){
        player2.anims.play('morado turn left');
        }

        countBolasMorada = false;
    }


    }

});