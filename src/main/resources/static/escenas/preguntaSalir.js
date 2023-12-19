var PreguntaSalir = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function PreguntaSalir() {
            Phaser.Scene.call(this, { key: 'PreguntaSalir' });
        },
    
    preload(){
        
        this.load.spritesheet('si', 'interfaces/boton_si.png',  { frameWidth: 282, frameHeight: 105 });
        this.load.spritesheet('no', 'interfaces/boton_no.png',  { frameWidth: 282, frameHeight: 105 });
        this.load.image('pregunta', 'interfaces/interfaz_pregunta.png');

        this.load.image('fondo', 'interfaces/interfaz_ajustes_p.png');
        
        this.load.audio('pulsado','musica/Pulsado.mp3');
        this.load.audio('boton','musica/Hover.mp3');

    },
    
    create() {
        this.add.image(450,253,'fondo');
        
        this.add.image(450,170,'pregunta').setScale(3);
        
      this.si = this.add.sprite(300, 300, 'si').setInteractive();

      this.si.on('pointerover', () => {
        boton.play();
        this.si.setFrame(1);
      });
      this.si.on('pointerout', () => {
        this.si.setFrame(0);
      });
      this.si.on('pointerdown', () => {
        pulsar.play();
        
        this.game.musicaGlobal.musica.stop();
        this.game.musicaGlobal.musica = null;

        this.scene.stop("Game")
        this.scene.start("Menu")
        
                
      });


      this.no = this.add.sprite(600, 300, 'no').setInteractive();

      this.no.on('pointerover', () => {
        boton.play();
        this.no.setFrame(1);
      });
      this.no.on('pointerout', () => {
        this.no.setFrame(0);
      });
      this.no.on('pointerdown', () => {
        pulsar.play();

        this.scene.stop("preguntaSalir")
        this.scene.start("AjustesP")
        
      });


    },

    update(){
       
    }
});