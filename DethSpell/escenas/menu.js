var Menu = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function Menu() {
            Phaser.Scene.call(this, { key: 'Menu' });
        },
    
    preload(){
        this.load.image('interfazMenu', 'interfaces/interfaz_menu.jpg');

        this.load.spritesheet('ajustes', 'interfaces/boton_ajustes.png',  { frameWidth: 282, frameHeight: 105 });
        this.load.spritesheet('creditos', 'interfaces/boton_creditos.png',  { frameWidth: 282, frameHeight: 105 });
        this.load.spritesheet('jugar', 'interfaces/boton_jugar.png',  { frameWidth: 282, frameHeight: 105 });
        this.load.spritesheet('controles', 'interfaces/boton_controles.png',  { frameWidth: 282, frameHeight: 105 });

    },
    
    create() {

    this.add.image(450,253,'interfazMenu');

       
     this.jugar = this.add.sprite(450, 290, 'jugar').setInteractive();

     this.jugar.on('pointerover', () => {
      this.jugar.setFrame(1);
    });
    this.jugar.on('pointerout', () => {
      this.jugar.setFrame(0);
    });
    this.jugar.on('pointerdown', () => {
      this.scene.start('Game');
    });


    this.controles = this.add.sprite(450, 350, 'controles').setInteractive();

    this.controles.on('pointerover', () => {
     this.controles.setFrame(1);
   });
   this.controles.on('pointerout', () => {
     this.controles.setFrame(0);
   });
   this.controles.on('pointerdown', () => {
     //Aquí va la escena de controles
   });

    this.creditos = this.add.sprite(450, 470, 'creditos').setInteractive();

    this.creditos.on('pointerover', () => {
     this.creditos.setFrame(1);
   });
   this.creditos.on('pointerout', () => {
     this.creditos.setFrame(0);
   });
   this.creditos.on('pointerdown', () => {
     //Aquí va la escena de creditos
   });
   this.ajustes = this.add.sprite(450, 410, 'ajustes').setInteractive();

       this.ajustes.on('pointerover', () => {
        this.ajustes.setFrame(1);
      });
      this.ajustes.on('pointerout', () => {
        this.ajustes.setFrame(0);
      });
      this.ajustes.on('pointerdown', () => {
        //Aquí va la escena de ajustes
      });

        
    },

    update(){
       
    }
});