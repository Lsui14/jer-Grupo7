var Esperar = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:
    
        function Esperar (){
            Phaser.Scene.call(this, { key: 'Esperar' });
        },

    preload(){
        this.load.image('interfazMenu2', 'interfaces/interfaz_menu2.jpg');

        this.load.audio('musicamenu', 'musica/MusicaMenu.mp3');
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

      carga1 = this.add.sprite(450,350,'cargar');
      carga1.anims.play('Acargar');

    },

    update(){
      
    }
});