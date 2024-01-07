var player1;
var player2;
var platform;
var derecha;
var derecha2;
var countBolas;
var numBolas;
var countBolasMorada;
var numBolasMorada;
var bola;
var bolas;
var hit;
var hitrojo;
var move;
var movemorado;
var powerup;
var vidas;
var powerups;
var gatoj1;
var gatoj2;
var tutoj1;
var tutoj2;
var j1actual;
var j2actual;
var indiceTuto = -1;


var Tutorial = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function Tutorial() {
            Phaser.Scene.call(this, { key: 'Tutorial' });
        },


    preload ()
    {
    this.load.image('borde_abajo', 'assets/borde_abajo.png');
    this.load.image('borde_arriba', 'assets/borde_arriba.png');
    this.load.image('borde_der', 'assets/borde_der.png');
    this.load.image('borde_izq', 'assets/borde_izq.png');
    this.load.image('gato', 'assets/gato mago dimensionado.png');
    this.load.image('escenario', 'assets/escenario.jpg');//bo
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
    
    this.load.audio('musicajuego','musica/MusicaPelea.mp3');
    this.load.audio('golpehielo', 'musica/GolpeadoH.mp3');
    this.load.audio('golpefuego','musica/Golpeado.mp3');
    this.load.audio('bolafuego','musica/BolaFuego.mp3');
    this.load.audio('bolahielo','musica/BolaHielo.mp3');
    this.load.audio('pulsado','musica/Pulsado.mp3');
    this.load.audio('boton','musica/Hover.mp3');

   
    this.load.audio('musicatuto','musica/musica_tutorial.mp3');
    this.load.image('fondo_tutorial', 'assets/fondo_tutorial.png');
    this.load.image('gatoj1', 'interfaces/gatoj1.png');
    this.load.image('gatoj2', 'interfaces/gatoj2.png');
    this.load.image('tutoj1_pt0', 'interfaces/bienvenida_j1.png');
    this.load.image('tutoj2_pt0', 'interfaces/bienvenida_j2.png');
    this.load.image('tutoj1_pt1', 'interfaces/tutonum1_j1.png');
    this.load.image('tutoj2_pt1', 'interfaces/tutonum1_j2.png');
    this.load.image('tutoj1_pt2', 'interfaces/tutoVidas_j1.png');
    this.load.image('tutoj2_pt2', 'interfaces/tutoVidas_j2.png');
    this.load.image('tutoj1_pt3', 'interfaces/tutonum2_j1.png');
    this.load.image('tutoj2_pt3', 'interfaces/tutonum2_j2.png');
    this.load.image('tutoj1_pt4', 'interfaces/tutonum3_j1.png');
    this.load.image('tutoj2_pt4', 'interfaces/tutonum3_j2.png');
    this.load.image('tutoj1_pt5', 'interfaces/tutoPowerups_j1.png');
    this.load.image('tutoj2_pt5', 'interfaces/tutoPowerups_j2.png');
    this.load.image('tutoj1_pt6', 'interfaces/tutoPowerups2_j1.png');
    this.load.image('tutoj2_pt6', 'interfaces/tutoPowerups2_j2.png');
    this.load.spritesheet('siguiente', 'interfaces/boton_siguiente.png',  { frameWidth: 282, frameHeight: 105 });
    this.load.spritesheet('salir', 'interfaces/boton_salir.png',  { frameWidth: 282, frameHeight: 105 });
   
    },

    create ()
    {
		this.scene.launch ('Esperar');
        vidas = 0;
        powerups = 0;
        numBolasMorada = 0;
        countBolasMorada = false;
        numBolas = 0;
        countBolas = false;
        hit = false;
        hitrojo = false;
        derecha = true;
        derecha2 = false;
        move = false;
        movemorado = false;

        const timeline = this.add.timeline([
            {
                
                run: () => {         
                }
            }
        ])
    
        const timevida = this.add.timeline([{
            at: 7000,
                run: () =>{
                    if(vidas < 2){
                    var x;
                    
                    if(player1.x > player2.x){
                        aux = (player1.x - player2.x);
                        aux2 = aux/2;
                        x = aux2 + player2.x;
                    }

                    else if(player2.x > player1.x){
                        aux = (player2.x - player1.x);
                        aux2 = aux/2;
                        x = aux2 + player1.x;
                    }

                    
                    powerup = corazon_up.create(x,0, 'gato');
                    powerup.setGravityY(300);
                    powerup.setBounce(0.3);
                    
                    vidas++;
                }
                timevida.play();
            }
        }])

        const timebola = this.add.timeline([
            {
                at: 10000,
                run: () => {
                    if(powerups < 2){
                    var x;
                    
                    if(player1.x > player2.x){
                        aux = (player1.x - player2.x);
                        aux2 = aux/2;
                        x = aux2 + player2.x;
                    }

                    else if(player2.x > player1.x){
                        aux = (player2.x - player1.x);
                        aux2 = aux/2;
                        x = aux2 + player1.x;
                    }

                    powerup = bola_up.create(x,0, 'bola');
                    powerup.setGravityY(300);
                    powerup.setBounce(0.3);
                    powerup.setTint(0xff0000);
                    powerups++;
                
                }
                timebola.play();
            }
            
            }
        ])

        const timehit = this.add.timeline([{
            at: 3000,
            run: () => {hit = false;
                    player2.clearTint();}
        }
        ])

        const timehitrojo = this.add.timeline([{
            at: 3000,
            run: () => {hitrojo = false;
                    player1.clearTint();}
        }
        ])

        timeline.play();
        timevida.play();
        timebola.play();
    

    pulsar = this.sound.add('pulsado');
    boton = this.sound.add('boton');

    if (this.game.musicaGlobal.musica) {
        this.game.musicaGlobal.musica.stop();
        this.game.musicaGlobal.musica = this.sound.add('musicatuto');
        if(this.game.musicaGlobal.mute == false){
        this.game.musicaGlobal.musica.setVolume(0.45);
        }
        else{
            this.game.musicaGlobal.musica.setVolume(0.45);
        }
        this.game.musicaGlobal.musica.play();
    };

    sonido1 = this.sound.add('golpehielo');
    sonido2 = this.sound.add('golpefuego');
    sonido3 = this.sound.add('bolafuego');
    sonido4 = this.sound.add('bolahielo');

    
    this.add.image(450, 253, 'fondo_tutorial');
    platform = this.physics.add.staticGroup();

    borde = this.physics.add.staticGroup();
  
    platform.create(450, 480, 'suelo');
    platform.create(450,350,'plataformaPequena');
    platform.create(225,190,'plataformaGrande');
    platform.create(675,190,'plataformaGrande');

    borde.create(config.width/2,config.height - 5,'borde_abajo');
    borde.create(config.width/2,5, 'borde_arriba');
    borde.create(config.width - 5,config.height/2, 'borde_der');
    borde.create(5,config.height/2, 'borde_izq');

    tutoj1 =['tutoj1_pt1','tutoj1_pt2','tutoj1_pt3','tutoj1_pt4','tutoj1_pt5','tutoj1_pt6'];
    tutoj2=['tutoj2_pt1','tutoj2_pt2','tutoj2_pt3', 'tutoj2_pt4','tutoj2_pt5','tutoj2_pt6'];

    j1actual = this.add.image(115,350, 'tutoj1_pt0').setScale(0.8);
    j2actual = this.add.image(758,350, 'tutoj2_pt0').setScale(0.8);

    gatoj1 =this.add.image(85,420, 'gatoj1').setScale(0.8);
    gatoj2 =this.add.image(815,420, 'gatoj2').setScale(0.8);
    
    player1 = this.physics.add.sprite(200,350, 'magorojo');
    player2 = this.physics.add.sprite(700,350, 'magomorado');
    
    player1.setBounce(0);
    player1.setCollideWorldBounds(true);
    player1.body.setGravityY(600);
    player1.vida = 3;
    player1.tresbolas = false;

    player2.setBounce(0);
    player2.setCollideWorldBounds(true);
    player2.body.setGravityY(600);
    player2.vida = 3;
    player2.tresbolas = false;

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

   

    corazon_up = this.physics.add.group();
    this.physics.add.collider(corazon_up, platform);
    this.physics.add.overlap(player1,corazon_up, sumarvida1, null, this);
    this.physics.add.overlap(player2,corazon_up, sumarvida2, null, this);

    bola_up = this.physics.add.group();
    this.physics.add.collider(bola_up, platform);
    this.physics.add.overlap(player1,bola_up, sumarbola1, null, this);
    this.physics.add.overlap(player2,bola_up, sumarbola2, null, this);

    function sumarbola1(player1, bola_up){
        bola_up.disableBody(true,true);
        player1.tresbolas = true;
        powerups--;
    }

    function sumarbola2(player2, bola_up){
        bola_up.disableBody(true,true);
        player2.tresbolas = true;
        powerups--;
    }

    function sumarvida2(player2,corazon_up){
        var i = 0;
        vidas--;
        corazon_up.disableBody(true,true);
        if(player2.vida != Corazon_Morado.countActive(true)){
            player2.vida++;
        Corazon_Morado.children.iterate(function(child){
        if(i == player2.vida -1 ){
            child.clearTint();
            
        }
        i++;
        

    })
    }
    }

    function sumarvida1(player1, corazon_up){
        var i = 0;
        vidas--;
        corazon_up.disableBody(true,true);
        if(player1.vida != Corazon_Rojo.countActive(true)){
            player1.vida++;
        Corazon_Rojo.children.iterate(function(child){
        if(i == player1.vida -1 ){
            child.clearTint();
            
        }
        i++;
        

    })
    }
    }
   
    function cambiarImagen() {
         
          indiceTuto = (indiceTuto + 1) % tutoj1.length;
          
          j1actual.setTexture(tutoj1[indiceTuto]);
          j2actual.setTexture(tutoj2[indiceTuto]);

          if (indiceTuto === tutoj1.length) {
              indiceTuto = -1;
          }
    }

      this.siguiente = this.add.sprite(460, 80, 'siguiente').setScale(0.75).setInteractive();

        this.siguiente.on('pointerover', () => {
          boton.play();
          this.siguiente.setFrame(1);
        });
        this.siguiente.on('pointerout', () => {
          this.siguiente.setFrame(0);
        });
        this.siguiente.on('pointerdown', () => {
          pulsar.play();
          cambiarImagen();
        });

      this.salir = this.add.sprite(460, 36, 'salir').setScale(0.75).setInteractive();

      this.salir.on('pointerover', () => {
        boton.play();
        this.salir.setFrame(1);
      });
      this.salir.on('pointerout', () => {
        this.salir.setFrame(0);
      });
      this.salir.on('pointerdown', () => {
        pulsar.play();
        
        this.game.musicaGlobal.musica.stop();
        this.game.musicaGlobal.musica = null;

        this.scene.stop("Tutorial2")
        this.scene.start("Menu")
                        
      });

    this.physics.add.collider(player1, platform);
    this.physics.add.collider(player2, platform);
    this.physics.add.collider(player2, player1);

    bola = this.physics.add.group();
    this.physics.add.collider(player2, bola, hitbola, null, this);
    this.physics.add.collider(borde, bola, Desaparecer, null, this);
    this.physics.add.collider(platform, bola, Desaparecer, null, this);

    bolaMorada = this.physics.add.group();
    this.physics.add.collider(player1, bolaMorada, hitbolaMorada, null, this);
    this.physics.add.collider(borde, bolaMorada, DesaparecerMorada, null, this);
    this.physics.add.collider(platform, bolaMorada, DesaparecerMorada, null, this);

    function Desaparecer(platform, bola){
        bola.disableBody(true,true);
        countBolas = false;
        numBolas--;
    }
    
    function reiniciarCorazones() {
        player1.vida = 4;
        player2.vida = 4;
    }

    function actualizarCorazones(vida, grupoCorazones) {
        var i = 0;
        grupoCorazones.children.iterate(function (child) {
            if (i >= vida) {
                child.setTint('#FDFEFE'); 
            } else {
                child.clearTint();
            }
            i++;
        });
    }

    function hitbola (player2, bola)
    {
        timehit.play();
        sonido2.play();
        var i = 0;
        Corazon_Morado.children.iterate(function(child){
        if(i == player2.vida -1 && !hit){
            child.setTint('#FDFEFE');
            
        }
        i++;

    })
        if(player2.vida == 1 && !hit){
            reiniciarCorazones();
            actualizarCorazones(player2.vida, Corazon_Morado);

            player2.setTint(0xff0000);
            player2.vida--;          
        }
        
        else if(!hit){
            player2.vida--;
            player2.setTint(0xff0000);
        }

        if(bola.derecha){
            player2.anims.play('morado hit right');
            console.log('derecha');
        }

        else{
            player2.anims.play('morado hit left');
            console.log('izquierda');
        }
        bola.disableBody(true,true);
         countBolas = false;
         numBolas--;
         hit = true;
         movemorado = false;
         tiempomorado = 0;
     
    }

    function DesaparecerMorada(platform, bolaMorada){
        bolaMorada.disableBody(true,true);
        countBolasMorada = false;
        numBolasMorada--;
    }
    

    function hitbolaMorada (player1, bolaMorada)
    {
        timehitrojo.play();
        sonido1.play();
        var i = 0;
        Corazon_Rojo.children.iterate(function(child){
        if(i == player1.vida -1 && !hitrojo){
            child.setTint('#FDFEFE');
            
        }
        i++;

    })
        if(player1.vida == 1 && !hitrojo){
            reiniciarCorazones();
            actualizarCorazones(player1.vida, Corazon_Rojo);
            
            player1.setTint(0xff0000);
            player1.vida--;  
        }
        
        else if(!hitrojo){
            player1.vida--;
            player1.setTint(0xff0000);
        }

        if(bolaMorada.derecha){
            player1.anims.play('rojo hit right');
            console.log('derecha');
        }
        else{
            player1.anims.play('rojo hit left');
            console.log('izquierda');
        }
         
        bolaMorada.disableBody(true,true);
        countBolasMorada = false;
        numBolasMorada--;
        hitrojo = true;
        tiempo = 0;
        move = false;

     
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
        key: 'rojo hit left',
        frames: this.anims.generateFrameNumbers('magorojo', { start: 14, end: 16}),
        framRate: 5,
        
    })

    this.anims.create({
        key: 'rojo hit right',
        frames: this.anims.generateFrameNumbers('magorojo', { start: 17, end: 19}),
        framRate: 5,
        
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
        key: 'morado hit left',
        frames: this.anims.generateFrameNumbers('magomorado', { start: 14, end: 16}),
        framRate: 5,
    })

    this.anims.create({
        key: 'morado hit right',
        frames: this.anims.generateFrameNumbers('magomorado', { start: 17, end: 19}),
        framRate: 5,
    })

    
    const keyCodes= Phaser.Input.Keyboard.KeyCodes;
    this.teclaA= this.input.keyboard.addKey(keyCodes.A);
    this.teclaD= this.input.keyboard.addKey(keyCodes.D);
    this.teclaW= this.input.keyboard.addKey(keyCodes.W);
    this.teclaJ= this.input.keyboard.addKey(keyCodes.J);
    this.teclaL= this.input.keyboard.addKey(keyCodes.L);
    this.teclaI= this.input.keyboard.addKey(keyCodes.I);
    this.teclaE= this.input.keyboard.addKey(keyCodes.E);
    this.teclaO = this.input.keyboard.addKey(keyCodes.O);
    this.teclaU = this.input.keyboard.addKey(keyCodes.U);

},

 update ()
{   
    
     if (this.teclaE.isDown && derecha){
        player1.anims.play('rojo atack right', true);
        move = true;

        if(countBolas == false && player1.tresbolas && !hitrojo){
            sonido3.play();
            bolas = bola.create (player1.x + 40, player1.y - 30, 'bola');
            bolas.setVelocity(400, 0);
            bolas.derecha = true;
            numBolas++;
            bolas = bola.create (player1.x + 40, player1.y - 10, 'bola');
            bolas.setVelocity(400, 0);
            bolas.derecha = true;
            numBolas++;
            bolas = bola.create (player1.x + 40, player1.y + 10, 'bola');
            bolas.setVelocity(400, 0);
            bolas.derecha = true
            numBolas++;
            player1.tresbolas = false;
            
        }

        if(countBolas == false && numBolas < 2  && !hitrojo){
            sonido3.play();
            bolas = bola.create (player1.x + 40, player1.y - 30, 'bola');
            
            bolas.setVelocity(400, 0);
            bolas.derecha = true;
            countBolas = true;
            numBolas++;
        }

        
    }

    

    else if (this.teclaE.isDown && !derecha){
        player1.anims.play('rojo atack left', true);
        move = true;
        
        if(countBolas == false && player1.tresbolas && !hitrojo){
            sonido3.play();
            bolas = bola.create (player1.x + 40, player1.y - 30, 'bola_I');
            bolas.setVelocity(-400, 0);
            bolas.derecha = false;
            numBolas++;
            bolas = bola.create (player1.x + 40, player1.y - 10, 'bola_I');
            bolas.setVelocity(-400, 0);
            bolas.derecha = false;
            numBolas++;
            bolas = bola.create (player1.x + 40, player1.y + 10, 'bola_I');
            bolas.setVelocity(-400, 0);
            bolas.derecha = false;
            numBolas++;
            player1.tresbolas = false;
           
        }

        if(countBolas == false && numBolas < 2  && !hitrojo){
            sonido3.play();
            var bolas = bola.create (player1.x - 40, player1.y - 30, 'bola_I');
            
            bolas.setVelocity(-400, 0);
            bolas.derecha = false;
            countBolas = true;
            numBolas++;
        }
        
    }

    else if(this.teclaW.isDown && player1.body.touching.down && derecha){
        player1.setVelocityY(-500);
        move = true;
        player1.anims.play('rojo jump right', true);
    }

    else if(this.teclaW.isDown && player1.body.touching.down && !derecha){
        player1.setVelocityY(-500);
        move = true;
        player1.anims.play('rojo jump left', true);
    }
    else if(this.teclaA.isDown){
        player1.setVelocityX(-260);
        move = true;

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
        move = true;

        if(player1.body.touching.down){
        player1.anims.play('rojo right', true);
        }
        else{
            player1.anims.play('rojo jump right', true);
        }
        derecha = true;
    }

    else if(derecha == true && (!hitrojo || move)){
        player1.setVelocityX(0);

        if(player1.body.touching.down){
        player1.anims.play('rojo turn right');
        }
        countBolas = false;
    }
    

    else if(!hitrojo || move){
        player1.setVelocityX(0);

        if(player1.body.touching.down){
        player1.anims.play('rojo turn left');
        }
        countBolas = false;
    }


    if (this.teclaO.isDown && derecha2){
        player2.anims.play('morado atack right', true);
        movemorado = true;
        

        if(countBolasMorada == false && player2.tresbolas && !hit){
            sonido4.play();
            bolas = bolaMorada.create (player2.x + 40, player2.y - 30, 'bola2');
            bolas.setVelocity(400, 0);
            bolas.derecha = true;
            numBolasMorada++;
            bolas = bolaMorada.create (player2.x + 40, player2.y - 10, 'bola2');
            bolas.setVelocity(400, 0);
            bolas.derecha = true;
            numBolasMorada++;
            bolas = bolaMorada.create (player2.x + 40, player2.y + 10, 'bola2');
            bolas.setVelocity(400, 0);
            bolas.derecha = true;
            numBolasMorada++;
            player2.tresbolas = false;
            
        }
        if(countBolasMorada == false && numBolasMorada < 2 && !hit){
            sonido4.play();
            var bolas = bolaMorada.create (player2.x + 40, player2.y - 30, 'bola2');
            
            bolas.setVelocity(400, 0);
            bolas.derecha = true;
            countBolasMorada = true;
            numBolasMorada++;
        }
        
    }
    else if (this.teclaO.isDown && !derecha2){
        player2.anims.play('morado atack left', true);

        movemorado = true;

        if(countBolasMorada == false && player2.tresbolas && !hit){
            sonido4.play();
            bolas = bolaMorada.create (player2.x + 40, player2.y - 30, 'bola2_I');
            bolas.setVelocity(-400, 0);
            bolas.derecha = false;
            numBolasMorada++;
            bolas = bolaMorada.create (player2.x + 40, player2.y - 10, 'bola2_I');
            bolas.setVelocity(-400, 0);
            bolas.derecha = false;
            numBolasMorada++;
            bolas = bolaMorada.create (player2.x + 40, player2.y + 10, 'bola2_I');
            bolas.setVelocity(-400, 0);
            bolas.derecha = false;
            numBolasMorada++;
            player2.tresbolas = false;
            
        }
        
        if(countBolasMorada == false && numBolasMorada < 2 && !hit){
            sonido4.play();
            var bolas = bolaMorada.create (player2.x - 40, player2.y - 30, 'bola2_I');
            
            bolas.setVelocity(-400, 0);
            bolas.derecha = false;
            countBolasMorada = true;
            numBolasMorada++;
        }
        
    }
    else if(this.teclaI.isDown && player2.body.touching.down && derecha2){
        player2.setVelocityY(-500);
        movemorado = true;
        player2.anims.play('morado jump right', true);
    }

    else if(this.teclaI.isDown && player2.body.touching.down && !derecha2){
        player2.setVelocityY(-500);
        movemorado = true;
        player2.anims.play('morado jump left', true);
    }

    else if(this.teclaJ.isDown){
        player2.setVelocityX(-260);
        movemorado = true;

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
        movemorado = true;

        if(player2.body.touching.down){
        player2.anims.play('morado right', true);
        
        }
        else{
            player2.anims.play('morado jump right', true);
        }
        derecha2 = true;
        
    }

    else if(derecha2 == true && (!hit || movemorado)){
        player2.setVelocityX(0);

        if(player2.body.touching.down){
        player2.anims.play('morado turn right');
        }

        countBolasMorada = false;
    }

    else if(!hit || movemorado){
        player2.setVelocityX(0);

        if(player2.body.touching.down){
        player2.anims.play('morado turn left');
        }

        countBolasMorada = false;
    }


    }

});