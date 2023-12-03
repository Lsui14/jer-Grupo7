var AjustesP = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function AjustesP() {
            Phaser.Scene.call(this, { key: 'AjustesP' });
        },
    
    preload(){

        this.load.spritesheet('audio_on', 'interfaces/audioon.png', { frameWidth: 180, frameHeight: 169 });
        this.load.spritesheet('audio_off', 'interfaces/audiooff.png',  { frameWidth: 180, frameHeight: 169 });
        this.load.spritesheet('flecha', 'interfaces/flecha.png',  { frameWidth: 164, frameHeight: 109 });

        this.load.spritesheet('salir', 'interfaces/boton_salir.png',  { frameWidth: 282, frameHeight: 105 });

        this.load.image('fondo', 'interfaces/interfaz_ajustes_p.png');

        this.load.audio('pulsado','musica/Pulsado.mp3');
        this.load.audio('boton','musica/Hover.mp3');

    },
    
    create() {
        this.add.image(450,253,'fondo');
       this.audioon = this.add.sprite(300, 253, 'audio_on').setInteractive();
       pulsar = this.sound.add('pulsado');
       boton = this.sound.add('boton');
       this.audioon.on('pointerover', () => {
        boton.play();
        this.audioon.setFrame(1);
      });
      this.audioon.on('pointerout', () => {
        this.audioon.setFrame(0);
      });
      this.audioon.on('pointerdown', () => {
      pulsar.play();
      this.game.musicaGlobal.musica.setVolume(0.5);
      });


      this.audiooff = this.add.sprite(600, 253, 'audio_off').setInteractive();

      this.audiooff.on('pointerover', () => {
        boton.play();
        this.audiooff.setFrame(1);
      });
      this.audiooff.on('pointerout', () => {
        this.audiooff.setFrame(0);
      });
      this.audiooff.on('pointerdown', () => {
      pulsar.play();
      this.game.musicaGlobal.musica.setVolume(0);
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
        this.scene.stop("AjustesP")
        this.scene.resume("Game")
      });

      this.salir = this.add.sprite(450, 370, 'salir').setInteractive();

      this.salir.on('pointerover', () => {
        boton.play();
        this.salir.setFrame(1);
      });

      this.salir.on('pointerout', () => {
        this.salir.setFrame(0);
      });

      this.salir.on('pointerdown', () => {
        pulsar.play();

        this.scene.pause("AjustesP")
        this.scene.start("PreguntaSalir")
       
  
    }); 

    },

    update(){
       
    }
});