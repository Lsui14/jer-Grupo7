var Victoria2 = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function Victoria2() {
            Phaser.Scene.call(this, { key: 'Victoria2' });
        },
    
    preload(){
        this.load.image('victoriamago2', 'interfaces/interfaz_victoria2.jpg');
                this.load.audio('ganar','musica/Ganar.mp3');

    },
    
    create() {
       this.add.image(450,253,'victoriamago2');
        ganar = this.sound.add('ganar');
       if(this.game.musicaGlobal.musica){
        this.game.musicaGlobal.musica.stop();
        this.game.musicaGlobal.musica = null;
       }
       ganar.play();
       iniciar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    },

    update(){
        if(iniciar.isDown){
            this.scene.start('Menu');
        }
    }
});