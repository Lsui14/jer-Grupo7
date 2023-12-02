var Victoria2 = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function Victoria2() {
            Phaser.Scene.call(this, { key: 'Victoria2' });
        },
    
    preload(){
        this.load.image('victoriamago2', 'interfaces/interfaz_victoria2.jpg');
    },
    
    create() {
       this.add.image(450,253,'victoriamago2');
        iniciar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    },

    update(){
        if(iniciar.isDown){
            this.scene.start('Menu');
        }
    }
});