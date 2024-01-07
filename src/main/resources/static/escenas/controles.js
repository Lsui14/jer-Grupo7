var Controles = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function Controles() {
            Phaser.Scene.call(this, { key: 'Controles' });
        },
    
    preload(){
        this.load.image('Icontroles', 'interfaces/interfaz_controles.jpg');

        this.load.audio('pulsado','musica/Pulsado.mp3');
        this.load.audio('boton','musica/Hover.mp3');

        this.load.spritesheet('flecha', 'interfaces/flecha.png',  { frameWidth: 164, frameHeight: 109 });
    },
    
    create() {
       this.add.image(450,253,'Icontroles');

       pulsar = this.sound.add('pulsado');
       boton = this.sound.add('boton');

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