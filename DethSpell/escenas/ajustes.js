var Ajustes = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function Ajustes() {
            Phaser.Scene.call(this, { key: 'Ajustes' });
        },
    
    preload(){

        this.load.image('interfazAjustes', 'interfaces/interfaz_ajustes.jpg');

        this.load.audio('pulsado','musica/Pulsado.mp3');
        this.load.audio('boton','musica/Hover.mp3');

        this.load.spritesheet('audio_on', 'interfaces/audioon.png', { frameWidth: 180, frameHeight: 169 });
        this.load.spritesheet('audio_off', 'interfaces/audiooff.png',  { frameWidth: 180, frameHeight: 169 });
        this.load.spritesheet('flecha', 'interfaces/flecha.png',  { frameWidth: 164, frameHeight: 109 });

    },
    
    create() {

       this.add.image(450,253,'interfazAjustes');
       pulsar = this.sound.add('pulsado');
       boton = this.sound.add('boton');

       this.audioon = this.add.sprite(300, 253, 'audio_on').setInteractive();
       
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
        this.game.musicaGlobal.mute = false;
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
        this.game.musicaGlobal.mute = true;
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