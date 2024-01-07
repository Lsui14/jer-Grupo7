var Seleccion = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:
    
        function Seleccion (){
            Phaser.Scene.call(this, { key: 'Seleccion' });
        },

    preload(){
        this.load.image('interfazMenu2', 'interfaces/interfaz_menu2.jpg');

        this.load.audio('musicamenu', 'musica/MusicaMenu.mp3');
        this.load.audio('pulsado','musica/Pulsado.mp3');
        this.load.audio('boton','musica/Hover.mp3');

        this.load.spritesheet('online', 'interfaces/boton_online.png',  { frameWidth: 260, frameHeight: 105 });
        this.load.spritesheet('offline', 'interfaces/boton_offline.png',  { frameWidth: 260, frameHeight: 105 });
        this.load.spritesheet('flecha', 'interfaces/flecha.png',  { frameWidth: 164, frameHeight: 109 });
        
        this.load.spritesheet('cargar', 'assets/cargar.png',  { frameWidth: 93.5, frameHeight: 94 });
    },
    create() {

        this.anims.create({
          key: 'Acargar',
          frames: this.anims.generateFrameNumbers('cargar', { start: 0, end: 11}),
          frameRate: 10,
          repeat: -1
      });
    
    this.add.image(450,253,'interfazMenu2');

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

      this.offline = this.add.sprite(450, 300, 'offline').setInteractive();
      
      this.offline.on('pointerover', () => {
        boton.play();
        this.offline.setFrame(1);
      });
      this.offline.on('pointerout', () => {
        this.offline.setFrame(0);
      });
      this.offline.on('pointerdown', () => {
        pulsar.play();
        this.add.image(450,253,'fondo');
        carga1 = this.add.sprite(450,253,'cargar');
        carga1.anims.play('Acargar');
  		  this.scene.start('Game');
      this.scene.launch ('Esperar');
        /*this.scene.transition({
          target: 'Game', 
          duration: 3500, 
         })*/
      });
      
      this.online = this.add.sprite(450, 390, 'online').setInteractive();

      this.online.on('pointerover', () => {
        boton.play();
       this.online.setFrame(1);
     });
     this.online.on('pointerout', () => {
       this.online.setFrame(0);
     });
     this.online.on('pointerdown', () => {
      pulsar.play();
      this.scene.start('GameWS');
      this.scene.launch ('Esperar');
      
      this.scene.stop('Seleccion'); 
     });

     this.flecha = this.add.sprite(91, 66, 'flecha').setInteractive();

       this.flecha.on('pointerover', () => {
        boton.play();
         this.flecha.setFrame(1);
       });
       this.flecha.on('pointerout', () => {
         this.flecha.setFrame(0);
       });
       this.flecha.on('pointerdown', () => {
        pulsar.play();
         this.scene.start('Menu');
       });

    },

    update(){
      
    }
});