var Creditos = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function Creditos() {
            Phaser.Scene.call(this, { key: 'Creditos' });
        },
    
    preload(){
        this.load.image('Icreditos', 'interfaces/interfaz_creditos.jpg');
      
        this.load.audio('profes', 'musica/profes.mp3');
        this.load.audio('pulsado','musica/Pulsado.mp3');
        this.load.audio('boton','musica/Hover.mp3');

        this.load.spritesheet('flecha', 'interfaces/flecha.png',  { frameWidth: 164, frameHeight: 109 });
    },
    
    create() {

      pulsar = this.sound.add('pulsado');
      boton = this.sound.add('boton');
      profes = this.sound.add('profes');
      profes.setVolume(2);
       
      this.add.image(450,253,'Icreditos');

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
        profes.play();
         this.scene.start('Menu');
       });
        
    },

    update(){
        
    }
});