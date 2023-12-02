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

    },
    
    create() {

    this.add.image(450,253,'interfazMenu');

    pulsar = this.sound.add('pulsado');
    boton = this.sound.add('boton');

    if (!this.game.musicaGlobal.musica) {
      this.game.musicaGlobal.musica = this.sound.add('musicamenu');
      this.game.musicaGlobal.musica.setVolume(0.5);
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
      this.scene.start('Game');
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

        
    },

    update(){
       
    }
});