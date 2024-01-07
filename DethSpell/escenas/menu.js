var Menu = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize:

      function Menu() {
          Phaser.Scene.call(this, { key: 'Menu' });
      },
  
  preload(){
      this.load.image('interfazMenu', 'interfaces/interfaz_menu.jpg');

      this.load.audio('musicamenu', 'musica/MusicaMenu.mp3');
      this.load.audio('pulsado','musica/Pulsado.mp3');
      this.load.audio('boton','musica/Hover.mp3');

      this.load.spritesheet('ajustes', 'interfaces/boton_ajustes.png',  { frameWidth: 282, frameHeight: 105 });
      this.load.spritesheet('creditos', 'interfaces/boton_creditos.png',  { frameWidth: 282, frameHeight: 105 });
      this.load.spritesheet('jugar', 'interfaces/boton_jugar.png',  { frameWidth: 282, frameHeight: 105 });
      this.load.spritesheet('controles', 'interfaces/boton_controles.png',  { frameWidth: 282, frameHeight: 105 });

      this.load.image('fondo', 'interfaces/interfaz_ajustes_p.png');
      this.load.spritesheet('cargar', 'assets/cargar.png',  { frameWidth: 93.5, frameHeight: 94 });
  
    this.load.image('gatotutorial', 'interfaces/gatotutorial_portada.png');
      this.load.spritesheet('btutorial', 'interfaces/boton_tutorial.png',  { frameWidth: 282, frameHeight: 105 });
  
  
  },
  
  create() {

if(this.game.musicaGlobal.musica){
      this.game.musicaGlobal.musica.stop();
      this.game.musicaGlobal.musica = null;

     }

  this.add.image(450,253,'interfazMenu');

  pulsar = this.sound.add('pulsado');
  boton = this.sound.add('boton');

  
  if (!this.game.musicaGlobal.musica) {
    this.game.musicaGlobal.musica = this.sound.add('musicamenu');
    if(this.game.musicaGlobal.mute == false){
      this.game.musicaGlobal.musica.setVolume(0.5);
      }
      else{
          this.game.musicaGlobal.musica.setVolume(0);
      }
    this.game.musicaGlobal.musica.play();
  };

   this.jugar = this.add.sprite(450, 290, 'jugar').setInteractive();

   this.jugar.on('pointerover', () => {
    boton.play();
    this.jugar.setFrame(1);
  });
  this.jugar.on('pointerout', () => {
    this.jugar.setFrame(0);
  });
  this.jugar.on('pointerdown', () => {
    pulsar.play();
    this.add.image(450,253,'fondo');
    carga1 = this.add.sprite(450,253,'cargar');
    carga1.anims.play('Acargar');
    game.scene.stop('LogIn'); 

    /*this.scene.transition({
      target: 'GameWS', 
      duration: 4000, 
     })*/
     game.scene.start('Seleccion'); 
  game.scene.stop('Menu');
  });


  this.controles = this.add.sprite(450, 350, 'controles').setInteractive();

  this.controles.on('pointerover', () => {
    boton.play();
   this.controles.setFrame(1);
 });
 this.controles.on('pointerout', () => {
   this.controles.setFrame(0);
 });
 this.controles.on('pointerdown', () => {
  pulsar.play();
  this.scene.start('Controles');
 });

  this.creditos = this.add.sprite(450, 470, 'creditos').setInteractive();

  this.creditos.on('pointerover', () => {
    boton.play();
   this.creditos.setFrame(1);
 });
 this.creditos.on('pointerout', () => {
   this.creditos.setFrame(0);
 });
 this.creditos.on('pointerdown', () => {
  pulsar.play();
  this.scene.start('Creditos');
 });
 this.ajustes = this.add.sprite(450, 410, 'ajustes').setInteractive();

     this.ajustes.on('pointerover', () => {
      boton.play();
      this.ajustes.setFrame(1);
    });
    this.ajustes.on('pointerout', () => {
      this.ajustes.setFrame(0);
    });
    this.ajustes.on('pointerdown', () => {
      pulsar.play();
      this.scene.start('Ajustes');
    });

      
this.add.image(787,414,'gatotutorial').setScale(0.65);
this.btutorial = this.add.sprite(797, 293, 'btutorial').setInteractive();
  this.btutorial.on('pointerover', () => {
  boton.play();
  this.btutorial.setFrame(1);
  });
  this.btutorial.on('pointerout', () => {
    this.btutorial.setFrame(0);
  });
  this.btutorial.on('pointerdown', () => {
    pulsar.play();
    this.add.image(450,253,'fondo');
    carga1 = this.add.sprite(450,253,'cargar');
    carga1.anims.play('Acargar');

this.scene.start('Tutorial');
this.scene.launch ('Esperar');
    /*this.scene.transition({
      target: 'Tutorial', 
      duration: 6000, 
     })*/
    
  });
  },

  update(){
  
      this.scene.stop ('Esperar');
      
  }
});