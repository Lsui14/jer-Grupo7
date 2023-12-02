var Victoria1 = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function Victoria1() {
            Phaser.Scene.call(this, { key: 'Victoria1' });
        },
    
    preload(){
        this.load.image('victoriamago1', 'interfaces/interfaz_victoria1.jpg');
    },
    
    create() {
       this.add.image(450,253,'victoriamago1');
        iniciar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    },

    update(){
        if(iniciar.isDown){
            this.scene.start('Menu');
        }
    }
});